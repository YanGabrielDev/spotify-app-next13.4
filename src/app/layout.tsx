import '..//styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400",
    variable: '--font-poppins'
})

export const metadata = {
  title: 'Your Spotify Tracks',
  description: 'Seus status do Spotify em poucos segundos usando Nextjs e SpotifyAPI',
  icons: {
    icon: '/Group.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
