"use client";

import { useState, useEffect } from "react";
import { MonitorSmartphone, Layout, Code, Server, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMetaTags } from "@/hooks/useMetaTags";
import { useServicesFezus } from "@/hooks/useServicesFezus";

const servicesList = [
    { 
        name: "Веб-разработка", 
        icon: <MonitorSmartphone className="text-purple-400" size={32} />, 
        desc: "Создание кастомных веб-приложений с использованием современных стеков технологий.",
        fullDesc: "Полный цикл разработки современных веб-приложений. Мы берем на себя все этапы: от проектирования архитектуры и выбора оптимального стека до тестирования и запуска. Создаем продукты любой сложности, которые масштабируются вместе с вашим бизнесом и обеспечивают высокую производительность даже при больших нагрузках."
    },
    { 
        name: "UI/UX Дизайн", 
        icon: <Layout className="text-purple-400" size={32} />, 
        desc: "Интуитивно понятные интерфейсы и вовлекающий пользовательский опыт.",
        fullDesc: "Проектируем интерфейсы, которые не только потрясающе выглядят, но и решают задачи бизнеса. Проводим UX-аналитику, создаем кликабельные прототипы и детально прорабатываем UI-компоненты. Наша цель — сделать путь пользователя максимально простым, понятным и приятным на любом устройстве."
    },
    { 
        name: "Frontend",
        icon:<Code className="text-purple-400" size={32} />, 
        desc: "Разработка frontend-части веб-приложений с использованием современных фреймворков и библиотек.",
        fullDesc: "Реализуем клиентскую часть сложных сервисов с использованием React, Next.js, Vue и TypeScript. Особое внимание уделяем скорости загрузки, плавным анимациям (Framer Motion) и pixel-perfect верстке. Наш Frontend — это идеальное сочетание эстетики и надежности."
    },
    { 
        name: "Backend",
        icon:<Server className="text-purple-400" size={32} />, 
        desc: "Разработка backend-части веб-приложений с использованием современных фреймворков и библиотек.",
        fullDesc: "Проектируем надежную и безопасную серверную логику на Python (Django/FastAPI) и Node.js. Интегрируем базы данных (PostgreSQL, Redis), настраиваем микросервисную архитектуру, разрабатываем стабильные REST и GraphQL API. Гарантируем бесперебойную работу вашего продукта."
    },
];

export const Servise = () => {
    const { data: metaData } = useMetaTags();
    const { data: servicesData } = useServicesFezus();
    
    const title = metaData?.[0]?.title_service_fezus || "";
    const description = metaData?.[0]?.description_service_fezus || "";
    
    type ServiceType = {
        name: string;
        icon: JSX.Element;
        desc: string;
        fullDesc: string;
    };
    
    const displayServices: ServiceType[] = servicesData && servicesData.length > 0 ? servicesData.map((s, idx) => ({
        name: s.title,
        desc: s.description.length > 100 ? s.description.substring(0, 100) + '...' : s.description,
        fullDesc: s.description,
        icon: [
            <MonitorSmartphone key="1" className="text-purple-400" size={32} />,
            <Layout key="2" className="text-purple-400" size={32} />,
            <Code key="3" className="text-purple-400" size={32} />,
            <Server key="4" className="text-purple-400" size={32} />
        ][idx % 4]
    })) : [];

    const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedService]);

    return (
        <section id="services" className="py-24 bg-[#0c0416] relative">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"><span className="text-purple-500">{title}</span></h2>
                        <p className="text-white/60 text-lg font-light">{description}</p>
                    </div>
               
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayServices.map((srv, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => setSelectedService(srv)}
                            className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group cursor-pointer flex flex-col h-full"
                        >
                            <div className="mb-8 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">{srv.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{srv.name}</h3>
                            <p className="text-white/60 text-sm leading-relaxed font-light flex-grow">{srv.desc}</p>
                            
                            <div className="mt-8 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                                <span className="text-purple-400 text-sm font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                                    Узнать больше 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedService && (
                    <div 
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#110620] border border-white/10 rounded-3xl p-8 md:p-10 w-full max-w-2xl relative shadow-2xl shadow-purple-900/20"
                        >
                            <button 
                                onClick={() => setSelectedService(null)} 
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                            >
                                <X size={24} />
                            </button>
                            
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                                    {selectedService.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white">{selectedService.name}</h3>
                            </div>
                            
                            <div className="space-y-6">
                                <p className="text-white/80 text-lg leading-relaxed font-light">
                                    {selectedService.fullDesc}
                                </p>
                            </div>
                            
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <button 
                                    onClick={() => {
                                        setSelectedService(null);
                                        document.getElementById('forum')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-lg transition-colors flex justify-center items-center"
                                >
                                    Обсудить эту услугу
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
