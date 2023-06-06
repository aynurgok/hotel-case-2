import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DialogTitle from '@mui/material/DialogTitle';
import './modal.css'

export default function FormDialog() {
  const {open, setOpen, modalText} = useContext(GlobalContext);


  return (        
    <>
      <Dialog className="modal" open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{modalText}</DialogTitle>
        <Container  sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <FormControl>
            <TextField fullWidth label={modalText=="Add Hotel" ? "Name" : "{data.name}"} id="fullWidth" />
          </FormControl>
          <FormControl>
            <TextField fullWidth label="Point" id="fullWidth" />
          </FormControl>
          <FormControl>
            <TextField fullWidth label="Location" id="fullWidth" />
          </FormControl>
          <FormControl>
            <TextField fullWidth label="Price" id="fullWidth" />
          </FormControl>
          <FormControl>
            <TextField fullWidth label="IMG URL" id="fullWidth" />
          </FormControl>
        </Container>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>SAVE</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
