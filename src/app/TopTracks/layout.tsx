import { Footer } from '@/components/Footer'
import '../../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400",
    variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-black`}>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
