import ConnectNowBtn from "./ConnectNowBtn";
import { Package } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden text-center mt-16 md:mt-0"
        >
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/landing-videos/1.webm" type="video/webm" />
                </video>
            </div>

            <div className="relative z-20 px-4 w-full max-w-6xl mx-auto flex flex-col items-center">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-amber-200 via-amber-400 to-amber-600 drop-shadow-2xl leading-[0.9] uppercase">
                    Taste The <br /> Perfection
                </h1>
                <p className="text-xl md:text-3xl text-gray-100 max-w-5xl mx-auto font-light leading-normal drop-shadow-md">
                    Experience the warmth of freshly baked artisan breads and
                    pastries, crafted with passion and the finest ingredients.
                </p>
                <div className="relative z-10 max-w-3xl mx-auto mt-8">
                    {/* <div className="bg-white/10 border border-white/20 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl"> */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <ConnectNowBtn
                            text="Connect Now"
                            className="w-full sm:w-auto px-8 py-4 text-lg"
                            iconClassName="w-6 h-6 group-hover:scale-110 transition-transform"
                        />
                        <a
                            href="#order"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-amber-400 hover:border-amber-500/50 w-full sm:w-auto text-lg group"
                        >
                            Order Now
                            <Package className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
