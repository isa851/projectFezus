"use client";

import { Code2, Server, Rocket, ShieldCheck, Palette } from "lucide-react";
import { motion } from "framer-motion";

import { useTechnologyStack } from '@/hooks/useTechnologyStack';
import { useMetaTags } from '@/hooks/useMetaTags';
import * as LucideIcons from 'lucide-react';

export const TechnologyStack = () => {
    const { data: techData, isLoading: isTechLoading } = useTechnologyStack();
    const { data: metaData, isLoading: isMetaLoading } = useMetaTags();

    const title = metaData?.[0]?.title_technology_stack_fezus || "";
    const description = metaData?.[0]?.description_technology_stack_fezus || "";
    return (
        <section id="stack" className="py-24 bg-[#0c0416] relative overflow-hidden">
            {/* Background glowing blobs */}
            <div className="absolute top-1/4 -left-[20%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-[20%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Наш <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{title}</span></h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
                        {description}
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {!isTechLoading && techData?.map((category, idx) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const IconComponent = (LucideIcons as any)[category.icon_name] || LucideIcons.Code2;
                        const skillsArray = category.skills.split(',').map(s => s.trim());
                        
                        return (
                            <motion.div 
                                key={category.id || idx} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-500 group flex flex-col backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="bg-white/[0.05] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-300">
                                        <IconComponent className="w-7 h-7 text-purple-400" />
                                    </span>
                                    <h3 className="text-xl font-semibold text-white tracking-wide">{category.category}</h3>
                                </div>
                                
                                <div className="flex flex-wrap gap-2.5">
                                    {skillsArray.map((skill: string, skillIdx: number) => (
                                        <span key={skillIdx} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white/70 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300 cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

