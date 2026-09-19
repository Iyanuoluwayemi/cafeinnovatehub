import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      title: "How to Build a Consistent Brand on a Budget",
      excerpt: "Discover the essential tools and strategies you need to create a professional brand presence without hiring an expensive agency.",
      category: "Tips and Resources",
      date: "Oct 12, 2026",
      image: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800/Upscale_image_remove_noise_2K_20260919135611_mctuby.jpg"
    },
    {
      title: "From Zero to 50: The D-DAM Impact Story",
      excerpt: "Read how our latest cohort of MSMEs transformed their physical operations into streamlined digital ecosystems in just 4 weeks.",
      category: "Impact Stories",
      date: "Oct 05, 2026",
      image: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800/Learn_Graphic_Design_from_Scratch_6_hgcjru.png"
    },
    {
      title: "Announcing the Next Digital Marketing Cohort",
      excerpt: "Ready to stop guessing and start selling? Applications for our highly anticipated Digital Marketing Masterclass are now open.",
      category: "Announcements",
      date: "Sep 28, 2026",
      image: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800/DMM_pz1swq.png"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bricolage font-black tracking-tight mb-6">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Stories, tips, and insights from the Cafe Innovate Hub community.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-cihBlue text-xs font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cihBlue transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-cihLightBlue font-bold text-sm uppercase tracking-widest group-hover:text-cihBlue transition-colors flex items-center gap-2">
                    Read More 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
