'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu }) {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""

    return (
        <>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                <ul id="menu-primary-menu" className="menu">
                    <li className={`menu-item ${checkCurrentMenuItem("/")}`}>
                        <Link href="/">INICIO</Link>
                    </li>
                    <li className={`menu-item ${checkCurrentMenuItem("/servicios")}`}>
                        <Link href="/servicios">SERVICIOS</Link>
                    </li>
                    <li className={`menu-item ${checkCurrentMenuItem("/vehiculos")}`}>
                        <Link href="/vehiculos">VEHÍCULOS</Link>
                    </li>
                    <li className={`menu-item ${checkCurrentMenuItem("/roadmap-3")}`}>
                        <Link href="/roadmap-3">PASO A PASO</Link>
                    </li>
                    <li className={`menu-item ${checkCurrentMenuItem("/about1")}`}>
                        <Link href="/about1">QUIÉNES SOMOS</Link>
                    </li>
                    <li className={`menu-item ${checkCurrentMenuItem("/contact")}`}>
                        <Link href="/contact">CONTACTO</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}