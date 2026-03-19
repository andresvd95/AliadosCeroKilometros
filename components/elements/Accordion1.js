'use client'
import { useState } from 'react'
export default function Accordion1() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="tf-flat-accordion2">
                <div className="flat-toggle2 active">
                    <h6  className={isActive === 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(1)}>¿Qué es Aliados Cero Kilómetros?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p>Aliados Cero Kilómetros es una empresa especializada en facilitar la compra de vehículos nuevos. Somos tu mejor aliado para acceder a movilidad de calidad, ofreciendo vehículos que no solo brindan transporte, sino oportunidades reales de crecimiento económico. Con más de 10 años de experiencia y más de 1200 clientes satisfechos, garantizamos transparencia, facilidad y confianza en cada proceso.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6  className={isActive === 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(2)}>¿Cómo funciona el proceso de compra?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p>Nuestro proceso es simple y transparente: 1- Contactas con nosotros para expresar tu interés, 2- Evaluamos tus necesidades y opciones de financiamiento, 3- Te presentamos las mejores opciones de vehículos disponibles, 4- Te acompañamos en todo el proceso de compra y documentación, 5- Entregamos tu vehículo con todas las garantías. Todo el proceso está diseñado para ser rápido, seguro y sin complicaciones.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6  className={isActive === 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(3)}>¿Qué ventajas ofrecen?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p>Ofrecemos múltiples ventajas: acceso directo a concesionarios autorizados, mejores precios por compras grupales, asesoría especializada en financiamiento, trámites simplificados, garantía de vehículos nuevos, y servicio post-venta personalizado. Nuestro objetivo es convertir la compra de un vehículo en una inversión rentable.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
