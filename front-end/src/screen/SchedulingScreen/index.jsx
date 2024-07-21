import PageTitle from "@/components/PageTitle";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Filtro from "./Filtro";
import CardList from "./CardList";
import { getEvents, getInstitutions, getTypes } from "@/services/events";
import EventAdd from "./EventAdd";
import EventEdit from "./EventEdit";

const ScheduleScreen = () => {
  useEffect(() => {
    getInstitutions();
    getTypes();
    getEvents();
  }, []);

  return (
    <Box>
      <PageTitle title="Eventos" subtitle="Aqui você pode cadastrar os enventos." />
      <Filtro />
      <CardList />
      <EventAdd />
      <EventEdit />
    </Box>
  );
}
export default ScheduleScreen;