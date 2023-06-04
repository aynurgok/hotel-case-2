import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {AiOutlineStar,AiFillCar,AiOutlineWifi,AiOutlineCheck} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'


function Hotel() {
    const {hotels, addDot, deleteHotel} = useContext(GlobalContext)
  return (
    <>
      {hotels.map(otel => (
        <div className='hotel-box' key={otel.id}>
          <div className='hotel-image'>
            <img className='hotel-img' src={otel.img}></img>
          </div>
          <div className='hotel-detail'>
            <div className='detail-left'>
                <div className='hotel-info'>
                <p>{otel.ad}</p>
                  <div className='stars'>
                    <AiOutlineStar className='star' />
                    <AiOutlineStar className='star' />
                    <AiOutlineStar className='star'/>
                  </div>
                </div>
                <div className='hotel-benefists'>
                <p className='location'> <HiOutlineLocationMarker /> {otel.lokasyon}</p>
                <p className='point'> {addDot(otel.puan)}</p>
                <div className='hotel-service'>
                  <BsHandbag />
                  <AiFillCar />
                  <AiOutlineWifi />
                </div>
                <div className='hotel-text'>
                  <div className='hotel-text-detail'><AiOutlineCheck className='icon' />  <p>Lorem ipsum dolor</p> </div>
                  <div className='hotel-text-detail'><AiOutlineCheck className='icon' />  <p>Lorem ipsum dolor</p> </div>
                  <div className='hotel-text-detail'><AiOutlineCheck  className='icon'/>  <p>Lorem ipsum dolor</p> </div>
                  <div className='hotel-text-detail'><AiOutlineCheck className='icon' />  <p>Lorem ipsum dolor</p> </div>
                </div>
                </div>
            </div>
            <div className='detail-right'>
              <div className='buttons'>
                <button id="increase" data-id={otel.id}>Puan arttır</button>
                <button id="decrase" data-id={otel.id}>Puan azalt</button>
              </div>
              <div className='check'>
                    <div className='flex'>
                      <p className='total'>Price:</p>
                      <p className='total'>$500</p>
                    </div>
                    <div className='flex'>
                      <button id="edit" data-id={otel.id}>Düzenle</button>  
                      <button id="delete" data-id={otel.id} onClick={() => deleteHotel(otel.id)}>Sil</button>  
                    </div>
              </div>
            </div>
          </div>
          </div>
      ))}
    </>
  )
}

export default Hotel