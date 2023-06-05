import React, { useContext } from "react"
import {AiOutlinePlus} from 'react-icons/ai'
import { GlobalContext } from "../../context/GlobalContext"
import Button from 'react-bootstrap/Button';
import './style.css'
function Header() {

  const {handleShow} = useContext(GlobalContext)
  return (
    <header>
        <div className="container">
         <div className="header">
          <p className="title"> Frontend Hotel Case</p>
              <Button variant="primary" onClick={handleShow}>
                <AiOutlinePlus className="plus-icon" />
              </Button>
         </div>
        </div>
    </header>
  )
}

export default Header