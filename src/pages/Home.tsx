import React from "react";
import { useIncidentsQuery, Incident } from "../generated/graphql";
import { Flex, Grid, CircularProgress } from "@chakra-ui/core";

import IncidentForm from '../components/incidentForm';
import IncidentCard from '../components/incidentCard';

export interface HomeProps { }

export const Home: React.SFC<HomeProps> = () => {
  const { data } = useIncidentsQuery();

  return (
    <Grid alignContent='center' style={{ minHeight: '100vh' }}>
      <Flex alignSelf="center" justify="space-around">
        {data ?
          data.incidents.map((incident: Incident) => {
            return <IncidentCard key={incident.id} incident={incident} />
          })
          :
          <div><CircularProgress isIndeterminate/></div>
        }
      </Flex>

      <Flex mt={100} alignSelf="center" justify="space-evenly">
        <IncidentForm />
      </Flex>
    </Grid>
  )
};
