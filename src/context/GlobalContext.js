import { createContext,useState, useEffect} from "react";
import axios from 'axios';

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

    function deleteHotel(hotelId) {
        const updateHotel = hotels.filter((otel) => otel.id !== hotelId)
        setHotels(updateHotel)
    }
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
        axios.get('/data/hotels.json')
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