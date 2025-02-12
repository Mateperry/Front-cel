import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ selectedButton, handleSelectButton }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#555A54] py-2 flex justify-between items-center px-4">
      {/* Logo o Nombre */}
      <div className="text-white text-lg font-semibold">
        <Link to="/" onClick={() => handleSelectButton('inicio')}>
          Mi Comparador de Celulares
        </Link>
      </div>

      {/* Menú en dispositivos grandes */}
      <div className="hidden md:flex gap-6 font-sans text-white">
        <Link
          to="/"
          onClick={() => handleSelectButton('inicio')}
          className={`text-center text-white text-[18px] m-2 p-2 border-2 border-solid border-transparent transition-all duration-200 rounded-[5px] ${selectedButton === 'inicio' ? 'bg-[#4CAF50] text-white' : 'hover:bg-[#4CAF50] hover:text-white'}`}
        >
          Inicio
        </Link>
        <Link
          to="/comparar"
          onClick={() => handleSelectButton('comparar')}
          className={`text-center text-white text-[18px] m-2 p-2 border-2 border-solid border-transparent transition-all duration-200 rounded-[5px] ${selectedButton === 'comparar' ? 'bg-[#4CAF50] text-white' : 'hover:bg-[#4CAF50] hover:text-white'}`}
        >
          Comparar Móviles
        </Link>
        <Link
          to="/temas-legales"
          onClick={() => handleSelectButton('acerca')}
          className={`text-center text-white text-[18px] m-2 p-2 border-2 border-solid border-transparent transition-all duration-200 rounded-[5px] ${selectedButton === 'acerca' ? 'bg-[#4CAF50] text-white' : 'hover:bg-[#4CAF50] hover:text-white'}`}
        >
          Temas Legales
        </Link>
      </div>

      {/* Menú hamburguesa (para pantallas pequeñas) */}
      <button
        className="md:hidden text-white p-2"
        onClick={toggleMenu}
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
      </button>

      {/* Menú desplegable en pantallas pequeñas */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-[#555A54] text-white p-4`}>
        <Link
          to="/"
          onClick={() => {
            handleSelectButton('inicio');
            setIsMenuOpen(false);
          }}
          className={`block text-center text-white text-[18px] m-2 p-2 border-2 border-solid border-transparent transition-all duration-200 rounded-[5px] ${selectedButton === 'inicio' ? 'bg-[#4CAF50] text-white' : 'hover:bg-[#4CAF50] hover:text-white'}`}
        >
          Inicio
        </Link>
        <Link
          to="/comparar"
          onClick={() => {
            handleSelectButton('comparar');
            setIsMenuOpen(false);
          }}
          className={`block text-center text-white text-[18px] m-2 p-2 border-2 border-solid border-transparent transition-all duration-200 rounded-[5px] ${selectedButton === 'comparar' ? 'bg-[#4CAF50] text-white' : 'hover:bg-[#4CAF50] hover:text-white'}`}
        >
          Comparar Móviles
        </Link>
        <Link
          to="/temas-legales"
          onClick={() => {
            handleSelectButton('acerca');
            setIsMenuOpen(false);
          }}
          className={`block text-center text-white text-[18px] m-2 p-2 border-2 border-solid border-transparent transition-all duration-200 rounded-[5px] ${selectedButton === 'acerca' ? 'bg-[#4CAF50] text-white' : 'hover:bg-[#4CAF50] hover:text-white'}`}
        >
          Temas Legales
        </Link>
      </div>
    </header>
  );
};

export default Header;
