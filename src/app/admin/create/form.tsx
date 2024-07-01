"use client";

import { Button, FormControl } from "@mui/material";

import { FieldAddDescription } from "@/components/admin/create/field-add-description/field-add-description";
import { FieldAddPhoto } from "@/components/admin/create/field-add-photo/field-add-photo";
import { FieldAddPrice } from "@/components/admin/create/field-add-price/field-add-price";
import { FieldAddQuantity } from "@/components/admin/create/field-add-quantity/field-add-quantity";
import { useValidateProductFormData } from "@/features/admin/hooks/use-validate-product-form-data";
import { ProductFormData } from "@/features/admin/shared/types/product-form-data";

export const FormCreateNewProduct = (): JSX.Element => {
  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useValidateProductFormData();

  const handleOnSubmit = (data: ProductFormData) => {
    console.log(data);
  };

  return (
    <FormControl
      onSubmit={handleSubmit(handleOnSubmit)}
      component="form"
      className="flex flex-col items-center gap-10"
    >
      <FieldAddPhoto
        name="image"
        control={control}
        register={register}
        errors={errors}
        errorMessage={errors.image?.message as string}
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

      <Button type="submit" variant="contained" color="info" fullWidth>
        Створити
      </Button>
    </FormControl>
  );
};
