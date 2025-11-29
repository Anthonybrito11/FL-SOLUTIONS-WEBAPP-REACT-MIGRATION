import React, { useState } from 'react';

const Footer = () => {
  const [modals, setModals] = useState({
    security: false,
    installation: false,
    return: false,
    warranty: false,
    privacy: false,
  });

  const toggleModal = (modalName, value) => {
    setModals((prev) => ({ ...prev, [modalName]: value }));
    if (value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const ModalOverlay = ({ isOpen, onClose, children, id }) => {
    if (!isOpen) return null;
    return (
      <div
        id={id}
        style={{
          display: 'block',
          position: 'fixed',
          zIndex: 1050,
          left: 0,
          top: 0,
          width: '100vw',
          height: '100vh',
          background: '#0f4367',
          fontFamily: 'inherit',
          overflowY: 'auto',
        }}
        onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}
      >
        <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
            {children}
        </div>
      </div>
    );
  };

  return (
    <footer className="pt-10 pb-5 inverted" style={{ backgroundColor: '#0f4367' }}>
      <div className="container">
        <div className="row g-2 g-lg-6 mb-8">
          <div className="col-lg-6">
            <img src="/assets/images/logo/logo-fl2.png" alt="Logo" />
          </div>
          <div className="col-lg-6 text-lg-end">
            <span className="h5">Climatizamos tu espacio con eficiencia y confianza.</span>
          </div>
        </div>
        <div className="row mb-8">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row g-0 g-lg-6 text-secondary">
          <div className="col-lg-6 text-lg-end order-lg-2">
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="text-reset" style={{ cursor: 'pointer' }} onClick={() => toggleModal('security', true)}>
                  Políticas de seguridad de ventas digitales
                </span>
              </li>
              <li className="list-inline-item">
                <span className="text-reset" style={{ cursor: 'pointer' }} onClick={() => toggleModal('installation', true)}>
                  Políticas de Instalación
                </span>
              </li>
              <li className="list-inline-item">
                <span className="text-reset" style={{ cursor: 'pointer' }} onClick={() => toggleModal('return', true)}>
                  Políticas de devolución en ventas
                </span>
              </li>
              <li className="list-inline-item">
                <span className="text-reset" style={{ cursor: 'pointer' }} onClick={() => toggleModal('warranty', true)}>
                  Políticas de Garantía en Ventas
                </span>
              </li>
              <li className="list-inline-item">
                <span className="text-reset" style={{ cursor: 'pointer' }} onClick={() => toggleModal('privacy', true)}>
                  Política de privacidad
                </span>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/profile.php?id=61574549141228#" className="text-reset" target="_blank" rel="noreferrer">facebook</a>
              </li>
              <li className="list-inline-item ms-1">
                <a href="https://www.instagram.com/flsolutionsservices/?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExcXF0RzFBVm5xUDJqcVlVMgEeLK9K6wI8XWG03SciAOUiHtZ1YpugOY1ES8yWMx46PY0CzetC7M_JQCYb3Ug_aem_QOTA8MC4pm5FlLp3mb8zYQ" className="text-reset" target="_blank" rel="noreferrer">instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <p>Copyrights © 2025</p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ModalOverlay isOpen={modals.security} onClose={() => toggleModal('security', false)} id="politicasSeguridadModal">
        <div id="politicasSeguridadModalContent" style={{ width: '100vw', maxWidth: '100vw', minHeight: '100vh', background: '#0f4367', color: '#fff', borderRadius: 0, boxShadow: 'none', padding: '64px 8vw 48px 8vw', position: 'relative', fontSize: '1.5rem', lineHeight: 2 }}>
            <button onClick={() => toggleModal('security', false)} style={{ position: 'absolute', top: '32px', right: '48px', background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
            <h2 style={{ fontWeight: 'bold', marginBottom: '32px', fontSize: '2.5rem' }}>Políticas de Seguridad en Ventas Digitales</h2>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Compromiso con la Protección de Datos Personales</h4>
            <p style={{ marginBottom: '24px' }}>FL Solutions Services SRL se compromete a garantizar la seguridad y confidencialidad de la información personal proporcionada por nuestros clientes durante el proceso de compra en línea. Para ello, implementamos las siguientes medidas:</p>
            <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>No almacenamos información de tarjetas de crédito: Los datos de pago no son almacenados en nuestros sistemas.</li>
                <li style={{ marginBottom: '12px' }}>Transacciones seguras: Todas las transacciones se procesan a través de la plataforma de pagos Azul, que cumple con los estándares de seguridad más exigentes, asegurando la confidencialidad de los datos suministrados.</li>
                <li style={{ marginBottom: '12px' }}>Certificación de seguridad: Contamos con un certificado de seguridad SSL que cifra la información transmitida, protegiendo los datos personales de nuestros clientes.</li>
                <li style={{ marginBottom: '12px' }}>No compartimos datos con terceros: Los datos personales proporcionados no serán compartidos con terceros sin el consentimiento expreso del usuario, salvo en los casos en que sea necesario para cumplir con la legislación vigente o para la ejecución del contrato.</li>
                <li style={{ marginBottom: '12px' }}>Envío de comunicaciones: FL Solutions Services SRL podrá remitir correos electrónicos al usuario una vez éste facilite su dirección y bajo las condiciones expresamente aceptadas por él.</li>
                <li style={{ marginBottom: '12px' }}>Almacenamiento seguro: La información del usuario almacenada en nuestros servidores se conserva en un entorno seguro, siguiendo las mejores prácticas en cuanto a manejo de información y control de acceso.</li>
            </ul>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Recomendaciones para la Protección de Datos</h4>
            <ul style={{ paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>Evitar el envío de datos sensibles por correo electrónico: No utilice el correo electrónico para enviar datos de su tarjeta de crédito u otra información confidencial.</li>
                <li style={{ marginBottom: '12px' }}>No enviar imágenes con datos sensibles: No envíe imágenes que contengan datos de su tarjeta de crédito u otra información personal.</li>
            </ul>
        </div>
      </ModalOverlay>

      <ModalOverlay isOpen={modals.installation} onClose={() => toggleModal('installation', false)} id="politicasInstalacionModal">
        <div id="politicasInstalacionModalContent" style={{ width: '100vw', maxWidth: '100vw', minHeight: '100vh', background: '#0f4367', color: '#fff', borderRadius: 0, boxShadow: 'none', padding: '64px 8vw 48px 8vw', position: 'relative', fontSize: '1.5rem', lineHeight: 2 }}>
            <button onClick={() => toggleModal('installation', false)} style={{ position: 'absolute', top: '32px', right: '48px', background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
            <h2 style={{ fontWeight: 'bold', marginBottom: '32px', fontSize: '2.5rem' }}>Políticas de Instalación</h2>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Tiempo estimado de instalación por ciudad</h4>
            <p style={{ marginBottom: '24px' }}>Higüey, Punta Cana, Bávaro y Gran Santo Domingo: de 1 a 5 días laborables.</p>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Nuestra instalación básica incluye</h4>
            <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>Kit de instalación compuesto por 3 metros de tubería de cobre y alambre eléctrico.</li>
            </ul>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Nuestra instalación básica <span style={{ color: '#ffb300' }}>NO incluye</span> los siguientes servicios</h4>
            <ul style={{ paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>Suministro e instalación de base o palometa para el condensador.</li>
                <li style={{ marginBottom: '12px' }}>Trabajos o instalaciones eléctricas adicionales.</li>
                <li style={{ marginBottom: '12px' }}>El cliente deberá proporcionar líneas o salidas eléctricas ubicadas a un máximo de 1.5 metros del lugar de instalación del condensador.</li>
                <li style={{ marginBottom: '12px' }}>Trabajos relacionados con albañilería o construcción ligera.</li>
                <li style={{ marginBottom: '12px' }}>Servicios que requieran el uso de escalera de extensión.</li>
                <li style={{ marginBottom: '12px' }}>Realización de desagües en tubería de PVC.</li>
                <li style={{ marginBottom: '12px' }}>Desmontaje de equipos previamente instalados (en caso de requerir este servicio, se deberá informar antes de la compra para la creación del servicio correspondiente).</li>
                <li style={{ marginBottom: '12px' }}>Suministro e instalación de protector de voltaje.</li>
            </ul>
        </div>
      </ModalOverlay>

      <ModalOverlay isOpen={modals.return} onClose={() => toggleModal('return', false)} id="politicasDevolucionModal">
        <div id="politicasDevolucionModalContent" style={{ width: '100vw', maxWidth: '100vw', minHeight: '100vh', background: '#0f4367', color: '#fff', borderRadius: 0, boxShadow: 'none', padding: '64px 8vw 48px 8vw', position: 'relative', fontSize: '1.5rem', lineHeight: 2 }}>
            <button onClick={() => toggleModal('return', false)} style={{ position: 'absolute', top: '32px', right: '48px', background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
            <h2 style={{ fontWeight: 'bold', marginBottom: '32px', fontSize: '2.5rem' }}>Políticas de Devolución en Ventas</h2>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Condiciones Generales</h4>
            <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>El cliente podrá solicitar el cambio o la devolución del producto dentro de los treinta (30) días naturales contados a partir de la fecha de compra, siempre que el aire acondicionado no haya sido instalado.</li>
                <li style={{ marginBottom: '12px' }}>Es imprescindible la presentación de la factura original de compra para procesar cualquier solicitud de cambio o devolución.</li>
                <li style={{ marginBottom: '12px' }}>Los equipos sujetos a cambio o devolución deben ser entregados en su empaque original, en perfecto estado y sin signos de uso.</li>
            </ul>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Procedimientos en caso de instalación previa</h4>
            <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>Si el equipo ha sido instalado, se descontará el valor correspondiente a la instalación, desinstalación y un 20% del valor del equipo por concepto de depreciación y reempaque.</li>
            </ul>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Proceso de Reembolso</h4>
            <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>Todas las devoluciones generarán una nota de crédito, la cual podrá ser utilizada para la compra de otro equipo.</li>
                <li style={{ marginBottom: '12px' }}>En caso de que la devolución sea procedente, el reembolso se efectuará a través del mismo medio de pago utilizado en la compra.</li>
                <li style={{ marginBottom: '12px' }}>En ningún caso se realizará devolución de dinero en efectivo.</li>
            </ul>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Recomendaciones para una experiencia óptima</h4>
            <ul style={{ paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>Para garantizar una gestión eficiente de su solicitud, le sugerimos contactar a nuestro servicio de atención al cliente antes de proceder con la devolución del producto.</li>
                <li style={{ marginBottom: '12px' }}>Asegúrese de conservar todos los documentos relacionados con la compra, incluyendo la factura y cualquier comunicación pertinente.</li>
                <li style={{ marginBottom: '12px' }}>Verifique que el producto esté en condiciones óptimas para su devolución, siguiendo las instrucciones proporcionadas en nuestra política.</li>
                <li style={{ marginBottom: '12px' }}>Si requiere asistencia adicional o desea más información sobre nuestras políticas, no dude en ponerse en contacto con nuestro equipo de atención al cliente.</li>
            </ul>
        </div>
      </ModalOverlay>

      <ModalOverlay isOpen={modals.warranty} onClose={() => toggleModal('warranty', false)} id="politicasGarantiaModal">
        <div id="politicasGarantiaModalContent" style={{ width: '100vw', maxWidth: '100vw', minHeight: '100vh', background: '#0f4367', color: '#fff', borderRadius: 0, boxShadow: 'none', padding: '64px 8vw 48px 8vw', position: 'relative', fontSize: '1.5rem', lineHeight: 2 }}>
            <button onClick={() => toggleModal('warranty', false)} style={{ position: 'absolute', top: '32px', right: '48px', background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
            <h2 style={{ fontWeight: 'bold', marginBottom: '32px', fontSize: '2.5rem' }}>Políticas de Garantía en Ventas</h2>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Dos años de garantía completa limitada</h4>
            <p style={{ marginBottom: '24px' }}>FL Solutions Services SRL ofrece una garantía limitada de dos (2) años a partir de la fecha de compra del producto. Durante este período, FL Solutions Services SRL, a través de sus servicios autorizados, reparará o reemplazará sin costo alguno para el usuario cualquier componente que presente defectos de fabricación o ensamblaje.</p>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Exclusiones de la Garantía</h4>
            <ul style={{ marginBottom: '24px', paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>Daños derivados de la falta de mantenimiento periódico, según lo indicado en el manual del usuario o por el instalador autorizado.</li>
                <li style={{ marginBottom: '12px' }}>Daños ocasionados por una instalación incorrecta o aplicación inapropiada del producto.</li>
                <li style={{ marginBottom: '12px' }}>Fallas en el arranque del equipo debido a condiciones inadecuadas de voltaje, fusibles quemados, interruptores de circuito abiertos o interrupciones en el suministro eléctrico.</li>
                <li style={{ marginBottom: '12px' }}>Daños resultantes de abuso, alteraciones no autorizadas o modificaciones del producto sin la autorización de FL Solutions Services SRL.</li>
                <li style={{ marginBottom: '12px' }}>Daños causados por eventos naturales como inundaciones, incendios, descargas eléctricas (rayos) u otros factores fuera del control de FL Solutions Services SRL.</li>
                <li style={{ marginBottom: '12px' }}>Daños ocasionados por ambientes corrosivos, definidos como aquellos en los que el producto se encuentra cerca de agua salada marina a una distancia menor a diez (10) millas.</li>
                <li style={{ marginBottom: '12px' }}>Daños durante el transporte del producto. Esta responsabilidad recae exclusivamente en la empresa o persona encargada de la entrega o transporte del producto.</li>
                <li style={{ marginBottom: '12px' }}>Daños a la propiedad comercial, residencial o industrial durante la instalación, transporte y manejo de los productos de FL Solutions Services SRL.</li>
            </ul>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Condiciones de Servicio Bajo Garantía</h4>
            <ul style={{ paddingLeft: '32px' }}>
                <li style={{ marginBottom: '12px' }}>Todo trabajo realizado bajo los términos de la garantía deberá llevarse a cabo durante el horario laboral habitual.</li>
                <li style={{ marginBottom: '12px' }}>Las partes o repuestos, sean nuevos o reacondicionados, asumirán la garantía remanente del período original de garantía.</li>
            </ul>
        </div>
      </ModalOverlay>

      <ModalOverlay isOpen={modals.privacy} onClose={() => toggleModal('privacy', false)} id="politicaPrivacidadModal">
        <div id="politicaPrivacidadModalContent" style={{ width: '100vw', maxWidth: '100vw', minHeight: '100vh', background: '#0f4367', color: '#fff', borderRadius: 0, boxShadow: 'none', padding: '64px 8vw 48px 8vw', position: 'relative', fontSize: '1.5rem', lineHeight: 2 }}>
            <button onClick={() => toggleModal('privacy', false)} style={{ position: 'absolute', top: '32px', right: '48px', background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
            <h2 style={{ fontWeight: 'bold', marginBottom: '32px', fontSize: '2.5rem' }}>Política de Privacidad</h2>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Información Recopilada</h4>
            <p style={{ marginBottom: '24px' }}>FL Solutions Services SRL recopila información personal cuando usted la proporciona voluntariamente al solicitar nuestros servicios, realizar una compra o llevar a cabo una transacción a través de nuestro sitio web, en persona o por teléfono. La información recopilada puede incluir, pero no se limita a, su nombre, dirección física, dirección postal, dirección de correo electrónico, número de teléfono y datos de su tarjeta de crédito o débito.</p>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Uso de la Información</h4>
            <p style={{ marginBottom: '24px' }}>La información personal que recopilamos se utiliza exclusivamente para brindarle los servicios solicitados y procesar los pagos relacionados con su compra. No compartimos su información con terceros, salvo cuando sea necesario para proporcionar el servicio solicitado o completar la transacción de pago, como por ejemplo con instaladores o entidades bancarias, según corresponda. No utilizamos su información personal para fines de marketing a menos que hayamos recibido su consentimiento expreso.</p>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Protección de la Información</h4>
            <p style={{ marginBottom: '24px' }}>Implementamos medidas razonables para proteger la seguridad de su información personal. Sin embargo, le recomendamos que también tome precauciones para proteger sus propios datos personales.</p>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Retención de la Información</h4>
            <p style={{ marginBottom: '24px' }}>Conservaremos su información personal únicamente durante el tiempo necesario para completar el servicio solicitado, procesar su pago y cumplir con nuestras obligaciones legales, incluyendo cualquier proceso de garantía. Posteriormente, su información será eliminada de acuerdo con las leyes aplicables.</p>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Cambios en la Política de Privacidad</h4>
            <p style={{ marginBottom: '24px' }}>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página con una nueva fecha de actualización. Le recomendamos que revise periódicamente esta política.</p>
            <h4 style={{ fontWeight: 'bold', marginTop: '32px', fontSize: '1.7rem' }}>Contacto</h4>
            <p>
                Si tiene preguntas o inquietudes sobre nuestra política de privacidad, por favor, contáctenos en:<br />
                Correo electrónico: <a href="mailto:pc@flsolutionsservices.com" style={{ color: '#2daae1' }}>pc@flsolutionsservices.com</a><br />
                Teléfono: <a href="tel:+18494011905" style={{ color: '#2daae1' }}>+1 (849) 401-1905</a>
            </p>
        </div>
      </ModalOverlay>
    </footer>
  );
};

export default Footer;
