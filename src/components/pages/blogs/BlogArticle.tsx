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
          <button
            type="button"
            onClick={() => navigate("/blogs")}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3157D5] transition hover:gap-3"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </button>

          <div className="overflow-hidden rounded-[30px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <div className="aspect-[16/8] w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>

            <article className="px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
              <h1 className="max-w-4xl text-3xl font-bold leading-tight text-[#0E1F5A] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="mt-8 text-lg leading-8 text-black/80">
                {post.description}
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-black/75">
                <p>
                  Technology continues to change the way businesses,
                  communities, and individuals interact with the digital
                  world. Nepal is also moving toward a more technology-driven
                  future where innovative solutions can create new
                  opportunities.
                </p>

                <p>
                  From artificial intelligence and cybersecurity to robotics
                  and automation, these technologies can help solve practical
                  problems and create sustainable digital ecosystems.
                </p>

                <p>
                  Building the right infrastructure, developing skilled
                  talent, and encouraging innovation will be important steps
                  toward creating a stronger technology ecosystem in Nepal.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}