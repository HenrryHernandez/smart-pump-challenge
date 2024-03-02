import { PageWrapper } from "@/components/PageWrapper";
import { Banner } from "@/components/landing-page/Banner";
import { AboutUs } from "@/components/landing-page/AboutUs";
import { FillerCards } from "@/components/landing-page/FillerCards";
import { Services } from "@/components/landing-page/Services";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { Pricing } from "@/components/landing-page/Pricing";
import { Footer } from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <PageWrapper className="p-0">
      <main className="w-full flex flex-col center relative landing-bg">
        <Banner />

        <AboutUs />

        <FillerCards />

        <Services />

        <HowItWorks />

        <Pricing />

        <Footer />
      </main>
    </PageWrapper>
  );
}
