import React from "react";
import { Button, FormContainer, Input } from "../atoms";
import { useForm } from "../../hooks/UseForm";
import { generateLoginFormValues } from "./generateLoginFormValues";
import { useUser } from "../../hooks";

export const LoginForm = () => {
  const { formValues: loginFormValues, onInputChange: onLoginFormChange } =
    useForm({ defaultFormValues: generateLoginFormValues() });

  const { authenticateUser } = useUser();

  const onLogin = () => {
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    authenticateUser({ formValues: { email, password }, isLogin: true });
  };
  return (
    <FormContainer>
      <Input
        name="email"
        value={loginFormValues.email.value}
        onChange={onLoginFormChange}
        error={loginFormValues.email.error}
        label="Email"
      />
      <Input
        name="password"
        type="password"
        value={loginFormValues.password.value}
        onChange={onLoginFormChange}
        error={loginFormValues.password.error}
        label="Password"
      />

      <Button onClick={onLogin}>Login</Button>
    </FormContainer>
  );
};
