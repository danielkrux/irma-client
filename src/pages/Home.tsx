import React, { useContext, useState } from "react";
import { useIncidentsQuery, Incident, useDeleteIncidentMutation } from "../generated/graphql";
import { Flex, Grid, CircularProgress, useToast } from "@chakra-ui/core";
import { observer } from "mobx-react-lite";

import { AppStoreContext } from "../stores/AppStore";

import IncidentForm from '../components/incidentForm';
import IncidentCard from '../components/incidentCard';
import UpdateIncidentForm from "../components/updateIncidentForm";
import BottomDrawer from "../components/bottomDrawer";

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
      <Flex alignSelf="center" justify="space-around">
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
      </Flex>
      <BottomDrawer title={isUpdating ? "Update incident" : "Create incident"} handleClose={() => {appStore.toggleIncidentFormDrawer(); setIsUpdating(false)}} isOpen={appStore.incidentFormDrawer}>
        <Flex p={3} justifyContent="center">
          {isUpdating ? <UpdateIncidentForm incidentToUpdate={incidentToUpdate} /> : <IncidentForm />}
        </Flex>
      </BottomDrawer>
    </Grid>
  )
});
