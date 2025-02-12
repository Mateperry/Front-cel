import React from 'react';

const TemasLegales = () => {
  return (
    <div className="min-h-screen bg-[#BFBBAF] p-5 sm:p-6 md:p-8 flex justify-center items-center">
      <div className="bg-[#555A54] p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-4xl flex flex-col gap-6 mb-20">
        <div className="text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-lg sm:text-xl mb-6">
            Al utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones.
          </p>
        </div>

        <div className="text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Introducción</h2>
          <p className="mb-4">
            Bienvenido al comparador de celulares. Estos términos y condiciones regulan el uso de nuestro
            sitio web y los servicios que ofrecemos. Por favor, léelos detenidamente.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. Uso del Sitio Web</h2>
          <p className="mb-4">
            El uso de este sitio web está sujeto a los siguientes términos. Al acceder o usar este sitio, 
            aceptas estar de acuerdo con estos términos.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. Responsabilidad</h2>
          <p className="mb-4">
            Aunque nos esforzamos por proporcionar información precisa y actualizada, no garantizamos la exactitud
            o la fiabilidad de la información contenida en el sitio web.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. Privacidad</h2>
          <p className="mb-4">
            Tu privacidad es importante para nosotros. Consulta nuestra política de privacidad para conocer cómo 
            tratamos tus datos personales.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Cambios en los Términos</h2>
          <p className="mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Te recomendamos que 
            revises esta página periódicamente para estar al tanto de cualquier cambio.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">6. Contacto</h2>
          <p className="mb-4">
            Si tienes alguna pregunta sobre estos términos, no dudes en ponerte en contacto con nosotros.
          </p>
        </div>
      </div>

      {/* Aquí se añade el footer */}
    </div>
  );
};

export default TemasLegales;
