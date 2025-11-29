import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="cover overflow-hidden inverted bg-black mb-10">
      <div className="d-flex flex-column min-vh-100 container py-10 level-1">
        <div className="row justify-content-center my-auto">
          <div className="col-md-8 text-center">
            {/*<span className="eyebrow text-secondary">FL Solutions Services SRL</span>*/}
            <h1 className="display-4 lh-sm fw-bold">
              Ventas, Reparación y Mantenimiento de Aires Acondicionados y Línea Blanca.
            </h1>
            <p className="lead text-white mb-4">
              Soluciones integrales en climatización con garantía, asesoría personalizada y precios competitivos.
            </p>
            <a
              href="https://wa.link/gyoj31"
              className="btn rounded-pill"
              style={{
                backgroundColor: '#ffffff',
                color: '#0f4367',
                border: '1px solid #0f4367',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#0f4367';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#0f4367';
              }}
            >
              Solicita tu cotización ahora
            </a>
          </div>
        </div>
      </div>
      <div className="background background-overlay" data-aos="zoom-out" data-aos-delay="200">
        <img
          src="/assets/images/repair-1.png"
          alt="Técnico reparando aire acondicionado"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
};

export default Hero;
