"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useBanner } from "@/hooks/useBanner";

export const Banner = () => {
    const { data: bannerData } = useBanner();
    
    const title = bannerData?.[0]?.title || "";
    const description = bannerData?.[0]?.description || "";
    const image = bannerData?.[0]?.image || "";

    const titleWords = title.split(' ');
    const lastTwoWords = titleWords.length > 2 ? titleWords.slice(-2).join(' ') : "";
    const firstPart = titleWords.length > 2 ? titleWords.slice(0, -2).join(' ') : title;

    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#0c0416]">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat z-0"
                style={image ? { backgroundImage: `url(${image})` } : {}}
            />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl text-left flex flex-col items-start">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15]"
                    >
                        {firstPart} <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{lastTwoWords}</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed font-light"
                    >
                        {description}
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                    >
                        <Link href="#forum" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-[#0c0416] font-semibold text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Обсудить проект
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

