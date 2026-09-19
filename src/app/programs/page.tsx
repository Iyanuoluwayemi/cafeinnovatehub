import { OfferCard } from "@/components/ui/offer-carousel";

export default function ProgramsCatalog() {
  const allPrograms = [
    {
      title: "Graphic Design Bootcamp",
      description: "A free training for beginners ready to add design to their skill set.",
      tag: "8 Weeks",
      imageSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800,c_scale/Learn_Graphic_Design_from_Scratch_6_hgcjru.png",
      brandName: "Cafe Innovate Hub",
      brandLogoSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png",
      href: "/programs/graphic-design"
    },
    {
      title: "Digital Marketing",
      description: "Practical marketing skills to help any business attract customers and sell online.",
      tag: "4 Weeks",
      imageSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800,c_scale/DMM_pz1swq.png",
      brandName: "Cafe Innovate Hub",
      brandLogoSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png",
      href: "/programs/digital-marketing"
    },
    {
      title: "Driving Digital Adoption for MSMEs (D-DAM)",
      description: "Our flagship Digital Transformation program designed to help MSMEs adopt the digital tools and systems to grow.",
      tag: "Coming Soon",
      imageSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800,c_scale/Upscale_image_remove_noise_2K_20260919135611_mctuby.jpg",
      brandName: "Cafe Innovate Hub",
      brandLogoSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png",
      href: "/programs/d-dam"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bricolage font-black tracking-tight mb-6">
            Full Course Catalog
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Browse our complete collection of industry-leading programs, bootcamps, and digital transformation workshops designed to accelerate your growth.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {allPrograms.map((program, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <OfferCard {...program} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
