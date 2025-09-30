'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Mail, Building, User, MessageSquare } from 'lucide-react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practice: '',
    message: '',
    interest: 'demo',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        practice: '',
        message: '',
        interest: 'demo',
      })
      setIsSubmitted(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const earlyAdopterBenefits = [
    'Exclusieve toegang tot nieuwe functies',
    'Directe invloed op productontwikkeling',
    'Speciale lanceringstarieven',
    'Persoonlijke ondersteuning bij implementatie',
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Klaar voor de Toekomst?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Word early adopter en krijg exclusieve toegang tot VetGenius. 
              Sluit u aan bij vooruitstrevende dierenartsenpraktijken die de toekomst van diergeneeskunde vormgeven.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-8 rounded-2xl glass-dark">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Word Early Adopter
                </h3>
                <ul className="space-y-4 mb-8">
                  {earlyAdopterBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-teal-900/30 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Beperkte plaatsen beschikbaar</span>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-xs font-medium">
                      EARLY ACCESS
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">
                    Nog 12 plaatsen
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-teal-500 rounded-full" style={{ width: '76%' }} />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl glass-dark">
                <h4 className="font-semibold mb-4 text-white">Contact Informatie</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <a href="mailto:info@vetgenius.ai" className="hover:text-white transition-colors">
                      info@vetgenius.ai
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-purple-400" />
                    <span>Gent, België</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 rounded-2xl glass-dark">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Vraag Toegang Aan
                  </h3>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Naam *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500"
                        placeholder="Dr. Jan Jansen"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500"
                        placeholder="jan@dierenkliniek.be"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Praktijk/Kliniek
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="practice"
                        value={formData.practice}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500"
                        placeholder="Dierenkliniek Gent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Interesse in
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white"
                    >
                      <option value="demo">Product demonstratie</option>
                      <option value="pilot">Pilotprogramma deelname</option>
                      <option value="research">Onderzoekssamenwerking</option>
                      <option value="invest">Investeringsmogelijkheden</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Bericht (optioneel)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 resize-none"
                        placeholder="Vertel ons over uw praktijk en interesse..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg font-semibold text-lg hover:from-purple-500 hover:to-teal-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
                  >
                    Verstuur Aanvraag
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-500 p-5 mx-auto mb-6">
                    <CheckCircle className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    Bedankt voor uw aanvraag!
                  </h3>
                  <p className="text-gray-400">
                    We nemen binnen 24 uur contact met u op om de volgende stappen te bespreken.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}