import React from "react";
import { FormContainer, Input } from "../../atoms";
import { useForm } from "../../../hooks"
import { generateProductFormValues } from "./generateProductFormValues";

export const ProductForm = () => {
  const { formValues: productFormValues, onInputChange: onProductFormChange } =
    useForm({defaultFormValues: generateProductFormValues() });
  return (
    <FormContainer>
      <Input
        name="name"
        value={productFormValues.name.value}
        onChange={onProductFormChange}
        error={productFormValues.name.error}
        label="name"
      />
      <Input
        name="description"
        value={productFormValues.description.value}
        onChange={onProductFormChange}
        error={productFormValues.description.error}
        label="description"
      />
      <Input
        name="category"
        value={productFormValues.category.value}
        onChange={onProductFormChange}
        error={productFormValues.category.error}
        label="category"
      />
      <Input
        name="brand"
        value={productFormValues.brand.value}
        onChange={onProductFormChange}
        error={productFormValues.brand.error}
        label="brand"
      />
      <Input
        name="price"
        value={productFormValues.price.value}
        onChange={onProductFormChange}
        error={productFormValues.price.error}
        label="price"
      />
    </FormContainer>
  );
};
