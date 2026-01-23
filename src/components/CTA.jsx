import { Package } from "lucide-react";
import ConnectNowBtn from "./ConnectNowBtn";

const CTASection = () => {
    return (
        <section id="menu" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left Side: CTA Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left z-10 order-2 md:order-1">
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500 leading-tight">
                            Ready to <br /> Indulge?
                        </h3>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
                            Treat yourself to the finest artisan pastries in
                            town. Whether it's a birthday cake or a simple
                            croissant, we bake it with love.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <ConnectNowBtn
                                text="Chat on WhatsApp"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl shadow-lg"
                                iconClassName="w-6 h-6 group-hover:scale-110 transition-transform"
                            />
                            <a
                                href="#order"
                                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 group"
                            >
                                <Package className="w-6 h-6 group-hover:scale-110 transition-transform" />{" "}
                                Order Now
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Video 2 */}
                    <div className="w-full md:w-1/2 relative group order-1 md:order-2">
                        <div className="absolute inset-0 bg-amber-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                            <video
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source
                                    src="/landing-videos/2.webm"
                                    type="video/webm"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
