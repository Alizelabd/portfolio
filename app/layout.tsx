import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Aleiz-Baher | Front-End Developer',
  description: 'Personal portfolio website showcasing my work as a Front-End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${kanit.className} bg-dark text-white`}>
        {children}
      </body>
    </html>
  )
}