import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/ItemListContainer';
import './index.css'
import MainDetalle from './components/Main/ItemDetailContainer';


const App = () => {
  return (
    <>
      <NavBar />
      <Main saludo="Bienvenidos a mi futura App"/>
      <MainDetalle/>
      <Footer />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
