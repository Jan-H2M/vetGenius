'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Circle, Clock } from 'lucide-react'

const roadmapData = [
  {
    phase: 'Fase 1',
    title: 'Fundament',
    timeline: 'Maand 1',
    status: 'completed',
    description: 'De basis is gelegd met ons kernmodel en eerste veterinaire datasets. Basale labresultaat-interpretatie werkt met meer dan 80% nauwkeurigheid.',
    achievements: [
      'Kern AI model getraind',
      'Veterinaire datasets geïntegreerd',
      '80%+ nauwkeurigheid bereikt',
    ],
  },
  {
    phase: 'Fase 2',
    title: 'Alpha Release',
    timeline: 'Maand 2',
    status: 'in-progress',
    description: 'We integreren momenteel de kennisbank en ontwikkelen spraakinterfaces. De gebruikersinterface wordt getest met eerste gebruikers.',
    achievements: [
      'Kennisbank integratie',
      'Spraakinterface ontwikkeling',
      'UI/UX testing met gebruikers',
    ],
  },
  {
    phase: 'Fase 3',
    title: 'Beta Testing',
    timeline: 'Maand 3',
    status: 'upcoming',
    description: 'Multimodale workflows worden geïmplementeerd. Beta-tests starten met geselecteerde dierenartsenpraktijken voor real-world validatie.',
    achievements: [
      'Multimodale integratie',
      'Pilot met dierenartsenpraktijken',
      'Real-world validatie',
    ],
  },
  {
    phase: 'Fase 4',
    title: 'Productie Launch',
    timeline: 'Maand 4',
    status: 'upcoming',
    description: 'Volledige release met pilotklinieken. Continue monitoring en verbetering op basis van gebruikersfeedback.',
    achievements: [
      'Productie-ready platform',
      'Pilotklinieken live',
      'Continue verbetering systeem',
    ],
  },
]

export default function Roadmap() {
  const [visiblePhases, setVisiblePhases] = useState<number[]>([])
  const phasesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = phasesRef.current.map((phase, index) => {
      if (!phase) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisiblePhases((prev) => [...prev, index])
              }, index * 200)
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(phase)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />
      case 'in-progress':
        return <Clock className="w-6 h-6 text-yellow-400 animate-pulse" />
      default:
        return <Circle className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-green-600'
      case 'in-progress':
        return 'from-yellow-500 to-yellow-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Ontwikkelingsroadmap</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Van concept tot productie-klaar platform in 4 maanden
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-teal-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div
                key={index}
                ref={(el) => (phasesRef.current[index] = el)}
                className={`relative transition-all duration-1000 ${
                  visiblePhases.includes(index)
                    ? 'opacity-100 transform translate-x-0'
                    : index % 2 === 0
                    ? 'opacity-0 transform -translate-x-20'
                    : 'opacity-0 transform translate-x-20'
                }`}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className={`p-8 rounded-2xl glass-dark hover:bg-white/5 transition-all duration-300 ${
                      phase.status === 'in-progress' ? 'ring-2 ring-yellow-500/50 animate-pulse-slow' : ''
                    }`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} text-white text-sm font-medium`}>
                          {phase.phase}
                        </div>
                        <span className="text-gray-400 text-sm">{phase.timeline}</span>
                        {getStatusIcon(phase.status)}
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {phase.title}
                      </h3>

                      <p className="text-gray-400 mb-4">
                        {phase.description}
                      </p>

                      <ul className="space-y-2">
                        {phase.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              phase.status === 'completed' 
                                ? 'bg-green-400' 
                                : phase.status === 'in-progress'
                                ? 'bg-yellow-400'
                                : 'bg-gray-400'
                            }`} />
                            <span className="text-sm text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative">
                      <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} ${
                        phase.status === 'in-progress' ? 'animate-ping' : ''
                      }`} />
                      <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 p-6 rounded-2xl glass-dark">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">4</div>
              <div className="text-sm text-gray-400">Maanden</div>
            </div>
            <div className="w-px h-12 bg-purple-500/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">120B</div>
              <div className="text-sm text-gray-400">Parameters</div>
            </div>
            <div className="w-px h-12 bg-purple-500/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">95%+</div>
              <div className="text-sm text-gray-400">Nauwkeurigheid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}