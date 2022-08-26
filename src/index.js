import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/ItemListContainer';
import './index.css'

const App = () => {
  return (
    <>
      <NavBar />
      <Main saludo="Bienvenidos a mi futura App"/>
      <Footer />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
