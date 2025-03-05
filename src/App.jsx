import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';  
import Footer from './Footer';  
import Inicio from './Inicio';  
import Contenido from './Contenido';  
import TemasLegales from './TemasLegales';  

const App = () => {
  const [selectedButton, setSelectedButton] = useState('inicio');  // Estado para manejar la selección del botón

  const handleSelectButton = (button) => {
    setSelectedButton(button);  // Cambia el estado de selección del botón
  };

  // Usamos el hook useEffect para redirigir automáticamente al inicio cuando se recarga la página
 // Solo se ejecuta una vez al cargar la aplicación

  return (
    <Router>
      <Header selectedButton={selectedButton} handleSelectButton={handleSelectButton} />
      <Routes>
        {/* Redirigimos siempre al inicio si estamos en la raíz o recargamos */}
        <Route path="/" element={<Inicio handleSelectButton={handleSelectButton} />} />
        <Route path="/comparar" element={<Contenido handleSelectButton={handleSelectButton} />} />
        <Route path="/temas-legales" element={<TemasLegales />} />

        {/* Si alguna ruta no se encuentra, redirige al inicio */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
