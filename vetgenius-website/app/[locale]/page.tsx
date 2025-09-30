import { getTranslations } from 'next-intl/server';
import AnimatedClientHome from '../../components/AnimatedClientHome';

export default async function Home() {
  const t = await getTranslations();
  
  const translations = {
    navigation: {
      features: t('navigation.features'),
      howItWorks: t('navigation.howItWorks'),
      requestAccess: t('navigation.requestAccess'),
      contact: t('navigation.contact'),
    },
    hero: {
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      tagline: t('hero.tagline'),
    },
    about: {
      title: t('about.title'),
      paragraph1: t('about.paragraph1'),
      paragraph2: t('about.paragraph2'),
    },
    features: {
      title: t('features.title'),
      items: {
        multimodal: {
          title: t('features.items.multimodal.title'),
          description: t('features.items.multimodal.description'),
        },
        labAnalysis: {
          title: t('features.items.labAnalysis.title'),
          description: t('features.items.labAnalysis.description'),
        },
        knowledgeBase: {
          title: t('features.items.knowledgeBase.title'),
          description: t('features.items.knowledgeBase.description'),
        },
        learning: {
          title: t('features.items.learning.title'),
          description: t('features.items.learning.description'),
        },
        safety: {
          title: t('features.items.safety.title'),
          description: t('features.items.safety.description'),
        },
        integration: {
          title: t('features.items.integration.title'),
          description: t('features.items.integration.description'),
        },
      },
    },
    howItWorks: {
      title: t('howItWorks.title'),
      steps: {
        input: {
          title: t('howItWorks.steps.input.title'),
          description: t('howItWorks.steps.input.description'),
        },
        analysis: {
          title: t('howItWorks.steps.analysis.title'),
          description: t('howItWorks.steps.analysis.description'),
        },
        insights: {
          title: t('howItWorks.steps.insights.title'),
          description: t('howItWorks.steps.insights.description'),
        },
        decision: {
          title: t('howItWorks.steps.decision.title'),
          description: t('howItWorks.steps.decision.description'),
        },
      },
    },
    technology: {
      title: t('technology.title'),
      subtitle: t('technology.subtitle'),
      items: {
        model: {
          title: t('technology.items.model.title'),
          description: t('technology.items.model.description'),
        },
        rag: {
          title: t('technology.items.rag.title'),
          description: t('technology.items.rag.description'),
        },
        rl: {
          title: t('technology.items.rl.title'),
          description: t('technology.items.rl.description'),
        },
        explainable: {
          title: t('technology.items.explainable.title'),
          description: t('technology.items.explainable.description'),
        },
      },
    },
    benefits: {
      title: t('benefits.title'),
      items: {
        saveTime: {
          metric: t('benefits.items.saveTime.metric'),
          title: t('benefits.items.saveTime.title'),
          description: t('benefits.items.saveTime.description'),
        },
        accuracy: {
          metric: t('benefits.items.accuracy.metric'),
          title: t('benefits.items.accuracy.title'),
          description: t('benefits.items.accuracy.description'),
        },
        confidence: {
          metric: t('benefits.items.confidence.metric'),
          title: t('benefits.items.confidence.title'),
          description: t('benefits.items.confidence.description'),
        },
        education: {
          metric: t('benefits.items.education.metric'),
          title: t('benefits.items.education.title'),
          description: t('benefits.items.education.description'),
        },
        revenue: {
          metric: t('benefits.items.revenue.metric'),
          title: t('benefits.items.revenue.title'),
          description: t('benefits.items.revenue.description'),
        },
        errors: {
          metric: t('benefits.items.errors.metric'),
          title: t('benefits.items.errors.title'),
          description: t('benefits.items.errors.description'),
        },
      },
    },
    security: {
      title: t('security.title'),
      subtitle: t('security.subtitle'),
      items: {
        gdpr: {
          title: t('security.items.gdpr.title'),
          description: t('security.items.gdpr.description'),
        },
        encryption: {
          title: t('security.items.encryption.title'),
          description: t('security.items.encryption.description'),
        },
        validation: {
          title: t('security.items.validation.title'),
          description: t('security.items.validation.description'),
        },
        uncertainty: {
          title: t('security.items.uncertainty.title'),
          description: t('security.items.uncertainty.description'),
        },
      },
    },
    cta: {
      title: t('cta.title'),
      subtitle: t('cta.subtitle'),
      formTitle: t('cta.formTitle'),
      form: {
        name: t('cta.form.name'),
        email: t('cta.form.email'),
        practice: t('cta.form.practice'),
        message: t('cta.form.message'),
        submit: t('cta.form.submit'),
        interest: {
          demo: t('cta.form.interest.demo'),
          pilot: t('cta.form.interest.pilot'),
          research: t('cta.form.interest.research'),
          investment: t('cta.form.interest.investment'),
        },
      },
      benefits: {
        title: t('cta.benefits.title'),
        items: [
          t('cta.benefits.items.0'),
          t('cta.benefits.items.1'),
          t('cta.benefits.items.2'),
          t('cta.benefits.items.3'),
        ],
      },
    },
    footer: {
      tagline: t('footer.tagline'),
      quickLinks: t('footer.quickLinks'),
      contact: t('footer.contact'),
      location: t('footer.location'),
      rights: t('footer.rights'),
    },
  };

  return <AnimatedClientHome translations={translations} />;
}