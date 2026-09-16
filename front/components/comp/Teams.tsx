"use client";

import { motion } from "framer-motion";
import { useMetaTags } from "@/hooks/useMetaTags";
import { useTeamsFezus } from "@/hooks/useTeamsFezus";

const teamMembers = [
    { name: "ИМЯ", role: "role", initials: "INITIALS" },
    { name: "ИМЯ", role: "role", initials: "INITIALS" },
    { name: "ИМЯ", role: "role", initials: "INITIALS" },
    { name: "ИМЯ", role: "role", initials: "INITIALS" },
];

export const Teams = () => {
    const { data: metaData } = useMetaTags();
    const { data: teamsData } = useTeamsFezus();
    
    const title = metaData?.[0]?.title_team_fezus || "";
    const description = metaData?.[0]?.description_team_fezus || "";

    const displayTeams = teamsData && teamsData.length > 0 ? teamsData : [];

    return (
        <section id="team" className="py-24 bg-[#0c0416]">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"><span className="text-purple-500">{title}</span></h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">{description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {displayTeams.map((member: any, idx: number) => (
                        <div key={idx} className="group text-center">
                            <div className="w-48 h-48 mx-auto rounded-full bg-white/[0.03] border border-white/10 mb-8 flex items-center justify-center text-4xl text-white/30 font-bold group-hover:border-purple-500/50 group-hover:text-white/60 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover relative z-0" />
                                ) : (
                                    <span className="relative z-10">{member.name.charAt(0).toUpperCase()}</span>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-white/50 font-light">{member.role}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

