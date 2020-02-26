import React from "react";
import { useIncidentsQuery } from "../generated/graphql";
import { Flex, Grid } from "@chakra-ui/core";

import IncidentForm from '../components/incidentForm';
import IncidentCard from '../components/incidentCard';

export interface HomeProps { }

export const Home: React.SFC<HomeProps> = () => {
  const { data } = useIncidentsQuery();

  return (
    <Grid alignContent='center' style={{ minHeight: '100vh' }}>
      {data ?
        <Flex alignSelf="center" justify="space-around">
          {data.incidents.map((incident, i) => {
            return <IncidentCard item={incident} />
          })}
        </Flex>
        :
        <div>Loading...</div>
      }

      <Flex mt={100} alignSelf="center" justify="space-evenly">
        <IncidentForm />
      </Flex>
    </Grid>
  )
};
