'use client'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"

export default function about1() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="QUIÉNES SOMOS">
        <div className="about-page-wrap">
          <section className="tf-section tf-about">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="icon">
                    <svg width={208} height={208} viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_f_2337_5328)">
                        <path d="M88.0594 196L88.0594 142.485L50.2119 180.333L27.6674 157.788L65.5149 119.941L12 119.941L12 88.0594L65.5149 88.0594L27.6674 50.2119L50.2119 27.6673L88.0594 65.5148L88.0594 12L119.941 12L119.941 65.5149L157.788 27.6673L180.333 50.2119L142.485 88.0594L196 88.0594L196 119.941L142.485 119.941L180.333 157.788L157.788 180.333L119.941 142.485L119.941 196L88.0594 196Z" fill="url(#paint0_linear_2337_5328)" />
                      </g>
                      <defs>
                        <filter id="filter0_f_2337_5328" x={0} y={0} width={208} height={208} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity={0} result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation={6} result="effect1_foregroundBlur_2337_5328" />
                        </filter>
                        <linearGradient id="paint0_linear_2337_5328" x1={196} y1={104} x2={12} y2={104} gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="var(--primary-color35)" />
                          <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="icon-2">
                    <svg width={302} height={302} viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_f_2337_5282)">
                        <path d="M234.678 38.4808L198.329 110.138L274.714 85.1672L289.589 130.668L213.203 155.638L284.86 191.988L263.205 234.677L191.548 198.328L216.518 274.713L171.018 289.588L146.047 213.202L109.698 284.859L67.0084 263.204L103.358 191.547L26.9721 216.517L12.0979 171.017L88.4837 146.046L16.8268 109.697L38.4818 67.0074L110.139 103.357L85.1682 26.9711L130.669 12.0969L155.639 88.4827L191.989 16.8258L234.678 38.4808Z" fill="url(#paint0_linear_2337_5282)" />
                      </g>
                      <defs>
                        <filter id="filter0_f_2337_5282" x="0.0976562" y="0.0966797" width="301.49" height="301.491" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity={0} result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation={6} result="effect1_foregroundBlur_2337_5282" />
                        </filter>
                        <linearGradient id="paint0_linear_2337_5282" x1="27.6543" y1="88.352" x2="274.032" y2="213.333" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="var(--primary-color35)" />
                          <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="tf-heading wow fadeInUp">
                    <h2 className="heading">QUIÉNES SOMOS</h2>
                    <p className="sub-heading">
                      En Aliados Cero Kilómetros somos un equipo especializado en venta de vehículos de servicio público, vinculación con empresas transportadoras y soluciones de movilidad empresarial.
                      Nuestro propósito es conectar personas y compañías con oportunidades reales de transporte, brindando asesoría integral desde la elección del vehículo hasta su afiliación y operación.
                    </p>
                  </div>

                  {/* Métricas fila 1 */}
                  <div className="counter-wrap wow fadeInUp" data-wow-delay="0.2s">
                    <div className="tf-counter">
                      <h6>Transportadoras aliadas</h6>
                      <div className="content">
                        <CounterUp count={12} />+
                      </div>
                    </div>
                    <div className="tf-counter" data-wow-delay="0.3s">
                      <h6>Años de experiencia</h6>
                      <div className="content">
                        <CounterUp count={11} />+
                      </div>
                    </div>
                  </div>

                  {/* Métricas fila 2 */}
                  <div className="counter-wrap wow fadeInUp" data-wow-delay="0.2s">
                    <div className="tf-counter">
                      <h6>Soluciones a empresas</h6>
                      <div className="content">
                        <CounterUp count={410} />+
                      </div>
                    </div>
                    <div className="tf-counter" data-wow-delay="0.3s">
                      <h6>Vehículos entregados</h6>
                      <div className="content">
                        <CounterUp count={1200} />+
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps en una fila separada */}
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="tf-step wow fadeInUp" data-wow-delay="0.2s">
                    <div className="step-title">
                      <div className="sub-number">01</div>
                      <h3>COMPROMISO HUMANO</h3>
                    </div>
                    <p>Creemos en las relaciones de confianza. Acompañamos a cada persona con asesoría cercana y transparente para que su vehículo o proyecto de transporte se convierta en una oportunidad de crecimiento.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="tf-step wow fadeInUp" data-wow-delay="0.3s">
                    <div className="step-title">
                      <div className="sub-number">02</div>
                      <h3>ALIANZA EMPRESARIAL</h3>
                    </div>
                    <p>Fortalecemos la red de empresas transportadoras, ofreciendo procesos de vinculación ágiles y confiables que potencian su operación y generan valor compartido.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="tf-step wow fadeInUp" data-wow-delay="0.4s">
                    <div className="step-title">
                      <div className="sub-number">03</div>
                      <h3>INNOVACIÓN EN MOVILIDAD</h3>
                    </div>
                    <p>Diseñamos soluciones creativas y eficientes para compañías que requieren transporte, optimizando su logística y garantizando continuidad en sus operaciones.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="tf-step wow fadeInUp" data-wow-delay="0.5s">
                    <div className="step-title">
                      <div className="sub-number">04</div>
                      <h3>RESPONSABILIDAD Y SOSTENIBILIDAD</h3>
                    </div>
                    <p>Actuamos con integridad y respeto por el entorno, asegurando que cada servicio aporte al desarrollo seguro, legal y responsable del sector transporte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Separación del footer (no pegado) */}
        <style jsx global>{`
          /* Añade respiro al final de la sección About */
          .tf-section.tf-about {
            padding-bottom: 120px !important;
          }
          @media (max-width: 991px) {
            .tf-section.tf-about { padding-bottom: 96px !important; }
          }
          @media (max-width: 575px) {
            .tf-section.tf-about { padding-bottom: 72px !important; }
          }

          /* Si el footer es sticky, esto evita solapes en páginas con poco contenido */
          .about-page-wrap {
            min-height: 60vh;
          }
        `}</style>
      </Layout>
    </>
  )
}
