import { Instagram, Linkedin, Github, Mail, ExternalLink } from "lucide-react";

interface TeamMember {
  name: string;
  post: string;
  imageUrl: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  github?: string;
}

interface TeamCardProps {
  member: TeamMember;
  isLead: boolean;
}

const TeamCard = ({ member, isLead }: TeamCardProps) => {
  // Common Social Icon Component to keep code DRY
  const Socials = ({ size = 14 }: { size?: number }) => (
    <div className="flex gap-3 mt-3">
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-500 hover:text-[#39FF14] transition-colors"
        >
          <Linkedin size={size} />
        </a>
      )}
      {member.instagram && (
        <a
          href={`https://instagram.com/${member.instagram}`}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-500 hover:text-[#39FF14] transition-colors"
        >
          <Instagram size={size} />
        </a>
      )}
      {member.github && member.github !== "" && (
        <a
          href={`https://github.com/${member.github}`}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-500 hover:text-[#39FF14] transition-colors"
        >
          <Github size={size} />
        </a>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="text-zinc-500 hover:text-[#39FF14] transition-colors"
        >
          <Mail size={size} />
        </a>
      )}
    </div>
  );

  if (isLead) {
    // HORIZONTAL LAYOUT FOR LEADS (President/VP/Heads)
    return (
      <div className="group relative bg-zinc-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-[#39FF14]/40 transition-all duration-500">
        <div className="flex flex-col sm:flex-row items-center">
          {/* Picture on Left */}
          <div className="w-full sm:w-40 h-48 sm:h-40 shrink-0 overflow-hidden">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Info on Right */}
          <div className="p-6 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white tracking-tight mb-1">
              {member.name}
            </h4>
            <p className="text-[#39FF14] font-mono text-[10px] uppercase tracking-[0.2em] mb-2">
              {member.post}
            </p>
            <Socials size={16} />
          </div>
        </div>
      </div>
    );
  }

  // VERTICAL LAYOUT FOR REGULAR MEMBERS
  return (
    <div className="group bg-zinc-950/50 border border-white/5 p-4 rounded-xl hover:border-white/20 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-bold text-white truncate group-hover:text-[#39FF14] transition-colors">
          {member.name}
        </h4>
        <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
          {member.post}
        </p>
      </div>

      <Socials size={12} />
    </div>
  );
};

export default TeamCard;
