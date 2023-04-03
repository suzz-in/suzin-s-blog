import Link from "next/link";

export default function Header() {

return (  <header className="flex justify-between items-center p-2 border-b-2 border-indigo-900">
<Link href="/"><h1 className='py-4 text-3xl font-bold'>{"Suzin's Blog"}</h1></Link>
<nav>
  <Link href="/" className='px-2'>home</Link>
  <Link href="/about" className='px-2'>about</Link>
  <Link href="/posts" className='px-2'>posts</Link>
  <Link href="/contact" className='px-2'>contact</Link>
</nav>
</header>)
}