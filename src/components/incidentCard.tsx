import * as React from 'react';
import { Box } from '@chakra-ui/core';
export interface IncidentCardProps {
  item: any
}

const IncidentCard: React.SFC<IncidentCardProps> = (props) => {
  const incident = props.item
  return (
    <Box rounded="lg" padding={3} border="1px solid #d7d7d7">
      <h1>{incident.title}</h1>
      <p>{incident.description}</p>
    </Box>
  );
}

export default IncidentCard;