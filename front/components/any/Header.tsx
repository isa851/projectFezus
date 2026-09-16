import Link from "next/link";
import { Menu } from "lucide-react";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0416]/90 backdrop-blur-xl border-b border-white/[0.05]">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Fezus<span className="text-purple-500">.</span>
                </Link>
                
                <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-white/70">
                    <Link href="#about" className="hover:text-white transition-colors">О нас</Link>
                    <Link href="#services" className="hover:text-white transition-colors">Услуги</Link>
                    <Link href="#stack" className="hover:text-white transition-colors">Наши стэки</Link>
                    <Link href="#team" className="hover:text-white transition-colors">Команда</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#forum" className="hidden md:flex px-7 py-2.5 rounded-full bg-white text-[#0c0416] hover:bg-white/90 font-semibold transition-all">
                        Начать проект
                    </Link>
                    <button className="md:hidden text-white/70 hover:text-white p-2">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};
