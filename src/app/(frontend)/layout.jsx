import '@/styles/global.css'
import { Nanum_Myeongjo, Nanum_Gothic_Coding, Nanum_Myeongjo, Raleway } from 'next/font/google'

const nanum = Nanum_Myeongjo({
  variable: '--font-main',
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})

const nanumGothic = Nanum_Gothic_Coding({
  variable: '--font-accent',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const raleway = Raleway({
  variable: '--font-logo',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Shaelin Bishop',
  description: 'Vancouver-based author.',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nanum.variable} ${nanumGothic.variable} ${raleway.variable} scroll-smooth`}
      >
        {children}
      </body>
    </html>
  )
}
