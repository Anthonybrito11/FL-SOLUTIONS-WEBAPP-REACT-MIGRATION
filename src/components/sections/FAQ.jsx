import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="py-15 py-xl-20">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="mb-4 text-center">Preguntas Frecuentes</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading1">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse1"
                    aria-expanded="false"
                    aria-controls="faqCollapse1"
                  >
                    ¿Cuáles son las formas de pago disponibles?
                  </button>
                </h2>
                <div
                  id="faqCollapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Aceptamos pagos en efectivo, transferencias bancarias y tarjetas de crédito/débito. Si tienes alguna preferencia especial, contáctanos para más opciones.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse2"
                    aria-expanded="false"
                    aria-controls="faqCollapse2"
                  >
                    ¿Ofrecen servicio de instalación?
                  </button>
                </h2>
                <div
                  id="faqCollapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Sí, contamos con servicio de instalación profesional para todos nuestros productos. Consulta con nuestro equipo para coordinar una visita.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse3"
                    aria-expanded="false"
                    aria-controls="faqCollapse3"
                  >
                    ¿Tienen garantía los productos?
                  </button>
                </h2>
                <div
                  id="faqCollapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Todos nuestros productos cuentan con garantía. El tiempo y condiciones varían según el producto, por favor consulta los detalles al momento de la compra.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse4"
                    aria-expanded="false"
                    aria-controls="faqCollapse4"
                  >
                    ¿Realizan envíos a todo el país?
                  </button>
                </h2>
                <div
                  id="faqCollapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Sí, realizamos envíos a todo el territorio nacional. Los tiempos y costos de envío pueden variar según la ubicación.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeading5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse5"
                    aria-expanded="false"
                    aria-controls="faqCollapse5"
                  >
                    ¿Cómo puedo solicitar una cotización?
                  </button>
                </h2>
                <div
                  id="faqCollapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading5"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Puedes solicitar una cotización a través de nuestro formulario de contacto, por WhatsApp o llamando directamente a nuestro número. ¡Te responderemos lo antes posible!
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

export default FAQ;
