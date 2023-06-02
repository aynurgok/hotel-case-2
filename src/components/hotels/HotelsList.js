import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalContext';

function HotelsList() {
  const {hotels, setHotels} = useContext(GlobalContext)
    function addDot(val) {
        let division = Number(val / 10);
        let check = division.toString();
        if(check.length < 2) {
          return `${division}.0`;
        } else {
          return division
        }
    }
    
    return (
        <div>
          <h2 className='title'>Otel Listesi</h2>
          <div className='hotels-container'>
            {hotels.map(otel => (
              <div key={otel.id}>
                {otel.ad} - Puan: {addDot(otel.puan)}
                <img src={otel.img}></img>
                </div>
            ))}
          </div>
        </div>
    )
      
}

export default HotelsList