import Link from "next/link"

export default function Work1() {
    return (
        <>
            <section className="tf-section section-work">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading">CONOCE NUESTROS<span> SERVICIOS </span></h2>
                            </div>
                        </div>

                        {/* ====== FILA 1 - 3 CUADROS ====== */}
                        <div className="col-xl-4 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.2s">
                                <div className="image">
                                    <img className="work-image" id="work-1" src="/assets/images/svg/work-1.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="/servicios">Venta de vehículos 0 km (placa blanca)</Link></h6>
                                <p className="content">Acceso a modelos nuevos listos para servicio público, con garantías y respaldo de concesionarios aliados.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.3s">
                                <div className="image">
                                    <img className="work-image" id="work-2" src="/assets/images/svg/work-2.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="/servicios">Financiación hasta del 100% del vehículo</Link></h6>
                                <p className="content">Trabajamos con entidades aliadas para buscar la cuota y plazo que se ajustan a tu flujo de caja.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.4s">
                                <div className="image">
                                    <img className="work-image" id="work-3" src="/assets/images/svg/work-3.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="/servicios">Labora con las mejores empresas</Link></h6>
                                <p className="content">Te conectamos con empresas transportadoras reconocidas para que empieces a trabajar cuanto antes.</p>
                            </div>
                        </div>

                        {/* ====== FILA 2 - 2 CUADROS ====== */}
                        <div className="col-xl-6 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.5s">
                                <div className="image">
                                    <img className="work-image" id="work-4" src="/assets/images/svg/work-4.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="/servicios">Polizas y seguros</Link></h6>
                                <p className="content">Disponemos de las polizas y seguros para que este siempre tranquilo y protegido.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.6s">
                                <div className="image">
                                    <img className="work-image" id="work-5" src="/assets/images/svg/work-5.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="/servicios">Alianzas estratégicas</Link></h6>
                                <p className="content">Red de financieras, concesionarios y empresas transportadoras para conseguir mejores condiciones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}