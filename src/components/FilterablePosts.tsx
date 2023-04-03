'use client'

import { Post } from "@/service/posts"
import { useState } from "react";
import Categories from "./Categories";
import PostGrid from "./PostGrid";

type Props = {
    posts: Post[];
    categoires : string[];
}
const ALL_POST = "All Posts"

export default function FilterablePosts({posts, categoires}: Props) {
    const [selected, setSelected] = useState(ALL_POST);
    const filtered = selected === ALL_POST 
    ? posts
     : posts.filter((post)=> post.category === selected);

return <section className="flex m-4">
    <PostGrid posts={filtered}/>
    <Categories 
    categories={[ALL_POST, ...categoires]} selected={selected} onClick={setSelected}/>
</section>
}