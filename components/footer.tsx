import Image from "next/image";
import { NFW } from "@/lib/general/constants";
import { getTranslations } from "next-intl/server";

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale, namespace: "Footer" });

  return (
    <footer className="w-full bg-black border-t border-white/5 py-10">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
        {/* Logo */}
        <Image
          src={NFW.images.logo}
          alt={NFW.fullName}
          width={60}
          height={26}
          className="h-6 w-auto brightness-0 invert opacity-50"
        />

        {/* Social */}
        <a
          href={NFW.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-nfw-purple-light transition-colors duration-300 cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>

        {/* Copyright */}
        <p className="text-xs text-white/20 tracking-wider">
          &copy; {new Date().getFullYear()} {NFW.fullName}. {t("rights")}
        </p>

        <p className="text-[10px] text-white/10 tracking-wider">
          {t("madeBy")}{" "}
          <a
            href="https://hexaigon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/30 transition-colors"
          >
            Hexaigon
          </a>
        </p>
      </div>
    </footer>
  );
}
