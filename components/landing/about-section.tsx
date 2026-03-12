import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { NFW } from "@/lib/general/constants";

interface AboutSectionProps {
  locale: string;
}

export async function AboutSection({ locale }: AboutSectionProps) {
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <section id="about" className="relative bg-neutral-950 py-24 lg:py-32 overflow-hidden">
      {/* Decorative purple line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={NFW.images.about}
                alt="NFW Community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-nfw-purple/10" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-nfw-purple/30 rounded-lg" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-nfw-purple/10 rounded-lg" />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-nfw-purple" />
              <span className="text-nfw-purple-light text-xs font-bold uppercase tracking-[0.3em]">
                {t("title")}
              </span>
            </div>

            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl lg:text-5xl mb-8">
              {t("heading")}
            </h2>

            <div className="space-y-5">
              <p className="text-white/60 leading-relaxed">
                {t("p1")}
              </p>
              <p className="text-white/60 leading-relaxed">
                {t("p2")}
              </p>
              <p className="text-white/80 font-semibold text-lg">
                {t("p3")}
              </p>
            </div>

            {/* Purple accent bar */}
            <div className="mt-10 h-1 w-20 bg-nfw-purple" />
          </div>
        </div>
      </div>
    </section>
  );
}
