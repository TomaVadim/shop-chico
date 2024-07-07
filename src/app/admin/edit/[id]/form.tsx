"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

import toast, { Toaster } from "react-hot-toast";

import { fetchDeleteProductById } from "@/api/fetch-delete-product-by-id";
import { useValidateProductFormData } from "@/features/admin/hooks/use-validate-product-form-data";
import { ProductFormData } from "@/features/admin/shared/types/product-form-data";
import { ProductData } from "@/features/products/schemas/product-data";
import { UploadButton } from "@/server/utils/uploadthing";
import { GENDER } from "@/shared/enums/filter/gender.filter";
import { INSERT } from "@/shared/enums/filter/insert.filter";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { fetchUpdateProductById } from "@/api/fetch-update-product";
import { useToggleState } from "@/hooks/use-toggle-state";
import { DeleteModal } from "@/components/admin/update/delete-modal/delete-modal";

interface Props {
  data: ProductData;
}

export const EditForm = ({ data }: Props): JSX.Element => {
  const router = useRouter();
  const { isActive, handleToggleIsActive } = useToggleState();
  const [fileUrl, setFileUrl] = useState(data.imageUrl);

  const handleDeleteProduct = async (id: number) => {
    try {
      const response = await fetchDeleteProductById(id);

      if (response) {
        router.push(PUBLIC_ROUTES.HOME);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleLoadFile = (url: string) => {
    setFileUrl(url);
  };

  const {
    formState: { errors, isSubmitted },
    register,
    handleSubmit,
  } = useValidateProductFormData({
    ...data,
    price: data.price.toString(),
    quantity: data.quantity.toString(),
  });

  const handleOnSubmit = (formData: ProductFormData) => {
    fetchUpdateProductById({
      id: data.id,
      formData,
      fileUrl,
    });
  };

  return (
    <form
      className="mx-auto flex flex-col gap-5 w-[min(400px,100%)]"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <div className="flex flex-col items-center">
        <DeleteModal
          open={isActive}
          onClose={handleToggleIsActive}
          handleDeleteProduct={() => handleDeleteProduct(data.id)}
        />

        <Toaster position="top-center" toastOptions={{ id: "update-image" }} />

        <Toaster position="top-center" toastOptions={{ id: "edit-product" }} />

        <Toaster
          position="top-center"
          toastOptions={{ id: "delete-product" }}
        />

        <Paper
          elevation={3}
          className="mb-5 w-[250px] h-[270px] overflow-hidden"
        >
          {fileUrl && !isSubmitted ? (
            <Image src={fileUrl} alt="image" width={250} height={270} />
          ) : (
            <div className="w-full h-full p-5 text-center flex justify-center items-center">
              <span>Завантажте фото</span>
            </div>
          )}
        </Paper>

        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            const url = res[0].url;

            if (url) {
              handleLoadFile(url);
            }

            toast.success("Фото успішно завантажено", {
              id: "update-image",
            });
          }}
          onUploadError={(error: Error) => {
            console.log(error);

            toast.error("Фото не завантажено", {
              id: "update-image",
            });
          }}
        />
        <input
          type="text"
          className="opacity-0 w-0 h-0"
          {...register("imageUrl")}
          defaultValue={fileUrl || ""}
        />

        {errors.imageUrl && (
          <p className="text-red-500">{errors.imageUrl?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <FormLabel htmlFor="description">Опис:</FormLabel>
        <TextField {...register("description")} />
        {errors.description && (
          <FormHelperText error>{errors.description.message}</FormHelperText>
        )}
      </div>

      <div className="flex justify-between gap-5 items-center">
        <FormControl className="flex flex-col gap-1">
          <FormLabel htmlFor="price">Вартість:</FormLabel>
          <TextField
            {...register("price")}
            type="number"
            error={!!errors.price}
            helperText={errors.price?.message}
          />
        </FormControl>

        <FormControl className="flex flex-col gap-1">
          <FormLabel htmlFor="quantity">Кількість:</FormLabel>
          <TextField
            {...register("quantity")}
            type="number"
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
          />
        </FormControl>
      </div>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <label className="mb-1 text-xl">Стать:</label>
        <Select
          error={!!errors.gender}
          {...register("gender")}
          defaultValue={data.gender}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={GENDER.UNISEX}>
            <em>Унісекс</em>
          </MenuItem>
          <MenuItem value={GENDER.MALE}>Для хлопчика</MenuItem>
          <MenuItem value={GENDER.FEMALE}>Для дівчинки</MenuItem>
        </Select>
        {errors.gender && (
          <FormHelperText error>{errors.gender?.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <label className="mb-1 text-xl">Вкладиш:</label>
        <Select
          error={!!errors.insert}
          {...register("insert")}
          defaultValue={data.insert}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={INSERT.WITHOUT}>
            <em>Без вкладишу</em>
          </MenuItem>
          <MenuItem value={INSERT.WITH}>З вкладишем</MenuItem>
        </Select>
        {errors.insert && (
          <FormHelperText error>{errors.insert?.message}</FormHelperText>
        )}
      </FormControl>

      <Button variant="contained" type="submit" color="info" size="large">
        Змінити
      </Button>

      <Button
        onClick={handleToggleIsActive}
        size="large"
        variant="contained"
        type="button"
        color="error"
      >
        Видалити
      </Button>
    </form>
  );
};
