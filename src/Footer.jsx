import { useState } from 'react';

const Footer = () => {
  const [selectedButton, setSelectedButton] = useState('acerca');
  const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para abrir y cerrar el popup

  const handleSelectButton = (button) => {
    setSelectedButton(button); // Actualizamos el estado con el botón seleccionado
    if (button === 'acerca') {
      setIsModalOpen(true); // Abre el modal cuando el botón "Acerca del sitio" es presionado
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();  // Cierra el modal si se hace clic fuera del popup
    }
  };

  return (
    <footer className="bg-[#555A54] py-4 text-white ">
    <div className="flex flex-wrap justify-between items-center px-6 sm:px-10">
      {/* Nombre a la izquierda */}
      <div className="text-left text-sm mb-4 sm:mb-0">
        <p>&copy; 2024 Mateo Castro Useche</p>
      </div>

      {/* Iconos centrados en la mitad */}
      <div className="flex gap-6 items-center mb-4 sm:mb-0">
        {/* Botón de LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tunombre"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-2 transition-all duration-200 hover:bg-[#333] hover:text-white rounded-full"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin text-3xl text-[#4CAF50]"></i>
        </a>

        {/* Botón de Portafolio */}
        <a
          href="https://tuporfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-2 transition-all duration-200 hover:bg-[#333] hover:text-white rounded-full"
          aria-label="Portafolio"
        >
          <i className="fas fa-briefcase text-3xl text-[#4CAF50]"></i>
        </a>

        {/* Botón de CV */}
        <a
         href="https://tucv.com"
          target="_blank"
          rel="noopener noreferrer"
           className="text-center p-2 transition-all duration-200 hover:bg-[#333] hover:text-white rounded-full"
          aria-label="CV"
        >
          <i className="fas fa-file-alt text-3xl text-[#4CAF50]"></i>
        </a>
      </div>

      {/* Botón de Acerca del sitio a la derecha */}
      <button
        className={`text-center px-4 py-2 border-2 border-solid border-transparent transition-all duration-200 rounded-full ${selectedButton === 'acerca' ? 'bg-[#4CAF50] text-white' : 'hover:bg-[#4CAF50] hover:text-white'}`}
        onClick={() => handleSelectButton('acerca')}
        aria-label="Acerca del sitio"
      >
        Acerca del sitio
      </button>
    </div>

    {/* Modal */}
    {isModalOpen && (
      <div
        id="modal-background"
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={handleOutsideClick}
      >
        <div className="bg-[#555A54] p-10 rounded-xl shadow-xl w-96 text-white" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-2xl font-bold mb-4">Acerca de este Proyecto</h2>
          <p className="mb-4">
            Este proyecto fue creado por Mateo Castro Useche como parte de su portafolio. Aprendí sobre el uso de React,
            el manejo de estados, el diseño de interfaces y la implementación de funcionalidades interactivas como comparadores y modales.
          </p>
          <button
            onClick={closeModal}
            className="bg-[#4CAF50] text-white py-2 px-6 rounded-full hover:bg-[#45a049] transition-all duration-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    )}
  </footer>
  );
};

export default Footer;

