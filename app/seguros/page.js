'use client'

import { useRef, useState } from 'react'
import Layout from '@/components/layout/Layout'

const MAX_FILE_MB = 5

export default function SegurosPage() {
  const formRef = useRef(null)
  const btnRef  = useRef(null)
  const alertRef = useRef(null)
  const [sending, setSending] = useState(false)

  const showAlert = (type, message, persist = false) => {
    if (!alertRef.current) return
    alertRef.current.className = 'form-alert ' + (type === 'success' ? 'success' : 'error')
    alertRef.current.textContent = message
    alertRef.current.style.display = 'block'
    if (!persist) setTimeout(() => { if (alertRef.current) alertRef.current.style.display = 'none' }, 6000)
  }

  const validateFiles = (form) => {
    const fields = [
      'CEDULA_FRONTAL',
      'CEDULA_REVERSO',
      'MATRICULA_FRONTAL',
      'MATRICULA_REVERSO',
    ]
    for (const name of fields) {
      const f = form[name]?.files?.[0]
      if (!f) return `Falta adjuntar: ${name.replaceAll('_',' ').toLowerCase()}`
      if (f.size > MAX_FILE_MB * 1024 * 1024) {
        return `El archivo "${f.name}" supera ${MAX_FILE_MB} MB`
      }
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    // validación simple
    const required = ['NOMBRES','CIUDAD','CELULAR','CORREO']
    for (const name of required) {
      const v = form[name]?.value?.trim()
      if (!v) { showAlert('error', 'Completa todos los campos obligatorios.'); return }
    }
    const ferr = validateFiles(form)
    if (ferr) { showAlert('error', ferr); return }

    // armar FormData
    const fd = new FormData(form)
    fd.set('fecha_envio', new Date().toLocaleString())

    try {
      setSending(true)
      if (btnRef.current) { btnRef.current.disabled = true; btnRef.current.textContent = 'ENVIANDO...' }

      const res = await fetch('/api/cotizar-seguro', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('MAIL_ERROR')

      showAlert('success', 'Solicitud enviada. Te contactaremos para tu cotización de seguro.')
      form.reset()
    } catch (err) {
      console.error(err)
      showAlert('error', 'Ocurrió un error al enviar la solicitud. Intenta de nuevo más tarde.', true)
    } finally {
      setSending(false)
      if (btnRef.current) { btnRef.current.disabled = false; btnRef.current.textContent = 'Enviar solicitud' }
    }
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="COTIZAR SEGURO">
      {/* Usa tus clases para heredar estilos */}
      <section className="tf-contact section-work--pad">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-12">
              <div className="tf-heading mb30">
                <h2 className="heading">Cotiza tu seguro</h2>
                <p className="sub-heading">Déjanos tus datos y adjunta los documentos para recibir tu cotización.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="comment-form" encType="multipart/form-data" noValidate>
                <div className="form-inner">
                  <fieldset className="Nombre">
                    <input className="tb-my-input" type="text" name="NOMBRES" placeholder="Nombres y apellidos" required />
                  </fieldset>
                  <fieldset className="Ciudad">
                    <input className="tb-my-input" type="text" name="CIUDAD" placeholder="Ciudad de circulación" required />
                  </fieldset>
                  <fieldset className="Celular">
                    <input className="tb-my-input" type="tel"  name="CELULAR" placeholder="Número celular" required />
                  </fieldset>
                  <fieldset className="Correo">
                    <input className="tb-my-input" type="email" name="CORREO"  placeholder="Correo" required />
                  </fieldset>

                  <fieldset className="CedulaFrontal">
                    <label style={{display:'block',marginBottom:8,fontWeight:600}}>Foto cédula (frontal) *</label>
                    <input className="tb-my-input" type="file" name="CEDULA_FRONTAL" accept="image/*,application/pdf" required />
                  </fieldset>
                  <fieldset className="CedulaReverso">
                    <label style={{display:'block',marginBottom:8,fontWeight:600}}>Foto cédula (reverso) *</label>
                    <input className="tb-my-input" type="file" name="CEDULA_REVERSO" accept="image/*,application/pdf" required />
                  </fieldset>
                  <fieldset className="MatriculaFrontal">
                    <label style={{display:'block',marginBottom:8,fontWeight:600}}>Foto matrícula (frontal) *</label>
                    <input className="tb-my-input" type="file" name="MATRICULA_FRONTAL" accept="image/*,application/pdf" required />
                  </fieldset>
                  <fieldset className="MatriculaReverso">
                    <label style={{display:'block',marginBottom:8,fontWeight:600}}>Foto matrícula (reverso) *</label>
                    <input className="tb-my-input" type="file" name="MATRICULA_REVERSO" accept="image/*,application/pdf" required />
                  </fieldset>
                </div>

                <div className="btn-submit" style={{display:'flex',gap:12,alignItems:'center',marginTop:12}}>
                  <button ref={btnRef} className="tf-button style-2" type="submit" disabled={sending}>
                    {sending ? 'ENVIANDO...' : 'Enviar solicitud'}
                  </button>

                  <a
                    href="https://wa.me/573246492266?text=Hola%2C%20quiero%20cotizar%20un%20seguro%20para%20placa%20blanca"
                    target="_blank" rel="noopener noreferrer"
                    className="tf-button" style={{textDecoration:'none'}}
                  >
                    Asesor vía WhatsApp
                  </a>

                  <div ref={alertRef} className="form-alert" role="status" aria-live="polite" />
                </div>

                <input type="hidden" name="fecha_envio" defaultValue={new Date().toLocaleString()} />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reutiliza estilos de tu otro form */}
      <style jsx global>{`
        .form-alert{display:none;margin-top:14px;padding:12px 16px;border-radius:8px;font-weight:600}
        .form-alert.success{background:#e6ffef;color:#0a7a3a;border:1px solid #9fe6c1}
        .form-alert.error{background:#fff0f0;color:#a90000;border:1px solid #ffbcbc}
        .tf-button[disabled]{opacity:.6;cursor:not-allowed}
      `}</style>
    </Layout>
  )
}
