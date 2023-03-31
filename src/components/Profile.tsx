import Image from 'next/image'
import Link from 'next/link'
import ttette from "../../public/images/ttette.png"

export default function Profile() {

return (
    <div className="mx-auto mt-8 w-1/4 text-center">
    <Image src={ttette} alt="mainIMG" width={150} height={150} className="rounded-full block mx-auto"/>
    <h2 className='py-4 text-2xl font-bold'>welcome! Suzin's Blog</h2>
    <p className='text-lg font-semibold'>Frontend Developer</p>
    <p className='text-sm'>회고하는 개발자, Jo sujin(Julien)</p>
    <Link href="/contact"><button className='mt-4 p-1 w-auto bg-rose-300 rounded-md'>Contact Me!😋</button></Link>
    </div>
)
}