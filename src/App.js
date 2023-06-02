import React from 'react';
import Header from './components/header/Header'
import HotelsList from './components/hotels/HotelsList';
import GlobalProvider from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <HotelsList />
    </GlobalProvider>
  );
}

export default App;
