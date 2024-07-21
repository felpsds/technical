import React from "react";
import EventCard from "./EventCard";
import { Box } from "@mui/material";
import AddNewCard from "./AddNewCard";
import { useSelector } from "react-redux";

const CardList = () => {
  const event = useSelector((state) => state.events);
  return (
    <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
      <AddNewCard />
      {event.events.map((item) => (
        <EventCard
          id={item.id}
          name={item.name}
          startdate={item.startdate}
          enddate={item.enddate}
          status={item.active}
          institution={item.institution}
        />
      ))}
    </Box>
  );
}
export default CardList;