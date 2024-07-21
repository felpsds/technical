import React from 'react';
import styles from './Card.module.css';
import { DeleteForever, Edit } from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { deleteEvent } from '@/services/events';
import { useDispatch } from 'react-redux';
import { changeEditOpen, changeId } from './eventsSlice';

const EventCard = ({ id, name, startdate, enddate, status, institution }) => {
  const dispatch = useDispatch();
  return (
    <Box className={styles.CardBox}>
      <Card variant="outlined">
        <CardHeader title={name} />
        <CardContent>
          <Typography variant="body2">
            Instituição: {institution}
          </Typography>
          <Typography variant="body2">
            Data Inicial: {startdate}
          </Typography>
          <Typography variant="body2">
            Data final: {enddate}
          </Typography>
          <Typography variant="body2">
            Status: {status ? 'Ativo' : 'Inativo'}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => dispatch(changeEditOpen()) && dispatch(changeId(id))}>
            <Edit color="primary"/>
          </IconButton>
          <IconButton onClick={() => deleteEvent(id)}>
            <DeleteForever color="primary"/>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
export default EventCard;