import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale, getMessages } from "next-intl/server";
import { Montserrat } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import { Providers } from "@/components/providers";
import { BaseLayoutProps } from "@/types/page-props";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NFW — New Fitness Workout | In Here We All Fit",
  description:
    "Pilates Reformer, Functional Training & Cardio στον Υμηττό. Fitness για κάθε σώμα. In Here We All Fit.",
  keywords: [
    "NFW",
    "New Fitness Workout",
    "Pilates Reformer",
    "Functional Training",
    "Cardio",
    "Γυμναστήριο Υμηττός",
    "Gym Athens",
  ],
  openGraph: {
    title: "NFW — New Fitness Workout",
    description: "Pilates Reformer · Functional · Cardio | In Here We All Fit",
    type: "website",
    url: "https://www.nfw.gr",
  },
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const LocaleLayout = async ({ children, params }: BaseLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;
