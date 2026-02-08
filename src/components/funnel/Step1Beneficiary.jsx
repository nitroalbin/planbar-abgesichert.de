import React from 'react';
import { User, Users, Baby, HandHeart, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const SelectionCard = ({ icon: Icon, label, imageSrc, selected, onClick, index }) => (
    <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
            "relative flex flex-col items-center justify-center rounded-2xl border transition-all duration-300 aspect-square w-full shadow-sm group",
            selected
                ? "border-brand-300 ring-2 ring-brand-200 bg-brand-50"
                : "border-white bg-white/50 hover:bg-white hover:shadow-lg"
        )}
    >
        <div className="relative mb-3">
            {/* Icon/Image Container */}
            <div className={cn("rounded-full flex items-center justify-center transition-all overflow-hidden",
                imageSrc ? "w-20 h-20 shadow-md border-2 border-white" : "p-4",
                !imageSrc && (selected ? "bg-white text-brand-400" : "bg-brand-50 text-brand-300")
            )}>
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={label}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.remove('w-20', 'h-20', 'shadow-md', 'border-2', 'border-white');
                            e.target.parentElement.classList.add('p-4', 'bg-brand-50', 'text-brand-300');
                            e.target.parentElement.innerHTML = `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`; // Fallback generic icon
                        }}
                    />
                ) : (
                    <Icon className="w-8 h-8" />
                )}
            </div>

            {/* Selection Checkmark */}
            {selected && (
                <div className="absolute -top-1 -right-1 bg-brand-400 text-white rounded-full p-1 shadow-sm border-2 border-white">
                    <CheckCircle className="w-3 h-3" />
                </div>
            )}
        </div>

        <span className="font-bold text-sm md:text-base text-center leading-tight text-brand-900">
            {label}
        </span>
    </motion.button>
);

const Step1Beneficiary = ({ value, onChange, onNext }) => {
    // Image System: Scanned images from /public/funnel1/
    const options = [
        { id: 'children', label: 'Meine Kinder', icon: Baby, imageSrc: '/funnel1/kind.jpeg' },
        { id: 'partner', label: 'Mein Partner', icon: Users, imageSrc: '/funnel1/partner.jpeg' },
        { id: 'other', label: 'Andere', icon: HandHeart, imageSrc: '/funnel1/andere.jpeg' },
        { id: 'self', label: 'Ich selbst', icon: User, imageSrc: '/funnel1/selber.jpeg' },
    ];

    const handleSelect = (id) => {
        onChange('beneficiary', id);
        setTimeout(() => onNext(), 400);
    };

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-2"
            >
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900">Wer soll abgesichert werden?</h2>
                <p className="text-brand-600">
                    Wähle aus, wer das Geld erhalten soll.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
                {options.map((opt, i) => (
                    <SelectionCard
                        key={opt.id}
                        index={i}
                        icon={opt.icon}
                        label={opt.label}
                        imageSrc={opt.imageSrc}
                        selected={value === opt.id}
                        onClick={() => handleSelect(opt.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Step1Beneficiary;
