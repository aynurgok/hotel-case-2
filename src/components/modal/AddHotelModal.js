import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl'
import Container from '@mui/material/Container';
import DialogTitle from '@mui/material/DialogTitle';
import './modal.css'
import { addHotel } from '../../services/hotelServices';



export default function FormDialog() {
  

  const {open, setOpen, name, setName, point, setPoint, location, setLocation, price, setPrice,  img, setImg, hotelData} = useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = {name, point, location, price, img} 
    console.log(result)

    try {
      const response = await addHotel(hotelData);
      console.log("post success", response.data)
    }
    catch (error) {
      console.error('Post error:', error);
    }
  }

  return (
    <>
      <Dialog className="modal" open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Hotel</DialogTitle>
        <form onSubmit={handleSubmit}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <FormControl>
              <TextField
                fullWidth
                value={name}
                label="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                label="Point"
                value={point}
                type="number"
                onChange={(e) => setPoint(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                label="IMG URL"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                InputProps={{
                  startAdornment: img && <img src={img} alt="Preview" style={{ width: '100px', height: '100px' }} />,
                }}
              />
            </FormControl>
          </Container>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
