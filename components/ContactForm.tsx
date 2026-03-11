"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedHeading from "./ui/AnimatedHeading";
import Button from "./ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface ContactFormProps {
  standalone?: boolean;
}

export default function ContactForm({ standalone = false }: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", interest: "", message: "" });
    }
  };

  const inputClass =
    "w-full bg-white/[0.03] text-off-white text-sm px-5 py-4 focus:outline-none focus:bg-white/[0.06] transition-all duration-500 placeholder:text-gunmetal/40";

  const Wrapper = standalone ? "div" : SectionWrapper;
  const wrapperProps = standalone ? { className: "" } : { id: "contact" };

  return (
    <Wrapper {...wrapperProps}>
      {!standalone && (
        <AnimatedHeading subtitle="Get in Touch">
          Begin Your Journey
        </AnimatedHeading>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-px h-16 bg-gold/40 mx-auto mb-8" />
            <h3 className="font-heading text-2xl text-off-white mb-3">
              Thank You
            </h3>
            <p className="text-gunmetal">
              A member of our team will be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-red-400/80 text-xs mt-1 px-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-red-400/80 text-xs mt-1 px-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <input
                type="tel"
                placeholder="Phone (Optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" className="bg-charcoal">Vehicle Interest</option>
                <option value="exotics" className="bg-charcoal">Exotics</option>
                <option value="grand-touring" className="bg-charcoal">Grand Touring</option>
                <option value="luxury-sedans" className="bg-charcoal">Luxury Sedans</option>
                <option value="performance-suvs" className="bg-charcoal">Performance SUVs</option>
                <option value="limited-editions" className="bg-charcoal">Limited Editions</option>
              </select>
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="text-red-400/80 text-xs mt-1 px-1">{errors.message}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button type="submit" variant="primary">
                Schedule Appointment
              </Button>
              <Button type="submit" variant="secondary">
                Request Callback
              </Button>
            </div>
          </form>
        )}
      </motion.div>
    </Wrapper>
  );
}
