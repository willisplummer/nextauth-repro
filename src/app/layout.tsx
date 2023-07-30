import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <NextAuthProvider>
              <div className="min-h-screen">
                  {children}
              </div>
            </NextAuthProvider>
        </body>
    </html>
  )
}
