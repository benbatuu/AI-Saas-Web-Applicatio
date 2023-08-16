import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius',
  description: 'Genius was created to help you in every way.',
  keywords:'genius, artificial intelligent, genius ai, ai planner, ai manager, conversation ai, code generation ai, image generation ai, music generation ai, video generation ai'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
