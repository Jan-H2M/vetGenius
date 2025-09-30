'use client'

import { Clock, Target, TrendingUp, BookOpen, Euro } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Bespaar Kostbare Tijd',
    description: 'Verminder diagnostische tijd tot 70% met directe lab-analyse en beeldinterpretatie. Meer tijd voor patiëntenzorg, minder tijd voor administratie.',
    metric: '70%',
    metricLabel: 'Tijdsbesparing',
  },
  {
    icon: Target,
    title: 'Verhoog Diagnostische Nauwkeurigheid',
    description: 'Toegang tot uitgebreide kennisbank en patroonherkenning vermindert het risico op gemiste diagnoses. Krijg altijd een tweede opinie bij complexe gevallen.',
    metric: '95%+',
    metricLabel: 'Nauwkeurigheid',
  },
  {
    icon: TrendingUp,
    title: 'Vergroot Uw Vertrouwen',
    description: 'Evidence-based suggesties en duidelijke referenties ondersteunen uw klinische beslissingen. Ideaal voor jonge dierenartsen en complexe gevallen.',
    metric: '24/7',
    metricLabel: 'Ondersteuning',
  },
  {
    icon: BookOpen,
    title: 'Continue Bijscholing',
    description: 'Blijf automatisch op de hoogte van de nieuwste onderzoeken en behandelprotocollen. VetGenius fungeert als uw persoonlijke veterinaire bibliotheek.',
    metric: '1000+',
    metricLabel: 'Protocollen',
  },
  {
    icon: Euro,
    title: 'Verbeter Praktijkrendement',
    description: 'Door efficiëntere diagnostiek kunnen meer patiënten worden geholpen. Verminder doorverwijzingen door betere eerste-lijns diagnostiek.',
    metric: '30%',
    metricLabel: 'Meer patiënten',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-teal-900/20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Voordelen voor Uw Praktijk</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Ontdek hoe VetGenius uw praktijk transformeert en de kwaliteit van dierenzorg verbetert
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.slice(0, 3).map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl glass-dark hover:bg-white/5 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-teal-500 p-3">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gradient">{benefit.metric}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{benefit.metricLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.slice(3).map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl glass-dark hover:bg-white/5 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-teal-500 p-3">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gradient">{benefit.metric}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{benefit.metricLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}