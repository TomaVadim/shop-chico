"use client";
import Image from "next/image";

import { useState } from "react";

import { FileDownload } from "@mui/icons-material";
import { Button, FormHelperText, Paper } from "@mui/material";
import { Controller } from "react-hook-form";

import { ProductFormFieldProps } from "@/features/admin/shared/interfaces/product-form-field-props";

export const FieldAddPhoto = ({
  name,
  control,
  errors,
  errorMessage,
  register,
}: ProductFormFieldProps): JSX.Element => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Paper
        elevation={3}
        className="w-[150px] h-[200px] overflow-hidden flex items-center justify-center"
      >
        {imagePreview ? (
          <Image
            src={imagePreview}
            alt="Image Preview"
            width={150}
            height={200}
          />
        ) : (
          <div className="text-gray-500">Фото</div>
        )}
      </Paper>

      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="file-upload-button"
              type="file"
              onChange={(e) => {
                handleFileChange(e);
                field.onChange(e.target.files);
              }}
            />
            <label htmlFor="file-upload-button">
              <Button
                variant="contained"
                color="info"
                component="span"
                endIcon={<FileDownload />}
              >
                Завантажити фото
              </Button>
            </label>
            <FormHelperText error>{errorMessage}</FormHelperText>
          </>
        )}
      />
    </div>
  );
};
