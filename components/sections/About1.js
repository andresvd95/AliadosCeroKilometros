// @/components/sections/About1.jsx (o .tsx)
import CounterUp from "../elements/CounterUp";

export default function About1() {
  return (
    <>
      <section className="tf-section tf-about">
        <div className="tf-container">
          <div className="row ">
            <div className="col-md-12 ">
              {/* decorativos opcionales: eliminados del DOM para evitar el fondo */}
              {/* <div className="icon"> ... </div>
              <div className="icon-2"> ... </div> */}
              <div className="tf-heading wow fadeInUp">
                <h2 className="heading">QUIÉNES SOMOS</h2>
                <p className="sub-heading">
                  En Aliados Cero Kilómetros somos un equipo especializado en venta de vehículos de servicio público,
                  vinculación con empresas transportadoras y soluciones de movilidad empresarial. Nuestro propósito es
                  conectar personas y compañías con oportunidades reales de transporte, brindando asesoría integral desde
                  la elección del vehículo hasta su afiliación y operación
                </p>
              </div>

              <div className="counter-wrap wow fadeInUp" data-wow-delay="0.2s">
                <div className="tf-counter ">
                  <h6>Transportadoras aliadas</h6>
                  <div className="content"><CounterUp count={12} />+</div>
                </div>
                <div className="tf-counter wow fadeInUp" data-wow-delay="0.3s">
                  <h6>Años de experiencia</h6>
                  <div className="content"><CounterUp count={11} />+</div>
                </div>
              </div>

              <div className="counter-wrap wow fadeInUp" data-wow-delay="0.2s">
                <div className="tf-counter ">
                  <h6>Soluciones a empresas</h6>
                  <div className="content"><CounterUp count={410} />+</div>
                </div>
                <div className="tf-counter wow fadeInUp" data-wow-delay="0.3s">
                  <h6>Vehículos entregados</h6>
                  <div className="content"><CounterUp count={1200} />+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Override mínimo para quitar el fondo sin romper nada */}
      <style jsx global>{`
        .tf-about { background: transparent !important; background-image: none !important; }
        .tf-about::before, .tf-about::after { background-image: none !important; content: none !important; }
        .tf-about .icon, .tf-about .icon-2 { display: none !important; }
      `}</style>
    </>
  );
}
