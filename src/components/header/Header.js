import React, { useContext } from "react"
import {AiOutlinePlus} from 'react-icons/ai'
import { GlobalContext } from "../../context/GlobalContext"
import './style.css'
function Header() {

  const {handleAddHotel} = useContext(GlobalContext)
  return (
    <header>
        <div className="container">
         <div className="header">
          <p className="title"> Frontend Hotel Case</p>
            <AiOutlinePlus className="plus-icon" onClick={handleAddHotel}/>
         </div>
        </div>
    </header>
  )
}

export default Header