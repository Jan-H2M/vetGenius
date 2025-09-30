import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VetGenius - AI-Gedreven Veterinaire Assistent',
  description: 'Ondersteunt dierenartsen met intelligente diagnostische hulp voor betere dierenzorg',
  keywords: 'veterinaire AI, dierenarts software, diagnostiek, dierengeneeskunde, artificial intelligence',
  openGraph: {
    title: 'VetGenius - AI-Gedreven Veterinaire Assistent',
    description: 'Ondersteunt dierenartsen met intelligente diagnostische hulp voor betere dierenzorg',
    type: 'website',
    locale: 'nl_BE',
    url: 'https://vetgenius.ai',
    siteName: 'VetGenius',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-purple-950 via-purple-900 to-black text-white antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="relative min-h-screen flex flex-col">
            <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <main className="flex-grow relative z-10">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}