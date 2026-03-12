import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BasePageProps } from "@/types/page-props";
import { ServicePageContent } from "@/components/landing/service-page-content";

export const metadata: Metadata = {
  title: "Functional Training | NFW — New Fitness Workout",
  description:
    "Functional Training στον Υμηττό. Χτίσε πραγματική δύναμη με TRX, kettlebells & bodyweight. Για όλα τα επίπεδα. In Here We All Fit.",
};

export default async function FunctionalPage({ params }: BasePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ServicePage.functional");
  const tShared = await getTranslations("ServicePage");

  return (
    <ServicePageContent
      serviceKey="functional"
      t={(key) => t(key as Parameters<typeof t>[0])}
      tShared={(key) => tShared(key as Parameters<typeof tShared>[0])}
    />
  );
}
