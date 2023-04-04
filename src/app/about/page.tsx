import Profile from "@/components/Profile";

const TITLE_CLASS ='text-2xl font-bold text-gray-800 my-2'
export default function About() {

return (
    <>
    <Profile />
<section className="w-9/12 bg-gray-100 mx-auto mt-6 rounded-md text-center p-8">
    <h1 className={TITLE_CLASS}>Who Am I ?</h1>
    <p>회고하는 프론트엔드 개발자입니다</p>
    <h2  className={TITLE_CLASS}>Skills</h2>
    <p>React, Next.js</p>
</section>
</>
)
}