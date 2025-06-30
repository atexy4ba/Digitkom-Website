"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function ModernClients() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="outline" className="mb-4">
          Nos Clients
        </Badge>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Ils nous font confiance</h2>
        <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Plus de 20 000 entreprises dans le monde entier nous font confiance pour leur croissance digitale.
        </p>

        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-scroll space-x-6 lg:space-x-8" style={{ width: "calc(100px * 20)" }}>
            {[...Array(20)].map((_, index) => (
              <Card
                key={index}
                className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 shadow-lg bg-gradient-to-br from-white to-slate-50"
              >
                <CardContent className="p-0 flex items-center justify-center h-full">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Star className="h-4 w-4 lg:h-6 lg:w-6 text-white fill-current" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
