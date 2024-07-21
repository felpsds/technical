import React, { useState } from "react"
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { updateEvent } from "@/services/events";
import { changeEditOpen } from "./eventsSlice";

const EventEdit = () => {
  const event = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [eventPaylad, setEventPayloadf] = useState({
    "id": -1,
    "name": "",
    "startDate": null,
    "endDate": null,
    "active": false,
    "institutionId": -1
  });

  const [erros, setErros] = useState({
    "name": false,
    "endDate": false,
  });

  const handleDateChange = (date) => {
    let data = dayjs(date).format("YYYY/MM/DD");
    return data.replaceAll("/", "-");
  }

  const verifyValid = () => {
    if (eventPaylad.name === "" || eventPaylad.name === null) {
      setErros({ ...erros, name: true });
    } else if (eventPaylad.endDate === "" || eventPaylad.endDate === null) {
      setErros({ ...erros, name: false });
    } else {
      updateEvent({ ...eventPaylad, id: event.changeId });
      dispatch(changeEditOpen());
    }
  }

  return (
    <Dialog open={event.editOpen} maxWidth="md" fullWidth={true}>
      <DialogTitle>
        Editar evento
        <IconButton variant="close" onClick={() => dispatch(changeEditOpen())}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ height: "40dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>

        <Typography position="center">
          Informe os dados para editar um evento.
        </Typography>
        <Box width={"80%"}>
          <Box mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
            <FormControl sx={{ margin: 0, maxWidth: "240px" }}>
              <TextField
                sx={{ mb: 0, width: "240px" }}
                label="Nome do evento"
                variant="outlined"
                size="medium"
                fullWidth
                error={erros.name}
                onChange={(e) => setEventPayloadf({ ...eventPaylad, name: e.target.value })}
              />
            </FormControl>
            <FormControl sx={{ margin: 0, maxWidth: "240px" }}>
              <Select
                sx={{ m: 0 }}
                label="Intituição"
                variant="outlined"
                size="medium"
                fullWidth
                error={erros.institutionId}
                onChange={(e) => setEventPayloadf({ ...eventPaylad, institutionId: e.target.value })}
              >
                <MenuItem value={""}><em>Vazio</em></MenuItem>
                {event.institutions.map((institution) => (
                  <MenuItem key={institution.id} value={institution.id}>{institution.name}</MenuItem>
                ))}
              </Select>
              <InputLabel htmlFor="grupo">Intituição</InputLabel>
            </FormControl>
          </Box>
          <Box mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ m: 0, maxWidth: "240px" }}
                label="Data Inicial"
                disablePast
                format="DD/MM/YYYY"
                onChange={(date) => setEventPayloadf({ ...eventPaylad, startDate: handleDateChange(date) })}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ m: 0, maxWidth: "240px" }}
                label="Data final"
                format="DD/MM/YYYY"
                onChange={(date) => setEventPayloadf({ ...eventPaylad, endDate: handleDateChange(date) })}
              />
            </LocalizationProvider>
          </Box>


        </Box>
        <Button onClick={() => verifyValid(eventPaylad)}>
          Adicionar
        </Button>
      </DialogContent>
    </Dialog>

  )
}
export default EventEdit;