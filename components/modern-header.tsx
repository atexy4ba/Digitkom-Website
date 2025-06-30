"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Sparkles } from "lucide-react"

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">Digikom</span>
              <Badge variant="secondary" className="text-xs">
                Digital Agency
              </Badge>
            </div>
          </div>

          {/* Navigation au centre */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" className="text-sm font-medium">
              À propos de nous
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Nos Services
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Portfolio
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Contact
            </Button>
          </nav>

          {/* Bouton à droite */}
          <div className="flex items-center">
            <Button className="hidden md:flex bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              Obtenir un devis
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                À propos de nous
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Nos Services
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Portfolio
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Contact
              </Button>
              <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                Obtenir un devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
