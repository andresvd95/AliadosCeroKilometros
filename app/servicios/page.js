'use client'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

const waUrl = (servicio) =>
  `https://wa.me/573246492266?text=${encodeURIComponent(
    `Hola, estoy interesado en ${servicio}`
  )}`

export default function ServiciosPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SERVICIOS">
      <section className="tf-section section-work section-work--pad">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-heading mb60 wow fadeInUp">
                <h2 className="heading">
                  CONOCE NUESTROS <span>SERVICIOS</span>
                </h2>
              </div>
            </div>

            {/* ====== FILA 1 - 3 CUADROS ====== */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="tf-work wow fadeInUp" data-wow-delay="0.2s">
                <div className="image">
                  <img
                    className="work-image"
                    id="work-1"
                    src="/assets/images/svg/work-1.svg"
                    alt="Venta de vehículos 0 km"
                  />
                </div>
                <h6 className="title">
                  <Link href="#">Venta de vehículos 0 km (placa blanca)</Link>
                </h6>
                <p className="content">
                  Acceso a modelos nuevos listos para servicio público, con garantías y respaldo de concesionarios aliados.
                </p>
                <div className="cta">
                  <a
                    href={waUrl('Venta de vehículos 0 km (placa blanca)')}
                    target="_blank"
                    rel="noopener"
                    className="tf-button"
                  >
                    <i className="fab fa-whatsapp" />
                    <span>CONTACTAR UN ASESOR</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="tf-work wow fadeInUp" data-wow-delay="0.3s">
                <div className="image">
                  <img
                    className="work-image"
                    id="work-2"
                    src="/assets/images/svg/work-2.svg"
                    alt="Financiación"
                  />
                </div>
                <h6 className="title">
                  <Link href="#">Financiación hasta del 100% del vehículo</Link>
                </h6>
                <p className="content">
                  Trabajamos con entidades aliadas para buscar la cuota y plazo que se ajustan a tu flujo de caja.
                </p>
                <div className="cta">
                  <a
                    href={waUrl('Financiación hasta del 100% del vehículo')}
                    target="_blank"
                    rel="noopener"
                    className="tf-button"
                  >
                    <i className="fab fa-whatsapp" />
                    <span>CONTACTAR UN ASESOR</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="tf-work wow fadeInUp" data-wow-delay="0.4s">
                <div className="image">
                  <img
                    className="work-image"
                    id="work-3"
                    src="/assets/images/svg/work-3.svg"
                    alt="Labora con las mejores empresas"
                  />
                </div>
                <h6 className="title">
                  <Link href="#">Labora con las mejores empresas</Link>
                </h6>
                <p className="content">
                  Te conectamos con empresas transportadoras reconocidas para que empieces a trabajar cuanto antes.
                </p>
                <div className="cta">
                  <a
                    href={waUrl('Labora con las mejores empresas')}
                    target="_blank"
                    rel="noopener"
                    className="tf-button"
                  >
                    <i className="fab fa-whatsapp" />
                    <span>CONTACTAR UN ASESOR</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ====== FILA 2 - 2 CUADROS ====== */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tf-work wow fadeInUp" data-wow-delay="0.5s">
                <div className="image">
                  <img
                    className="work-image"
                    id="work-4"
                    src="/assets/images/svg/work-4.svg"
                    alt="Envíos a nivel nacional"
                  />
                </div>
                <h6 className="title">
                  <Link href="/seguros">Pólizas y seguros</Link>
                </h6>
                <p className="content">
                  Disponemos de las pólizas y seguros para que estés siempre tranquilo y protegido.
                </p>
                <div className="cta">
                  <Link href="/seguros" className="tf-button">
                    <i className="fas fa-shield-alt" />
                    <span>COTIZAR SEGURO</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tf-work wow fadeInUp" data-wow-delay="0.6s">
                <div className="image">
                  <img
                    className="work-image"
                    id="work-5"
                    src="/assets/images/svg/work-5.svg"
                    alt="Alianzas estratégicas"
                  />
                </div>
                <h6 className="title">
                  <Link href="#">Alianzas estratégicas</Link>
                </h6>
                <p className="content">
                  Red de financieras, concesionarios y empresas transportadoras para conseguir mejores condiciones.
                </p>
                <div className="cta">
                  <a
                    href={waUrl('Alianzas estratégicas')}
                    target="_blank"
                    rel="noopener"
                    className="tf-button"
                  >
                    <i className="fab fa-whatsapp" />
                    <span>CONTACTAR UN ASESOR</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ajustes: centrar imágenes + espacio inferior para despegar el footer
          y estilos mínimos del botón sin alterar la paleta original */}
      <style jsx global>{`
        .tf-work .image { display:flex; align-items:center; justify-content:center; }
        .tf-work .image img.work-image { max-width:100%; height:auto; display:block; }

        /* separa el contenido del footer respetando el estilo de la plantilla */
        .section-work--pad { padding-bottom: 96px; }

        /* botón whatsapp centrado */
        .tf-work .cta { margin-top: 14px; display:flex; justify-content:center; }
        .tf-work .cta .tf-button i { margin-right: .5rem; line-height: 1; }
      `}</style>
    </Layout>
  )
}
