"use client";

import { Shield, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useMetaTags } from "@/hooks/useMetaTags";
import { useWhyFezus } from "@/hooks/useWhyFezus";

const benefits = [
    { title: "Экспертиза", description: "Наша команда состоит из профессионалов с многолетним опытом создания надежных решений.", icon: <Shield className="text-purple-400" size={28} /> },
    { title: "Быстрый запуск", description: "Используем гибкие методологии (Agile), чтобы ваш продукт быстро и безопасно вышел на рынок.", icon: <Zap className="text-purple-400" size={28} /> },
    { title: "Масштабируемость", description: "Архитектура наших приложений разработана с учетом будущего роста вашего бизнеса.", icon: <Layers className="text-purple-400" size={28} /> },
];

export const WhyFezus = () => {
    const { data: metaData } = useMetaTags();
    const { data: whyData } = useWhyFezus();
    
    const title = metaData?.[0]?.title_why_fezus || "";
    const description = metaData?.[0]?.description_why_fezus || "";
    
    const displayData = whyData && whyData.length > 0 ? whyData.map((item, idx) => ({
        title: item.title,
        description: item.description,
        icon: [
            <Shield key="shield" className="text-purple-400" size={28} />,
            <Zap key="zap" className="text-purple-400" size={28} />,
            <Layers key="layers" className="text-purple-400" size={28} />
        ][idx % 3]
    })) : [];

    return (
        <section id="why" className="py-24 bg-[#0c0416]">
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayData.map((item, idx) => (
                        <div key={idx} className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="w-32 h-32 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                            </div>
                            
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed font-light">{item.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
