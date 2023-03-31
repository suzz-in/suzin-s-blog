import './globals.css'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'


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
        <header className="flex justify-between items-center p-2 border-b-2 border-indigo-900">
          <h1 className='py-4 text-3xl font-bold'>Suzin's Blog</h1>
          <nav>
            <Link href="/" className='px-2'>home</Link>
            <Link href="/about" className='px-2'>about</Link>
            <Link href="/posts" className='px-2'>posts</Link>
            <Link href="/contact" className='px-2'>contact</Link>
          </nav>
        </header>
        {children}
        </body>
    </html>
  )
}
