"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { NFW } from "@/lib/general/constants";
import { Button } from "@/components/ui/button";

interface HeroContentProps {
  slogan: string;
  subtitle: string;
  cta: string;
  scrollDown: string;
}

export const HeroContent = ({ slogan, subtitle, cta, scrollDown }: HeroContentProps) => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src={NFW.images.hero}
        alt={NFW.fullName}
        fill
        className="object-cover object-center opacity-40"
        priority
        sizes="100vw"
      />

      {/* Purple accent line — brand motif */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-nfw-purple/30" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Logo */}
        <Image
          src={NFW.images.logo}
          alt={NFW.fullName}
          width={240}
          height={102}
          className="mb-6 h-20 w-auto brightness-0 invert md:h-28"
          priority
        />

        {/* Purple line separator */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-nfw-purple md:w-20" />
          <span className="text-nfw-purple-light text-xs font-bold uppercase tracking-[0.3em]">
            New Fitness Workout
          </span>
          <div className="h-px w-12 bg-nfw-purple md:w-20" />
        </div>

        {/* Slogan */}
        <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
          {slogan}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm font-light uppercase tracking-[0.25em] text-white/60 md:text-base">
          {subtitle}
        </p>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className="mt-10 bg-nfw-purple hover:bg-nfw-purple-light text-white font-bold uppercase tracking-widest text-sm px-10 py-6 cursor-pointer transition-all duration-300 hover:scale-105"
        >
          <a href="#contact">{cta}</a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-[10px] uppercase tracking-widest">{scrollDown}</span>
        <ChevronDown className="size-4 text-white/40" />
      </div>
    </section>
  );
};
