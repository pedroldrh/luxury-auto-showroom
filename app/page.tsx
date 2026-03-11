import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import CollectionsGrid from "@/components/CollectionsGrid";
import Concierge from "@/components/Concierge";
import Showroom from "@/components/Showroom";
import About from "@/components/About";
import RecommendBanner from "@/components/RecommendBanner";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCollection />
      <CollectionsGrid />
      <Concierge />
      <Showroom />
      <About />
      <RecommendBanner />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
