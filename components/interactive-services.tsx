"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Search, Megaphone, Smartphone, BarChart } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Développement Web",
    icon: Code,
    description: "Sites web modernes et applications sur mesure",
    details:
      "Création de sites web responsives, e-commerce, applications web complexes avec les dernières technologies.",
  },
  {
    id: 2,
    title: "Design Graphique",
    icon: Palette,
    description: "Identité visuelle et design créatif",
    details: "Logo, charte graphique, supports de communication, design UI/UX pour une image de marque forte.",
  },
  {
    id: 3,
    title: "Référencement SEO",
    icon: Search,
    description: "Optimisation pour les moteurs de recherche",
    details: "Audit SEO, optimisation technique, stratégie de contenu pour améliorer votre visibilité en ligne.",
  },
  {
    id: 4,
    title: "Marketing Digital",
    icon: Megaphone,
    description: "Stratégies marketing personnalisées",
    details: "Campagnes publicitaires, social media marketing, email marketing pour développer votre audience.",
  },
  {
    id: 5,
    title: "Applications Mobile",
    icon: Smartphone,
    description: "Apps iOS et Android natives",
    details: "Développement d'applications mobiles performantes et intuitives pour iOS et Android.",
  },
  {
    id: 6,
    title: "Web Design",
    icon: Palette,
    description: "Interfaces utilisateur intuitives et modernes.",
    details:
      "Nous concevons des maquettes et prototypes interactifs avec Figma pour créer des expériences utilisateur exceptionnelles et engageantes.",
  },
]

export default function InteractiveServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">NOS SERVICES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            L'équipe Digikom vous accompagne avec expertise sur tous vos projets digitaux. Découvrez nos services
            complets pour développer votre présence en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            const isHovered = hoveredService === service.id
            const isAnimatedCard = service.id === 6

            if (isAnimatedCard) {
              return (
                <Card
                  key={service.id}
                  className="animated-card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 overflow-hidden"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                    {/* Icon stays on top and animates on its own */}
                    <div
                      className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${
                        isHovered
                          ? "bg-gradient-to-br from-purple-500 to-violet-600 scale-110 rotate-3"
                          : "bg-gradient-to-br from-purple-100 to-violet-100"
                      }`}
                    >
                      <IconComponent
                        className={`w-8 h-8 lg:w-10 lg:h-10 transition-all duration-500 ${
                          isHovered ? "text-white scale-110" : "text-purple-600"
                        }`}
                      />
                    </div>

                    {/* Container for swappable content */}
                    <div className="relative flex-grow h-full">
                      {/* Static content */}
                      <div className={`static-content transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                        <h3 className="text-lg lg:text-xl font-bold mb-3 text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm lg:text-base">
                          {service.description}
                        </p>
                      </div>

                      {/* Animated content */}
                      <div className={`animated-content absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 614 390"
                          className="absolute inset-0 w-full h-full"
                        >
                          <g>
                            <g className="box-animation">
                              <path
                                strokeWidth="2"
                                stroke="#2563EB"
                                fill="rgba(37, 99, 235, 0.05)"
                                d="M28 20H587V306H28V20Z"
                              ></path>
                              <path strokeWidth="2" stroke="#2563EB" fill="white" d="M33 15H23V25H33V15Z"></path>
                              <path strokeWidth="2" stroke="#2563EB" fill="white" d="M33 301H23V311H33V301Z"></path>
                              <path strokeWidth="2" stroke="#2563EB" fill="white" d="M592 301H582V311H592V301Z"></path>
                              <path strokeWidth="2" stroke="#2563EB" fill="white" d="M592 15H582V25H592V15Z"></path>
                            </g>
                            <g className="cursor-animation">
                              <path
                                strokeWidth="2"
                                stroke="white"
                                fill="#2563EB"
                                d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <div className="relative z-10 flex flex-col justify-center h-full text-center p-4">
                            <h3 className="text-lg lg:text-xl font-bold mb-3 text-gray-900">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {service.details}
                            </p>
                             <div className="mt-auto">
                                <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                                En savoir plus
                                </button>
                             </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            }

            return (
              <Card
                key={service.id}
                className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 transform ${
                  isHovered ? "scale-105 -translate-y-2" : ""
                } ${isHovered ? "bg-gradient-to-br from-violet-50 to-purple-50" : "bg-white"}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                  <div
                    className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${
                      isHovered
                        ? "bg-gradient-to-br from-purple-500 to-violet-600 scale-110 rotate-3"
                        : "bg-gradient-to-br from-purple-100 to-violet-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-8 h-8 lg:w-10 lg:h-10 transition-all duration-500 ${
                        isHovered ? "text-white scale-110" : "text-purple-600"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-lg lg:text-xl font-bold mb-3 transition-colors duration-300 ${
                      isHovered ? "text-purple-700" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-gray-600 mb-4 transition-all duration-500 text-sm lg:text-base ${
                      isHovered ? "opacity-0 -translate-y-2" : "opacity-100"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div
                    className={`transition-all duration-500 flex-grow flex items-center ${
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <p className="text-gray-700 text-sm leading-relaxed">{service.details}</p>
                  </div>

                  <div
                    className={`mt-6 transition-all duration-500 ${
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                      En savoir plus
                    </button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}