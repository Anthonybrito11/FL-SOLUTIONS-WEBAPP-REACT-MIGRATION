import React, { useEffect, useState } from 'react';

const ContactModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShow(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      id="contactModalOverlay"
      style={{
        display: 'flex',
        position: 'fixed',
        zIndex: 2000,
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(15,67,103,0.45)',
        backdropFilter: 'blur(1.5px)',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.3s',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setShow(false);
      }}
    >
      <div id="contactModal" className="contact-modal-responsive">
        <button
          id="closeContactModal"
          aria-label="Cerrar"
          className="contact-modal-close"
          onClick={() => setShow(false)}
        >
          &times;
        </button>
        <h2 className="contact-modal-title" style={{ marginBottom: '1.2rem' }}>
          Programa de Afiliación FL Solutions Services
        </h2>
        <div className="contact-modal-form" style={{ gap: '0.7rem' }}>
          <p style={{ marginBottom: '1.1rem' }}>
            <b>¿Qué es?</b>
            <br />
            Es un programa para clientes frecuentes que desean ahorrar en <b>mantenimiento</b>, <b>instalación</b> y <b>compra de equipos</b>. Por solo <span style={{ fontWeight: 'bold' }}>DOP$6,000 al año</span>, recibes importantes descuentos todo el año.
          </p>
          <div style={{ marginBottom: '1rem' }}>
            <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
              <li style={{ marginBottom: '0.7em' }}>
                <strong>50% de descuento en mantenimiento</strong>
                <br />
                <span style={{ color: '#1090c4' }}>Ej: Mantenimiento $3,000 → pagas $1,500</span>
              </li>
              <li style={{ marginBottom: '0.7em' }}>
                <strong>20% de descuento en instalación</strong>
                <br />
                <span style={{ color: '#1090c4' }}>Ej: Instalación $5,799 → pagas $4,639</span>
              </li>
              <li>
                <strong>20% de descuento en equipos/repuestos</strong>
                <br />
                <span style={{ color: '#1090c4' }}>Ej: Equipo $18,300 → pagas $14,640</span>
              </li>
            </ul>
          </div>
          <div style={{ marginBottom: '0.9rem' }}>
            <b style={{ color: '#2daae1', fontSize: '1.2rem' }}>
              ¡Por motivo de Black Friday, afíliate por solo DOP$0!
            </b>
            <br />
            <span style={{ fontSize: '0.92rem', color: '#757575' }}>
              *Oferta válida solo por el mes de noviembre.
            </span>
            <br />
            <span style={{ color: '#444' }}>Recupera tu inversión desde el primer servicio.</span>
          </div>
          <a
            href="https://forms.gle/CsyU8ZbWMVaJxK3d8"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-modal-btn"
            style={{
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block',
              marginTop: '1.2rem',
              fontSize: '1.16rem',
            }}
          >
            Deseo unirme
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
