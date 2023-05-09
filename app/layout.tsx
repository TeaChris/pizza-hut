import Navbar from './components/Navbar'
import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Bermuda Pizza Hut',
  description:
    'Come enjoy our delicious wood-fired pizzas, made with fresh, locally-sourced ingredients and served hot and crispy, straight from our brick oven to your table.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
