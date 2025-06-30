"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "Comment contacter vos services ?",
    answer:
      "Vous pouvez nous contacter par téléphone, email ou via notre formulaire de contact. Notre équipe vous répond sous 24h pour discuter de votre projet et vous proposer une solution adaptée.",
  },
  {
    id: 2,
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "Les délais varient selon le type de projet. Pour un site web, comptez 2-4 semaines. Pour le SEO, les premiers résultats apparaissent après 3-6 mois. Nous vous donnons un planning détaillé dès le début.",
  },
  {
    id: 3,
    question: "Est-ce que votre équipe est composée de personnes qualifiées ?",
    answer:
      "Absolument ! Notre équipe est composée de développeurs, designers et marketeurs certifiés avec plus de 5 ans d'expérience. Nous nous formons continuellement aux dernières technologies.",
  },
  {
    id: 4,
    question: "Est-ce que vous travaillez avec Figma ?",
    answer:
      "Oui, nous utilisons Figma pour tous nos projets de design. Cela nous permet de collaborer efficacement avec nos clients et de créer des prototypes interactifs avant le développement.",
  },
  {
    id: 5,
    question: "Travaillez-vous avec tous les secteurs ?",
    answer:
      "Nous travaillons avec des entreprises de tous secteurs : e-commerce, santé, éducation, finance, industrie, etc. Notre approche s'adapte aux spécificités de chaque domaine d'activité.",
  },
]

const gradients = [
  "from-violet-500 to-purple-500",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-green-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-500",
]

export default function InteractiveFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">FOIRE AUX QUESTIONS</h2>
          <p className="text-gray-600">
            Vous avez des questions ? Nous avons des réponses ! Consultez notre FAQ pour en savoir plus sur nos services
            et notre approche. Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(item.id)
            const gradient = gradients[index % gradients.length]

            return (
              <div
                key={item.id}
                className={`rounded-xl p-1 shadow-lg transition-all duration-700 ease-out transform hover:scale-[1.02] ${
                  isOpen ? `bg-gradient-to-r ${gradient}` : "bg-gradient-to-r from-gray-200 to-gray-300"
                }`}
              >
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-4 lg:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                  >
                    <span className="text-gray-900 font-semibold text-base lg:text-lg pr-4">{item.question}</span>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp
                          className={`w-5 h-5 lg:w-6 lg:h-6 transition-all duration-500 ${
                            isOpen ? "text-violet-600 rotate-180" : "text-gray-500"
                          }`}
                        />
                      ) : (
                        <ChevronDown
                          className={`w-5 h-5 lg:w-6 lg:h-6 transition-all duration-500 ${
                            isOpen ? "text-violet-600" : "text-gray-500"
                          }`}
                        />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-700 ease-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
