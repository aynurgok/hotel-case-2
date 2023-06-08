import React, { createContext,useState, useEffect} from "react";
import {getHotels, deleteHotels} from '../services/hotelServices';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    //otelleri listeleyeceğim bu state e tutturacağım.
    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)
    const [newHotel, setNewHotel] = useState([])
    const [open, setOpen] = useState(false);
    const [modalText, setModalText] = useState("Ekle");

    function addDot(val) {
        let division = Number(val / 10);
        let check = division.toString();
        if(check.length < 2) {
          return `${division}.0`;
        } else {
          return division
        }
    }

    const MySwal = withReactContent(Swal)
    let openSweet = function() {
    MySwal.fire({
      title: <strong>Başarıyla kaydedildi</strong>,
      icon: 'success'
    })
   }
   let sweetDelete = function() {
    MySwal.fire({
      title: <strong>Silindi</strong>,
      icon: 'error'
    })
   }
 

    const deleteHotel = async (hotelId,event) => {
      try {
        setLoading(true)
        event.preventDefault() 
        deleteHotels(hotelId)
        .then(() => {
          const updatedHotels = hotels.filter((hotel) => hotel.id !== hotelId);
          setHotels(updatedHotels);
        })
      } catch (error) {
        console.error('Otel silinirken bir hata oluştu:', error);
      }
    };

    const data = {
        hotels,
        setHotels,
        addDot,
        loading,
        setLoading,
        deleteHotel,
        newHotel,
        setNewHotel,
        open,
        setOpen,
        modalText,
        setModalText,
        openSweet,
        sweetDelete
    }

    useEffect(() => {
      getHotels()
        .then(response => {
            setHotels(response.data);
          })
        .catch(error => {
            console.error('Veri alınırken bir hata oluştu:', error);
        });
    }, [])

    
    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )

}
export default GlobalProvider