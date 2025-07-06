import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-black via-gray-900 to-black px-4 py-8">
      <nav className="mx-auto max-w-7xl">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Premium dark pill container for navigation links */}
          <div className="flex items-center bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-full px-10 py-5 shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-100 hover:text-white transition-all duration-300 font-medium text-lg tracking-wide hover:scale-105 ${
                  index < navItems.length - 1 ? "mr-10" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Premium "Get Resume" button */}
          <Button className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black px-10 py-5 rounded-full font-semibold text-lg shadow-2xl border border-gray-300/20 hover:shadow-white/20 hover:scale-105 transition-all duration-300 tracking-wide">
            Get Resume
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-gray-700/50">
              <span className="text-gray-100 font-semibold text-lg tracking-wide">Portfolio</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-100 hover:bg-gray-800/50 rounded-full p-3 backdrop-blur-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-6 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-100 hover:text-white transition-all duration-300 font-medium text-xl py-3 hover:translate-x-2 tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black px-8 py-4 rounded-full font-semibold text-lg mt-6 shadow-xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  Get Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
