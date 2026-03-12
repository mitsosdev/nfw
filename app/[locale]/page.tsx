import { setRequestLocale } from "next-intl/server";
import { BasePageProps } from "@/types/page-props";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { AboutSection } from "@/components/landing/about-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { ContactSection } from "@/components/landing/contact-section";
import Footer from "@/components/footer";

const Home = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <AboutSection locale={locale} />
      <GallerySection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </div>
  );
};

export default Home;
