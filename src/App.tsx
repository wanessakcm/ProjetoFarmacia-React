import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
         <div className='min-h-[80vh]'>
           <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
           {/*<Route path="/categorias" element={<Categorias />} />*/}
           {/*<Route path="/cadastroCategoria" element={<CadastroCategoria />} />*/}
           </Routes>
         </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
