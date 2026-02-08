import React from 'react';
import { Flame, Tent, Grip, HelpCircle, CheckCircle } from 'lucide-react'; // Added CheckCircle for consistent selection UI if needed
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const AmountOption = ({ icon: Icon, title, subtext, badge, imageSrc, selected, onClick, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ x: 5 }}
        onClick={onClick}
        className={cn(
            "relative group border rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-300",
            selected
                ? "border-brand-400 bg-brand-50 shadow-md"
                : "border-transparent bg-white/60 hover:bg-white hover:shadow-lg",
            badge ? "mt-5" : ""
        )}
    >
        {badge && (
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-brand-700 to-brand-900 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider shadow-lg animate-pulse-subtle z-20">
                {badge}
            </div>
        )}

        {/* Visual: Avatar Image OR Icon */}
        <div className="shrink-0 relative">
            {imageSrc ? (
                <div className={cn("w-16 h-16 rounded-full overflow-hidden border-2 shadow-sm transition-all",
                    selected ? "border-brand-300 ring-2 ring-brand-100" : "border-brand-100 group-hover:border-brand-200"
                )}>
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-brand-50 text-brand-300"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg></div>`;
                        }}
                    />
                </div>
            ) : (
                <div className={cn("p-3 rounded-full transition-colors", selected ? "bg-white text-brand-500 shadow-sm" : "bg-brand-50 text-brand-400 group-hover:bg-brand-100")}>
                    <Icon className="w-8 h-8" />
                </div>
            )}
        </div>

        <div className="flex-1 min-w-0">
            <div className="font-bold text-brand-900 group-hover:text-brand-600 transition-colors text-lg">{title}</div>
            <div className="text-sm text-brand-500/80 font-medium leading-tight">{subtext}</div>
        </div>

        <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0", selected ? "border-brand-400 bg-brand-400" : "border-brand-200")}>
            {selected && <motion.div layoutId="check_step2" className="w-2.5 h-2.5 rounded-full bg-white" />}
        </div>
    </motion.div>
);

const Step2Amount = ({ value, onChange, onNext, onBack }) => {
    const options = [
        { id: '6000', label: 'Bis 6.000 €', subtext: 'Im engen Familienkreis', icon: Flame, imageSrc: '/funnel2/low.jpeg' },
        { id: '8000', label: 'Bis 8.000 €', subtext: 'Mit traditioneller Trauerfeier', icon: Tent, badge: 'Empfehlung', imageSrc: '/funnel2/mid.jpeg' },
        { id: '10000', label: 'Ab 10.000 €', subtext: 'In gehobener Ausführung', icon: Grip, imageSrc: '/funnel2/high.jpeg' },
        { id: 'unsure', label: 'Weiß ich nicht', subtext: 'Individuelle Beratung', icon: HelpCircle, imageSrc: '/funnel2/idk.jpeg' },
    ];

    const handleSelect = (id) => {
        onChange('amount', id);
        setTimeout(() => onNext(), 300);
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900">Versicherungssumme?</h2>
                <p className="text-brand-600 text-sm md:text-base">
                    Oft unterschätzte Kosten abdecken.
                </p>
            </div>

            <div className="space-y-3">
                {options.map((opt, i) => (
                    <AmountOption
                        key={opt.id}
                        index={i}
                        icon={opt.icon}
                        title={opt.label}
                        subtext={opt.subtext}
                        badge={opt.badge}
                        imageSrc={opt.imageSrc}
                        selected={value === opt.id}
                        onClick={() => handleSelect(opt.id)}
                    />
                ))}
            </div>

            <div className="pt-2">
                <button onClick={onBack} className="text-brand-400 text-sm hover:text-brand-600 font-medium transition-colors">
                    ← Zurück
                </button>
            </div>
        </div>
    );
};

export default Step2Amount;
