'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  Stethoscope, 
  FlaskConical, 
  BookOpen, 
  Brain, 
  Shield, 
  Zap 
} from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'Multimodale Diagnostiek',
    description: 'Analyseer röntgenfoto\'s, echo\'s, bloedonderzoek en spraaknotities in één geïntegreerd platform. Directe integratie van alle databronnen voor complete diagnostiek.',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: FlaskConical,
    title: 'Slimme Lab Analyse',
    description: 'Interpreteer complexe labresultaten met soort-specifieke referentiewaarden. Automatische detectie van afwijkingen met klinische context.',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: BookOpen,
    title: 'Uitgebreide Kennisbank',
    description: 'Direct toegang tot de nieuwste veterinaire onderzoeken, behandelprotocollen en medicatie-informatie. Continue updates met wetenschappelijke inzichten.',
    gradient: 'from-purple-500 to-teal-500',
  },
  {
    icon: Brain,
    title: 'Zelflerende Technologie',
    description: 'VetGenius wordt slimmer met elke interactie. Reinforcement learning op basis van feedback voor continue verbetering.',
    gradient: 'from-purple-600 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Veiligheid Voorop',
    description: 'Meerdere veiligheidslagen voor betrouwbare diagnostische ondersteuning. Transparante uitleg bij elke aanbeveling met bronvermelding.',
    gradient: 'from-teal-600 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Naadloze Integratie',
    description: 'Past perfect in uw bestaande werkwijze. API voor praktijkmanagementsoftware met snelle responstijden (<3 seconden).',
    gradient: 'from-purple-500 to-purple-700',
  },
]

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Kernfuncties</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Ontdek hoe VetGenius uw praktijk transformeert met geavanceerde AI-technologie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm" />
                <div className="relative p-8 glass-dark hover:bg-white/5 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-purple-400 font-medium group-hover:text-teal-400 transition-colors">
                    Meer informatie
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 border border-purple-500/20 rounded-2xl group-hover:border-teal-500/30 transition-colors duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}