import { Nanum_Gothic_Coding, Nanum_Myeongjo, Raleway } from 'next/font/google'
import './global.css'

const nanum = Nanum_Myeongjo({
  variable: '--font-copy',
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  preload: true,
})

const nanumGothic = Nanum_Gothic_Coding({
  variable: '--font-display',
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true,
})

const raleway = Raleway({
  variable: '--font-logo',
  subsets: ['latin'],
  preload: true,
})

export const metadata = {
  title: 'Shaelin Bishop',
  description: 'Vancouver-based author.',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="background-primary scroll-smooth" suppressHydrationWarning>
      {/* <html lang="en" className="snap-y snap-mandatory scroll-smooth background-primary" suppressHydrationWarning> */}
      <body className={`${nanum.variable} ${nanumGothic.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  )
}
