import { Terminal } from "lucide-react";

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="w-[300px] md:w-[420px] shrink-0 bg-[#050505] border border-white/5 p-5 rounded-lg group/card hover:border-[#39FF14]/40 transition-all duration-500 mx-3 flex flex-col backdrop-blur-xl">
      {/* Terminal-style Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-[#39FF14] opacity-50" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500">
            Feed_Ref_{testimonial.id || "0x_SEC"}
          </span>
        </div>
        <div className="h-1 w-1 rounded-full bg-[#39FF14] animate-pulse" />
      </div>

      {/* Body: Tightened leading and fixed text wrapping */}
      <div className="mb-6">
        <p className="text-[12px] md:text-[13px] font-light leading-snug text-gray-300 whitespace-normal break-words italic">
          "{testimonial.text}"
        </p>
      </div>

      {/* Footer: Identity Node */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
        <div className="h-8 w-8 rounded bg-zinc-800 shrink-0 overflow-hidden border border-white/10">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col text-left overflow-hidden">
          <h4 className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-tighter truncate">
            {testimonial.name}
          </h4>
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#39FF14] font-mono truncate">
            {testimonial.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
