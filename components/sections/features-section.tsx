import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

interface FeaturesSectionProps {
  title: string
  description?: string
  features: Feature[]
}

export function FeaturesSection({ title, description, features }: FeaturesSectionProps) {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClass = feature.color || "text-orange-600"
            const bgColor = feature.color?.replace('text-', 'bg-')?.replace('-600', '-50') || "bg-orange-50"
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 cursor-pointer"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${colorClass}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


