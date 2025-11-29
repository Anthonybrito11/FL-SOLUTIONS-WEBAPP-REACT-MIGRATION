import React from 'react';
import Layout from '../components/Layout';

const MembershipsPage = () => {
  return (
    <Layout isHome={false}>
      <section className="py-15 py-xl-20">
        <div className="container mt-10">
          <div className="row justify-content-center mb-10">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#0f4367' }}>
                Nuestras Membresías
              </h1>
              <p className="lead text-secondary">
                Elige el plan que mejor se adapte a tus necesidades y disfruta de beneficios exclusivos.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Plan Mantenimiento */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="card-header text-center py-4" style={{ background: '#f8f9fa', borderBottom: 'none' }}>
                  <h3 className="fw-bold mb-0" style={{ color: '#0f4367' }}>Mantenimiento</h3>
                  <p className="text-muted mb-0">Para el cuidado básico</p>
                </div>
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <span className="display-4 fw-bold" style={{ color: '#2daae1' }}>$3,000</span>
                    <span className="text-muted">/unidad</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Limpieza profunda de unidad interior y exterior
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Revisión de presiones de gas
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Limpieza de filtros y bandejas
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Chequeo eléctrico básico
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="https://wa.link/gyoj31" className="btn btn-primary rounded-pill py-2" style={{ background: '#0f4367', border: 'none' }}>
                      Solicitar Servicio
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan VIP Silver */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-lg transform-scale" style={{ borderRadius: '20px', overflow: 'hidden', border: '2px solid #C0C0C0' }}>
                <div className="card-header text-center py-4" style={{ background: 'linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%)', borderBottom: 'none' }}>
                  <span className="badge bg-secondary mb-2">Popular</span>
                  <h3 className="fw-bold mb-0" style={{ color: '#0f4367' }}>VIP Silver</h3>
                  <p className="text-muted mb-0">Ahorro y tranquilidad</p>
                </div>
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <span className="display-4 fw-bold" style={{ color: '#0f4367' }}>$6,000</span>
                    <span className="text-muted">/año</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>50% OFF</strong> en mantenimientos
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>20% OFF</strong> en instalaciones
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>20% OFF</strong> en equipos y repuestos
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Prioridad en agendamiento
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="https://forms.gle/CsyU8ZbWMVaJxK3d8" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill py-2" style={{ background: 'linear-gradient(90deg, #2daae1 60%, #1b7ca6 100%)', border: 'none' }}>
                      Unirme ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan VIP Gold */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden', border: '2px solid #FFD700' }}>
                <div className="card-header text-center py-4" style={{ background: 'linear-gradient(135deg, #FFF8DC 0%, #FFFACD 100%)', borderBottom: 'none' }}>
                  <h3 className="fw-bold mb-0" style={{ color: '#DAA520' }}>VIP Gold</h3>
                  <p className="text-muted mb-0">Máxima cobertura</p>
                </div>
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <span className="display-4 fw-bold" style={{ color: '#DAA520' }}>$12,000</span>
                    <span className="text-muted">/año</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Todo lo incluido en Silver
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Servicio 24/7</strong> garantizado
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Visitas de emergencia sin costo
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Asesoría técnica ilimitada
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="https://forms.gle/CsyU8ZbWMVaJxK3d8" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill py-2" style={{ background: '#DAA520', border: 'none' }}>
                      Unirme ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MembershipsPage;
