// app/layout.js
import { Poppins, Bakbak_One } from "next/font/google";
import "/public/assets/css/style.css";
import "/public/assets/css/responsive.css";
import FloatingWhatsApp from "@/components/elements/BotonWhatsApp";
import { GoogleTagManager } from "@next/third-parties/google";

const GTM_ID = "GTM-5WW9HTGF";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="body header-fixed">
        <GoogleTagManager gtmId={GTM_ID} />

        {children}

        <FloatingWhatsApp
          phone="573246492266"
          text="Hola, vengo del sitio web y necesito información."
          position="right"
          bottom={18}
          sideOffset={16}
          showOnDesktop
          showOnMobile
          zIndex={2147483647}
          size={56}
          ariaLabel="Abrir chat de WhatsApp"
        />
      </body>
    </html>
  );
}
