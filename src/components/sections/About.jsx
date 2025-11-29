import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="pb-15 pb-xl-20">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <h2 className="eyebrow text-muted">NOSOTROS</h2>
            <h4 style={{ color: '#0f4367' }}>
              Expertos en Aires Acondicionados y Línea Blanca con Garantía y Soporte en el gran Santo Domingo y Punta Cana.
            </h4>
            <p className="text-secondary">
              En FL Solutions Services SRL nos especializamos en la venta, instalación y mantenimiento de aires acondicionados y electrodomésticos. Contamos con técnicos certificados, atención personalizada y garantía de hasta 2 años en nuestras instalaciones.
            </p>
            <ul className="list-group list-group-minimal">
              <li className="list-group-item d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                Instalación profesional incluida por apertura
              </li>
              <li className="list-group-item d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                Garantía de 2 años
              </li>
              <li className="list-group-item d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                3% de descuento por promoción actual
              </li>
              <li className="list-group-item d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                C. Eugenio Aguiar #15, Los trinitarios, Santo Domingo Este
              </li>
              <li className="list-group-item d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                Servicio 24 horas para miembros Gold.
              </li>
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            <img
              src="/assets/images/service-1.png"
              className="img-fluid"
              alt="Técnico de FL Solutions instalando aire acondicionado"
            />
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
