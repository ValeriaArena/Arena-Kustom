import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer';
import './index.css'
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Bienvenidos a mi futura App"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/Item/:id' element={<ItemDetailContainer/>} />
      </Routes>  
      <Footer />
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
