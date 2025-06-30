import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export default function ModernCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/15 rounded-full blur-2xl" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Sparkles className="w-3 h-3 mr-1" />
            Offre Limitée
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à transformer votre
            <span className="text-yellow-300"> présence digitale ?</span>
          </h2>
          <p className="text-lg lg:text-xl text-purple-100 mb-8 leading-relaxed">
            Rejoignez plus de 20 000 entreprises qui nous font confiance pour développer leur activité en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          <Card className="shadow-2xl bg-white/10 backdrop-blur-lg flex flex-col">
            <CardContent className="p-6 lg:p-8 flex-1 flex flex-col">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">Consultation Gratuite</h3>
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-purple-100">Audit complet de votre présence digitale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-purple-100">Stratégie personnalisée pour votre secteur</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-purple-100">Devis détaillé sous 24h</span>
                </div>
              </div>
              <Button className="w-full bg-white text-violet-600 hover:bg-gray-100 shadow-lg group mt-auto">
                Réserver ma consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <div className="flex flex-col space-y-4 lg:space-y-6">
            <Card className="shadow-xl bg-white/5 backdrop-blur-sm flex-1">
              <CardContent className="p-4 lg:p-6 text-center h-full flex flex-col justify-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">24h</div>
                <p className="text-purple-200 text-sm lg:text-base">Temps de réponse moyen</p>
              </CardContent>
            </Card>
            <Card className="shadow-xl bg-white/5 backdrop-blur-sm flex-1">
              <CardContent className="p-4 lg:p-6 text-center h-full flex flex-col justify-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">0€</div>
                <p className="text-purple-200 text-sm lg:text-base">Consultation initiale</p>
              </CardContent>
            </Card>
            <Card className="shadow-xl bg-white/5 backdrop-blur-sm flex-1">
              <CardContent className="p-4 lg:p-6 text-center h-full flex flex-col justify-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">100%</div>
                <p className="text-purple-200 text-sm lg:text-base">Sans engagement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
