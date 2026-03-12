import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroContent } from "./hero-content";

interface HeroSectionProps {
  locale: string;
}

export async function HeroSection({ locale }: HeroSectionProps) {
  setRequestLocale(locale);
  const t = await getTranslations("Hero");

  return (
    <HeroContent
      slogan={t("slogan")}
      subtitle={t("subtitle")}
      cta={t("cta")}
      scrollDown={t("scrollDown")}
    />
  );
}
