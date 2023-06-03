import React from "react"
import {AiOutlinePlus} from 'react-icons/ai'
import './style.css'
function Header() {
  return (
    <div className="container">
        <div className="header-container">
          <p className="title"> Frontend Hotel Case</p>
          <AiOutlinePlus className="plus-icon" />
        </div>
    </div>
  )
}

export default Header