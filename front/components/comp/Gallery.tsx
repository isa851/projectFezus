"use client";

import { motion } from "framer-motion";

export const Gallery = () => {
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Наша <span className="text-purple-500">Галерея</span></h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">Моменты из нашей корпоративной жизни и рабочих будней.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="col-span-2 row-span-2 rounded-[2rem] bg-white/5 aspect-square border border-white/10 overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800" alt="Office" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-luminosity hover:mix-blend-normal" />
                    </div>
                    <div className="rounded-[1.5rem] bg-white/5 aspect-square border border-white/10 overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" alt="Meeting" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-luminosity hover:mix-blend-normal" />
                    </div>
                    <div className="rounded-[1.5rem] bg-white/5 aspect-square border border-white/10 overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Team" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-luminosity hover:mix-blend-normal" />
                    </div>
                    <div className="rounded-[2rem] bg-white/5 aspect-[2/1] col-span-2 border border-white/10 overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Culture" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-luminosity hover:mix-blend-normal" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
