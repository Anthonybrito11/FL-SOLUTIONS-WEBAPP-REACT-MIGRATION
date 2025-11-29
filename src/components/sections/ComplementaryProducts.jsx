import React from 'react';

const ComplementaryProducts = () => {
  return (
    <section id="productos-complementarios" className="py-15 bg-white">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3" style={{ color: '#0f4367' }}>
              Productos Complementarios
            </h2>
            <p className="lead text-secondary">
              Optimiza tu ambiente con soluciones inteligentes y seguras.
            </p>
          </div>
        </div>
        <div className="grid-productos-complementarios">
          <div className="tarjeta-complementaria">
            <img
              src="/assets/images/termostatointe.png"
              alt="Termostato Inteligente"
            />
            <h5>Termostatos Inteligentes</h5>
            <p>Controla la temperatura desde tu celular y ahorra energía.</p>
            <a href="https://wa.link/gyoj31" className="btn-comprar mt-2">
              Comprar
            </a>
          </div>
          <div className="tarjeta-complementaria">
            <img
              src="/assets/images/purificador de aire.png"
              alt="Purificador de Aire"
            />
            <h5>Purificadores de Aire</h5>
            <p>Mejora la calidad del aire y respira más saludable.</p>
            <a href="https://wa.link/gyoj31" className="btn-comprar mt-2">
              Comprar
            </a>
          </div>
          <div className="tarjeta-complementaria">
            <img
              src="/assets/images/selladores termicos.png"
              alt="Selladores y Aislamientos Térmicos"
            />
            <h5>Selladores y Aislamientos</h5>
            <p>Mantén la temperatura y reduce el consumo eléctrico.</p>
            <a href="https://wa.link/gyoj31" className="btn-comprar mt-2">
              Comprar
            </a>
          </div>
          <div className="tarjeta-complementaria">
            <img
              src="/assets/images/protectores de voltaje.png"
              alt="Protector de Voltaje"
            />
            <h5>Protectores y Reguladores</h5>
            <p>Evita daños eléctricos y protege tus equipos.</p>
            <a href="https://wa.link/gyoj31" className="btn-comprar mt-2">
              Comprar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplementaryProducts;
