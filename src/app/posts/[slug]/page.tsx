import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getAllPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    }
}

//다이나믹라우트 페이지에서 SEO설정해주기
export async function generateMetadata({params:{slug}}: Props):Promise<Metadata> {
    const {title, description}  = await getPostData(slug);
    return {
        title,
        description
    }
}
export default async function page({params:{slug}}: Props) {
    const post  = await getPostData(slug);
    const {path, title, next, prev} = post;

return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 ">
        <Image 
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        />
        <PostContent post={post}/>
        <section className="flex shadow-md">
            {prev && <AdjacentPostCard post={prev} type="prev"/>}
            {next && <AdjacentPostCard post={next} type="next"/>}
        </section>
    </article>
)
}