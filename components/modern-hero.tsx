"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react"

export default function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center py-12 lg:py-20">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit mx-auto lg:mx-0">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Agence #1 en Algérie
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                Transformez votre
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  présence digitale
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Nous créons des expériences digitales exceptionnelles qui propulsent votre entreprise vers le succès. De
                la stratégie à l'exécution, nous sommes votre partenaire de confiance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Voir notre travail
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 lg:space-x-8 pt-6 lg:pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-violet-600" />
                <div>
                  <div className="text-xl lg:text-2xl font-bold">20k+</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-violet-600" />
                <div>
                  <div className="text-xl lg:text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Taux de réussite</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-lg mx-auto lg:max-w-none">
            {/* Main placeholder */}
            <Card className="relative z-0 shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-6 lg:p-8">
                <div className="aspect-video bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-medium text-sm lg:text-base">
                    Image principale à ajouter
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Floating elements - maintenant au-dessus */}
            <Card className="absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 shadow-xl border-0 bg-gradient-to-br from-pink-500 to-rose-500 animate-float z-20">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <span className="text-white text-xl lg:text-2xl">📷</span>
              </CardContent>
            </Card>

            <Card
              className="absolute top-6 lg:top-8 -left-6 lg:-left-8 w-12 h-12 lg:w-16 lg:h-16 shadow-xl border-0 bg-gradient-to-br from-blue-500 to-blue-600 animate-float z-20"
              style={{ animationDelay: "1s" }}
            >
              <CardContent className="p-0 flex items-center justify-center h-full">
                <span className="text-white text-lg lg:text-xl font-bold">f</span>
              </CardContent>
            </Card>

            <Card
              className="absolute top-1/2 right-6 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 shadow-xl border-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-float z-20"
              style={{ animationDelay: "2s" }}
            >
              <CardContent className="p-0 flex items-center justify-center h-full">
                <span className="text-white text-lg lg:text-xl">🎵</span>
              </CardContent>
            </Card>

            <Card
              className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 w-12 h-12 lg:w-16 lg:h-16 shadow-xl border-0 bg-gradient-to-br from-blue-600 to-blue-700 animate-float z-20"
              style={{ animationDelay: "0.5s" }}
            >
              <CardContent className="p-0 flex items-center justify-center h-full">
                <span className="text-white text-lg lg:text-xl font-bold">in</span>
              </CardContent>
            </Card>

            <Badge className="absolute top-1/2 right-1 lg:right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg animate-pulse-glow z-20">
              ADS
            </Badge>

            <Card
              className="absolute top-1/3 right-1/4 w-10 h-10 lg:w-12 lg:h-12 shadow-xl border-0 bg-gradient-to-br from-green-400 to-emerald-500 animate-float z-20"
              style={{ animationDelay: "1.5s" }}
            >
              <CardContent className="p-0 flex items-center justify-center h-full">
                <span className="text-white text-xs lg:text-sm">💬</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
