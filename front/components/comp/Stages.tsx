"use client";

import { motion } from "framer-motion";
import { useMetaTags } from "@/hooks/useMetaTags";
import { useStagesFezus } from "@/hooks/useStagesFezus";

const stagesList = [
    { step: "01", name: "Аналитика", desc: "Погружение в ваш бизнес, понимание целей и технических требований." },
    { step: "02", name: "Дизайн", desc: "Создание вайрфреймов, прототипов и высокоточных макетов." },
    { step: "03", name: "Разработка", desc: "Написание чистого, масштабируемого кода для воплощения дизайна в жизнь." },
    { step: "04", name: "Запуск", desc: "Тщательное тестирование и вывод продукта на рынок." },
];

export const Stages = () => {
    const { data: metaData } = useMetaTags();
    const { data: stagesData } = useStagesFezus();
    
    const title = metaData?.[0]?.title_stages_fezus || "";
    const description = metaData?.[0]?.description_stages_fezus || "";

    const displayStages = stagesData && stagesData.length > 0 ? stagesData.map(s => ({
        step: s.number < 10 ? `0${s.number}` : `${s.number}`,
        name: s.title,
        desc: s.description
    })) : [];

    return (
        <section className="py-24 bg-[#0c0416]">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    {displayStages.map((stage, idx) => (
                        <div key={idx} className="relative group text-center lg:text-left z-10">
                            <div className="text-6xl font-black text-white/5 group-hover:text-purple-500/20 transition-colors duration-500 mb-6 flex justify-center lg:justify-start">
                                {stage.step}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{stage.name}</h3>
                            <p className="text-white/60 font-light leading-relaxed">{stage.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
