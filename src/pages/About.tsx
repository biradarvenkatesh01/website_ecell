import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Github, Instagram, Eye, Target } from "lucide-react";
import { teamData } from "../data/team";

interface Member {
  name: string;
  post: string;
  imageUrl?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
}

// Format team section titles nicely
const formatTeamName = (key: string): string => {
  const formatted = key.replace(/([A-Z])/g, " $1");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

// Identify lead roles for emphasis
const isLead = (post: string): boolean => {
  const lower = post.toLowerCase();
  const leadRoles = ["president", "lead", "head", "vice president"];
  return leadRoles.some((r) => lower.includes(r));
};

const About = () => {
  const [selectedYear, setSelectedYear] = useState(teamData[0]?.year || "");
  const selectedTeam = teamData.find((team) => team.year === selectedYear);

  const timelineEvents = [
    {
      year: "2015",
      title: "E-Cell Founded",
      description: "Started with a vision to foster entrepreneurship at UVCE",
    },
    {
      year: "2017",
      title: "First E-Summit",
      description: "Inaugural entrepreneurship summit with 200+ attendees",
    },
    {
      year: "2019",
      title: "Incubation Program Launch",
      description: "Started our flagship startup incubation initiative",
    },
    {
      year: "2021",
      title: "Virtual Pivot",
      description: "Successfully adapted to digital format during pandemic",
    },
    {
      year: "2023",
      title: "Best E-Cell Award",
      description:
        "Recognized as top campus entrepreneurship cell in Karnataka",
    },
    {
      year: "2024",
      title: "Milestone Achievements",
      description: "200+ events and 1500+ students impacted",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
            About E-Cell UVCE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Empowering the next generation of entrepreneurs through knowledge,
            resources, and community.
          </p>
        </motion.div>

        {/* --- Vision & Mission Section (Restored) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8"
          >
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading student-driven entrepreneurship platform that
              inspires and enables students to transform innovative ideas into
              impactful ventures, contributing to India's startup ecosystem and
              fostering a culture of innovation and problem-solving.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg p-8"
          >
            <div className="bg-secondary-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To cultivate entrepreneurial thinking by organizing impactful
              events, providing mentorship, facilitating access to resources,
              and building a supportive community where students can learn,
              experiment, fail, and succeed in their entrepreneurial journeys.
            </p>
          </motion.div>
        </div>

        {/* --- Journey Section (Restored) --- */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A decade of fostering entrepreneurship and creating impact
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="text-primary font-bold text-xl mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Team Section (Your Latest Version) --- */}
        <section className="py-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
              Our Team
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              Dedicated individuals working to make entrepreneurship accessible
              to all.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {teamData.map((team) => (
                <button
                  key={team.year}
                  onClick={() => setSelectedYear(team.year)}
                  className={`px-3 py-1.5 sm:px-5 sm:py-2 md:px-6 rounded-full text-sm sm:text-base font-semibold transition-all shadow-sm ${
                    selectedYear === team.year
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Team {team.year}
                </button>
              ))}
            </div>
          </motion.div>

          {selectedTeam ? (
            <div className="space-y-10 sm:space-y-16">
              {Object.entries(selectedTeam).map(([teamName, members]) => {
                if (
                  teamName === "year" ||
                  !Array.isArray(members) ||
                  members.length === 0
                ) {
                  return null;
                }

                return (
                  <div key={teamName}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-10">
                      {formatTeamName(teamName)}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                      {members.map((member: Member, index: number) => {
                        const isMemberLead = isLead(member.post);
                        return (
                          <motion.div
                            key={`${member.name}-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                              y: -8,
                              transition: { duration: 0.2 },
                            }}
                            className={`rounded-xl group overflow-hidden bg-white ${
                              isMemberLead
                                ? "shadow-xl border-2 border-primary/50"
                                : "shadow-lg"
                            }`}
                          >
                            <div className="relative pt-[100%]">
                              <img
                                src={
                                  member.imageUrl ||
                                  "https://via.placeholder.com/400/cccccc/ffffff?text=No+Image"
                                }
                                alt={member.name}
                                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-3 sm:pb-4 space-x-2 sm:space-x-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                                {member.linkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                                  >
                                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                                  </a>
                                )}
                                {member.github && (
                                  <a
                                    href={`https://github.com/${member.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                                  >
                                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                                  </a>
                                )}
                                {member.instagram && (
                                  <a
                                    href={`https://instagram.com/${member.instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                                  >
                                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                                  </a>
                                )}
                                {member.email && (
                                  <a
                                    href={`mailto:${member.email}`}
                                    className="bg-white p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                                  >
                                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                  </a>
                                )}
                              </div>
                            </div>
                            <div className="p-3 sm:p-5 text-center">
                              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5">
                                {member.name}
                              </h3>
                              <p className="text-xs sm:text-sm md:text-base text-primary font-semibold">
                                {member.post}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-sm sm:text-base">
                Team information for this year is being updated.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default About;
