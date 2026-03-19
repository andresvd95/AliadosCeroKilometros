'use client'

import { useRef, useState } from 'react'
import Layout from '@/components/layout/Layout'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqawabor'
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB

export default function CotizarSeguroPage() {
  const formRef = useRef(null)
  const btnRef = useRef(null)
  const alertRef = useRef(null)
  const [sending, setSending] = useState(false)

  const showAlert = (type, message, persist = false) => {
    if (!alertRef.current) return
    alertRef.current.className = 'form-alert ' + (type === 'success' ? 'success' : 'error')
    alertRef.current.textContent = message
    alertRef.current.style.display = 'block'
    if (!persist) setTimeout(() => { if (alertRef.current) alertRef.current.style.display = 'none' }, 6000)
  }

  const validateFiles = (files) => {
    for (const f of files) {
      if (!f) continue
      if (f.size > MAX_FILE_SIZE) {
        return `El archivo "${f.name}" supera el límite de ${MAX_FILE_SIZE / 1024 / 1024} MB.`
      }
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)
    
    const nombres = formData.get('NOMBRES')?.trim()
    const ciudad = formData.get('CIUDAD')?.trim()
    const celular = formData.get('CELULAR')?.trim()
    const correo = formData.get('CORREO')?.trim()

    if (!nombres || !ciudad || !celular || !correo) {
      showAlert('error', 'Por favor completa los campos obligatorios.')
      return
    }

    const cedFrontal = formData.get('CEDULA_FRONTAL')
    const cedReverso = formData.get('CEDULA_REVERSO')
    const matFrontal = formData.get('MATRICULA_FRONTAL')
    const matReverso = formData.get('MATRICULA_REVERSO')

    const err = validateFiles([cedFrontal, cedReverso, matFrontal, matReverso])
    if (err) { showAlert('error', err); return }

    try {
      setSending(true)
      if (btnRef.current) { btnRef.current.disabled = true; btnRef.current.textContent = 'ENVIANDO...' }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        showAlert('success', 'Solicitud enviada. Te contactaremos para tu cotización de seguro.')
        form.reset()
      } else {
        showAlert('error', 'Ocurrió un error al enviar la solicitud. Intenta de nuevo más tarde.', true)
      }
    } catch (error) {
      console.error('Formspree error', error)
      showAlert('error', 'Ocurrió un error al enviar la solicitud. Intenta de nuevo más tarde.', true)
    } finally {
      setSending(false)
      if (btnRef.current) { btnRef.current.disabled = false; btnRef.current.textContent = 'Enviar solicitud' }
    }
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="COTIZAR SEGURO">
      <section className="tf-contact section-work--pad">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-12">
              <div className="tf-heading mb30">
                <h2 className="heading">Cotiza tu seguro</h2>
                <p className="sub-heading">Déjanos tus datos y adjunta los documentos para recibir tu cotización.</p>
              </div>

              <form id="form-cotizar-seguro" className="comment-form" ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="form-inner">
                  <fieldset className="Nombre">
                    <input type="text" id="NOMBRES" name="NOMBRES" placeholder="Nombres y apellidos" className="tb-my-input" required />
                  </fieldset>

                  <fieldset className="Ciudad">
                    <input type="text" id="CIUDAD" name="CIUDAD" placeholder="Ciudad de circulación" className="tb-my-input" required />
                  </fieldset>

                  <fieldset className="Celular">
                    <input type="tel" id="CELULAR" name="CELULAR" placeholder="Número celular" className="tb-my-input" required />
                  </fieldset>

                  <fieldset className="Correo">
                    <input type="email" id="CORREO" name="CORREO" placeholder="Ingresa tu correo" className="tb-my-input" required />
                  </fieldset>

                  <fieldset className="CedulaFrontal">
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Foto cédula (frontal) *</label>
                    <input type="file" id="CEDULA_FRONTAL" name="CEDULA_FRONTAL" accept="image/*,application/pdf" className="tb-my-input" required />
                  </fieldset>

                  <fieldset className="CedulaReverso">
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Foto cédula (reverso) *</label>
                    <input type="file" id="CEDULA_REVERSO" name="CEDULA_REVERSO" accept="image/*,application/pdf" className="tb-my-input" required />
                  </fieldset>

                  <fieldset className="MatriculaFrontal">
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Foto matrícula (frontal) *</label>
                    <input type="file" id="MATRICULA_FRONTAL" name="MATRICULA_FRONTAL" accept="image/*,application/pdf" className="tb-my-input" required />
                  </fieldset>

                  <fieldset className="MatriculaReverso">
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Foto matrícula (reverso) *</label>
                    <input type="file" id="MATRICULA_REVERSO" name="MATRICULA_REVERSO" accept="image/*,application/pdf" className="tb-my-input" required />
                  </fieldset>
                </div>

                <div className="btn-submit" style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 12 }}>
                  <button id="submit-btn" ref={btnRef} className="tf-button style-2" type="submit" disabled={sending}>
                    {sending ? 'ENVIANDO...' : 'Enviar solicitud'}
                  </button>

                  <a
                    href="https://wa.me/573246492266?text=Hola%2C%20quiero%20cotizar%20un%20seguro%20para%20placa%20blanca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-button"
                    style={{ textDecoration: 'none' }}
                  >
                    Asesor vía WhatsApp
                  </a>

                  <div id="form-alert" ref={alertRef} className="form-alert" role="status" aria-live="polite" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .form-alert{display:none;margin-top:14px;padding:12px 16px;border-radius:8px;font-weight:600}
        .form-alert.success{background:#e6ffef;color:#0a7a3a;border:1px solid #9fe6c1}
        .form-alert.error{background:#fff0f0;color:#a90000;border:1px solid #ffbcbc}
        .tf-button[disabled]{opacity:.6;cursor:not-allowed}
      `}</style>
    </Layout>
  )
}