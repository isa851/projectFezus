"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-[#0c0416]">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Избранные <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Работы</span></h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">Взгляните на цифровые шедевры, созданные нашей командой.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0416] via-[#0c0416]/20 to-transparent opacity-60 z-10" />
                            <div className="absolute inset-0 flex items-center justify-center bg-purple-900/10 group-hover:bg-purple-900/0 transition-colors duration-700">
                                <div className="text-white/10 text-8xl font-black transition-transform duration-700 group-hover:scale-110">ПРОЕКТ {item}</div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <h3 className="text-2xl font-bold text-white mb-2">Название проекта {item}</h3>
                                <p className="text-white/70 mb-6 font-light">Веб-приложение / UI Дизайн</p>
                                <button className="flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors">
                                    Смотреть кейс <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center">
                    <button className="px-8 py-4 rounded-full bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold transition-all">
                        Показать еще работы
                    </button>
                </div>
            </motion.div>
        </section>
    );
};
