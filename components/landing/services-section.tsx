import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { NFW } from "@/lib/general/constants";

interface ServicesSectionProps {
  locale: string;
}

export async function ServicesSection({ locale }: ServicesSectionProps) {
  setRequestLocale(locale);
  const t = await getTranslations("Services");

  const services = NFW.services.map((key) => ({
    key,
    name: t(`${key}.name`),
    description: t(`${key}.description`),
    image: NFW.images.services[key],
  }));

  return (
    <section id="services" className="relative bg-black py-24 lg:py-32">
      {/* Section Header */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-nfw-purple" />
            <span className="text-nfw-purple-light text-xs font-bold uppercase tracking-[0.3em]">
              {t("title")}
            </span>
            <div className="h-px w-8 bg-nfw-purple" />
          </div>
          <p className="text-white/50 text-sm uppercase tracking-widest">
            {t("subtitle")}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

              {/* Purple accent on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-nfw-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <span className="text-nfw-purple-light text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                  New Fitness
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white lg:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
