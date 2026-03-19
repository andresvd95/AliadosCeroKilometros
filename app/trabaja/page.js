'use client'
import { useEffect, useRef } from 'react'
import Layout from '@/components/layout/Layout'

// Configuración EmailJS
const SERVICE_ID  = 'service_287809i'
const TEMPLATE_ID = 'template_sryni0b'
const PUBLIC_KEY  = 'nxpOf5avvAILY0-7A'

export default function TrabajeConNosotros() {
  const formRef  = useRef(null)
  const btnRef   = useRef(null)
  const alertRef = useRef(null)

  // Mostrar alertas
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
        const mod = await import('@emailjs/browser').catch(() => null)
        if (mod && mod.default) emailjsAny = mod.default
        else if (window.emailjs) emailjsAny = window.emailjs
        else {
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
      const carro   = form.Carro?.value?.trim()
      const ciudad  = form.Ciudad?.value?.trim()

      if (!nombre || !correo || !celular || !carro || !ciudad) {
        showAlert('error', 'Por favor completa todos los campos.')
        return
      }

      if (btnRef.current) { btnRef.current.disabled = true; btnRef.current.textContent = 'ENVIANDO...' }

      const emailjs = emailjsAny || window.emailjs
      if (!emailjs) {
        showAlert('error', 'No fue posible enviar el formulario en este momento. Intenta más tarde.', true)
        if (btnRef.current) { btnRef.current.disabled = false; btnRef.current.textContent = 'Enviar solicitud' }
        return
      }

      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
        showAlert('success', 'Tu solicitud ha sido enviada. ¡Gracias por tu interés!')
        form.reset()
      } catch {
        try {
          await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            Nombre: nombre,
            Correo: correo,
            Celular: celular,
            Carro: carro,
            Ciudad: ciudad,
            fecha_envio: new Date().toLocaleString(),
          })
          showAlert('success', 'Tu solicitud ha sido enviada exitosamente.')
          form.reset()
        } catch {
          showAlert('error', 'Ocurrió un error al enviar tu solicitud. Intenta nuevamente más tarde.', true)
        }
      } finally {
        if (btnRef.current) { btnRef.current.disabled = false; btnRef.current.textContent = 'Enviar solicitud' }
      }
    }

    const f = formRef.current
    f?.addEventListener('submit', onSubmit, { capture: true, passive: false })
    return () => f?.removeEventListener('submit', onSubmit, { capture: true })
  }, [])

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="TRABAJE CON NOSOTROS">
      <section className="tf-contact">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-9">
              <div className="tf-heading">
                <h2 className="heading">Trabaje con nosotros</h2>
                <p className="sub-heading">
                  Completa el formulario y un asesor se pondrá en contacto contigo.
                </p>
              </div>

              {/* Formulario */}
              <form id="workform" className="comment-form" ref={formRef} noValidate>
                <div className="form-inner">
                  <fieldset className="Nombre">
                    <input type="text" id="Nombre" name="Nombre" placeholder="Nombre completo" required />
                  </fieldset>
                  <fieldset className="Correo">
                    <input type="email" id="Correo" name="Correo" placeholder="Correo electrónico" required />
                  </fieldset>
                  <fieldset className="Celular">
                    <input type="tel" id="Celular" name="Celular" placeholder="Número de celular" required />
                  </fieldset>
                  <fieldset className="Carro">
                    <input type="text" id="Carro" name="Carro" placeholder="Carro y año del modelo" required />
                  </fieldset>
                  <fieldset className="Ciudad">
                    <input type="text" id="Ciudad" name="Ciudad" placeholder="Ciudad donde resides" required />
                  </fieldset>
                </div>

                <div className="btn-submit">
                  <button id="submit-btn" ref={btnRef} className="tf-button style-2" type="submit">
                    Enviar solicitud
                  </button>
                </div>

                <div id="form-alert" ref={alertRef} className="form-alert" role="status" aria-live="polite" />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Estilos */}
      <style jsx global>{`
        .form-alert {
          display: none;
          margin-top: 14px;
          padding: 12px 16px;
          border-radius: 8px;
          font-weight: 600;
        }
        .form-alert.success {
          background: #e6ffef;
          color: #0a7a3a;
          border: 1px solid #9fe6c1;
        }
        .form-alert.error {
          background: #fff0f0;
          color: #a90000;
          border: 1px solid #ffbcbc;
        }
        .tf-button[disabled] {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </Layout>
  )
}
