'use client';

import Layout from "@/components/layout/Layout";
import Slider1 from "@/components/sections/Slider1";
import Logo from "@/components/sections/Logo";
import About1 from "@/components/sections/About1";
import Collection1 from "@/components/sections/Collection1";
import Work1 from "@/components/sections/Work1";
import Roadmap3 from "@/components/sections/Roadmap3";
import Partner1 from "@/components/sections/Partner1";
import Faq1 from "@/components/sections/Faq1";

// IMPORTA el botón flotante
import FloatingWhatsApp from "@/components/elements/BotonWhatsApp";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Slider1 />
        <Logo />
        <About1 />
        <Collection1 />
        <Work1 />
        <Roadmap3 />
        <Partner1 />
        <Faq1 />

        {/* Botón flotante de WhatsApp */}
        <FloatingWhatsApp
          phone="573246492266"
          text="Hola, vengo del sitio web y necesito información."
          position="right"     // 'right' | 'left'
          bottom={18}          // separación desde el borde inferior
          sideOffset={16}      // separación lateral
          showOnDesktop={true}
          showOnMobile={true}
          zIndex={2147483647}  // por encima de todo
          label="Asesoría"
        />
      </Layout>
    </>
  );
}
