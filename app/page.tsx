import ModernHeader from "@/components/modern-header"
import ModernHero from "@/components/modern-hero"
import ModernAbout from "@/components/modern-about"
import ModernClients from "@/components/modern-clients"
import ModernCTA from "@/components/modern-cta"
import InteractiveServices from "@/components/interactive-services"
import InteractiveFAQ from "@/components/interactive-faq"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      <ModernHero />
      <ModernAbout />
      <ModernClients />
      <ModernCTA />

      {/* Portfolio Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Nos Réalisations</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez quelques-uns de nos projets les plus réussis. Chaque projet reflète notre engagement envers
              l'excellence et notre capacité à transformer les idées en réalités digitales impactantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-muted-foreground font-medium">Projet {item}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4 lg:p-6">
                  <h3 className="font-bold text-base lg:text-lg mb-2">Projet {item}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Description détaillée du projet et des technologies utilisées.
                  </p>
                  <Badge variant="secondary">Web Development</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-600 text-white group">
              Voir tous nos projets
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <InteractiveServices />
      <InteractiveFAQ />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6 lg:p-8">
                <Phone className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="font-semibold mb-2 text-white">Appelez-nous</h3>
                <p className="text-slate-300">+213 123 456 789</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6 lg:p-8">
                <Mail className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="font-semibold mb-2 text-white">Écrivez-nous</h3>
                <p className="text-slate-300">contact@digikom.com</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6 lg:p-8">
                <MapPin className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="font-semibold mb-2 text-white">Visitez-nous</h3>
                <p className="text-slate-300">Alger, Algérie</p>
              </CardContent>
            </Card>
          </div>

          <div className="border-t border-slate-800 pt-6 lg:pt-8 text-center">
            <p className="text-slate-400">© 2024 Digikom. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
