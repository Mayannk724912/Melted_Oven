import {
    Facebook,
    Instagram,
    MessageSquareIcon,
    PhoneCallIcon,
    Twitter,
} from "lucide-react";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-neutral-950 py-12 border-t border-white/5 text-center"
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6">
                    <img
                        src="/logo/logo.webp"
                        className="h-10 w-auto opacity-80"
                        alt="Logo"
                    />
                    <span className="text-xl font-bold text-amber-500 tracking-widest">
                        MELTED OVEN
                    </span>
                </div>

                <div className="flex space-x-6 mb-8">
                    {[
                        {
                            Icon: Facebook,
                            url: "https://www.facebook.com/",
                        },
                        {
                            Icon: Twitter,
                            url: "https://www.twitter.com/",
                        },
                        {
                            Icon: Instagram,
                            url: "https://www.instagram.com/",
                        },
                    ].map(({ Icon, url }, i) => (
                        <a
                            key={i}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black transition-all transform hover:scale-110"
                        >
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                        <PhoneCallIcon className="w-4 h-4 text-amber-500" />
                        <span>+91 8178778538</span>
                    </div>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                        <MessageSquareIcon className="w-4 h-4 text-amber-500" />
                        <span>hello@meltedoven.com</span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm">
                    © 2025 Melted Oven - Baking Happiness Since 2010 | All
                    Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
