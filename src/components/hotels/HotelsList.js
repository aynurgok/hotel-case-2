import React from 'react'
import Hotel from './Hotel';
import './style.css'

function HotelsList() {
    return (
        <div className='container'>
            <div className='hotels-container'>
              <h2 className='list-title'>Otel Listesi</h2>
              <div className='hotels'>
                <Hotel />
              </div>
            </div>
        </div>
    )
      
}

export default HotelsList