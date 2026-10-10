import { client } from "../../../../sanity/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "../../../../sanity/image";
import Link from "next/link";

export const revalidate = 10;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-[100dvh] bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <Link href="/blog" className="inline-flex items-center text-cihLightBlue hover:text-white transition-colors font-bold mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-cihLightBlue text-sm font-bold uppercase tracking-widest rounded-full">
              {post.category || "Insight"}
            </span>
            <span className="text-slate-300 font-medium">
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bricolage font-black tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        {post.mainImage && (
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-12 bg-white">
            <Image 
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        )}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12 lg:p-16">
          <div className="prose prose-lg prose-slate max-w-none font-medium leading-relaxed">
            {post.body ? (
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            ) : (
              <p>{post.excerpt || "No content available for this post yet."}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
