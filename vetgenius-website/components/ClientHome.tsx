'use client';

import { 
  Stethoscope, 
  FlaskConical, 
  BookOpen, 
  Brain, 
  Shield, 
  Zap,
  Upload,
  Cpu,
  Lightbulb,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Euro,
  Mail,
  MapPin,
  Phone,
  Lock,
  ShieldCheck,
  UserCheck,
  AlertCircle
} from 'lucide-react'
import LanguageSelector from '@/components/LanguageSelector';

interface ClientHomeProps {
  translations: any;
}

export default function ClientHome({ translations: t }: ClientHomeProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">VetGenius</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600">{t.navigation.features}</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">{t.navigation.howItWorks}</a>
              <a href="#contact" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                {t.navigation.requestAccess}
              </a>
              <LanguageSelector />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {t.hero.title}
          </h1>
          <p className="text-2xl text-purple-600 mb-4">
            {t.hero.subtitle}
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.hero.tagline}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.about.title}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-gray-600">
              {t.about.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.features.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                key: 'multimodal'
              },
              {
                icon: FlaskConical,
                key: 'labAnalysis'
              },
              {
                icon: BookOpen,
                key: 'knowledgeBase'
              },
              {
                icon: Brain,
                key: 'learning'
              },
              {
                icon: Shield,
                key: 'safety'
              },
              {
                icon: Zap,
                key: 'integration'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.features.items[feature.key].title}
                  </h3>
                  <p className="text-gray-600">
                    {t.features.items[feature.key].description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.howItWorks.title}</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                icon: Upload,
                step: 1,
                key: 'input'
              },
              {
                icon: Cpu,
                step: 2,
                key: 'analysis'
              },
              {
                icon: Lightbulb,
                step: 3,
                key: 'insights'
              },
              {
                icon: CheckCircle,
                step: 4,
                key: 'decision'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold">{item.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t.howItWorks.steps[item.key].title}
                    </h3>
                    <p className="text-gray-600">
                      {t.howItWorks.steps[item.key].description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">{t.technology.title}</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            {t.technology.subtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                key: 'model'
              },
              {
                icon: BookOpen,
                key: 'rag'
              },
              {
                icon: TrendingUp,
                key: 'rl'
              },
              {
                icon: Lightbulb,
                key: 'explainable'
              }
            ].map((tech, index) => {
              const Icon = tech.icon
              return (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t.technology.items[tech.key].title}
                  </h3>
                  <p className="text-gray-400">
                    {t.technology.items[tech.key].description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                key: 'saveTime'
              },
              {
                icon: Target,
                key: 'accuracy'
              },
              {
                icon: TrendingUp,
                key: 'confidence'
              },
              {
                icon: BookOpen,
                key: 'education'
              },
              {
                icon: Euro,
                key: 'revenue'
              },
              {
                icon: Shield,
                key: 'errors'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {t.benefits.items[benefit.key].metric}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.benefits.items[benefit.key].title}
                  </h3>
                  <p className="text-gray-600">
                    {t.benefits.items[benefit.key].description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">{t.security.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t.security.subtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lock,
                key: 'gdpr'
              },
              {
                icon: ShieldCheck,
                key: 'encryption'
              },
              {
                icon: UserCheck,
                key: 'validation'
              },
              {
                icon: AlertCircle,
                key: 'uncertainty'
              }
            ].map((security, index) => {
              const Icon = security.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.security.items[security.key].title}
                  </h3>
                  <p className="text-gray-600">
                    {t.security.items[security.key].description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
            <p className="text-xl text-purple-100 mb-8">
              {t.cta.subtitle}
            </p>
            
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.cta.formTitle}</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t.cta.form.name}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="email"
                    placeholder={t.cta.form.email}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder={t.cta.form.practice}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-purple-500"
                />
                <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-purple-500">
                  <option>{t.cta.form.interest.demo}</option>
                  <option>{t.cta.form.interest.pilot}</option>
                  <option>{t.cta.form.interest.research}</option>
                  <option>{t.cta.form.interest.investment}</option>
                </select>
                <textarea
                  placeholder={t.cta.form.message}
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  {t.cta.form.submit}
                </button>
              </form>
            </div>

            <div className="mt-8 text-purple-100">
              <p className="mb-2">{t.cta.benefits.title}</p>
              <ul className="text-left inline-block">
                <li>✓ {t.cta.benefits.items[0]}</li>
                <li>✓ {t.cta.benefits.items[1]}</li>
                <li>✓ {t.cta.benefits.items[2]}</li>
                <li>✓ {t.cta.benefits.items[3]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold">VetGenius</span>
              </div>
              <p className="text-gray-400">
                {t.footer.tagline}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">{t.navigation.features}</a></li>
                <li><a href="#how-it-works" className="hover:text-white">{t.navigation.howItWorks}</a></li>
                <li><a href="#contact" className="hover:text-white">{t.navigation.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {t.footer.location}
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@vetgenius.ai
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +32 476 44 18 37
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 VetGenius.ai. {t.footer.rights}.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}