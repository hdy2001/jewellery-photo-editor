import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Jewellery Photo Editor With AI - One-Click Background Removal & Enhancement`,
  description: "Enhance your jewellery product photos with AI-powered tools. Instantly remove backgrounds, adjust lighting, and create professional-grade images for eCommerce and social media.",
  keywords: ["jewellery photo editor", "jewellery photo editor online", "jewellery photoshop", "jewellery editor app", "background for jewellery photography"],
  canonicalUrlRelative: "/",
});

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion />
        {/* <Pricing /> */}
        {/* <FAQ /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
