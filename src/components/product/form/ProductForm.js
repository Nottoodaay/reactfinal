import React, { useEffect, useState } from "react";
import { Button, FormContainer, Input } from "../../atoms";
import { useForm } from "../../../hooks";
import { generateProductFormValues } from "./generateProductFormValues";
import FileBase from "react-file-base64";
import { useProduct } from "../../../hooks";

export const ProductForm = () => {
  const {
    formValues: productFormValues,
    onInputChange: onProductFormChange,
    setFormValues,
  } = useForm({ defaultFormValues: generateProductFormValues() });

  const [image, setImage] = useState("");

  const { saveProduct, selectedProduct } = useProduct();

  useEffect(() => {
    if (selectedProduct) {
      setFormValues(generateProductFormValues(selectedProduct));
      setImage(selectedProduct?.image);
    }
  }, [selectedProduct]);

  const onSave = () => {
    const name = productFormValues.name.value;
    const description = productFormValues.description.value;
    const category = productFormValues.category.value;
    const brand = productFormValues.brand.value;
    const price = productFormValues.price.value;

    saveProduct({
      product: { name, description, category, brand, price, image, },
      isUpdating: !!selectedProduct,
      id: selectedProduct?._id

    });
  };

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

      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />

      <Button onClick={onSave}>save product</Button>
    </FormContainer>
  );
};
