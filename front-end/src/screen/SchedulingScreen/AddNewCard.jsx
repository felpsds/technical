import React from 'react';
import styles from './Card.module.css';
import { Add } from '@mui/icons-material';
import { Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeAddOpen } from './eventsSlice';

const AddNewCard = () => {
  const dispatch = useDispatch();
  return (
    <Box className={styles.CardBox}>
      <Card variant="outlined" sx={{ height: "100%" }}>
        <CardHeader title="Adicionar"/>
        <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <IconButton size="large" onClick={() => dispatch(changeAddOpen())}>
            <Add fontSize="20px"/>
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
}
export default AddNewCard;