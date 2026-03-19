'use client'
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'
import { Swiper, SwiperSlide } from "swiper/react"
import CounterUp from "../elements/CounterUp"

const swiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
}

export default function Slider1() {
    return (
        <>

            <section className="tf-slider home3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container slider-home ">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-slider-item style-3">
                                                <div className="content-inner">
                                                    <h1 className="heading mb0">SOMOS 
                                                        <span className="animationtext clip">
                                                            <TypeAnimation
                                                                sequence={[
                                                                    ' ALIADOS',
                                                                    1000,
                                                                    ' CERO',
                                                                    1000,
                                                                    ' KMS',
                                                                    1000,
                                                                ]}
                                                                wrapper="span"
                                                                speed={50}
                                                                style={{ display: 'inline-block' }}
                                                                repeat={Infinity}
                                                                className="cd-words-wrapper">
                                                            </TypeAnimation>
                                                        </span>
                                                    </h1>
                                                    <h1 className="heading">MÁS QUE TU SOCIO</h1>
                                                    <p className="sub-heading">TU MEJOR OPCIÓN EN TRANSPORTE CENTRALIZADO</p>
                                                    <div className="btn-slider">
                                                        <Link href="https://api.whatsapp.com/send/?phone=573246492266&text=Hola%2C+estoy+interesado+en+Venta+de+veh%C3%ADculos+0+km+%28placa+blanca%29&type=phone_number&app_absent=0" className="tf-button" data-toggle="modal" data-target="#popup_bid">
                                                            <i className="fab fa-whatsapp" style={{ marginRight: "8px" }}></i>
                                                            ASESORÍA
                                                        </Link>
                                                        <Link href="/vehiculos" className="tf-button style-2">
                                                            <i className="fas fa-car" style={{ marginRight: "8px" }}></i>
                                                            VEHÍCULOS
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}