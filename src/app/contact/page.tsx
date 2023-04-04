import { GoMarkGithub } from 'react-icons/go'
import { SiTistory } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"
import SendEmail from '@/components/SendEmail'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact Me",
    description : "suzin, 나와 연락하기"
}

const LINKS = [
    { icon : <GoMarkGithub size="45" className='mr-5 mt-1'/>, url: "https://github.com/suzz-in" },
    { icon : <SiTistory size="35" className='mr-4 mt-2'/>, url: "https://gonggongnote.tistory.com/"},
    { icon: <AiFillInstagram size="50" className='mr-4'/>, url: "https://www.instagram.com/sujzz__/"},
]
export default function Contact() {

return (
    <>
    <div className="mx-auto mt-8 w-2/4 text-center">
    <h1 className="text-3xl font-bold mb-2">Contact Me !</h1>
    <span >o_o_su_jin_@naver.com</span>
    <div className='flex justify-center mt-4'>
        {LINKS.map((link, index)=> <a key={index} href={link.url} target='_blank' rel='noreferrer'>{link.icon}</a>)}
    </div>
    <h1 className="text-3xl font-bold mt-8">Or Send me an email</h1>
    </div>
    <SendEmail/>
    </>
)
}