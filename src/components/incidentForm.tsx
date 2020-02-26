import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Input, Button } from '@chakra-ui/core'
import { useCreateIncidentMutation } from '../generated/graphql';

const IncidentForm: React.SFC = () => {
  const [addIncident] = useCreateIncidentMutation({ awaitRefetchQueries: true, refetchQueries: ["Incidents"] })
  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        addIncident({ variables: { title: values.title, description: values.description, team_id: '' } })
        setSubmitting(false)
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Field name="title" type="input" as={Input}></Field>
          <Field name="description" type="input" as={Input}></Field>
          <Button isLoading={isSubmitting} type="submit">Submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default IncidentForm;