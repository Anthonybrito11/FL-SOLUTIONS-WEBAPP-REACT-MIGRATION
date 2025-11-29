import React, { useEffect } from 'react';

const HowToGetServices = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('#pasos-animados .paso-card');
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 200 + i * 180);
    });
  }, []);

  return (
    <section
      id="como-obtener-servicio"
      className="py-15"
      style={{ backgroundColor: '#0f4367' }}
    >
    <div className="container">
        <section className="section-pasos-servicio">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="pasos-titulo">¿Cómo obtener nuestros servicios?</h2>
                <p className="pasos-subtitulo">
                  Sigue estos sencillos pasos para disfrutar de todos nuestros servicios y productos.
                </p>
              </div>
            </div>
            <div className="pasos-row" id="pasos-animados">
              <div className="paso-card">
                <div className="paso-numero">1</div>
                <div className="paso-titulo">Elige tu producto o servicio</div>
                <div className="paso-descripcion">
                  Selecciona el producto o servicio que deseas adquirir.
                </div>
              </div>
              <div className="paso-card">
                <div className="paso-numero">2</div>
                <div className="paso-titulo">Contacta a nuestro equipo</div>
                <div className="paso-descripcion">
                  Al lado de cada producto o servicio, hay un botón para contactar a nuestro equipo. Nuestros asesores profesionales estarán más que encantados de ayudarte.
                </div>
              </div>
              <div className="paso-card">
                <div className="paso-numero">3</div>
                <div className="paso-titulo">Recibe asesoría</div>
                <div className="paso-descripcion">
                  Te orientamos sobre la mejor solución y/o producto y te enviamos una cotización personalizada sin compromiso.
                </div>
              </div>
              <div className="paso-card">
                <div className="paso-numero">4</div>
                <div className="paso-titulo">¡Disfruta el resultado!</div>
                <div className="paso-descripcion">
                  Recibe el servicio solicitado con garantía, atención personalizada y soporte postventa. Si tienes alguna duda, no dudes en contactarnos.
                </div>
              </div>
            </div>
            <div className="pasos-boton">
              <a
                href="https://api.whatsapp.com/send?phone=18494011905"
                className="btn btn-pasos"
              >
                Solicita tu servicio o producto ahora
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowToGetServices;
