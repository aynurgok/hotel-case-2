import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {AiOutlineStar,AiFillCar,AiOutlineWifi,AiOutlineCheck} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'


function Hotel() {
    const {hotels, addDot, deleteHotel, loading, setOpen, modalText, setModalText, sweetDelete } = useContext(GlobalContext)
  return (
    <>
      {hotels.map(hotel => (
        <div className='hotel-box' key={hotel.id}>
          <div className='hotel-image'>
            <img className='hotel-img' src={hotel.img}></img>
          </div>
          <div className='hotel-detail'>
            <div className='detail-left'>
                <div className='hotel-info'>
                <p>{hotel.ad}</p>
                  <div className='stars'>
                    <AiOutlineStar className='star' />
                    <AiOutlineStar className='star' />
                    <AiOutlineStar className='star'/>
                  </div>
                </div>
                <div className='hotel-benefists'>
                <p className='location'> <HiOutlineLocationMarker /> {hotel.lokasyon}</p>
                <p className='point'> {addDot(hotel.puan)}</p>
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
                <button id="increase" data-id={hotel.id}>Puan arttır</button>
                <button id="decrase" data-id={hotel.id}>Puan azalt</button>
              </div>
              <div className='check'>
                    <div className='flex'>
                      <p className='total'>Price:</p>
                      <p className='total'>${hotel.price}</p>
                    </div>
                    <div className='flex'>
                      <button id="edit" data-id={hotel.id} onClick={() => {
                        setOpen(true);
                        setModalText('Edit Hotel');
                      }}>Düzenle</button>  
                      <button id="delete" data-id={hotel.id} onClick={(event) => deleteHotel(hotel.id, event, sweetDelete())}>Sil</button>

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