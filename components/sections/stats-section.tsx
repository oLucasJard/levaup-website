interface Stat {
  value: string
  label: string
  suffix?: string
  prefix?: string
}

interface StatsSectionProps {
  title?: string
  description?: string
  stats: Stat[]
}

export function StatsSection({ title, description, stats }: StatsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-600 to-orange-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container relative z-10">
        {(title || description) && (
          <div className="text-center space-y-4 mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>}
            {description && <p className="text-lg text-orange-100 max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-2 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="text-5xl md:text-6xl font-bold tracking-tight">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-lg text-orange-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

