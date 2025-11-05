import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chronicles of the Eternal Realm',
  description: 'An epic fantasy web novel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
