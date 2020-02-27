import * as React from 'react';
import { Box, ButtonGroup, Button, useToast } from '@chakra-ui/core';
import { Incident, useDeleteIncidentMutation } from '../generated/graphql';

export interface IncidentCardProps {
  incident: any
}

const IncidentCard: React.SFC<IncidentCardProps> = (props) => {
  const [deleteIncidentMutation] = useDeleteIncidentMutation({ refetchQueries: ["Incidents"] });
  const incident = props.incident
  const toast = useToast();

  const deleteIncident = async () => {
    try {
      await deleteIncidentMutation({ variables: { id: incident.id } })
      toast({ title: "Incident deleted", description:`Incident ${incident.title} was deleted`, status: "success", duration: 5000, isClosable: true })
    } catch (error) {
      toast({ title: "Could not delete incident", description: error.message, status: "error", duration: 5000, isClosable: true })
    }
  }

  return (
    <Box rounded="lg" padding={6} border="1px solid #d7d7d7">
      <h1>{incident.title}</h1>
      <p>{incident.description}</p>
      <ButtonGroup>
        <Button variantColor="red" variant="outline" size="sm" onClick={() => deleteIncident()}>Delete</Button>
      </ButtonGroup>
    </Box>
  );
}

export default IncidentCard;