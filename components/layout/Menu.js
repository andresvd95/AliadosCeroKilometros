'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
  const pathname = usePathname() || '/'
  const [current, setCurrent] = useState('/')

  useEffect(() => { setCurrent(pathname || '/') }, [pathname])

  const isCurrent = (path) =>
    (path === '/' ? current === '/' : current.startsWith(path))
      ? 'current-menu-item' : ''

  return (
    <>
      <ul id="menu-primary-menu" className="menu">
        <li className={`menu-item ${isCurrent('/')}`}>
          <Link href="/" aria-current={isCurrent('/') ? 'page' : undefined}>INICIO</Link>
        </li>
        <li className={`menu-item ${isCurrent('/servicios')}`}>
          <Link href="/servicios">SERVICIOS</Link>
        </li>
        <li className={`menu-item ${isCurrent('/vehiculos')}`}>
          <Link href="/vehiculos">VEHÍCULOS</Link>
        </li>
        <li className={`menu-item ${isCurrent('/roadmap-3')}`}>
          <Link href="/roadmap-3">PASO A PASO</Link>
        </li>
        <li className={`menu-item ${isCurrent('/about1')}`}>
          <Link href="/about1">QUIÉNES SOMOS</Link>
        </li>
        <li className={`menu-item ${isCurrent('/contact')}`}>
          <Link href="/contact">CONTACTO</Link>
        </li>
      </ul>

      {/* Quitar chevrón del theme */}
      <style jsx global>{`
        .menu > li > a::after,
        .menu > li > a .arrow,
        .menu > li.has-children > a::after,
        .menu > li.menu-item-has-children > a::after{
          content:none !important; display:none !important;
        }
      `}</style>
    </>
  )
}
