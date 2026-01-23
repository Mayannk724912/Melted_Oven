import { MessageCircle } from "lucide-react";

const ConnectNowBtn = ({
    text = "Connect Now",
    className = "",
    iconClassName = "w-6 h-6",
}) => {
    return (
        <a
            href="https://wa.me/918178778538"
            target="_blank"
            rel="noreferrer"
            className={`bg-linear-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-bold rounded-full transition-all flex items-center justify-center gap-3 transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] ${className}`}
        >
            {text}
            <MessageCircle className={`${iconClassName}`} />
        </a>
    );
};

export default ConnectNowBtn;
