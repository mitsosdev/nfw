import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BasePageProps } from "@/types/page-props";
import { ServicePageContent } from "@/components/landing/service-page-content";

export const metadata: Metadata = {
  title: "Pilates Reformer | NFW — New Fitness Workout",
  description:
    "Pilates Reformer στον Υμηττό. Ενδυνάμωσε τον κορμό σου, βελτίωσε την ευλυγισία σου. Μικρά groups, επαγγελματικός εξοπλισμός. In Here We All Fit.",
};

export default async function PilatesReformerPage({ params }: BasePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ServicePage.pilatesReformer");
  const tShared = await getTranslations("ServicePage");

  return (
    <ServicePageContent
      serviceKey="pilatesReformer"
      t={(key) => t(key as Parameters<typeof t>[0])}
      tShared={(key) => tShared(key as Parameters<typeof tShared>[0])}
    />
  );
}
