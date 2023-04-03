import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const sans = Open_Sans({ subsets: ['latin'] })

//SEO설정
export const metadata = {
  title: 'Suzin의 블로그',
  description: 'Suzin, 나의 개인블로그입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  )
}
