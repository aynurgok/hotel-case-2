import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {AiOutlineStar,AiFillCar,AiOutlineWifi,AiOutlineCheck} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'


function Hotel() {
    const {hotels,addDot} = useContext(GlobalContext)
  return (
    <div>
        {hotels.map(otel => (
              <div className='hotel-box' key={otel.id}>
                <div>
                  <img className='hotel-img' src={otel.img}></img>
                </div>
                <div className='hotel-detail'>
                  <div className='detail-left'>
                     <div className='flex-verilecel'>
                      <p className='hotel-name'>{otel.ad}</p>
                        <div className='stars'>
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                        </div>
                     </div>
                     <div className='hotel-benefists'>
                      <p>{otel.lokasyon}</p>
                      <p>Puan: {addDot(otel.puan)}</p>
                      <div className='hotel-service'>
                        <BsHandbag />
                        <AiFillCar />
                        <AiOutlineWifi />
                      </div>
                      <div className='hotel-text'>
                        <p><AiOutlineCheck /> Lorem ipsum dolor </p>
                        <p><AiOutlineCheck /> Lorem ipsum dolor </p>
                        <p><AiOutlineCheck /> Lorem ipsum dolor </p>
                        <p><AiOutlineCheck /> Lorem ipsum dolor </p>
                      </div>
                     </div>
                  </div>
                  <div className='detail-right'>
                    <button>Puan arttır</button>
                    <button>Puan azalt</button>
                  </div>
                </div>
                </div>
            ))}
    </div>
  )
}

export default Hotel