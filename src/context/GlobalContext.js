import React, { createContext,useState, useEffect} from "react";
import {getHotels, deleteHotels, addHotel} from '../services/hotelServices';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    //otelleri listeleyeceğim bu state e tutturacağım.
    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const [modalText, setModalText] = useState("Ekle");

    // add hotel

    const [name, setName] = useState("")
    const [point, setPoint] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")
    

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
        open,
        setOpen,
        modalText,
        setModalText,
        openSweet,
        sweetDelete,
        name,
        setName,
        point,
        setPoint,
        price,
        setPrice,
        location,
        setLocation,
        img,
        setImg,
        // handleSubmit,
        // hotelData
        hotelData :{
          name: name,
          point:point,
          location:location,
          img:img,
          price:price
        }
      
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