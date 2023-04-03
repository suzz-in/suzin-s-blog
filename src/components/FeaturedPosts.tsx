import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {

    const posts = await getFeaturedPosts()
return <section>
    <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
    <PostGrid posts={posts}/>
</section>
}