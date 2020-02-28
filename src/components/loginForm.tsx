import React, { useState, useContext } from 'react';
import { Form, Formik } from 'formik';
import { Button, Alert } from '@chakra-ui/core';
import { MyTextField } from "./costumFormFields";
import { useLoginMutation } from '../generated/graphql';
import { AuthStoreContext } from '../stores/AuthStore';
import { observer } from 'mobx-react';
import { AppStoreContext } from '../stores/AppStore';

export const LoginForm: React.SFC = observer(() => {
  interface LoginResult {
    type: string,
    message: string
  }

  const [login] = useLoginMutation()
  const [loginResult, setLoginResult] = useState<LoginResult | undefined>(undefined);
  const { setLogin } = useContext(AuthStoreContext);
  const { toggleLoginModal } = useContext(AppStoreContext);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        try {
          const result = await login({ variables: { email: values.email, password: values.password } });
          setLogin(result.data?.login.user, result.data?.login.accesToken)
          setTimeout(() => toggleLoginModal(), 1);
        } catch (error) {
          setLoginResult({ type: "error", message: error.message.split('GraphQL error: ').pop() });
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <MyTextField name="email" placeholder="email" type="email" />
          <MyTextField name="password" placeholder="password" type="password" />
          <Button isLoading={isSubmitting} type="submit">Login</Button>
          {loginResult?.type === "error" && <Alert variant="left-accent" status="error">{loginResult.message}</Alert>}
          {loginResult?.type === "success" && <Alert variant="left-accent" status="success">{loginResult.message}</Alert>}
        </Form>
      )}
    </Formik>
  )
})