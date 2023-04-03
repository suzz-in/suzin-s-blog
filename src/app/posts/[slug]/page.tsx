import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";
import Image from "next/image";
import {AiTwotoneCalendar} from "react-icons/ai"

type Props = {
    params: {
        slug: string;
    }
}

export default async function page({params:{slug}}: Props) {
    const post = await getPostData(slug);


return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 ">
        <Image 
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={760}
        height={420}
        />
        <section className="flex flex-col p-4">
            <div className="flex items-center self-end text-sky-600">
                <AiTwotoneCalendar />
                <p className="font-semibold ml-2">{post.date.toString()}</p>
            </div>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-xl font-bold">{post.description}</p>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8"/>
        <MarkdownViewer content={post.content}/>
        </section>
    </article>
)
}