'use client'
// 서버단에 둬야할지 클라이언트 단에 둬야할지 고민..
import { useForm } from "react-hook-form";

export default function SendEmail() {
    const {register, handleSubmit, reset, formState:{isSubmitting, isSubmitSuccessful}} = useForm()
    
    const onSubmit = (data) => {
        console.log(data)
    }

return (<form  onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-12 w-2/4 h-5/6 bg-slate-600 px-16 py-4 rounded-3xl">
    <p className="text-white">Your Email</p>
    <input type="text" {...register("Email")} className="w-full mb-4 h-8"/>
    <p className="text-white ">Subject</p>
    <input type="text" {...register("subject")} className="w-full mb-4 h-8"/>
    <p className="text-white">Message</p>
    <textarea {...register("message")} className="w-full mb-2 h-40"/>
    <button className="w-full bg-lime-200 mb-2">Submit</button>
</form>)
}