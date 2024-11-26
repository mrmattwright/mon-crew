import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MonCrew',
  description: 'Celebrating the talented individuals that were a part of Montoux.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full bg-[#F9F7F1]`}>
        <header className="border-b border-neutral-200 bg-[#F9F7F1]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <nav className="flex items-center space-x-6">
                <Link href="/" className="text-xl font-semibold">
                  Our Team
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
                    Home
                  </Link>
                </div>
              </nav>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-neutral-200 py-8 mt-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-600">
            Made with 🫂 from your CTO.
          </div>
        </footer>
      </body>
    </html>
  )
}

