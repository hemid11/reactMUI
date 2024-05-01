
import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6">My Music App</Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
