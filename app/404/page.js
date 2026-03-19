'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout" // opcional: elimina si no quieres header/footer

export default function Error404() {
  const wa = "https://wa.me/573246492266?text=" + encodeURIComponent("Hola, necesito ayuda. Estoy en la página 404 y quiero asesoría sobre los carros.")

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ERROR 404">
      <main className="tf-section error-page section-bg-1" style={{padding: '80px 0'}}>
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="error-card wow fadeInUp" role="main" aria-labelledby="error-title" style={{textAlign:'center', padding:'48px', borderRadius:12}}>
                {/* ilustración / logo */}
                <div className="error-image" style={{marginBottom:20}}>
                  <svg width={160} height={185} viewBox="0 0 147 171" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M91.9805 96.0882V85.1367H113.883V96.0882C113.883 102.659 109.777 107.04 102.932 107.04C94.7183 107.04 91.9805 101.564 91.9805 96.0882Z" stroke="currentColor" strokeWidth={5} strokeLinejoin="round" />
                    <path d="M102.932 93.3503V85.1367" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M111.146 3V34.4854H144.001" stroke="currentColor" strokeWidth={5} strokeLinejoin="round" />
                    <path d="M33.1172 85.1367H115.253" stroke="currentColor" strokeWidth={5} strokeLinejoin="round" />
                    <path d="M3 3V153L11.2136 168L31.7476 146.182L53.6505 168L75.5534 146.182L94.7184 168L113.883 146.182L133.049 168L144 153V31.6364L116.621 3H3Z" stroke="currentColor" strokeWidth={5} strokeLinejoin="round" />
                    <path d="M38.5918 41.3301L59.1258 60.4951M59.1258 41.3301L38.5918 61.8641" stroke="currentColor" strokeWidth={5} strokeLinejoin="round" />
                    <path d="M87.873 41.3301L108.407 60.4951M108.407 41.3301L87.873 61.8641" stroke="currentColor" strokeWidth={5} strokeLinejoin="round" />
                  </svg>
                </div>

                <h1 id="error-title" className="title" style={{fontSize:36, marginBottom:8}}>404 — Página no encontrada</h1>
                <p className="sub-heading" style={{marginBottom:24, color:'var(--text-muted, #98a0aa)'}}>
                  Lo sentimos, la página que buscas no existe o fue movida. Pero podemos ayudarte a encontrar lo que necesitas.
                </p>

                <div className="error-actions" style={{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
                  <Link href="/" className="tf-button">
                    <i className="fas fa-home" style={{marginRight:8}} /> Volver al inicio
                  </Link>

                  <Link href="/vehiculos" className="tf-button style-2">
                    <i className="fas fa-car" style={{marginRight:8}} /> Ver vehículos
                  </Link>

                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-button discord"
                    aria-label="Contactar por WhatsApp"
                  >
                    <i className="fab fa-whatsapp" style={{marginRight:8}} /> Asesoría por WhatsApp
                  </a>
                </div>

                <div className="error-hint" style={{marginTop:22, color:'var(--text-muted, #98a0aa)'}}>
                  Si necesitas, también puedes escribirnos a <a href="mailto:comercial@aliadoscerokilometros.com">comercial@aliadoscerokilometros.com</a>
                </div>

                {/* Enlaces rápidos estilo lista (útil para SEO/UX) */}
                <nav aria-label="Enlaces rápidos" style={{marginTop:22}}>
                  <ul style={{display:'flex', gap:16, justifyContent:'center', listStyle:'none', padding:0, margin:0}}>
                    <li><Link href="/servicios">Servicios</Link></li>
                    <li><Link href="/about1">Quiénes somos</Link></li>
                    <li><Link href="/trabaja">Trabaje con nosotros</Link></li>
                    <li><Link href="/contact">Contacto</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Pequeño ajuste local de estilos sin sobrescribir tu theme */}
        <style jsx>{`
          .error-card {
            background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
            border: 1px solid rgba(255,255,255,0.04);
            box-shadow: 0 8px 30px rgba(2,6,23,0.35);
            color: var(--text-color, #ffffff);
          }

          /* botones: respetan clases del tema (tf-button), sólo ajustes mínimos para iconos */
          .tf-button i { vertical-align: middle; }

          @media (max-width: 767px) {
            .error-card { padding: 28px; }
            .title { font-size: 28px !important; }
          }
        `}</style>
      </main>
    </Layout>
  )
}
