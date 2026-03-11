"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedHeading from "./ui/AnimatedHeading";
import Button from "./ui/Button";

const services = [
  {
    title: "Vehicle Sourcing",
    description:
      "Access to the rarest automobiles worldwide through our exclusive network of collectors and manufacturers.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Worldwide Delivery",
    description:
      "White-glove transportation and enclosed shipping to any destination on the globe.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Custom Builds",
    description:
      "Commission bespoke specifications directly with manufacturers through our privileged partnerships.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Investment Advisory",
    description:
      "Expert guidance on collectible automobiles as alternative investments with proven appreciation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function Concierge() {
  return (
    <SectionWrapper className="relative noise-overlay">
      <div className="relative z-10">
        <AnimatedHeading subtitle="Private Client Services">
          Your Personal Concierge
        </AnimatedHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.03] mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-10 lg:p-12 bg-black hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="text-gold/70 mb-8 group-hover:text-gold transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl text-off-white mb-3">
                {service.title}
              </h3>
              <p className="text-gunmetal text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/contact" variant="secondary">
            Speak with a Specialist
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
