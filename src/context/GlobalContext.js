import { createContext,useState, useEffect} from "react";
import axios from 'axios';

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    //otelleri listeleyeceğim bu state e tutturacağım.
    const [hotels, setHotels] = useState([])

    const data = {
        hotels,
        setHotels
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