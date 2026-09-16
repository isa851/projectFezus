"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviewsList = [
    { name: "Алексей Смирнов", role: "CEO, TechNova", review: "Fezus сдали проект раньше срока. Их внимание к деталям и подход к дизайну просто непревзойденны." },
    { name: "Елена Кузнецова", role: "Основатель, Bloom", review: "Работать с ними было удовольствием. Они идеально поняли наше видение и воплотили его в красивое приложение." },
    { name: "Михаил Иванов", role: "CTO, NextGen", review: "Высокопрофессиональная команда с глубокой технической экспертизой. Построенная ими архитектура легко справляется с нагрузками." },
];

export const Reviews = () => {
    return (
        <section id="reviews" className="py-24 bg-[#0c0416] relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Отзывы <span className="text-purple-500">Клиентов</span></h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">Не верьте нам на слово. Узнайте, что говорят о нас наши партнеры.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviewsList.map((item, idx) => (
                        <div key={idx} className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl relative hover:bg-white/[0.04] transition-colors duration-500">
                            <Quote className="text-purple-500/30 absolute top-8 right-8" size={48} />
                            <p className="text-white/80 text-lg leading-relaxed mb-10 relative z-10 font-light mt-4">"{item.review}"</p>
                            <div className="flex items-center gap-5 mt-auto">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-xl">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">{item.name}</div>
                                    <div className="text-white/50 text-sm font-light">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
