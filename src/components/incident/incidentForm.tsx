import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Input, Button, Stack, useToast } from '@chakra-ui/core'
import { useCreateIncidentMutation } from '../../generated/graphql';

const IncidentForm: React.SFC = () => {
  const [addIncident] = useCreateIncidentMutation({ awaitRefetchQueries: true, refetchQueries: ["Incidents"] })
  const toast = useToast();

  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        try {
          await addIncident({ variables: { title: values.title, description: values.description, team_id: '' } })
          toast({
            title: "Incident added",
            description: `Incident ${values.title} was added`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom-right"
          })
        } catch (error) {
          toast({
            title: "Error adding incident",
            description: `Could not add incident. ${error.message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-right"
          })
        }
        setSubmitting(false)
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Stack spacing={3}>
            <Field name="title" type="input" as={Input}></Field>
            <Field name="description" type="input" as={Input}></Field>
            <Button isLoading={isSubmitting} type="submit">Submit</Button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}

export default IncidentForm;