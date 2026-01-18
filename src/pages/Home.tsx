import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trophy,
  Users,
  Rocket,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { stats } from "../data/stats";
import { faqs, heroSlides, testimonials } from "../data";
import PartnerMarquee from "../components/PartnerMarquee";
import TestimonialMarquee from "../components/TestimonialMarquee";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Auto-play Hero logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#39FF14] selection:text-black font-sans overflow-x-hidden">
      {/* Background Matrix */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={heroSlides[currentSlide].image}
                className="w-full h-full object-cover grayscale opacity-40"
                alt="hero-bg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </motion.div>
          </AnimatePresence>

          <div className="relative text-center px-6 max-w-6xl z-10">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-[8rem] font-bold mb-8 tracking-tighter leading-[0.9]">
                {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 0 ? "text-white" : "text-gray-600"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/events"
                  className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#39FF14] transition-all duration-500"
                >
                  View Upcoming Events
                </Link>
                <Link
                  to="/about"
                  className="px-10 py-4 border border-white/10 hover:border-white/40 transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
                >
                  More About Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            <button
              onClick={prevSlide}
              className="p-4 border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
            <motion.div
              key={currentSlide}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full bg-white/40"
            />
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="bg-black py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              {
                label: "Events Conducted",
                val: `${stats.events}+`,
                icon: Rocket,
              },
              {
                label: "Students Impacted",
                val: `${stats.students}+`,
                icon: Users,
              },
              {
                label: "Prize Pool Worth",
                val: `₹${stats.prizes}+`,
                icon: Trophy,
              },
              {
                label: "Workshops Hosted",
                val: `${stats.workshops}+`,
                icon: Zap,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <span className="text-5xl font-bold tracking-tighter mb-2 group-hover:text-[#39FF14] transition-colors">
                  {stat.val}
                </span>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- PARTNERS SECTION --- */}
        <section className="py-32 bg-black overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
              <div>
                <span className="text-[#39FF14] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block text-center md:text-left font-mono">
                  Industry & Ecosystem
                </span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-center md:text-left text-white">
                  Our{" "}
                  <span className="text-zinc-700 italic font-light">
                    Partners.
                  </span>
                </h2>
              </div>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest text-center md:text-left">
                Collaborating to empower student innovation.
              </p>
            </div>
          </div>
          <PartnerMarquee />
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="py-32 bg-black overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
              <div>
                <span className="text-[#39FF14] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block text-center md:text-left font-mono">
                  Network Strength
                </span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-center md:text-left text-white">
                  Ecosystem{" "}
                  <span className="text-zinc-700 italic font-light">
                    Validation.
                  </span>
                </h2>
              </div>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest text-center md:text-left">
                Voices from mentors, alumni, and leaders.
              </p>
            </div>
          </div>

          <div className="relative flex overflow-x-hidden border-y border-white/5 bg-zinc-950/20 py-12">
            <div className="animate-marquee flex whitespace-nowrap gap-8">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="w-[350px] md:w-[450px] shrink-0 bg-zinc-900/40 border border-white/5 p-8 rounded-2xl flex flex-col justify-between whitespace-normal group hover:border-[#39FF14]/30 transition-colors duration-500"
                >
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 italic">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-10 w-10 rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-[#39FF14] font-mono text-[9px] uppercase tracking-wider">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-32 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-20">
              <div>
                <span className="text-[#39FF14] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block text-center md:text-left font-mono">
                  Support Center
                </span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-center md:text-left text-white">
                  General{" "}
                  <span className="text-zinc-700 italic font-light">FAQs.</span>
                </h2>
              </div>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest text-center md:text-left">
                Quick answers to common inquiries.
              </p>
            </div>

            <div className="max-w-4xl mx-auto border-t border-white/10">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-white/5">
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                    }
                    className="w-full py-8 flex items-start justify-between text-left group transition-all"
                  >
                    <div className="flex gap-8">
                      <span className="font-mono text-[10px] text-zinc-700 mt-2 shrink-0">
                        {faq.id < 10 ? `0${faq.id}` : faq.id}
                      </span>
                      <span
                        className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${expandedFaq === faq.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`mt-1 shrink-0 transition-transform duration-500 ${expandedFaq === faq.id ? "rotate-45 text-[#39FF14]" : "rotate-0 text-zinc-800"}`}
                    >
                      <Plus size={24} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="pl-16 pb-10 pr-10 text-zinc-400 font-light leading-relaxed text-lg max-w-2xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
