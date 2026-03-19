'use client'
import { useState } from 'react'
export default function Accordion2() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="tf-flat-accordion2">
                <div className="flat-toggle2">
                    <h6 className={isActive === 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(1)}>¿Qué tipos de vehículos ofrecen?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p>Trabajamos con una amplia gama de vehículos nuevos de las mejores marcas del mercado: automóviles, camionetas, SUVs, vehículos comerciales y de carga. Todos nuestros vehículos son de cero kilómetros, con garantía de fábrica y respaldo de concesionarios autorizados. Contamos con opciones para diferentes presupuestos y necesidades.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6 className={isActive === 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(2)}>¿Cuáles son los requisitos?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p>Los requisitos básicos incluyen: ser mayor de edad, contar con identificación válida, tener capacidad de pago demostrable, y estar interesado en adquirir un vehículo nuevo. No es necesario tener un historial crediticio perfecto, ya que trabajamos con diferentes opciones de financiamiento. Nuestro equipo te asesorará para encontrar la mejor opción.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6 className={isActive === 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(3)}>¿Qué garantías ofrecen?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p>Garantizamos transparencia total en todos nuestros procesos, precios sin cargos ocultos, vehículos con garantía de fábrica, respaldo legal en todos los trámites, servicio post-venta personalizado, y la satisfacción del cliente como prioridad. Nuestra reputación de más de 10 años en el mercado es nuestra mejor garantía.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
