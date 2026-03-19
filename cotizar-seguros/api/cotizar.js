const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nombres, ciudad, celular, correo, archivos } = req.body;
    const fecha = new Date().toLocaleString();

    const attachments = [];
    if (archivos && Array.isArray(archivos)) {
      for (const archivo of archivos) {
        if (archivo.data && archivo.name) {
          attachments.push({
            filename: archivo.name,
            content: Buffer.from(archivo.data, 'base64'),
            contentType: archivo.type || 'application/octet-stream'
          });
        }
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.TO_EMAIL || process.env.SMTP_USER;

    const html = `
      <h2>Solicitud de cotización de seguro</h2>
      <p><b>Fecha:</b> ${fecha}</p>
      <p><b>Nombres:</b> ${nombres}</p>
      <p><b>Ciudad:</b> ${ciudad}</p>
      <p><b>Celular:</b> ${celular}</p>
      <p><b>Correo:</b> ${correo}</p>
      <p>Se adjuntan los documentos enviados por el usuario.</p>
    `;

    await transporter.sendMail({
      from: `"Aliados Cero Kilómetros" <${process.env.SMTP_USER}>`,
      to,
      subject: `Cotización de seguro - ${nombres} (${ciudad})`,
      html,
      attachments,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({
      ok: false,
      error: 'MAIL_ERROR',
      details: err.message
    });
  }
};