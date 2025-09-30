import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-purple-950 via-purple-900 to-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}