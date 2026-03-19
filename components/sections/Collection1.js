'use client'

import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// ===== Swiper fila 1 =====
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  breakpoints: {
    0:   { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
    1200:{ slidesPerView: 4 },
  },
  observer: true,
  observeParents: true,
  shortSwipes: false,
  longSwipes: false,
  allowTouchMove: true,
  reverseDirection: true,
  autoplay: { delay: 0.3 },
  freeMode: true,
  speed: 4000,
  disableOnInteraction: true,
}

// ===== Swiper fila 2 =====
const swiperOptions2 = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  breakpoints: {
    0:   { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
    1200:{ slidesPerView: 5 },
  },
  observer: true,
  observeParents: true,
  shortSwipes: false,
  longSwipes: false,
  allowTouchMove: true,
  autoplay: { delay: 0.3, reverseDirection: true },
  freeMode: true,
  speed: 5000,
}

export default function Collection() {
  return (
    <>
      <section className="tf-collection">
        {/* ====== FILA 1: Renault ====== */}
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-heading mb40">
                <h2 className="heading">Renault</h2>
              </div>

              <div className="swiper-container collection-1 visible">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  {/* LOGAN */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/loganIntens/loganIntense1.jpeg" alt="Renault LOGAN" />
                        </div>

                        <h6 className="name">LOGAN</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* DUSTER */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/dusterIntensCVT/dusterIntens1.jpeg" alt="Renault DUSTER" />
                        </div>

                        <h6 className="name">DUSTER</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* KANGOO */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/Kangoo/kangoo1.png" alt="Renault KANGOO" />
                        </div>

                        <h6 className="name">KANGOO</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* OROCH CARGO */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/orochCargo/orochCargo1.jpeg" alt="Renault OROCH CARGO" />
                        </div>

                        <h6 className="name">OROCH CARGO</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* ====== FILA 2: Kia / Isuzu / RAM ====== */}
        <div className="tf-container-2">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-heading mb40">
                <h2 className="heading">Kia / Isuzu / RAM</h2>
              </div>

              <div className="swiper-container collection-2 visible">
                <Swiper {...swiperOptions2} className="swiper-wrapper">
                  {/* STONIC HÍBRIDO */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/stonic/stonic.png" alt="Kia STONIC HÍBRIDO" />
                        </div>

                        <h6 className="name">STONIC HÍBRIDO</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* SONET */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/sonet/sonet.png" alt="Kia SONET" />
                        </div>

                        <h6 className="name">SONET</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* NIRO */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/niro/niro.jpg" alt="Kia NIRO" />
                        </div>

                        <h6 className="name">NIRO</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* ADVENTURE + */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/adventure+/adventure+2.png" alt="Isuzu ADVENTURE +" />
                        </div>

                        <h6 className="name">ADVENTURE +</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* RAM 700 */}
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-product card-min">
                        <div className="image img-fit">
                          <img src="/assets/images/vehiculos/ram700/ram700.jpeg" alt="RAM 700" />
                        </div>

                        <h6 className="name">RAM 700</h6>

                        <Link href="/vehiculos" className="tf-button btn-see" prefetch>
                          <i className="fa-icon" aria-hidden="true"></i>
                          <span>VER VEHÍCULO</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .card-min { display:flex; flex-direction:column; align-items:center; }
        .card-min .img-fit{
          width:100%; position:relative; overflow:hidden;
          aspect-ratio:21/9; display:flex; align-items:center; justify-content:center;
        }
        @media (max-width:480px){ .card-min .img-fit{ aspect-ratio:16/9; } }
        .card-min .img-fit img{ max-width:100%; max-height:100%; object-fit:contain; display:block; }
        .card-min .name{ text-align:center; margin:14px 0 12px; font-weight:800; }
        .btn-see{ display:inline-flex; align-items:center; gap:10px; }
        .btn-see i{ line-height:1; font-size:16px; }
      `}</style>
    </>
  )
}
