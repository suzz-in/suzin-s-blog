'use client'

import { sendContactEmail } from "@/service/contact"
import { ChangeEvent, FormEvent, useState } from "react"
import Banner, { BannerData } from "./Banner"


interface Mail {
    from: string,
    subject: string,
    message: string
}
const DEFAULT_DATA={from:"", subject:"", message:""}
export default function SendEmail() {
    const [form, setForm] = useState<Mail>(DEFAULT_DATA)
    const [banner, setBanner] = useState<BannerData | null>(null)
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const {name, value} = e.target;
        setForm(prev=>({...prev, [name]: value}))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendContactEmail(form)
        .then(()=> {
            setBanner({
                message: "메일 발송완료!", state: "success"
            });
            setForm(DEFAULT_DATA);
        })
        .catch(()=>{
            setBanner({
                message: "메일 전송 실패..", state: "error"
            });
        })
        .finally(()=> {
            setTimeout(()=>{
                setBanner(null)
            }, 3000)
        })
    }


return (
    <section className="w-full max-w-md mx-auto">
    {banner && <Banner banner={banner}/>}
    <form onSubmit={onSubmit}   className='w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white'>
    <label htmlFor="from" className='font-semibold'>Your Email</label>
    <input 
    type="email" 
    id="from" 
    name="from" 
    required 
    autoFocus 
    value={form.from} 
    onChange={onChange} 
    className="w-full mb-4 h-8 text-black"/>
    <label htmlFor="subject" className='font-semibold'>Subject</label>
    <input 
    type="text"
    id="subject" 
    name="subject" 
    required 
    value={form.subject} 
    onChange={onChange} 
    className="w-full mb-4 h-8 text-black"/>
    <label htmlFor="message" className='font-semibold'>Message</label>
    <textarea 
    rows={10}
    id="message" 
    name="message" 
    required 
    value={form.message} 
    onChange={onChange} 
    className='text-black'/>
    <button className="w-full bg-lime-200 mb-2 text-black">Submit</button>
</form>
</section>

)
}