import React from "react";
import { FieldAttributes, useField } from "formik";
import { FormControl, Input, FormErrorMessage } from "@chakra-ui/core";


export const MyTextField: React.FC<FieldAttributes<{}>> = ({ placeholder, type, ...props }) => {
  const [field, meta] = useField<any>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormControl>
      <Input placeholder={placeholder} type={type} {...field}></Input>
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  )
}