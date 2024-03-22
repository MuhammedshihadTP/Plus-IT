'use client'

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditModal from '../shared/popup';
import { Button } from '@mui/material';
import DeleteConfirmationModal from '../shared/Conformation';

function NavBar() {

    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const handleEditOpen = () => {
      setEditOpen(true);
    };
  
    const handleEditClose = () => {
      setEditOpen(false);
    };

    const handleDeleteOpen = () => {
        setDeleteOpen(true);
      };
    
      const handleDeleteClose = () => {
        setDeleteOpen(false);
      };
    
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <IconButton color="inherit" aria-label="Edit" onClick={handleEditOpen}>
          <EditIcon  />
        </IconButton>

      <EditModal open={editOpen} onClose={handleEditClose} />
        <IconButton color="inherit" aria-label="Delete"  onClick={handleDeleteOpen}>
          <DeleteIcon />
        </IconButton>
        <DeleteConfirmationModal open={deleteOpen} onClose={handleDeleteClose}/>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
