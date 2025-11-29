import React from 'react';

const Contact = () => {
  return (
    <>
      <section id="contacto" className="py-15 py-xl-20">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-10 col-xl-5 mb-5 mb-xl-0">
              <h2>Contacto y Ubicación</h2>
              <p className="text-secondary lead">
                Contáctanos para Cotizaciones y Asesoría Técnica
              </p>
              <ul className="list-group list-group-minimal pb-5">
                <li className="list-group-item d-flex align-items-center mb-1">
                  <div className="icon-box bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-pin-angle text-green"></i>
                  </div>
                  C. Eugenio Aguiar #15, Los trinitarios, Santo Domingo Este
                </li>
                <li className="list-group-item d-flex align-items-center mb-1">
                  <div className="icon-box bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-pin-angle text-green"></i>
                  </div>
                  Proximamente en Plaza crisfer, Local #8, c/ Edgar Allan Poe, Punta Cana
                </li>
                <li className="list-group-item d-flex align-items-center mb-1">
                  <div className="icon-box bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-envelope text-green"></i>
                  </div>
                  pc@flsolutionsservices.com
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-box bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-whatsapp text-green"></i>
                  </div>
                  (849) 401 1905
                </li>
              </ul>
              <h3 className="card-title">Horarios de servicios.</h3>
              <p>
                Lunes a Viernes: 8:00 a.m. - 6:30 p.m. <br /> Sabados: 9:00 a.m. - 4:00 p.m. <br /> Domingos: 8:00 a.m. - 12:00 p.m.
              </p>
              <a
                href="https://wa.link/4t7syw"
                className="action underline"
                style={{ color: '#2daae1' }}
              >
                Hablar con un asesor ahora <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-xl-6">
              <div
                className="row g-3 g-xl-5"
                data-masonry=""
                style={{ position: 'relative', height: '570px' }}
              >
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  style={{ position: 'absolute', left: '0px', top: '0px' }}
                >
                  <div
                    className="card equal-xl-1-1 inverted"
                    style={{ backgroundColor: '#0f4367' }}
                  >
                    <div className="card-wrap">
                      <div className="card-header pb-0">
                        <i className="bi bi-clock-fill fs-3"></i>
                      </div>
                      <div className="card-footer mt-auto">
                        <h3 className="fs-4">Servicio 24 horas para miembros.</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 mt-xl-20"
                  data-aos="fade-up"
                  style={{ position: 'absolute', left: '285px', top: '0px' }}
                >
                  <div className="card equal-xl-1-1 inverted">
                    <div className="card-wrap">
                      <div className="card-header pb-0">
                        <i className="bi bi-compass-fill fs-3"></i>
                      </div>
                      <div className="card-footer mt-auto">
                        <h3 className="fs-4">Proximamente en Plaza Crisfer, Local #8.</h3>
                      </div>
                    </div>
                    <figure
                      className="background background-overlay skrollable skrollable-before"
                      style={{
                        backgroundImage: 'url("/assets/images/plaza.jpeg")',
                        transform: 'translateY(0%)',
                      }}
                      data-top-top="transform: translateY(0%);"
                      data-top-bottom="transform: translateY(20%);"
                    ></figure>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  style={{ position: 'absolute', left: '0px', top: '285px' }}
                >
                  <div className="card equal-xl-1-1 bg-light">
                    <div className="card-wrap">
                      <div className="card-header pb-0">
                        <i className="bi bi-people-fill fs-3"></i>
                      </div>
                      <div className="card-footer mt-auto">
                        <h3 className="fs-4">2 años de garantía.</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          textDecoration: 'none',
          overflow: 'hidden',
          width: '100vw',
          height: '500px',
          margin: '0 auto',
        }}
      >
        <div id="canvas-for-googlemap" style={{ height: '100%', width: '100%' }}>
          <iframe
            style={{ height: '100%', width: '100%', border: 0 }}
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de FL Solutions Services SRL en Santo Domingo Este"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:EjxDLiBFdWdlbmlvIEFndWlhciAxNSwgU2FudG8gRG9taW5nbyBFc3RlLCBEb21pbmljYW4gUmVwdWJsaWMiMBIuChQKEgmLQfhpR4avjhF8TAq76Mue6xAPKhQKEglla3A4R4avjhGO5BJK_NuApg&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
