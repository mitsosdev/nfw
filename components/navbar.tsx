"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NFW } from "@/lib/general/constants";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/examples/language-switcher";

const navLinks = ["services", "about", "gallery", "contact"] as const;

export const Navbar = () => {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <a href="#hero" className="relative z-10 cursor-pointer">
            <Image
              src={NFW.images.logo}
              alt={NFW.fullName}
              width={80}
              height={34}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-nfw-purple-light transition-colors duration-300 cursor-pointer"
              >
                {t(link)}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-nfw-purple hover:bg-nfw-purple-light text-white font-semibold uppercase tracking-wider text-xs px-6 cursor-pointer"
            >
              <a href="#contact">{t("startToday")}</a>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Slide in from right */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleNavClick}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-black border-l border-white/10 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-2 pt-24 px-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={handleNavClick}
                className="text-lg font-semibold uppercase tracking-widest text-white/70 hover:text-nfw-purple-light transition-colors duration-300 py-3 border-b border-white/5 cursor-pointer"
              >
                {t(link)}
              </a>
            ))}
            <div className="pt-6 flex flex-col gap-4">
              <LanguageSwitcher />
              <Button
                asChild
                className="bg-nfw-purple hover:bg-nfw-purple-light text-white font-semibold uppercase tracking-wider w-full cursor-pointer"
              >
                <a href="#contact" onClick={handleNavClick}>
                  {t("startToday")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
