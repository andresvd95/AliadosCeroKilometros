'use client'
import { useMemo, useState } from 'react'
import Layout from '@/components/layout/Layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const norm = (s) => (s || '').toString().toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export default function Vehiculos() {
  /* ===================== DATA  CollectionPage ===================== */
  const data = useMemo(() => ([
    {
      brand: 'Renault',
      items: [
        {
          name: 'LOGAN',
          category: 'Automovil',
          fuel: 'Gasolina',
          price: 'Desde $63.908.000',
          images: [
            '/assets/images/vehiculos/loganIntens/loganIntense1.jpeg',
            '/assets/images/vehiculos/loganIntens/loganIntense2.jpeg',
            '/assets/images/vehiculos/loganIntens/loganIntense3.jpeg',
            '/assets/images/vehiculos/loganIntens/loganIntense4.jpeg',
            '/assets/images/vehiculos/loganIntens/loganIntense5.jpeg',
            '/assets/images/vehiculos/loganIntens/loganIntense6.jpeg',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '1.6 / 1.600cc'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Automática'],
            ['TIPO VH', 'Automóvil'],
            ['COMBUSTIBLE', 'Gasolina'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20un%20Logan',
          pdf: '/assets/images/vehiculos/loganIntens/LOGAN-ebrochure.pdf',
          pdfName: 'Ficha-Tecnica-Renault-Logan.pdf',
        },
        {
          name: 'DUSTER',
          category: 'Camioneta',
          fuel: 'Gasolina',
          price: 'Desde $83.020.764',
          images: [
            '/assets/images/vehiculos/dusterIntensCVT/dusterIntens1.jpeg',
            '/assets/images/vehiculos/dusterIntensCVT/dusterIntens2.jpeg',
            '/assets/images/vehiculos/dusterIntensCVT/dusterIntens3.jpeg',
            '/assets/images/vehiculos/dusterIntensCVT/dusterIntens4.jpeg',
            '/assets/images/vehiculos/dusterIntensCVT/dusterIntens5.jpeg',
            '/assets/images/vehiculos/dusterIntensCVT/dusterIntens6.jpeg',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '1.300cc Turbo'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Automática'],
            ['TIPO VH', 'Camioneta'],
            ['COMBUSTIBLE', 'Gasolina'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20Duster',
          pdf: '/assets/images/vehiculos/dusterIntensCVT/DUSTER-ebrochure%20(2).pdf',
          pdfName: 'Ficha-Tecnica-Renault-Duster.pdf',
        },
        {
          name: 'KANGOO',
          category: 'Carga',
          fuel: 'Gasolina',
          price: 'Desde $81.190.000',
          images: [
            '/assets/images/vehiculos/Kangoo/kangoo1.png',
            '/assets/images/vehiculos/Kangoo/kangoo2.png',
            '/assets/images/vehiculos/Kangoo/kangoo3.png',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '1.6 / 1.600cc'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Mecánica'],
            ['TIPO VH', 'Carga'],
            ['COMBUSTIBLE', 'Gasolina'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20Kangoo',
          pdf: '/assets/docs/renault-logan-ficha-tecnica.pdf',
          pdfName: 'Ficha-Tecnica-Renault-Kangoo.pdf',
        },
        {
          name: 'OROCH',
          category: 'Camioneta',
          fuel: 'Gasolina',
          price: 'Desde $103.500.000',
          images: [
            '/assets/images/vehiculos/orochIntensCVT/orochIntensCVT1.jpeg',
            '/assets/images/vehiculos/orochIntensCVT/orochIntensCVT2.jpeg',
            '/assets/images/vehiculos/orochIntensCVT/orochIntensCVT3.jpeg',
            '/assets/images/vehiculos/orochIntensCVT/orochIntensCVT4.jpeg',
            '/assets/images/vehiculos/orochIntensCVT/orochIntensCVT5.jpeg',
            '/assets/images/vehiculos/orochIntensCVT/orochIntensCVT6.jpeg',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '1.3 / 1.300cc'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Mecánica'],
            ['TIPO VH', 'Carga'],
            ['COMBUSTIBLE', 'Diesel'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20Oroch%20Cargo',
          pdf: '/assets/images/vehiculos/orochCargo/OROCH-ebrochure.pdf',
          pdfName: 'Ficha-Tecnica-Renault-Oroch-Cargo.pdf',
        },
        {
          name: 'TRAFIC',
          category: 'Carga',
          fuel: 'Diesel',
          price: 'Desde $180.890.000',
          images: [
            '/assets/images/vehiculos/trafic/trafic1.png',
            '/assets/images/vehiculos/trafic/trafic2.png',
            '/assets/images/vehiculos/trafic/trafic3.png',
            '/assets/images/vehiculos/trafic/trafic4.png',
            '/assets/images/vehiculos/trafic/trafic5.png',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '2.0 / 2.000cc'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Mecánica'],
            ['TIPO VH', 'Carga'],
            ['COMBUSTIBLE', 'Diesel'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20Trafic',
          pdf: '/assets/images/vehiculos/trafic/TRAFIC-ficha-tecnica.pdf',
          pdfName: 'TRAFIC-ficha-tecnica.pdf',
        },
      ],
    },
    {
      brand: 'Kia',
      items: [
        {
          name: 'STONIC HÍBRIDO',
          category: 'Automovil',
          fuel: 'Hibrido',
          price: 'Desde $90.350.000',
          images: [
            '/assets/images/vehiculos/stonic/stonic.png',
            '/assets/images/vehiculos/stonic/stonic.png',
            '/assets/images/vehiculos/stonic/stonic.png',
            '/assets/images/vehiculos/stonic/stonic.png',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '1.6 / 1.600cc'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Automática'],
            ['TIPO VH', 'Automóvil'],
            ['COMBUSTIBLE', 'Híbrido'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20Stonic%20H%C3%ADbrido',
          pdf: '/assets/images/vehiculos/stonic/Stonic_Ficha_Tecnica%20(1).pdf',
          pdfName: 'Ficha-Tecnica-Kia-Stonic-Hibrido.pdf',
        },
        {
          name: 'SONET',
          category: 'SUV',
          fuel: 'Gasolina',
          price: 'Desde $90.990.000',
          images: [
            '/assets/images/vehiculos/sonet/sonet.png',
            '/assets/images/vehiculos/sonet/sonet2.jpeg',
            '/assets/images/vehiculos/sonet/sonet.png',
            '/assets/images/vehiculos/sonet/sonet2.jpeg',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '1.497'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Mecánica'],
            ['TIPO VH', 'SUV'],
            ['COMBUSTIBLE', 'Gasolina'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20Sonet',
          pdf: '/assets/images/vehiculos/sonet/Sonet_Ficha_Tecnica_V3_121a20c02e%20(1)%20(1).pdf',
          pdfName: 'Ficha-Tecnica-Kia-Sonet.pdf',
        },
        {
          name: 'NIRO',
          category: 'SUV',
          fuel: 'Hibrido',
          price: 'Desde $131.990.000',
          images: [
            '/assets/images/vehiculos/niro/niro.jpg',
            '/assets/images/vehiculos/niro/niro2.jpeg',
            '/assets/images/vehiculos/niro/niro.jpg',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '1.600cc'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Automática'],
            ['TIPO VH', 'SUV'],
            ['COMBUSTIBLE', 'Híbrido'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20Niro',
          pdf: '/assets/images/vehiculos/niro/niro%202025%20(1)%20(1).pdf',
          pdfName: 'Ficha-Tecnica-Kia-Niro.pdf',
        },
      ],
    },
    {
      brand: 'RAM',
      items: [
        {
          name: 'RAM 700',
          category: 'Camioneta',
          fuel: 'Gasolina',
          price: 'Desde $75.990.000',
          images: [
            '/assets/images/vehiculos/ram700/ram700.jpeg',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '1.300cc'],
            ['TRACCIÓN', '4x2'],
            ['TRANSMISIÓN', 'Mecánica'],
            ['TIPO VH', 'Camioneta'],
            ['COMBUSTIBLE', 'Gasolina'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20RAM%20700',
          pdf: '/assets/images/vehiculos/ram700/ram-205-ajuste-ft-ram-700-slt-dig-2025.pdf',
          pdfName: 'Ficha-Tecnica-RAM-700.pdf',
        },
        {
          name: 'RAM RAMPAGE',
          category: 'Camioneta',
          fuel: 'Gasolina',
          price: 'Desde $178.990.000',
          images: [
            '/assets/images/vehiculos/ramRampage/ramRampage.jpeg',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '2.000cc'],
            ['TRACCIÓN', '4x4'],
            ['TRANSMISIÓN', 'Automática'],
            ['TIPO VH', 'Camioneta'],
            ['COMBUSTIBLE', 'Gasolina'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20RAM%20RAMPAGE',
          pdf: '/assets/images/vehiculos/ramRampage/Ficha-Tecnica-RAM-Rampage-2024-Los-Coches.pdf',
          pdfName: 'Ficha-Tecnica-RAM-RAMPAGE.pdf',
        },
      ],
    },
    {
      brand: 'Isuzu',
      items: [
        {
          name: 'ADVENTURE +',
          category: 'Camioneta',
          fuel: 'Diesel',
          price: 'Desde $189.990.000',
          images: [
            '/assets/images/vehiculos/adventure+/adventure+2.png',
            '/assets/images/vehiculos/adventure+/adventure+.jpeg',
            '/assets/images/vehiculos/adventure+/adventure+2.png',
          ],
          specs: [
            ['MODELO', '2026'],
            ['MOTOR', '3.000cc'],
            ['TRACCIÓN', '4x4'],
            ['TRANSMISIÓN', 'Mecánica'],
            ['TIPO VH', 'Camioneta'],
            ['COMBUSTIBLE', 'Diésel'],
          ],
          wa: 'https://wa.me/573246492266?text=Hola%2C%20vengo%20del%20sitio%20web%2C%20quiero%20adquirir%20una%20Adventure%20%2B',
          pdf: '/assets/images/vehiculos/adventure+/ISUZU_2025_ENE_191_FICHA-TECNICA-_FORCE-2-3.pdf',
          pdfName: 'Ficha-Tecnica-Isuzu-Adventure-Plus.pdf',
        },
      ],
    },
    
  ]), [])

  /* Solo búsqueda superior (sin sidebar) */
  const [search, setSearch] = useState('')

  const filteredSections = useMemo(() => {
    const q = norm(search)
    return data.map(section => {
      const items = section.items.filter(it => {
        const name = norm(it.name)
        const brand = norm(section.brand)
        return !q || name.includes(q) || brand.includes(q)
      })
      return { ...section, items }
    }).filter(section => section.items.length > 0)
  }, [data, search])

  /* ===================== LIGHTBOX ===================== */
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 })
  const openLightbox = (images, i = 0) => setLightbox({ open: true, images, index: i })
  const closeLightbox = () => setLightbox({ open: false, images: [], index: 0 })
  const prevImg = () => setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }))
  const nextImg = () => setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }))

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="VEHÍCULOS">
      <section className="tf-collection-inner">
        <div className="tf-container">
          <div className="row">
            {/* ===================== CONTENIDO (sin sidebar) ===================== */}
            <div className="col-12">
              <div className="top-option">
                <h2 className="heading">VEHÍCULOS</h2>
                <div className="widget widget-search">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Buscar por modelo o marca..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <a className="btn-search"><i className="icon-fl-search-filled"></i></a>
                  </form>
                </div>
              </div>

              {/* Secciones por marca, 4 por fila */}
              {filteredSections.map(section => (
                <div key={section.brand}>
                  <h2 className="heading brand-title">{section.brand}</h2>
                  <div className="row brand-grid">
                    {section.items.map((it, idx) => (
                      <div key={`${section.brand}-${it.name}-${idx}`}
                           className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tf-product">
                          <div className="image">
                            <Swiper
                              modules={[Navigation]}
                              navigation
                              loop
                              speed={450}
                              allowTouchMove={false}
                              className="car-swiper"
                            >
                              {it.images.map((src, i) => (
                                <SwiperSlide key={i}>
                                  <img
                                    src={src}
                                    alt={`${it.name} ${i+1}`}
                                    onClick={() => openLightbox(it.images, i)}
                                    style={{ cursor: 'zoom-in' }}
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>

                          <h6 className="name">{it.name}</h6>

                          <button className="info-toggle" type="button" aria-expanded="false"
                            onClick={(e) => {
                              const panel = e.currentTarget.nextElementSibling
                              const open = panel && panel['style']?.display === 'block'
                              if (panel) panel['style'].display = open ? 'none' : 'block'
                              e.currentTarget.setAttribute('aria-expanded', String(!open))
                              const span = e.currentTarget.querySelector('span')
                              if (span) span.textContent = open ? 'Ver más información' : 'Ver menos información'
                            }}>
                            <span>Ver más información</span>
                          </button>

                          <div className="extra-info" aria-hidden="true">
                            <div className="cols">
                              <ul>
                                {it.specs.slice(0,3).map(([k,v]) => (
                                  <li key={k}><strong>{k}:</strong> {v}</li>
                                ))}
                              </ul>
                              <ul>
                                {it.specs.slice(3).map(([k,v]) => (
                                  <li key={k}><strong>{k}:</strong> {v}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="card-actions">
                            <span className="price-pill">{it.price}</span>
                            <div className="btn-row">
                              <a href={it.wa} target="_blank" rel="noopener" className="tf-button">
                                <i className="fab fa-whatsapp"></i><span>DESEO INFORMACIÓN</span>
                              </a>
                              <a href={it.pdf} className="tf-button style-2" download={it.pdfName} type="application/pdf">
                                <i className="fas fa-download"></i><span>FICHA TÉCNICA</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {filteredSections.length === 0 && (
                <p style={{opacity:.8}}>No hay vehículos que coincidan con la búsqueda.</p>
              )}
            </div>
          </div>
        </div>

        {/* ===================== LIGHTBOX ===================== */}
        {lightbox.open && (
          <div className="lb-backdrop" onClick={closeLightbox}>
            <div className="lb-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
              <div className="lb-body">
                <button type="button" className="lightbox-prev" aria-label="Anterior" onClick={prevImg}>←</button>
                <img className="lightbox-img" src={lightbox.images[lightbox.index]} alt="Vista previa" />
                <button type="button" className="lightbox-next" aria-label="Siguiente" onClick={nextImg}>→</button>
                <button type="button" className="lightbox-close" aria-label="Cerrar" onClick={closeLightbox}>Cerrar ✕</button>
                <div className="lightbox-counter"><span>{lightbox.index+1}</span>/<span>{lightbox.images.length}</span></div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ===================== ESTILOS ===================== */}
      <style jsx global>{`
        /* 4 por fila y separación por marca */
        .brand-title { margin: 8px 0 16px; color: #59d2fe; }
        .brand-grid { margin-left: -8px; margin-right: -8px; }
        .brand-grid > [class*="col-"] { padding-left: 8px; padding-right: 8px; }
        @media (min-width: 1200px){
          .brand-grid > .col-xl-3 { width: 25%; }
        }

        /* Card */
        .tf-product { background:#1a1a1a; border:1px solid #333; padding-bottom:12px; }
        .tf-product .name { color:#fff; text-align:center; margin:12px 0 4px; }
        .price-pill{display:inline-block;background:#0f2416;color:#00ff99;padding:10px 16px;border-radius:8px;font-weight:700}
        .card-actions{display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:12px}
        .btn-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}

        /* Mini-galería (card) */
        .tf-product .image { position:relative; overflow:hidden; border-bottom:1px solid #333; background:#fff; width:100%; aspect-ratio:21/9; }
        @media (max-width:480px){ .tf-product .image { aspect-ratio:16/9; } }
        .tf-product .image .swiper, .tf-product .image .swiper-wrapper, .tf-product .image .swiper-slide { width:100%; height:100%; }
        .tf-product .image .swiper-slide { display:flex; align-items:center; justify-content:center; background:transparent; }
        .tf-product .image .swiper-slide img{ max-width:100%; max-height:100%; width:auto; height:auto; object-fit:contain; cursor:zoom-in; }

        /* ======= Flechas sin cuadro (solo icono) ======= */
        .tf-product .image .car-swiper .swiper-button-next,
        .tf-product .image .car-swiper .swiper-button-prev{
          --swiper-navigation-size:26px;
          position:absolute; top:50%; transform:translateY(-50%);
          width:auto !important; height:auto !important;
          padding:0 !important; margin:0 !important;
          background:transparent !important; border:0 !important;
          box-shadow:none !important; outline:none !important;
        }
        .tf-product .image .car-swiper .swiper-button-prev{ left:6px; }
        .tf-product .image .car-swiper .swiper-button-next{ right:6px; }

        /* Quita cualquier bloque/pseudo del theme */
        .tf-product .image .car-swiper .swiper-button-next::before,
        .tf-product .image .car-swiper .swiper-button-prev::before{
          content:none !important;
        }

        /* Deja sólo el ícono */
        .tf-product .image .car-swiper .swiper-button-next::after,
        .tf-product .image .car-swiper .swiper-button-prev::after{
          font-size:26px !important;
          color:#2aa8ff !important;
          background:transparent !important;
          text-shadow:none !important;
        }

        .tf-product .image .car-swiper .swiper-button-next:hover,
        .tf-product .image .car-swiper .swiper-button-prev:hover{
          background:transparent !important;
        }

        /* Toggle info */
        .info-toggle{background:none;border:none;padding:0;margin-top:10px;cursor:pointer;color:#59d2fe;font-weight:700;display:block;margin-left:auto;margin-right:auto;text-align:center}
        .extra-info{display:none;padding:10px 0 0;border-top:1px dashed #333;margin-top:8px;text-align:center}
        .extra-info .cols{display:grid;grid-template-columns:1fr 1fr;gap:6px 24px;justify-items:center}
        .extra-info ul{list-style:none;margin:0;padding:0}
        .extra-info li{font-size:13px;color:#ddd;margin:0 0 6px 0}
        .extra-info strong{color:#fff;display:block}
        @media (max-width:480px){ .extra-info .cols{grid-template-columns:1fr} }

        /* Top search */
        .top-option { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:12px; }
        .widget-search form{display:flex; gap:8px; align-items:center;}
        .widget-search input[type="text"]{min-width:240px;}

        /* Lightbox */
        .lb-backdrop{ position:fixed; inset:0; background:rgba(0,0,0,.88); display:flex; align-items:center; justify-content:center; z-index:9999; }
        .lb-modal{ max-width:92vw; }
        .lb-body{ position:relative; display:flex; align-items:center; justify-content:center; }
        .lightbox-img{ max-width:92vw; max-height:90vh; display:block; }
        .lightbox-prev, .lightbox-next, .lightbox-close{
          background:none; border:none; color:#fff; cursor:pointer; font-weight:600;
        }
        .lightbox-prev, .lightbox-next{
          position:absolute; top:50%; transform:translateY(-50%); font-size:28px;
        }
        .lightbox-prev{ left:-40px; }
        .lightbox-next{ right:-40px; }
        @media (max-width:680px){ .lightbox-prev{left:6px} .lightbox-next{right:6px} }
        .lightbox-close{
          position:absolute; top:-36px; right:0; font-size:16px;
        }
        .lightbox-counter{
          position:absolute; bottom:-26px; left:50%; transform:translateX(-50%); color:#fff; font-size:14px;
        }

        /* ===== FICHA TÉCNICA: texto SIEMPRE blanco (tema claro/oscuro) ===== */
        .tf-product .card-actions .btn-row .tf-button.style-2,
        .tf-product .card-actions .btn-row .tf-button.style-2 span,
        .tf-product .card-actions .btn-row .tf-button.style-2 i {
          color: #fff !important;
        }
        .tf-product .card-actions .btn-row .tf-button.style-2:hover,
        .tf-product .card-actions .btn-row .tf-button.style-2:hover span,
        .tf-product .card-actions .btn-row .tf-button.style-2:hover i {
          color: #fff !important;
        }
      `}</style>
    </Layout>
  )
}
