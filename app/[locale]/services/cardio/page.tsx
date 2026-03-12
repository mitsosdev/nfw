import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BasePageProps } from "@/types/page-props";
import { ServicePageContent } from "@/components/landing/service-page-content";

export const metadata: Metadata = {
  title: "Cardio | NFW — New Fitness Workout",
  description:
    "Cardio προγράμματα στον Υμηττό. HIIT, steady-state & circuits. Κάψε θερμίδες, χτίσε αντοχή. In Here We All Fit.",
};

export default async function CardioPage({ params }: BasePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ServicePage.cardio");
  const tShared = await getTranslations("ServicePage");

  return (
    <ServicePageContent
      serviceKey="cardio"
      t={(key) => t(key as Parameters<typeof t>[0])}
      tShared={(key) => tShared(key as Parameters<typeof tShared>[0])}
    />
  );
}
