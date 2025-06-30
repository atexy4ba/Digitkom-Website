import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Target, Users, Zap } from "lucide-react"

export default function ModernAbout() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            À propos de nous
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Votre partenaire digital de confiance</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis plus de 5 ans, nous accompagnons les entreprises dans leur transformation digitale avec passion et
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          <Card className="text-center shadow-lg bg-white">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-bold">20k+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Clients Satisfaits</p>
              <Progress value={100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg bg-white">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-bold">100%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Taux de Réussite</p>
              <Progress value={100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg bg-white">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-bold">5+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Années d'Expérience</p>
              <Progress value={85} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg bg-white">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-bold">500+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Projets Réalisés</p>
              <Progress value={95} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Ajout des cards de clients déplacées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 lg:mb-16">
          <Card className="shadow-lg bg-white">
            <CardContent className="p-6 lg:p-8 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">500+</div>
              <p className="text-muted-foreground">Entreprises accompagnées dans tous secteurs d'activité</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-white">
            <CardContent className="p-6 lg:p-8 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">98%</div>
              <p className="text-muted-foreground">De nos clients nous recommandent à leurs partenaires</p>
            </CardContent>
          </Card>
        </div>

        {/* Notre Mission sans background */}
        <div className="text-center max-w-5xl mx-auto">
          <h3 className="text-xl lg:text-2xl font-bold mb-6">Notre Mission</h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Nous croyons que chaque entreprise mérite une présence digitale exceptionnelle. Notre équipe d'experts
            passionnés travaille sans relâche pour transformer vos idées en solutions digitales innovantes qui génèrent
            des résultats concrets et durables.
          </p>
        </div>
      </div>
    </section>
  )
}
