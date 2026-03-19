'use client'
import Layout from '@/components/layout/Layout'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 55,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  breakpoints: {
    600: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
    991: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
    1280:{ slidesPerView: 4, spaceBetween: 30, centeredSlides: false },
    1500:{ slidesPerView: 5, spaceBetween: 55, centeredSlides: false },
  },
}

export default function Roadmap3() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="PASO A PASO">
      <section className="tf-section section-roadmap3 section-bg-1">
        <div className="container-fluid">
          <div className="row">
            <div className="tf-heading mb60 wow fadeInUp">
              <h2 className="heading">PASO A PASO</h2>
            </div>

            <div className="col-md-12 wow fadeInUp">
              <div className="tf-roadmap">
                <div className="swiper-container swiper sl-roadmap">
                  <Swiper {...swiperOptions} className="swiper-wrapper">

                    {/* PASO 1 */}
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="shape-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                            <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                            <circle cx={30} cy={30} r={30} fill="#59d2fe" fillOpacity="0.2" />
                            <circle cx={30} cy={30} r={15} fill="#59d2fe" />
                          </svg>
                        </div>
                        <div className="content">
                          <h4 className="title">1 - ASESORÍA PERSONALIZADA</h4>
                          <p className="sub-heading">
                            Nuestros expertos te guían para elegir el vehículo y el plan de financiamiento que mejor se adapte a ti o te acompañan en tu compra de contado.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* PASO 2 */}
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="shape-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                            <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                            <circle cx={30} cy={30} r={30} fill="#59d2fe" fillOpacity="0.2" />
                            <circle cx={30} cy={30} r={15} fill="#59d2fe" />
                          </svg>
                        </div>
                        <div className="content">
                          <h4 className="title">2 - ESTUDIO DE CRÉDITO</h4>
                          <p className="sub-heading">
                            Analizamos tu perfil financiero y buscamos la opción de crédito más conveniente para ti.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* PASO 3 */}
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="shape-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                            <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                            <circle cx={30} cy={30} r={30} fill="#59d2fe" fillOpacity="0.2" />
                            <circle cx={30} cy={30} r={15} fill="#59d2fe" />
                          </svg>
                        </div>
                        <div className="content">
                          <h4 className="title">3 - FACTURACIÓN Y FIRMAS</h4>
                          <p className="sub-heading">
                            Preparamos toda la documentación y formalizamos la compra de manera clara y segura.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* PASO 4 */}
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="shape-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                            <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                            <circle cx={30} cy={30} r={30} fill="#767676" fillOpacity="0.2" />
                            <circle cx={30} cy={30} r={15} fill="#888B8E" />
                          </svg>
                        </div>
                        <div className="content">
                          <h4 className="title">4 - VINCULACIÓN Y REGISTRO</h4>
                          <p className="sub-heading">
                            Nos encargamos de registrar tu vehículo ante el Ministerio de Transporte y de vincularte a una empresa transportadora aliada para que puedas comenzar a trabajar.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* PASO 5 */}
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="shape-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                            <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                            <circle cx={30} cy={30} r={30} fill="#767676" fillOpacity="0.2" />
                            <circle cx={30} cy={30} r={15} fill="#888B8E" />
                          </svg>
                        </div>
                        <div className="content">
                          <h4 className="title">5 - ENTREGA Y GENERACIÓN DE INGRESOS</h4>
                          <p className="sub-heading">
                            Recibes tu vehículo listo para trabajar y generar ingresos desde el primer día.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* Botones de navegación */}
                  <div className="pagination-roadmap">
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Separación extra por si el footer quedaba “pegado” */}
      <style jsx global>{`
        .section-roadmap3 { padding-bottom: 96px; }
      `}</style>
    </Layout>
  )
}
