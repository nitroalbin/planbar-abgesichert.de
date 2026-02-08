import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const InputField = React.forwardRef(({ placeholder, value, onChange, maxLength, className, onKeyUp }, ref) => (
    <input
        ref={ref}
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        maxLength={maxLength}
        className={`bg-white border-2 border-brand-200 rounded-xl p-4 text-center text-xl font-bold text-brand-900 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all placeholder:text-brand-200 shadow-sm ${className}`}
    />
));

const Step3Birthdate = ({ value, onChange, onNext, onBack }) => {
    const [day, setDay] = useState(value?.day || '');
    const [month, setMonth] = useState(value?.month || '');
    const [year, setYear] = useState(value?.year || '');

    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);

    useEffect(() => {
        onChange('birthdate', { day, month, year });
    }, [day, month, year]);

    const handleDayChange = (e) => {
        const val = e.target.value.replace(/\D/g, '');
        setDay(val);
        if (val.length === 2) monthRef.current?.focus();
    };

    const handleMonthChange = (e) => {
        const val = e.target.value.replace(/\D/g, '');
        setMonth(val);
        if (val.length === 2) yearRef.current?.focus();
    };

    const isValid = day.length === 2 && month.length === 2 && year.length === 4;

    const handleNext = () => {
        if (isValid) onNext();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
        >
            <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900">Dein Geburtsdatum?</h2>
                <p className="text-brand-600">
                    Je jünger du bist, desto geringer fällt der Beitrag aus.
                </p>
            </div>

            <div className="flex justify-center gap-3 md:gap-4">
                <InputField
                    ref={dayRef}
                    placeholder="TT"
                    value={day}
                    onChange={handleDayChange}
                    maxLength={2}
                    className="w-20 md:w-24"
                />
                <InputField
                    ref={monthRef}
                    placeholder="MM"
                    value={month}
                    onChange={handleMonthChange}
                    maxLength={2}
                    className="w-20 md:w-24"
                />
                <InputField
                    ref={yearRef}
                    placeholder="JJJJ"
                    value={year}
                    onChange={(e) => setYear(e.target.value.replace(/\D/g, ''))}
                    maxLength={4}
                    className="w-28 md:w-32"
                />
            </div>

            <div className="space-y-4 pt-4">
                <Button onClick={handleNext} disabled={!isValid} className={!isValid ? 'opacity-50 cursor-not-allowed' : 'shadow-xl shadow-pink-500/20'}>
                    Weiter
                </Button>
                <div className="text-left">
                    <button onClick={onBack} className="text-brand-400 text-sm hover:text-brand-600 font-medium transition-colors">
                        ← Zurück
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Step3Birthdate;
