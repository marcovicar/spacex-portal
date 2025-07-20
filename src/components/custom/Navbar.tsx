'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/launches", label: "Launches" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="w-full bg-black border-b border-zinc-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-widest font-bebas uppercase">
          SpaceX Portal 🚀
        </Link>

        {/* DESKTOP NAVIGATION */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior={false}>
                  <NavigationMenuLink asChild>
                    <span className="text-white uppercase px-4 py-2 hover:text-black hover:font-bold transition-colors">
                      {link.label}
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU LINKS */}
      <div
        className={cn(
          "flex flex-col md:hidden mt-4 gap-2 px-6 transition-all duration-300",
          menuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-white py-2 border-b uppercase border-zinc-800 hover:text-black hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
