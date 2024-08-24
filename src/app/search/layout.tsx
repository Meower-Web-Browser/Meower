import type { Metadata } from 'next'
import '../globals.css'
import SearchHeader from '@/components/SearchHeader/SearchHeader'
// import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Google Clone',
  description: 'Goggle clone created using NextJs 14',
  icons: {
    icon: "../icons/icon.svg"
  }
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        <SearchHeader />
        {children}
      </div>
  )
}
