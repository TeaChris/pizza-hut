import Image from 'next/image'
import { links } from '@/data'

import logo from '../assets/logo.png'
import Link from 'next/link'
import { Quicksand } from 'next/font/google'

export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-black grid place-items-center">
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        {/* logo */}
        <div className="">
          <Image
            src={logo}
            alt="pizza hut logo"
            className="w-20 h-16 object-cover"
          />
        </div>
        <div className="">
          <ul className="md:flex md:items-center md:gap-16">
            {links.map((link) => {
              const { label, url } = link
              return (
                <li key={label}>
                  <Link
                    href={url}
                    className="text-white font-Quicksand font-bold text-sm hover:text-red-800 transition duration-500"
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
