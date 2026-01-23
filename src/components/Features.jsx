import { Clock, ShoppingBag, Star, Truck } from "lucide-react";

const Features = () => {
    return (
        <section className="py-20 bg-neutral-900 relative overflow-hidden text-center">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        <span className="text-amber-500">Why</span> Choose Us
                    </h2>
                    <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: ShoppingBag,
                            title: "Fresh Ingredients",
                            desc: "Sourced locally for the best natural flavor.",
                        },
                        {
                            icon: Clock,
                            title: "Baked Daily",
                            desc: "Fresh from the oven every single morning.",
                        },
                        {
                            icon: Truck,
                            title: "Fast Delivery",
                            desc: "Hot and fresh, delivered right to your door.",
                        },
                        {
                            icon: Star,
                            title: "Top Rated",
                            desc: "Loved by thousands of happy customers.",
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all hover:-translate-y-1 flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
