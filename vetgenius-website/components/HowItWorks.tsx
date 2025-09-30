'use client'

import { useEffect, useRef, useState } from 'react'
import { Upload, Cpu, Lightbulb, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Invoer Patiëntgegevens',
    description: 'Upload eenvoudig labresultaten, medische beelden of beschrijf symptomen via tekst of spraak. VetGenius accepteert alle gangbare bestandsformaten.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Cpu,
    title: 'AI Analyse',
    description: 'Ons geavanceerde AI-model verwerkt alle input met behulp van onze uitgebreide veterinaire kennisbank. De analyse houdt rekening met soort, ras, leeftijd en medische geschiedenis.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Lightbulb,
    title: 'Ontvang Inzichten',
    description: 'Krijg binnen seconden diagnostische suggesties, behandelopties en relevante onderzoeksreferenties. Alle aanbevelingen worden voorzien van duidelijke uitleg.',
    color: 'from-purple-500 to-teal-500',
  },
  {
    icon: CheckCircle,
    title: 'Neem Weloverwogen Beslissingen',
    description: 'Gebruik de AI-inzichten ter ondersteuning van uw klinische oordeel. VetGenius is een hulpmiddel dat uw expertise aanvult, niet vervangt.',
    color: 'from-teal-600 to-purple-600',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Hoe Het Werkt</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Van patiëntgegevens tot diagnostische inzichten in vier eenvoudige stappen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-purple-900/30 to-teal-900/30 border border-purple-500/30'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-2.5 flex-shrink-0 ${
                        activeStep === index ? 'scale-110' : ''
                      } transition-transform duration-300`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white flex items-center">
                        <span className="mr-3 text-purple-400">Stap {index + 1}</span>
                        {step.title}
                      </h3>
                      <p className={`text-gray-400 transition-all duration-300 ${
                        activeStep === index ? 'opacity-100' : 'opacity-70'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden glass-dark">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-teal-900/20" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  {steps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                          activeStep === index
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} p-6 mx-auto mb-6 animate-pulse-slow`}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 max-w-md mx-auto">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index
                        ? 'w-8 bg-gradient-to-r from-purple-500 to-teal-500'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-2xl blur-2xl -z-10 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  )
}