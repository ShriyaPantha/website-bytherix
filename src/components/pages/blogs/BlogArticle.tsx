import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import BlogBackground from "../blogs/BlogBackground";
import { BLOG_POSTS } from "../../../data/blog.constants";

export default function BlogArticle() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0E1F5A]">
            Blog not found
          </h1>

          <button
            type="button"
            onClick={() => navigate("/blogs")}
            className="mt-6 rounded-full bg-[#3157D5] px-6 py-3 font-semibold text-white transition hover:bg-[#2546B8]"
          >
            Back to Blogs
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <BlogBackground />

      <section className="relative z-10 px-5 pb-20 pt-24 sm:px-8 lg:px-16 lg:pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/blogs")}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3157D5] transition hover:gap-3"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </button>

          {/* Article Card */}
          <div className="overflow-hidden rounded-[30px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            {/* Featured Image */}
            <div className="aspect-[16/8] w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Article Content */}
            <article className="px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
              {/* Title */}
              <h1 className="max-w-4xl text-3xl font-bold leading-tight text-[#0E1F5A] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              {/* Description / Intro */}
              <p className="mt-8 text-lg leading-8 text-black/80">
                {post.description}
              </p>

              {/* Full Article */}
              <div className="mt-10 space-y-7">
                {post.content.map((block, index) => {
                  /* Heading */
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="pt-6 text-2xl font-bold leading-tight text-[#0E1F5A] sm:text-3xl"
                      >
                        {block.content as string}
                      </h2>
                    );
                  }

                  /* Paragraph */
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-base leading-8 text-black/75 sm:text-[17px]"
                      >
                        {block.content as string}
                      </p>
                    );
                  }

                  /* List */
                  if (block.type === "list") {
                    return (
                      <ul
                        key={index}
                        className="space-y-3 pl-6 text-base leading-8 text-black/75 sm:text-[17px]"
                      >
                        {(block.content as string[]).map(
                          (item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="list-disc pl-2"
                            >
                              {item}
                            </li>
                          ),
                        )}
                      </ul>
                    );
                  }

                  /* Quote */
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={index}
                        className="my-8 rounded-r-2xl border-l-4 border-[#3157D5] bg-[#F4F7FF] px-6 py-5 text-base font-semibold leading-8 text-[#0E1F5A] sm:text-lg"
                      >
                        {block.content as string}
                      </blockquote>
                    );
                  }

                  return null;
                })}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}