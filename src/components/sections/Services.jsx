import React from 'react';

const Services = () => {
  return (
    <section
      id="servicios"
      className="pt-3 pb-10 text-white position-relative"
      style={{
        background: 'linear-gradient(135deg, #163d56 60%, #1b2a3a 100%)',
        overflow: 'hidden',
      }}
    >
      <div className="container mt-10 level-3 position-relative" style={{ zIndex: 2 }}>
        <div className="row mb-md-10">
          <div className="col-12">
            <h2 className="servicios-title">
              Nuestros <span className="highlight">Servicios</span>
            </h2>
          </div>
        </div>
        <div className="position-relative">
          <div
            id="serviciosCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            data-bs-pause="hover"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-4 d-flex">
                    <div className="card-servicio w-100">
                      <div className="servicio-img-wrapper">
                        <img
                          src="/assets/images/instalacionnn.png"
                          className="servicio-img"
                          alt="Instalación básica"
                        />
                        <span className="servicio-icon">
                          <i className="bi bi-tools"></i>
                        </span>
                      </div>
                      <h4>Instalación Split 12K-18K BTU</h4>
                      <p>
                        Instalamos tu aire split (12K/18K BTU) con materiales originales y hasta 10 pies de tubería. Rápido, seguro y sin complicaciones.
                      </p>
                      <a href="https://wa.link/gyoj31" className="btn btn-cotiza">
                        Solicitar cotización
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 d-flex">
                    <div className="card-servicio w-100">
                      <div className="servicio-img-wrapper">
                        <img
                          src="/assets/images/mantenimientoo.png"
                          className="servicio-img"
                          alt="Diagnóstico y Evaluación"
                        />
                        <span className="servicio-icon">
                          <i className="bi bi-thermometer-snow"></i>
                        </span>
                      </div>
                      <h4>Diagnóstico Profesional</h4>
                      <p>
                        Detectamos y resolvemos fallas en tu aire acondicionado. Informe claro y recomendaciones de expertos.
                      </p>
                      <a href="https://wa.link/gyoj31" className="btn btn-cotiza">
                        Solicitar diagnóstico
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 d-flex">
                    <div className="card-servicio w-100">
                      <div className="servicio-img-wrapper">
                        <img
                          src="/assets/images/mantenimientoo2.png"
                          className="servicio-img"
                          alt="Mantenimiento Airmax y Gree"
                        />
                        <span className="servicio-icon">
                          <i className="bi bi-droplet-half"></i>
                        </span>
                      </div>
                      <h4>Mantenimiento Preventivo</h4>
                      <p>
                        Limpieza y revisión profunda para equipos de 12K, 18K y 24K BTU. Más eficiencia y vida útil para tu aire.
                      </p>
                      <a href="https://wa.link/gyoj31" className="btn btn-cotiza">
                        Agendar mantenimiento
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-4 d-flex">
                    <div className="card-servicio w-100">
                      <div className="servicio-img-wrapper">
                        <img
                          src="/assets/images/instalacionn.png"
                          className="servicio-img"
                          alt="Desinstalación Split"
                        />
                        <span className="servicio-icon">
                          <i className="bi bi-arrow-repeat"></i>
                        </span>
                      </div>
                      <h4>Desinstalación Split</h4>
                      <p>
                        Retiro seguro de tu aire split (12K-24K BTU) por técnicos certificados. Sin daños ni riesgos.
                      </p>
                      <a href="https://wa.link/gyoj31" className="btn btn-cotiza">
                        Solicitar servicio
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 d-flex">
                    <div className="card-servicio w-100">
                      <div className="servicio-img-wrapper">
                        <img
                          src="/assets/images/instalacionn2.png"
                          className="servicio-img"
                          alt="Instalación 36,000 BTU"
                        />
                        <span className="servicio-icon">
                          <i className="bi bi-tools"></i>
                        </span>
                      </div>
                      <h4>Instalación Split 36K BTU</h4>
                      <p>
                        Instalación profesional de aire split 36K BTU. Incluye materiales originales y conexión eléctrica.
                      </p>
                      <a href="https://wa.link/gyoj31" className="btn btn-cotiza">
                        Solicitar cotización
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 d-flex">
                    <div className="card-servicio w-100">
                      <div className="servicio-img-wrapper">
                        <img
                          src="/assets/images/instalacionn3.png"
                          className="servicio-img"
                          alt="Instalación 24,000 BTU"
                        />
                        <span className="servicio-icon">
                          <i className="bi bi-tools"></i>
                        </span>
                      </div>
                      <h4>Instalación Split 24K BTU</h4>
                      <p>
                        Montaje de aire split 24K BTU con materiales de fábrica y hasta 10 pies de tubería. Garantía total.
                      </p>
                      <a href="https://wa.link/gyoj31" className="btn btn-cotiza">
                        Solicitar cotización
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-4 d-flex mx-auto">
                    <div className="card-servicio w-100">
                      <div className="servicio-img-wrapper">
                        <img
                          src="/assets/images/mantenimientoo3.png"
                          className="servicio-img"
                          alt="Instalación base Split"
                        />
                        <span className="servicio-icon">
                          <i className="bi bi-box"></i>
                        </span>
                      </div>
                      <h4>Instalación con Base Split</h4>
                      <p>
                        Instalamos tu aire split (12K-18K BTU) con base para condensador incluida. Seguridad y soporte garantizados.
                      </p>
                      <a href="https://wa.link/gyoj31" className="btn btn-cotiza">
                        Solicitar cotización
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Custom Carousel Indicators */}
            <div className="carousel-indicators-custom mt-3">
              <button
                type="button"
                data-bs-target="#serviciosCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#serviciosCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#serviciosCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#serviciosCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#serviciosCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
        {/* Banner Membresías Mejorado */}
        <div className="row justify-content-center pt-10">
          <div className="col-12 col-lg-10">
            <div className="banner-membresias mt-4">
              <span className="banner-membresias-text">
                ¿Quieres atención preferencial y beneficios exclusivos? Descubre nuestras membresías <b>Gold</b> y <b>Silver</b>.
              </span>
              <a href="/membresias" className="banner-membresias-btn">
                Saber más <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
