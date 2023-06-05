import { createContext,useState, useEffect} from "react";
import {getHotels, deleteHotels} from '../services/hotelServices';

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    //otelleri listeleyeceğim bu state e tutturacağım.
    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)
    const [newHotel, setNewHotel] = useState("")

    function addDot(val) {
        let division = Number(val / 10);
        let check = division.toString();
        if(check.length < 2) {
          return `${division}.0`;
        } else {
          return division
        }
    }

    function handleAddHotel() {
        setNewHotel(console.log("df"))
    }

    const deleteHotel = async (hotelId,event) => {
      try {
        setLoading(true)
        event.preventDefault()  //tamam çalışayım senin vaktini almiyim daha fazla :Ç))))
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
        handleAddHotel
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