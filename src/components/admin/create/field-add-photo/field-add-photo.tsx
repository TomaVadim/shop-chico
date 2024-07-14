"use client";
import Image from "next/image";

import { Paper } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

import { UploadButton } from "@/server/utils/uploadthing";
import { ProductFormFieldProps } from "@/features/admin/shared/interfaces/product-form-field-props";
import { ButtonChangeImageSize } from "@/features/components/button-change-image-size/button-change-image-size";

interface Props extends ProductFormFieldProps {
  handleLoadFile: (url: string, key: string) => void;
  fileUrl: string;
  isSubmitted: boolean;
}

export const FieldAddPhoto = ({
  name,
  errors,
  fileUrl,
  isSubmitted,
  register,
  handleLoadFile,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <Toaster position="top-center" toastOptions={{ id: "load-image" }} />

      <Paper elevation={3} className="mb-5 w-[250px] h-[270px] overflow-hidden">
        {fileUrl && !isSubmitted ? (
          <Image src={fileUrl} alt="image" width={250} height={270} />
        ) : (
          <div className="w-full h-full p-5 text-center flex justify-center items-center">
            <span>Завантажте фото</span>
          </div>
        )}
      </Paper>

      <ButtonChangeImageSize className="mb-5">
        Змінити розмір фото
      </ButtonChangeImageSize>

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const url = res[0].url;
          const key = res[0].key;

          if (url) {
            handleLoadFile(url, key);
          }

          toast.success("Фото успішно завантажено", {
            id: "load-image",
          });
        }}
        onUploadError={(error: Error) => {
          if (error.cause) {
            toast.error("Фото занадто велике", {
              id: "load-image",
            });
          } else {
            toast.error("Фото не завантажено", {
              id: "load-image",
            });
          }
        }}
      />
      <input
        type="text"
        className="opacity-0 w-0 h-0"
        {...register(name)}
        readOnly
      />

      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};
