import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin, Phone, Mail } from "lucide-react";
import { NFW } from "@/lib/general/constants";

interface ContactSectionProps {
  locale: string;
}

export async function ContactSection({ locale }: ContactSectionProps) {
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  const contactItems = [
    {
      icon: MapPin,
      label: t("address"),
      value: NFW.address.full,
      href: NFW.googleMaps.url,
      external: true,
    },
    {
      icon: Phone,
      label: t("phone"),
      value: NFW.phone,
      href: NFW.phoneHref,
      external: false,
    },
    {
      icon: Mail,
      label: t("email"),
      value: NFW.email,
      href: NFW.emailHref,
      external: false,
    },
  ];

  return (
    <section id="contact" className="relative bg-neutral-950 py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900">
            <iframe
              src={NFW.googleMaps.embedUrl}
              className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 invert opacity-80"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("findUs")}
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-5 cursor-pointer"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-nfw-purple/10 border border-nfw-purple/20 group-hover:bg-nfw-purple/20 transition-colors duration-300">
                  <item.icon className="size-5 text-nfw-purple-light" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                    {item.label}
                  </span>
                  <p className="mt-1 text-white/80 font-medium group-hover:text-nfw-purple-light transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Instagram */}
            <a
              href={NFW.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 cursor-pointer"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-nfw-purple/10 border border-nfw-purple/20 group-hover:bg-nfw-purple/20 transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="size-5 fill-nfw-purple-light" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                  Instagram
                </span>
                <p className="mt-1 text-white/80 font-medium group-hover:text-nfw-purple-light transition-colors duration-300">
                  {NFW.social.instagram.handle}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
