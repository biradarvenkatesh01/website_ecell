import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Terminal, Globe } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16 font-sans selection:bg-[#39FF14] selection:text-black">
      {/* Background Dot matrix */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Globe size={14} className="text-[#39FF14]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">
                Node_Connection
              </span>
            </div>
            <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-8">
              Get in <br />
              <span className="text-gray-600 italic font-light">Touch.</span>
            </h1>
          </motion.div>
        </header>

        {/* --- CONTACT CHANNELS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-32">
          {[
            {
              icon: Mail,
              label: "Transmission",
              val: "ecell@uvce.ac.in",
              href: "mailto:ecell@uvce.ac.in",
            },
            {
              icon: Phone,
              label: "Direct Line",
              val: "+91 80 2296 1735",
              href: "tel:+918022961735",
            },
            {
              icon: MapPin,
              label: "HQ Coordinates",
              val: "UVCE, K.R. Circle, Bangalore",
              href: "#",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-10 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors"
            >
              <item.icon
                size={24}
                className="text-[#39FF14] mb-6 group-hover:scale-110 transition-transform"
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-2 font-bold">
                {item.label}
              </span>
              <a
                href={item.href}
                className="text-lg font-medium hover:text-[#39FF14] transition-colors tracking-tight"
              >
                {item.val}
              </a>
            </motion.div>
          ))}
        </div>

        {/* --- FORM & MAP SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <Terminal size={18} className="text-[#39FF14]" />
              <h2 className="text-3xl font-bold tracking-tighter uppercase">
                Protocol_Initiation
              </h2>
            </div>
            <ContactForm />
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14]/20 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-full min-h-[450px] border border-white/10 rounded-2xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.00161405072!2d77.58434757584102!3d12.971764615003328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16726593574d%3A0xf658b093f41639d6!2sUniversity%20Visvesvaraya%20College%20of%20Engineering%20(UVCE)!5e0!3m2!1sen!2sin!4v1709581234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
