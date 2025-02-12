import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = ({ handleSelectButton }) => {
  const handleButtonClick = () => {
    handleSelectButton('comparar');  // Cambia la selección a "Comparar Móviles"
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-[#BFBBAF] p-4 sm:p-6">
      <div className="bg-[#555A54] p-8 sm:p-10 md:p-12 rounded-xl shadow-xl w-full max-w-md flex flex-col gap-6 mt-20">
        <div className="text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Bienvenido al Comparador de Celulares</h1>
          <p className="mb-6 text-sm sm:text-base">Compara las mejores marcas y modelos de celulares.</p>
          <Link
            to="/comparar"
            onClick={handleButtonClick}
            className="bg-[#4CAF50] text-white py-3 px-6 rounded-full hover:bg-[#45a049] transition-all duration-300"
          >
            Comienza Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
