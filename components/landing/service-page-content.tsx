import Image from "next/image";
import { ArrowLeft, ChevronRight, Dumbbell, Shield, Sparkles, Target, Users, Zap } from "lucide-react";
import { NFW } from "@/lib/general/constants";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

type ServiceKey = (typeof NFW.services)[number];

const benefitIcons = [Target, Zap, Shield, Sparkles];
const nfwIcons = [Dumbbell, Users, ChevronRight];

interface ServicePageContentProps {
  serviceKey: ServiceKey;
  t: (key: string) => string;
  tShared: (key: string) => string;
}

export const ServicePageContent = ({ serviceKey, t, tShared }: ServicePageContentProps) => {
  const heroImage = NFW.images.services[serviceKey];

  const benefits = [1, 2, 3, 4].map((n) => ({
    icon: benefitIcons[n - 1],
    title: t(`why${n}title`),
    text: t(`why${n}text`),
  }));

  const nfwReasons = [1, 2, 3].map((n) => ({
    icon: nfwIcons[n - 1],
    title: t(`nfw${n}title`),
    text: t(`nfw${n}text`),
  }));

  return (
    <div className="min-h-screen bg-black">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-nfw-purple-light transition-colors duration-300 cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            {tShared("backToHome")}
          </Link>
          <Image
            src={NFW.images.logo}
            alt={NFW.fullName}
            width={60}
            height={26}
            className="h-6 w-auto brightness-0 invert"
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt={t("heroTitle")}
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-nfw-purple/30" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-nfw-purple" />
            <span className="text-nfw-purple-light text-xs font-bold uppercase tracking-[0.3em]">
              New Fitness Workout
            </span>
            <div className="h-px w-10 bg-nfw-purple" />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl lg:text-8xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-4 text-lg font-light tracking-wider text-white/60 md:text-xl">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-white/70 leading-relaxed md:text-xl">
            {t("intro")}
          </p>
        </div>
      </section>

      {/* Why This Program */}
      <section className="py-20 lg:py-28 bg-neutral-950">
        <div className="absolute left-0 w-full h-px bg-white/5" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-8 bg-nfw-purple" />
              <span className="text-nfw-purple-light text-xs font-bold uppercase tracking-[0.3em]">
                {tShared("whyProgram")}
              </span>
              <div className="h-px w-8 bg-nfw-purple" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group flex gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-nfw-purple/10 border border-nfw-purple/20 group-hover:bg-nfw-purple/20 transition-colors duration-300">
                  <benefit.icon className="size-5 text-nfw-purple-light" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why at NFW */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-8 bg-nfw-purple" />
              <span className="text-nfw-purple-light text-xs font-bold uppercase tracking-[0.3em]">
                {tShared("whyNfw")}
              </span>
              <div className="h-px w-8 bg-nfw-purple" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {nfwReasons.map((reason) => (
              <div
                key={reason.title}
                className="group relative p-8 rounded-lg border border-white/5 bg-neutral-950 hover:border-nfw-purple/30 transition-all duration-300"
              >
                <div className="absolute top-0 left-8 w-12 h-1 bg-nfw-purple rounded-b-full" />
                <div className="flex size-10 items-center justify-center rounded-lg bg-nfw-purple/10 mb-5">
                  <reason.icon className="size-5 text-nfw-purple-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect + Who is it for */}
      <section className="py-20 lg:py-28 bg-neutral-950">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What to expect */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-nfw-purple" />
                <span className="text-nfw-purple-light text-xs font-bold uppercase tracking-[0.3em]">
                  {tShared("whatToExpect")}
                </span>
              </div>
              <p className="text-white/60 leading-relaxed">{t("expect")}</p>
            </div>

            {/* Who is it for */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-nfw-purple" />
                <span className="text-nfw-purple-light text-xs font-bold uppercase tracking-[0.3em]">
                  {tShared("whoIsItFor")}
                </span>
              </div>
              <p className="text-white/60 leading-relaxed">{t("whoFor")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl mb-4">
            {t("heroTitle")}
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-widest mb-10">
            {NFW.slogan}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-nfw-purple hover:bg-nfw-purple-light text-white font-bold uppercase tracking-widest text-sm px-10 py-6 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <a href={`${NFW.phoneHref}`}>{tShared("bookNow")}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 font-bold uppercase tracking-widest text-sm px-10 py-6 cursor-pointer"
            >
              <a href={NFW.social.instagram.url} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
