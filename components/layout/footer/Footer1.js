import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="footer">
        <div className="action-box">
          <div className="tf-container">
            <div className="row">
              <div className="col-md-12">
                <div className="action-box-inner">
                  <h2 className="title">ÚNETE A NUESTRA COMUNIDAD</h2>
                  <p className="content">No te pierdas ninguna novedad</p>
                  <div className="group-btn">
                    <a
                      href="https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%20y%20necesito%20informaci%C3%B3n."
                      className="tf-button discord"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp" />
                      <span>WHATSAPP</span>
                    </a>
                    <Link href="/vehiculos" className="tf-button">
                      VEHÍCULOS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-inner">
          <div className="tf-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="widget widget-infor">
                  <div className="logo">
                    <img
                      id="logo_footer"
                      src="/assets/images/logo/logo-footer.png"
                      alt="Aliados Cero Kilómetros"
                    />
                  </div>
                  <p className="content">
                    Tu mejor aliado para acceder a movilidad de calidad. Más de 10 años de experiencia facilitando la compra de vehículos nuevos con transparencia y confianza.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="widget widget-menu">
                  <div className="menu menu-1">
                    <h6 className="widget-title">PÁGINAS</h6>
                    <ul>
                      <li><Link href="/">Inicio</Link></li>
                      <li><Link href="/servicios">Servicios</Link></li>
                      <li><Link href="/vehiculos">Vehículos</Link></li>
                      <li><Link href="/roadmap-3">Paso a paso</Link></li>
                    </ul>
                  </div>

                  <div className="menu menu-2">
                    <h6 className="widget-title">EMPRESA</h6>
                    <ul>
                      <li><Link href="/about1">Quiénes somos</Link></li>
                      <li><Link href="/contact">Contacto</Link></li>
                      <li><Link href="/trabaja">Trabaje con nosotros</Link></li>
                      <li>
                        <a
                          href="/assets/docs/Politica_Tratamiento_Datos_AliadosCeroKilometros.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Política de tratamiento de datos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="widget widget-menu">
                  <div className="menu">
                    <h6 className="widget-title">CONTACTO</h6>
                    <ul>
                      <li>
                        <a href="mailto:comercial@aliadoscerokilometros.com">
                          comercial@aliadoscerokilometros.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%20y%20necesito%20informaci%C3%B3n."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +57 3246492266
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-inner">
          <div className="tf-container">
            <div className="row">
              <div className="col-md-12">
                <div className="bottom">
                  <p className="copy-right">
                    ALIADOS CERO KILÓMETROS {new Date().getFullYear()} - Todos los derechos reservados
                  </p>
                  <ul className="social-item">
                    <li>
                      <a
                        href="https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%20y%20necesito%20informaci%C3%B3n."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61578809210778" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/aliados_cero_kilometros/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:comercial@aliadoscerokilometros.com">
                        <i className="fas fa-envelope" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
