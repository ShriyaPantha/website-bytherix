import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { BlogPost } from "../../data/blog.constants";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blogs/${post.slug}`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-indigo-200 via-blue-200 to-cyan-200 shadow-[0_20px_60px_rgba(49,87,213,0.12)] transition-shadow duration-300 hover:shadow-[0_25px_70px_rgba(49,87,213,0.2)]"
    >
      <div className="relative aspect-[1.45/1] w-full overflow-hidden bg-white">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <button
          type="button"
          onClick={handleReadMore}
          aria-label={`Read ${post.title}`}
          className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 shadow-sm transition-all duration-300 hover:scale-110 hover:rotate-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ArrowUpRight
            size={30}
            strokeWidth={2.5}
            className="text-white"
          />
        </button>

        <div className="pr-16">
          <h2 className="text-xl font-bold leading-tight text-black sm:text-[21px]">
            {post.title}
          </h2>
        </div>

        <p className="mt-4 line-clamp-5 text-[16px] leading-6 text-black/90 sm:text-[17px]">
          {post.description}
        </p>

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={handleReadMore}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3157D5] transition-all duration-300 hover:gap-3"
          >
            Read Article
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}