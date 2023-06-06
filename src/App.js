import React from 'react';
import Header from './components/header/Header'
import AddHotelModal from './components/modal/AddHotelModal'
import HotelsList from './components/hotels/HotelsList';
import GlobalProvider from './context/GlobalContext';
import '../src/global.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <AddHotelModal />
      <HotelsList />
    </GlobalProvider>
  );
}

export default App;
