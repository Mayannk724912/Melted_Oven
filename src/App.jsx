import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTASection from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
    const [formData, setFormData] = useState({ name: "", phone: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.phone) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            setFormData({ name: "", phone: "" });
        }
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
            {/* HEADER */}
            <Navbar />

            {/* HERO SECTION */}
            <Hero />


            {/* FEATURES SECTION */}
            <Features />


            {/* VIDEO SECTION */}
            <CTASection />

            {/* CONTACT FORM SECTION */}
            <section
                id="order"
                className="py-24 bg-[url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80')] bg-cover bg-center relative bg-fixed"
            >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                <div className="max-w-xl mx-auto px-6 relative z-10">
                    <div className="bg-white/10 border border-white/20 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
                            Get Exclusive Offers
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Join our community and receive special discounts
                            straight to your phone!
                        </p>

                        {submitted ? (
                            <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-xl mb-6 flex items-center justify-center gap-2">
                                We'll contact you soon.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="text-left">
                                    <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Mayank Yadav"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                        required
                                    />
                                </div>
                                <div className="text-left">
                                    <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 8178778538"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-lg text-lg"
                                >
                                    Get Offers
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
