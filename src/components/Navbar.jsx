import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHome = true }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="mainNav" className={`navbar navbar-expand-lg navbar-sticky navbar-dark ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/assets/images/logo/logo-fl2.png" alt="Logo" />
        </Link>

        {/* Botón de menú móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list"></span>
        </button>

        {/* Menú principal */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            {isHome ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/#inicio">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#nosotros">Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#servicios">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#catalogo">Catálogo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#contacto">Contacto</a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/">Volver al inicio</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
