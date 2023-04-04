import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Post",
    description : "풀스택 관련 블로그 글"
}

export default async function Posts() {
    const posts = await getAllPosts();
    const categories = [...new Set(posts.map(post => post.category))]
return (<FilterablePosts posts={posts} categoires={categories}/>)
}