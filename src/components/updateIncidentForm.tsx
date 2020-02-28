import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Input, Button, Stack, useToast } from '@chakra-ui/core'
import { useUpdateIncidentMutation } from '../generated/graphql';
import { Incident } from '../models/Incident';

export interface Props {
  incidentToUpdate: Incident;
}

const UpdateIncidentForm: React.SFC<Props> = ({incidentToUpdate}) => {
  const [updateIncident] = useUpdateIncidentMutation({ awaitRefetchQueries: true, refetchQueries: ["Incidents"] })
  const toast = useToast();

  return (
    <Formik
      initialValues={{ title: incidentToUpdate.title || '', description: incidentToUpdate.description || '' }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        try {          
          await updateIncident({ variables: { id: incidentToUpdate.id, title: values.title, description: values.description } })
          toast({
            title: "Incident added",
            description: `Incident ${values.title} was updated`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom-right"
          })
        } catch (error) {
          toast({
            title: "Error adding incident",
            description: `Could not update incident ${values.title}`,
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

export default UpdateIncidentForm;