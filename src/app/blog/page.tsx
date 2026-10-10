import { client } from "../../../sanity/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/image";

export const revalidate = 10;

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == 'post'] | order(publishedAt desc) { 
    _id,
    title, 
    slug, 
    excerpt, 
    mainImage, 
    categories, 
    publishedAt 
  }`);

  return (
    <div className="min-h-[100dvh] bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bricolage font-black tracking-tighter mb-6">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Stories, tips, and insights from the Cafe Innovate Hub community.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <article key={post._id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer">
                <Link href={`/blog/${post.slug?.current || ''}`} className="flex flex-col h-full">
                  <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden shrink-0">
                    <Image 
                      src={post.mainImage ? urlFor(post.mainImage).url() : "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800/Upscale_image_remove_noise_2K_20260919135611_mctuby.jpg"}
                      alt={post.title || "Blog post image"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4 shrink-0">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-cihBlue text-xs font-bold uppercase tracking-widest rounded-full">
                        {post.categories && post.categories.length > 0 ? post.categories[0] : "Insight"}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cihBlue transition-colors line-clamp-2 shrink-0">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto shrink-0">
                      <span className="text-cihLightBlue font-bold text-sm uppercase tracking-widest group-hover:text-cihBlue transition-colors flex items-center gap-2 group/link">
                        Read More 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/link:translate-x-1 transition-transform">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-slate-700">Check back soon for new articles!</h3>
          </div>
        )}
      </section>
    </div>
  );
}
