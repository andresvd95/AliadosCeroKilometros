'use client';
import React from 'react';

/**
 * Botón flotante de WhatsApp (ícono oficial FA)
 */
export default function FloatingWhatsApp({
  phone = '573246492266',
  text = 'Hola, vengo del sitio web y necesito información.',
  position = 'right',   // 'right' | 'left'
  bottom = 18,
  sideOffset = 16,
  showOnDesktop = true,
  showOnMobile = true,
  zIndex = 2147483647,
  size = 56,            // diámetro del botón en px
  ariaLabel = 'Abrir chat de WhatsApp',
}) {
  const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  const sideStyle =
    position === 'left'
      ? { left: `${sideOffset}px`, right: 'auto' }
      : { right: `${sideOffset}px`, left: 'auto' };

  const iconSize = Math.round(size * 0.56); // ~56% del diámetro

  return (
    <>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title="WhatsApp"
        className="wa-float"
        style={{
          ...sideStyle,
          bottom: `${bottom}px`,
          width: size,
          height: size,
          zIndex,
        }}
      >
        <i
          className="fab fa-whatsapp"
          aria-hidden="true"
          style={{ fontSize: iconSize, lineHeight: 1, color: '#fff' }}
        />
      </a>

      <style jsx>{`
        .wa-float {
          position: fixed;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: #25d366; /* verde WhatsApp */
            0 2px 6px rgba(0, 0, 0, 0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease,
            filter 0.2s ease;
          text-decoration: none;
        }
        .wa-float:hover {
          transform: translateY(-1px) scale(1.03);
          box-shadow: 0 10px 24px rgba(37, 211, 102, 0.4),
            0 3px 8px rgba(0, 0, 0, 0.2);
          filter: saturate(1.05);
        }
        /* visibilidad por dispositivo */
        @media (min-width: 992px) {
          ${!showOnDesktop ? `.wa-float{ display:none !important; }` : ''}
        }
        @media (max-width: 991px) {
          ${!showOnMobile ? `.wa-float{ display:none !important; }` : ''}
        }
      `}</style>
    </>
  );
}
