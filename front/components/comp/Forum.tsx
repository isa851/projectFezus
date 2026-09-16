"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForumSubmit } from "../../hooks/useForum";
import { useMetaTags } from "@/hooks/useMetaTags";

export const Forum = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [telegram, setTelegram] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const { data: metaData } = useMetaTags();
    const title = metaData?.[0]?.title_forum_fezus || "";
    const desc = metaData?.[0]?.description_forum_fezus || "";

    const { mutate: submitForum, isPending, isError } = useForumSubmit();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitForum({ telegram, company_name: companyName, description: descriptionText }, {
            onSuccess: () => {
                setSubmitSuccess(true);
                setTelegram("");
                setCompanyName("");
                setDescriptionText("");
                setTimeout(() => {
                    setIsModalOpen(false);
                    setSubmitSuccess(false);
                }, 2000);
            },
        });
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <section id="forum" className="py-24 bg-[#0c0416] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 -z-10" />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                <div className="max-w-5xl mx-auto bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">{title}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">
                        {desc}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="px-10 py-4 rounded-full bg-transparent border border-white/20 text-white hover:bg-white/5 font-semibold text-lg transition-all"
                        >
                            Связаться с нами
                        </button>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isModalOpen && (
                    <div 
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#110620] border border-white/10 rounded-3xl p-8 w-full max-w-lg relative shadow-2xl shadow-purple-900/20"
                        >
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                            
                            <h3 className="text-3xl font-bold text-white mb-2">Обсудить проект</h3>
                            <p className="text-white/50 mb-8 font-light">Оставьте ваши данные, и мы свяжемся с вами в ближайшее время.</p>
                            
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div>
                                    <label className="text-white/70 text-sm font-medium mb-2 block">Ваш Telegram</label>
                                    <input 
                                        type="text" 
                                        value={telegram}
                                        onChange={(e) => setTelegram(e.target.value)}
                                        required
                                        placeholder="@username" 
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all" 
                                    />
                                </div>
                                <div>
                                    <label className="text-white/70 text-sm font-medium mb-2 block">Название компании</label>
                                    <input 
                                        type="text" 
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        required
                                        placeholder="Например, ООО Инновации" 
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all" 
                                    />
                                </div>
                                <div>
                                    <label className="text-white/70 text-sm font-medium mb-2 block">Описание задачи</label>
                                    <textarea 
                                        rows={4} 
                                        value={descriptionText}
                                        onChange={(e) => setDescriptionText(e.target.value)}
                                        required
                                        placeholder="Кратко опишите, что нужно сделать..." 
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all resize-none" 
                                    />
                                </div>
                                
                                {isError && (
                                    <p className="text-red-400 text-sm text-center">Произошла ошибка при отправке. Попробуйте еще раз.</p>
                                )}
                                {submitSuccess && (
                                    <p className="text-green-400 text-sm text-center">Заявка успешно отправлена!</p>
                                )}

                                <button 
                                    type="submit" 
                                    disabled={isPending || submitSuccess}
                                    className="mt-2 w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-lg transition-colors flex justify-center items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isPending ? "Отправка..." : submitSuccess ? "Отправлено" : "Отправить заявку"}
                                    {!isPending && !submitSuccess && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

