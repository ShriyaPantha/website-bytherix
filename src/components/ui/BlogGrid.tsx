import { BLOG_POSTS } from "../../data/blog.constants";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {BLOG_POSTS.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}