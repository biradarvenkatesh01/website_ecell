import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Target, Eye, Sparkles, History } from "lucide-react";
import { teamData } from "../data/team";
import TeamCard from "../components/TeamCard";

const formatTeamName = (key: string): string => {
  const formatted = key.replace(/([A-Z])/g, " $1");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const isLead = (post: string): boolean => {
  const lower = post.toLowerCase();
  return ["president", "lead", "head", "vice president"].some((r) =>
    lower.includes(r),
  );
};

const About = () => {
  const [selectedYear, setSelectedYear] = useState(teamData[0]?.year || "");
  const selectedTeam = teamData.find((team) => team.year === selectedYear);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16 font-sans selection:bg-[#39FF14] selection:text-black">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER SECTION --- */}
        <section className="mb-32">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold font-mono">
                Who we are
              </span>
            </div>
            <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-8">
              About <br />
              <span className="text-gray-600 italic font-light">
                E-Cell UVCE.
              </span>
            </h1>
          </div>
        </section>

        {/* --- UNIFIED INSTITUTIONAL & E-CELL CONTEXT --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-40">
          {/* 1. About UVCE: The Foundation (Full Width Top) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 relative p-8 md:p-12 bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden group hover:bg-zinc-900/40 transition-all duration-700"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#39FF14]/5 blur-[100px]" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="text-[#39FF14] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 font-mono">
                Established 1917
              </span>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white mb-8">
                About{" "}
                <span className="text-zinc-700 italic font-light">UVCE.</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed font-light text-lg max-w-5xl">
                The{" "}
                <b className="text-zinc-300">
                  University Visvesvaraya College of Engineering
                </b>{" "}
                was established by
                <b className="text-zinc-300">
                  {" "}
                  Bharat Ratna Sir M Visvesvaraya
                </b>
                . As the first engineering college in Karnataka and fifth in
                India, UVCE has pioneered technical education for over a
                century. Today, it remains a premier institution offering 8
                undergraduate and 24 postgraduate programs, dedicated to
                delivering high-quality technical excellence and fostering the
                next generation of global engineers.
              </p>
            </div>
          </motion.div>

          {/* 2. Our Vision (Left Side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 relative p-8 md:p-12 bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden group hover:bg-zinc-900/40 transition-all duration-700"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#39FF14]/50 transition-colors mb-6">
                <Eye className="h-6 w-6 text-[#39FF14]" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-white mb-6">
                Our Vision
              </h2>
              <p className="text-zinc-500 leading-relaxed font-light text-base">
                To foster a dynamic ecosystem where aspiring entrepreneurs are
                empowered with resources, mentorship, and networking
                opportunities to transform their ideas into impactful ventures.
                Through inclusive programs and a culture of innovation, we
                strive to cultivate a new generation of visionary leaders
                dedicated to driving positive change and creating a more
                prosperous future.
              </p>
            </div>
          </motion.div>

          {/* 3. Our Mission (Right Side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 relative p-8 md:p-12 bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden group hover:bg-zinc-900/40 transition-all duration-700"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#39FF14]/50 transition-colors mb-6">
                <Target className="h-6 w-6 text-[#39FF14]" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-white mb-6">
                Our Mission
              </h2>
              <p className="text-zinc-500 leading-relaxed font-light text-base">
                To inspire, educate, and support aspiring entrepreneurs through
                comprehensive resources and opportunities, fostering a culture
                of innovation and collaboration to catalyse the growth of
                impactful ventures.
              </p>
            </div>
          </motion.div>

          {/* 4. Legacy & History (Full Width Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 relative p-8 md:p-12 bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden group hover:bg-zinc-900/40 transition-all duration-700"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#39FF14]/5 blur-[100px] group-hover:bg-[#39FF14]/10 transition-all" />

            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-12">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#39FF14]/50 transition-colors mb-6">
                  <History className="h-6 w-6 text-[#39FF14]" />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
                  History
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                <p className="text-zinc-500 leading-relaxed font-light text-sm md:text-base">
                  The Entrepreneurship Cell of UVCE, founded in{" "}
                  <b className="text-zinc-300 font-medium">
                    2014 by Tejas Narayan
                  </b>
                  , stands tall as a student-run body with the goal of fostering
                  an{" "}
                  <b className="text-zinc-400 font-medium">
                    entrepreneurial culture
                  </b>
                  . In 2019, the club was re-organized with significant{" "}
                  <b className="text-zinc-400 font-medium">
                    support from the alumni
                  </b>
                  .
                </p>

                <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
                  Through workshops, seminars, and flagship events, we guide
                  students from{" "}
                  <b className="text-zinc-400 font-medium">
                    ideation to execution
                  </b>
                  . The E-Cell envisions nurturing the{" "}
                  <b className="text-zinc-400 font-medium">
                    innovative potential
                  </b>{" "}
                  of every student, invigorated to bring them one step closer to
                  their entrepreneurial vision.
                </p>

                <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
                  From networking and business modelling to{" "}
                  <b className="text-zinc-400 font-medium">investor pitches</b>,
                  E-Cell strives to provide a platform to holistically develop,
                  including{" "}
                  <b className="text-zinc-400 font-medium">
                    direct interactions with the finance world
                  </b>{" "}
                  to expand the horizon of opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- TEAM SECTION --- */}
        <section className="py-32 border-t border-white/5">
          <div className="flex flex-col items-center text-center mb-24 gap-8">
            <div>
              <span className="text-[#39FF14] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block font-mono">
                Core Leadership & Members
              </span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                The{" "}
                <span className="text-zinc-700 italic font-light">Team.</span>
              </h2>
            </div>

            <div className="flex bg-zinc-900/50 p-1 rounded-full border border-white/10 backdrop-blur-xl">
              {teamData.map((team) => (
                <button
                  key={team.year}
                  onClick={() => setSelectedYear(team.year)}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                    selectedYear === team.year
                      ? "bg-[#39FF14] text-black shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {team.year}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {selectedTeam ? (
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-32"
              >
                {Object.entries(selectedTeam).map(([teamName, members]) => {
                  if (
                    teamName === "year" ||
                    !Array.isArray(members) ||
                    members.length === 0
                  )
                    return null;

                  const leads = members.filter((m) => isLead(m.post));
                  const regularMembers = members.filter((m) => !isLead(m.post));

                  return (
                    <div key={teamName}>
                      <div className="flex items-center gap-4 mb-16">
                        <div className="h-[1px] flex-grow bg-gradient-to-l from-white/10 to-transparent" />
                        <h3 className="text-sm font-mono text-[#39FF14] uppercase tracking-[0.4em]">
                          {formatTeamName(teamName)}
                        </h3>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
                      </div>

                      {leads.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                          {leads.map((member, index) => (
                            <TeamCard
                              key={`lead-${index}`}
                              member={member}
                              isLead={true}
                            />
                          ))}
                        </div>
                      )}

                      {regularMembers.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                          {regularMembers.map((member, index) => (
                            <TeamCard
                              key={`member-${index}`}
                              member={member}
                              isLead={false}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="text-center py-40">
                <p className="text-zinc-600 font-mono text-xs animate-pulse tracking-widest uppercase">
                  Retrieving Council Records...
                </p>
              </div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};

export default About;
