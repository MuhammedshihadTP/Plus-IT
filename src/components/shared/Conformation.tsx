'use client'

import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import { deleteUser } from '@/api/userservice'; 

const DeleteConfirmationModal = ({ open, onClose }:any) => {

  const handleDelete = async () => {
    try {
      await deleteUser("/delete-user");
      localStorage.removeItem('token');
     
    } catch (error) {
      console.error('Error deleting user:', error);
      
    } finally {
      onClose(); 
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDelete} variant="contained" color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
