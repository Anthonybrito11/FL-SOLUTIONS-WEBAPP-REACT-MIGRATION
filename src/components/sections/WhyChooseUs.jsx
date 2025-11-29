import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-15 py-xl-20">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-5">
              ¿Por qué <span className="fw-bold">elegirnos?</span>
            </h2>
            <div className="card">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div
                    className="col-md-6 p-4 text-white"
                    style={{
                      backgroundColor: '#0D4367',
                      marginBottom: '24px',
                      borderRadius: '8px 0 0 8px',
                    }}
                  >
                    <h4 className="text-center mb-4">Nosotros</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span className="fw-bold">Membresias de mantenimiento</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>Entrega garantizada</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>
                          Servicio de entrega con plataforma elevadora (opcional) - costo adicional
                        </span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>Soporte tecnico profesional</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>Reclamaciones de seguro procesadas por nosotros</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>Envío rapido</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>Instalación profesional </span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>Asesoria gratuita</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>Personal profesional y capacitado</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>Manual de uso y cuidado</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-check2-circle me-2"></i>
                        <span>
                          Procesamiento de garantía incluido en todos nuestros productos
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-md-6 bg-light p-4"
                    style={{
                      marginTop: '24px',
                      borderRadius: '0 8px 8px 0',
                    }}
                  >
                    <h4 className="text-center mb-4">Otras Empresas</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Cobran extremadamente alto por envío y tarifas</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Sin garantía de entrega</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Precios elevados por plataforma elevadora</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Sin servicio de entrega interior</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Cobran extra por procesar reclamos</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Envío lento o productos sin stock</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Sin servicio de instalación</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Sin asesoria gratuita</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Sin soporte técnico</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Sin material de apoyo</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-x-circle me-2 text-danger"></i>
                        <span>Sin procesamiento de garantía</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
