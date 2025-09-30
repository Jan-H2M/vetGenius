'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
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
  AlertCircle,
  Heart,
  Activity,
  Sparkles
} from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import { useState, useEffect } from 'react';

// Lottie animation data (veterinary/medical themed)
const veterinaryAnimation = {
  "v": "5.5.7",
  "fr": 60,
  "ip": 0,
  "op": 120,
  "w": 500,
  "h": 500,
  "nm": "Vet Animation",
  "ddd": 0,
  "assets": [],
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 4,
    "nm": "Heart Beat",
    "sr": 1,
    "ks": {
      "o": {"a": 0, "k": 100},
      "r": {"a": 0, "k": 0},
      "p": {"a": 0, "k": [250, 250, 0]},
      "a": {"a": 0, "k": [0, 0, 0]},
      "s": {
        "a": 1,
        "k": [
          {"t": 0, "s": [100, 100, 100], "e": [110, 110, 100]},
          {"t": 30, "s": [110, 110, 100], "e": [100, 100, 100]},
          {"t": 60, "s": [100, 100, 100]}
        ]
      }
    },
    "shapes": [{
      "ty": "gr",
      "it": [{
        "ty": "sh",
        "d": 1,
        "ks": {
          "a": 0,
          "k": {
            "i": [[0, -20], [20, 0], [0, 20], [-20, 0]],
            "o": [[0, 20], [-20, 0], [0, -20], [20, 0]],
            "v": [[20, 0], [0, 20], [-20, 0], [0, -20]],
            "c": true
          }
        }
      }, {
        "ty": "fl",
        "c": {"a": 0, "k": [0.584, 0.341, 0.886, 1]},
        "o": {"a": 0, "k": 100}
      }]
    }]
  }]
};

// Animation variants for Framer Motion
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

interface ClientHomeProps {
  translations: any;
}

export default function AnimatedClientHome({ translations: t }: ClientHomeProps) {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-50" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">VetGenius</span>
            </motion.div>
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                {t.navigation.features}
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">
                {t.navigation.howItWorks}
              </a>
              <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all">
                {t.navigation.requestAccess}
              </a>
              <LanguageSelector />
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Lottie Animation */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6"
              >
                <Activity className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-purple-700 text-sm font-medium">AI-Powered Innovation</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t.hero.title}
              </motion.h1>
              
              <motion.p 
                className="text-2xl text-purple-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {t.hero.subtitle}
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {t.hero.tagline}
              </motion.p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                <Lottie 
                  animationData={veterinaryAnimation} 
                  loop={true}
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full filter blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Reveal Animation */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-b from-white to-gray-50 relative z-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              {t.about.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-6"
            >
              {t.about.paragraph1}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600"
            >
              {t.about.paragraph2}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Features Section with Stagger Animation */}
      <section id="features" className="py-16 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            {t.features.title}
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Stethoscope, key: 'multimodal', color: 'from-purple-500 to-pink-500' },
              { icon: FlaskConical, key: 'labAnalysis', color: 'from-blue-500 to-cyan-500' },
              { icon: BookOpen, key: 'knowledgeBase', color: 'from-green-500 to-emerald-500' },
              { icon: Brain, key: 'learning', color: 'from-orange-500 to-red-500' },
              { icon: Shield, key: 'safety', color: 'from-indigo-500 to-purple-500' },
              { icon: Zap, key: 'integration', color: 'from-yellow-500 to-orange-500' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.features.items[feature.key].title}
                  </h3>
                  <p className="text-gray-600">
                    {t.features.items[feature.key].description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section with Timeline Animation */}
      <section id="how-it-works" className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            {t.howItWorks.title}
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              { icon: Upload, step: 1, key: 'input' },
              { icon: Cpu, step: 2, key: 'analysis' },
              { icon: Lightbulb, step: 3, key: 'insights' },
              { icon: CheckCircle, step: 4, key: 'decision' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start mb-8 relative"
                >
                  {index < 3 && (
                    <motion.div
                      className="absolute left-6 top-12 w-0.5 h-20 bg-gradient-to-b from-purple-600 to-purple-300"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      style={{ transformOrigin: 'top' }}
                    />
                  )}
                  
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center mr-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  
                  <div className="flex-grow">
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-2"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {t.howItWorks.steps[item.key].title}
                    </motion.h3>
                    <p className="text-gray-600">
                      {t.howItWorks.steps[item.key].description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section with Floating Animation */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        
        <div className="container mx-auto px-6 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-4"
          >
            {t.technology.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          >
            {t.technology.subtitle}
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, key: 'model', delay: 0 },
              { icon: BookOpen, key: 'rag', delay: 0.1 },
              { icon: TrendingUp, key: 'rl', delay: 0.2 },
              { icon: Lightbulb, key: 'explainable', delay: 0.3 }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: tech.delay }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <motion.div 
                    className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 2
                    }}
                  >
                    <Icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t.technology.items[tech.key].title}
                  </h3>
                  <p className="text-gray-400">
                    {t.technology.items[tech.key].description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section with Animated Counters */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            {t.benefits.title}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, key: 'saveTime', value: 70, suffix: '%' },
              { icon: Target, key: 'accuracy', value: 95, suffix: '%+' },
              { icon: TrendingUp, key: 'confidence', value: 24, suffix: '/7' },
              { icon: BookOpen, key: 'education', value: 1000, suffix: '+' },
              { icon: Euro, key: 'revenue', value: 30, suffix: '%' },
              { icon: Shield, key: 'errors', value: 85, suffix: '%' }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-purple-600" />
                  </motion.div>
                  
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    <AnimatedCounter end={benefit.value} suffix={benefit.suffix} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.benefits.items[benefit.key].title}
                  </h3>
                  <p className="text-gray-600">
                    {t.benefits.items[benefit.key].description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-4"
          >
            {t.security.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            {t.security.subtitle}
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lock, key: 'gdpr', color: 'from-blue-500 to-blue-600' },
              { icon: ShieldCheck, key: 'encryption', color: 'from-green-500 to-green-600' },
              { icon: UserCheck, key: 'validation', color: 'from-purple-500 to-purple-600' },
              { icon: AlertCircle, key: 'uncertainty', color: 'from-orange-500 to-orange-600' }
            ].map((security, index) => {
              const Icon = security.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${security.color} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.security.items[security.key].title}
                  </h3>
                  <p className="text-gray-600">
                    {t.security.items[security.key].description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with Pulse Animation */}
      <section id="contact" className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 relative z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-white/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              {t.cta.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-purple-100 mb-8"
            >
              {t.cta.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.cta.formTitle}</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder={t.cta.form.name}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder={t.cta.form.email}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder={t.cta.form.practice}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                />
                <motion.select 
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option>{t.cta.form.interest.demo}</option>
                  <option>{t.cta.form.interest.pilot}</option>
                  <option>{t.cta.form.interest.research}</option>
                  <option>{t.cta.form.interest.investment}</option>
                </motion.select>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  placeholder={t.cta.form.message}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all font-medium shadow-lg"
                >
                  {t.cta.form.submit}
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-purple-100"
            >
              <p className="mb-2">{t.cta.benefits.title}</p>
              <ul className="text-left inline-block">
                {t.cta.benefits.items.map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">VetGenius</span>
              </div>
              <p className="text-gray-400">
                {t.footer.tagline}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    {t.navigation.features}
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    {t.navigation.howItWorks}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    {t.navigation.contact}
                  </a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          >
            <p>© 2025 VetGenius.ai. {t.footer.rights}.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}