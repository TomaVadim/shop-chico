"use client";
import { useState } from "react";

import { Button, FormControl } from "@mui/material";
import axios from "axios";

import { FieldAddDescription } from "@/components/admin/create/field-add-description/field-add-description";
import { FieldAddPhoto } from "@/components/admin/create/field-add-photo/field-add-photo";
import { FieldAddPrice } from "@/components/admin/create/field-add-price/field-add-price";
import { FieldAddQuantity } from "@/components/admin/create/field-add-quantity/field-add-quantity";
import { useValidateProductFormData } from "@/features/admin/hooks/use-validate-product-form-data";
import { ProductFormData } from "@/features/admin/shared/types/product-form-data";
import { SelectChoseGender } from "@/components/admin/create/select-chose-gender/select-chose-gender";
import { SelectChoseInsert } from "@/components/admin/create/select-chose-insert/select-chose-insert";
import toast, { Toaster } from "react-hot-toast";

export const FormCreateNewProduct = (): JSX.Element => {
  const [fileUrl, setFileUrl] = useState("");

  const handleLoadFile = (url: string) => {
    setFileUrl(url);
  };

  const {
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    register,
    reset,
  } = useValidateProductFormData();

  const handleOnSubmit = async (data: ProductFormData) => {
    try {
      const response = await axios(
        `${process.env.NEXT_PUBLIC_BASE_URL!}/api/product`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
          method: "POST",
        }
      );

      if (response.status !== 201) return;

      toast.success("Товар додано", {
        position: "top-center",
        icon: "😃",
        id: "create-product",
        style: { background: "green", color: "white" },
      });

      reset();
    } catch (error) {
      toast.error("Щось пішло не так", {
        position: "top-center",
        icon: "😱",
        id: "create-product",
        style: { background: "red", color: "white" },
      });
    }
  };

  return (
    <FormControl
      onSubmit={handleSubmit(handleOnSubmit)}
      component="form"
      className="flex flex-col items-center gap-10"
    >
      <Toaster toastOptions={{ id: "create-product" }} />

      <FieldAddPhoto
        name="imageUrl"
        register={register}
        errors={errors}
        isSubmitted={isSubmitSuccessful}
        handleLoadFile={handleLoadFile}
        fileUrl={fileUrl}
      />

      <FieldAddDescription
        name="description"
        register={register}
        errors={errors}
        errorMessage={errors.description?.message}
      />

      <div className="flex justify-between gap-10">
        <FieldAddPrice
          name="price"
          errors={errors}
          register={register}
          errorMessage={errors.price?.message}
        />
        <FieldAddQuantity
          name="quantity"
          errors={errors}
          register={register}
          errorMessage={errors.quantity?.message}
        />
      </div>

      <div className="flex justify-between gap-10">
        <SelectChoseGender
          name="gender"
          register={register}
          errors={errors}
          errorMessage={errors.gender?.message}
        />

        <SelectChoseInsert
          name="insert"
          register={register}
          errors={errors}
          errorMessage={errors.insert?.message}
        />
      </div>

      <Button
        className="w-[min(400px,100%)]"
        size="large"
        type="submit"
        variant="contained"
        color="info"
      >
        Створити
      </Button>
    </FormControl>
  );
};
