import React from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { setTheme } from './menuSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeaderComponent = ({ children }) => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const handleTheme = () => {
    menu.theme === 'dark' ? dispatch(setTheme("light")) : dispatch(setTheme("dark"));
  }
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <AppBar position="fixed" sx={{ zIndex: "1201" }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Enterprise
          </Typography>
          <IconButton onClick={handleTheme}>
            {menu.theme === 'dark' ? <LightMode /> : <DarkMode color='#FFF' />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component={"main"} sx={{ flexGrow: 1, p: 3, maxWidth: "1280px" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
export default HeaderComponent;