import Link from "next/link";
import { MessageCircle, Globe, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#0c0416] border-t border-white/5 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">
                            Fezus<span className="text-purple-500">.</span>
                        </Link>
                        <p className="text-white/60 max-w-sm mb-8 font-light leading-relaxed">
                            Создаем цифровой опыт, который выделяется. Разрабатываем премиальные, масштабируемые веб-приложения для амбициозных брендов.
                        </p>
                        {/* <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all">
                                <MessageCircle size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all">
                                <Globe size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all">
                                <Mail size={20} />
                            </a>
                        </div> */}
                    </div>
                    
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Компания</h4>
                        <ul className="space-y-4 font-light">
                            <li><Link href="#about" className="text-white/60 hover:text-white transition-colors">О нас</Link></li>
                            <li><Link href="#services" className="text-white/60 hover:text-white transition-colors">Услуги</Link></li>
                            <li><Link href="#stack" className="text-white/60 hover:text-white transition-colors">Наши стэки</Link></li>
                            <li><Link href="#team" className="text-white/60 hover:text-white transition-colors">Команда</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Контакты</h4>
                        <ul className="space-y-4 text-white/60 font-light">
                            <li>[EMAIL_ADDRESS]</li>
                            <li>+996 607 67 67 67</li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm font-light">
                    <p>&copy; {new Date().getFullYear()} Fezus. Все права защищены.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
                        <Link href="#" className="hover:text-white transition-colors">Условия использования</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

