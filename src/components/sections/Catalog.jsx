import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Catalog = () => {
  return (
    <section id="catalogo" className="overflow-hidden pt-10">
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col-lg-8 mb-2 mb-lg-0">
            <h2 className="fw-bold">Equipos Disponibles</h2>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a
              href="https://wa.link/or507r"
              className="underline action"
              style={{ color: '#2daae1' }}
            >
              Solicita lista completa de precios<i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="carousel-visible" data-aos="fade-left">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="product">
                <figure className="product-image">
                  <a href="#!">
                    <img
                      src="/assets/images/products/TGM-AIRE.png"
                      alt="Aire Acondicionado TGM Inverter 12000 BTU"
                    />
                    <img
                      src="/assets/images/products/TGM-CONDEX.png"
                      alt="Condensador TGM Inverter"
                    />
                  </a>
                </figure>
                <a className="product-title" href="#!">
                  12,000 BTU TGM Inverter SEER 19
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product">
                <figure className="product-image">
                  <a href="#!">
                    <img
                      src="/assets/images/products/MILEXUS-AIRE.png"
                      alt="Aire Acondicionado Milexus Inverter 18000 BTU"
                    />
                    <img
                      src="/assets/images/products/MILEXUS-CONDEX.png"
                      alt="Condensador Milexus Inverter"
                    />
                  </a>
                </figure>
                <a className="product-title" href="#!">
                  18,000 BTU Milexus Inverter
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product">
                <figure className="product-image">
                  <a href="#!">
                    <img
                      src="/assets/images/products/NISATO AIRE.webp"
                      alt="Aire Acondicionado Nisato 12000 BTU"
                    />
                    <img
                      src="/assets/images/products/NISATO CONDENSADOR.png"
                      alt="Condensador Nisato"
                    />
                  </a>
                </figure>
                <a className="product-title" href="#!">
                  12,000 BTU NISATO
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product">
                <figure className="product-image">
                  <a href="#!">
                    <img
                      src="/assets/images/products/TGM-AIRE.png"
                      alt="Aire Acondicionado TGM Inverter 24000 BTU"
                    />
                    <img
                      src="/assets/images/products/TGM-CONDEX.png"
                      alt="Condensador TGM Inverter"
                    />
                  </a>
                </figure>
                <a className="product-title" href="#!">
                  24,000 BTU TGM Inverter SEER 20{' '}
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product">
                <figure className="product-image">
                  <a href="#!">
                    <img
                      src="/assets/images/products/TGM-AIRE.png"
                      alt="Aire Acondicionado TGM Inverter 36000 BTU"
                    />
                    <img
                      src="/assets/images/products/TGM-CONDEX.png"
                      alt="Condensador TGM Inverter"
                    />
                  </a>
                </figure>
                <a className="product-title" href="#!">
                  36,000 BTU TGM Inverter
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
