import { OfferCard } from "@/components/ui/offer-carousel";
import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/image";
import Link from "next/link";

export const revalidate = 10;

export default async function ProgramsCatalog() {
  const sanityPrograms = await client.fetch(
    `*[_type == 'program'] | order(displayOrder asc) {
      _id,
      title,
      slug,
      shortDescription,
      targetAudience,
      duration,
      cost,
      coverImage,
      displayOrder
    }`
  );

  return (
    <div className="min-h-[100dvh] bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bricolage font-black tracking-tighter mb-6">
            Full Course Catalog
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Browse our complete collection of industry-leading programs, bootcamps, and digital transformation workshops designed to accelerate your growth.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {sanityPrograms.map((program: any, idx: number) => {
            const programSlug = program.slug?.current || "";
            const programHref = `/programs/${programSlug}`;
            
            return (
              <Link 
                key={program._id || idx} 
                href={programHref} 
                className="w-full flex justify-center group"
              >
                <OfferCard 
                  title={program.title}
                  description={`${program.shortDescription} (For: ${program.targetAudience} | Cost: ${program.cost})`}
                  tag={program.duration}
                  href={programHref}
                  className="!w-full max-w-[26rem]"
                  imageSrc={program.coverImage ? urlFor(program.coverImage).url() : "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800,c_scale/Upscale_image_remove_noise_2K_20260919135611_mctuby.jpg"}
                  brandName="Cafe Innovate Hub"
                  brandLogoSrc="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png"
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
