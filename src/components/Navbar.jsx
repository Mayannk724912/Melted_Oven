const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <a href="/" className="flex items-center gap-3">
                    <img
                        src="/logo/logo.webp"
                        className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                        alt="Melted Oven Logo"
                    />
                    <span className="text-xl md:text-2xl font-bold whitespace-nowrap tracking-widest text-amber-400">
                        MELTED OVEN
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#order"
                        className="bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full text-xs md:text-sm px-6 py-2.5 transition-all shadow-[0_0_15px_rgba(251,191,36,0.3)] whitespace-nowrap"
                    >
                        Order Now
                    </a>
                </div>

                <div className="md:hidden">
                    <a
                        href="#order"
                        className="bg-amber-400 text-black font-bold rounded-full text-xs px-4 py-2"
                    >
                        Order
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
