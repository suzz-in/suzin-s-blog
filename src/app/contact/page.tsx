import { GoMarkGithub } from 'react-icons/go'
import { SiTistory } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"
import SendEmail from '@/components/SendEmail'

export default function Contact() {

return (
    <>
    <div className="mx-auto mt-8 w-2/4 text-center">
    <h1 className="text-3xl font-bold mb-2">Contact Me !</h1>
    <span >o_o_su_jin_@naver.com</span>
    <div className='flex justify-center mt-4'>
        <GoMarkGithub size="45" className='mr-5 mt-1'/>
        <SiTistory size="35" className='mr-4 mt-2'/>
        <AiFillInstagram size="50" className='mr-4'/>
    </div>
    <h1 className="text-3xl font-bold mt-8">Or Send me an email</h1>
    </div>
    <SendEmail />
    </>
)
}