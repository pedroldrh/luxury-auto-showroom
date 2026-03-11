import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export const metadata = {
  title: "Contact | Prestige Motors",
  description: "Get in touch with our team of luxury automobile specialists.",
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <SectionWrapper className="!pt-0">
        <AnimatedHeading subtitle="Contact Us">
          We&apos;d Love to Hear From You
        </AnimatedHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <div className="space-y-12">
              <div>
                <div className="w-8 h-px bg-gold/40 mb-6" />
                <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-3">
                  Visit Our Showroom
                </p>
                <p className="text-off-white text-lg font-heading">
                  Prestige Motors
                </p>
                <p className="text-gunmetal/60 text-sm mt-2 leading-relaxed">
                  1200 Ocean Drive, Suite 100
                  <br />
                  Miami Beach, FL 33139
                </p>
              </div>
              <div>
                <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-3">
                  Hours
                </p>
                <div className="space-y-1.5 text-sm text-gunmetal/60">
                  <p>Monday &ndash; Friday: 9:00 AM &ndash; 7:00 PM</p>
                  <p>Saturday: 10:00 AM &ndash; 5:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
              <div>
                <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-3">
                  Direct Line
                </p>
                <p className="text-off-white text-sm">+1 (305) 555-0187</p>
                <p className="text-gunmetal/40 text-sm mt-1">
                  concierge@prestigemotors.com
                </p>
              </div>
            </div>

            {/* Google Maps Embed — dark styled */}
            <div className="mt-16 aspect-[4/3] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8234!2d-80.1300!3d25.7907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzI2LjUiTiA4MMKwMDcnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prestige Motors Showroom Location"
              />
            </div>
          </div>

          {/* Form */}
          <ContactForm standalone />
        </div>
      </SectionWrapper>
    </main>
  );
}
