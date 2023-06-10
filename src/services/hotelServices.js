import API from '../utils/api'

export const getHotels =  () => {
  return API.get('/hotels')
}

export const deleteHotels =  (hotelId,e) => {
  return API.delete(`/hotels/${hotelId}`)
}

export const addHotel = (hotelData) => {
    return API.post(`hotels`, hotelData)
}