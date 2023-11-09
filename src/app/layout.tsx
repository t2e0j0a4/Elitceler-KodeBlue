import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Web Portal | Kode Blue Technologies',
  description: 'Live emergency cases Dashboard for Kode Blue Hospitals.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
