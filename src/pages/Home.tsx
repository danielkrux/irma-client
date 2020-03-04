import React, { useContext, useState } from "react";
import { useIncidentsQuery, Incident, useDeleteIncidentMutation } from "../generated/graphql";
import { Flex, Grid, CircularProgress, useToast } from "@chakra-ui/core";
import { observer } from "mobx-react";

import { AppStoreContext } from "../stores/AppStore";

import IncidentForm from '../components/incident/incidentForm';
import IncidentCard from '../components/incident/incidentCard';
import UpdateIncidentForm from "../components/incident/updateIncidentForm";
import MyDrawer from "../components/shared/drawer";

export interface HomeProps { }

export const Home: React.SFC<HomeProps> = observer(() => {
  const { data } = useIncidentsQuery();
  const [deleteIncidentMutation] = useDeleteIncidentMutation({ refetchQueries: ["Incidents"] });
  const appStore = useContext(AppStoreContext)
  const [incidentToUpdate, setIncidentToUpdate] = useState()

  const [isUpdating, setIsUpdating] = useState(false)
  const toast = useToast();

  const handleUpdate = (incident: any) => {
    setIncidentToUpdate(incident)
    appStore.toggleIncidentFormDrawer();
    setIsUpdating(true)
  }

  const deleteIncident = async (incident: Incident) => {
    try {
      await deleteIncidentMutation({ variables: { id: incident.id } })
      toast({
        title: "Incident deleted",
        description: `Incident ${incident.title} was deleted`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right"
      })
    } catch (error) {
      toast({
        title: "Could not delete incident",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right"
      })
    }
  }

  return (
    <Grid alignContent='center' style={{ minHeight: '100vh' }}>
      <Grid padding={[0, '3rem']} alignSelf="center" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {data ?
          data.incidents.map((incident: Incident) => {
            return (
              <IncidentCard
                incident={incident}
                key={incident.id}
                handleUpdate={() => handleUpdate(incident)}
                handleDelete={() => deleteIncident(incident)}
              />
            )
          })
          :
          <CircularProgress isIndeterminate color="teal" />
        }
      </Grid>
      <MyDrawer
        placement="right"
        title={isUpdating ? "Update incident" : "Create incident"}
        handleClose={() => { appStore.toggleIncidentFormDrawer(); setIsUpdating(false) }}
        isOpen={appStore.incidentFormDrawer}
      >
        <Flex p={3} justifyContent="center">
          {isUpdating ? <UpdateIncidentForm incidentToUpdate={incidentToUpdate} /> : <IncidentForm />}
        </Flex>
      </MyDrawer>
    </Grid>
  )
});
