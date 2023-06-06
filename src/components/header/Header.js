import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { GlobalContext } from '../../context/GlobalContext';
import './style.css'

function Header() {
  const {setOpen, setModalText, modalText} = useContext(GlobalContext);
 
  return (
    <header>
      <div className="container">
        <div className="header">
          <p className="title">Frontend Hotel Case</p>
          <Button variant="outlined" onClick={(() => {
            setOpen(true)
            setModalText('Add Hotel');
          })}>
            Otel Ekle
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
