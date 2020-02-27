import React from 'react';
import { Box, ButtonGroup, IconButton, Heading } from '@chakra-ui/core';
import { Incident } from '../generated/graphql';

export interface IncidentCardProps {
  incident: any
  handleUpdate: () => void;
  handleDelete: (incident:Incident) => void;
}

const IncidentCard: React.SFC<IncidentCardProps> = ({incident, handleUpdate, handleDelete}) => {
  return (
    <Box rounded="lg" padding={6} border="1px solid #d7d7d7">
      <Heading as="h1" size="md">{incident.title}</Heading>
      <p>{incident.description}</p>
      <ButtonGroup mt={5}>
        <IconButton
          aria-label="update incident"
          icon="edit" variantColor="teal"
          variant="outline"
          size="sm"
          onClick={() => handleUpdate()}
        />
        <IconButton
          aria-label="delete incident"
          icon="delete" variantColor="red"
          variant="outline"
          size="sm"
          onClick={() => handleDelete(incident)}
        />
      </ButtonGroup>
    </Box>
  );
}

export default IncidentCard;