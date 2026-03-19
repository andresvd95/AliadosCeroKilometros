'use client'
import { useEffect, useRef } from 'react'
import Layout from '@/components/layout/Layout'

// Configura tus IDs/keys de EmailJS
const SERVICE_ID  = 'service_287809i'
const TEMPLATE_ID = 'template_myo7wse'
const PUBLIC_KEY  = 'nxpOf5avvAILY0-7A'

export default function Contact() {
  const formRef  = useRef(null)
  const btnRef   = useRef(null)
  const alertRef = useRef(null)

  // Mostrar mensajes (success/error)
  const showAlert = (type, message, persist = false) => {
    if (!alertRef.current) return
    alertRef.current.className = 'form-alert ' + (type === 'success' ? 'success' : 'error')
    alertRef.current.textContent = message
    alertRef.current.style.display = 'block'
    if (!persist) setTimeout(() => { if (alertRef.current) alertRef.current.style.display = 'none' }, 6000)
  }

  useEffect(() => {
    let emailjsAny = null

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const s = document.createElement('script')
        s.src = src
        s.async = true
        s.onload = () => resolve()
        s.onerror = () => reject()
        document.head.appendChild(s)
      })

    const ensureEmailJS = async () => {
      try {
        // 1) si @emailjs/browser está instalado
        const mod = await import('@emailjs/browser').catch(() => null)
        if (mod && mod.default) {
          emailjsAny = mod.default
        } else if (window.emailjs) {
          emailjsAny = window.emailjs
        } else {
          // 2) cargar desde CDN
          const cdns = [
            'https://cdn.emailjs.com/sdk/3.8.0/email.min.js',
            'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
          ]
          for (const src of cdns) {
            try { await loadScript(src) } catch {}
            if (window.emailjs) { emailjsAny = window.emailjs; break }
          }
        }
        if (!emailjsAny) return
        // init (v3 o v4)
        try { emailjsAny.init(PUBLIC_KEY) } catch { try { emailjsAny.init({ publicKey: PUBLIC_KEY }) } catch {} }
      } catch {}
    }

    ensureEmailJS()

    const onSubmit = async (e) => {
      e.preventDefault()
      const form = formRef.current
      if (!form) return

      const nombre  = form.Nombre?.value?.trim()
      const correo  = form.Correo?.value?.trim()
      const celular = form.Celular?.value?.trim()
      const mensaje = form.Mensaje?.value?.trim()

      if (!nombre || !correo || !celular || !mensaje) {
        showAlert('error', 'Por favor completa todos los campos.')
        return
      }

      if (btnRef.current) { btnRef.current.disabled = true; btnRef.current.textContent = 'ENVIANDO...' }

      const emailjs = emailjsAny || window.emailjs
      if (!emailjs) {
        showAlert('error', 'No fue posible enviar el mensaje en este momento. Intenta más tarde.', true)
        if (btnRef.current) { btnRef.current.disabled = false; btnRef.current.textContent = 'Envíar mensaje' }
        return
      }

      try {
        // 1) sendForm con el form directo
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
        showAlert('success', 'Tu mensaje ha sido enviado exitosamente. ¡Gracias!')
        form.reset()
      } catch {
        // 2) fallback a send con params
        try {
          await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            Nombre: nombre,
            Correo: correo,
            Celular: celular,
            Mensaje: mensaje,
            fecha_envio: new Date().toLocaleString(),
          })
          showAlert('success', 'Tu mensaje ha sido enviado exitosamente. ¡Gracias!')
          form.reset()
        } catch {
          showAlert('error', 'Ocurrió un error al enviar tu mensaje. Intenta nuevamente más tarde.', true)
        }
      } finally {
        if (btnRef.current) { btnRef.current.disabled = false; btnRef.current.textContent = 'Envíar mensaje' }
      }
    }

    const f = formRef.current
    f?.addEventListener('submit', onSubmit, { capture: true, passive: false })
    return () => f?.removeEventListener('submit', onSubmit, { capture: true })
  }, [])

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACTO">
      <section className="tf-contact">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-infor-wrap">
                <div className="tf-infor">
                  <div className="icon"><img src="/assets/images/svg/loaction.svg" alt="Ubicación" /></div>
                  <h3 className="title">UBICACIÓN</h3>
                  <p className="sub-title"> Cl. 47 # 72B - 31 | Medellín, Antioquia</p>
                </div>
                <div className="tf-infor">
                  <div className="icon"><img src="/assets/images/svg/email.svg" alt="Correo" /></div>
                  <h3 className="title">CORREO</h3>
                  <p className="sub-title">comercial@aliadoscerokilometros.com</p>
                </div>
                <div className="tf-infor">
                  <div className="icon"><img src="/assets/images/svg/phone.svg" alt="WhatsApp" /></div>
                  <h3 className="title">LÍNEA WHATSAPP</h3>
                  <p className="sub-title">3246492266</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-9">
              <div className="tf-heading">
                <h2 className="heading">Contáctanos vía correo</h2>
                <p className="sub-heading">Dejando tus datos un asesor te contactará</p>
              </div>

              {/* IMPORTANTE: Usa los mismos names que tu plantilla de EmailJS */}
              <form id="commentform" className="comment-form" ref={formRef} noValidate>
                <div className="form-inner">
                  <fieldset className="Nombre">
                    <input type="text" id="Nombre" name="Nombre" placeholder="Nombre" className="tb-my-input" required />
                  </fieldset>
                  <fieldset className="Correo">
                    <input type="email" id="Correo" name="Correo" placeholder="Ingresa tu correo" className="tb-my-input" required />
                  </fieldset>
                  <fieldset className="Celular">
                    <input type="tel" id="Celular" name="Celular" placeholder="Número celular" className="tb-my-input" required />
                  </fieldset>
                  <fieldset className="Mensaje">
                    <textarea id="Mensaje" name="Mensaje" rows="4" placeholder="Mensaje" required />
                  </fieldset>
                </div>

                <div className="btn-submit">
                  <button id="submit-btn" ref={btnRef} className="tf-button style-2" type="submit">Envíar mensaje</button>
                </div>

                {/* Mensajes */}
                <div id="form-alert" ref={alertRef} className="form-alert" role="status" aria-live="polite" />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Puedes mover estos estilos a tu CSS global */}
      <style jsx global>{`
        .form-alert{display:none;margin-top:14px;padding:12px 16px;border-radius:8px;font-weight:600}
        .form-alert.success{background:#e6ffef;color:#0a7a3a;border:1px solid #9fe6c1}
        .form-alert.error{background:#fff0f0;color:#a90000;border:1px solid #ffbcbc}
        .tf-button[disabled]{opacity:.6;cursor:not-allowed}
      `}</style>
    </Layout>
  )
}
