"use client";

import { motion } from "framer-motion";
import { useAboutFezus } from "@/hooks/useAboutFezus";

export const About = () => {
    const { data: aboutData } = useAboutFezus();
    
    const item = aboutData?.[0] || {
        title: "",
        description1: "",
        description2: "",
        image: ""
    };

    const titleWords = item.title.split(' ');
    const lastWord = titleWords.length > 1 ? titleWords.pop() : '';
    const firstPart = titleWords.join(' ');

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-[#0c0416]">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent mix-blend-overlay" />
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt="Команда за работой"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            {firstPart} {lastWord && <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{lastWord}</span>}
                            {!lastWord && item.title}
                        </h2>
                        <p className="text-lg text-white/70 mb-6 leading-relaxed font-light">
                            {item.description1}
                        </p>
                        <p className="text-lg text-white/70 mb-12 leading-relaxed font-light">
                            {item.description2}
                        </p>

                        <div className="grid grid-cols-2 gap-10">
                            {/* <div>
                                <div className="text-5xl font-bold text-white mb-3">50<span className="text-purple-500">+</span></div>
                                <div className="text-white/50 text-sm font-medium uppercase tracking-wider">Проектов завершено</div>
                            </div> */}
                            {/* <div>
                                <div className="text-5xl font-bold text-white mb-3">100<span className="text-purple-500">%</span></div>
                                <div className="text-white/50 text-sm font-medium uppercase tracking-wider">Довольных клиентов</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

