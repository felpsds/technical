import { getEventsFilter } from "@/services/events";
import { Add, Search } from "@mui/icons-material";
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterActive, changeFilterInstitution } from "./eventsSlice";

const Filtro = () => {
  const event = useSelector((state) => state.events);
  const dispatch = useDispatch();
  return (
    <Box mb={"20px"} display={"flex"} justifyContent={"space-between"} mr={"10px"} >
      <Box>
        <FormControl sx={{ marginRight: "10px" }}>
          <Select
            label="Instituições"
            onChange={(e) => dispatch(changeFilterInstitution(e.target.value))}
          >
            <MenuItem value={0}><em>Todas</em></MenuItem>
            {event.institutions.map((institution) => (
              <MenuItem key={institution.id} value={institution.id}>{institution.name}</MenuItem>
            ))}
          </Select>
          <InputLabel>Instituições</InputLabel>
        </FormControl>
        <FormControl>
          <Select
            label="Status"
            onChange={(e) => dispatch(changeFilterActive(e.target.value))}
          >
            <MenuItem value={0}><em>Todos</em></MenuItem>
            <MenuItem value={true}>Ativo</MenuItem>
            <MenuItem value={false}>Inativo</MenuItem>
          </Select>
          <InputLabel>Status</InputLabel>
        </FormControl>
      </Box>
      <Button startIcon={<Search />} onClick={() => getEventsFilter()}>
        Pesquisar
      </Button>
    </Box>
  );
}
export default Filtro;