import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface ComparisonItem {
  title: string
  competitors: string
  levaup: string
  isHighlight?: boolean
}

interface ComparisonSectionProps {
  title: string
  description?: string
  items: ComparisonItem[]
}

export function ComparisonSection({ title, description, items }: ComparisonSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div></div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Concorrentes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-bold">
                LevaUp
              </div>
            </div>
          </div>
          
          {/* Comparison Items */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <Card 
                key={index} 
                className={`border-2 ${item.isHighlight ? 'border-orange-200 bg-orange-50/50' : ''}`}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 gap-4 items-center p-4">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-center text-muted-foreground">{item.competitors}</div>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                        <Check className="h-4 w-4" />
                        {item.levaup}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-green-600">
              💰 Economize até R$ 680/mês com o LevaUp!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

