import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Google Clone',
  description: 'Goggle clone created using NextJs 14',
  icons: {
    icon: "./icons/icon.svg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer/>
      </body>
    </html>
  )
}
