import Configurator from "@/components/Configurator";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Customization | Prestige Motors",
  description: "Configure your dream vehicle with our bespoke customization tool.",
};

export default function CustomizationPage() {
  return (
    <main className="pt-32">
      <SectionWrapper className="!pt-0">
        <AnimatedHeading subtitle="Bespoke Configuration">
          Design Your Vision
        </AnimatedHeading>
        <p className="text-center text-gunmetal max-w-2xl mx-auto mb-16 -mt-8">
          Explore our bespoke customization experience. Select from the finest
          materials, colors, and finishes to create an automobile that is
          uniquely yours.
        </p>
        <Configurator />
        <div className="text-center mt-16">
          <Button href="/contact" variant="secondary">
            Submit Configuration Request
          </Button>
        </div>
      </SectionWrapper>
    </main>
  );
}
