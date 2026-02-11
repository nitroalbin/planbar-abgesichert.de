import React, { useState } from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const FloatingInput = ({ label, value, onChange, type = "text", required, className, ...props }) => (
    <div className={`relative ${className}`}>
        <input
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder=" "
            className="peer block w-full rounded-xl border-2 border-brand-100 bg-white/80 px-4 pt-6 pb-2 text-brand-900 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all shadow-sm"
            {...props}
        />
        <label className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-brand-400 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 cursor-text font-medium pointer-events-none">
            {label} {required && '*'}
        </label>
    </div>
);

const Step4LeadForm = ({ value, onChange, onSubmit, isSubmitting }) => {
    const handleChange = (field, val) => {
        onChange('contact', { ...value, [field]: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="space-y-6 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900">Geschafft! Wohin sollen wir das Angebot senden?</h2>

                {/* Social Proof Box - Glassmorphism */}
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/50 shadow-sm text-left">
                    <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center shrink-0 text-brand-500 shadow-inner">
                        <Compass className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-brand-700 font-medium">
                        Werde einer von über <span className="font-bold text-brand-500">50.000 Menschen</span>, die mit uns ihre Familie abgesichert haben.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <FloatingInput
                        label="Vorname"
                        value={value?.firstName || ''}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                        autoComplete="given-name"
                    />
                    <FloatingInput
                        label="Nachname"
                        value={value?.lastName || ''}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                        autoComplete="family-name"
                    />
                </div>

                <div className="relative">
                    <select
                        value={value?.job || ''}
                        onChange={(e) => handleChange('job', e.target.value)}
                        required
                        className="block w-full rounded-xl border-2 border-brand-100 bg-white/80 px-4 py-4 text-brand-900 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none appearance-none transition-all shadow-sm"
                    >
                        <option value="" disabled>Berufsgruppe *</option>
                        <option value="employed">Angestellt</option>
                        <option value="self-employed">Selbstständig</option>
                        <option value="retired">Rentner</option>
                        <option value="other">Sonstiges</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-400">▼</div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <FloatingInput
                        label="Straße"
                        className="col-span-2"
                        value={value?.street || ''}
                        onChange={(e) => handleChange('street', e.target.value)}
                        required
                        autoComplete="address-line1"
                    />
                    <FloatingInput
                        label="Nr."
                        value={value?.houseNumber || ''}
                        onChange={(e) => handleChange('houseNumber', e.target.value)}
                        required
                    />
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <FloatingInput
                        label="PLZ"
                        value={value?.zip || ''}
                        onChange={(e) => handleChange('zip', e.target.value)}
                        required
                        autoComplete="postal-code"
                    />
                    <FloatingInput
                        label="Ort"
                        className="col-span-2"
                        value={value?.city || ''}
                        onChange={(e) => handleChange('city', e.target.value)}
                        required
                        autoComplete="address-level2"
                    />
                </div>

                <FloatingInput
                    label="Telefon / Mobil"
                    type="tel"
                    value={value?.phone || ''}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    autoComplete="tel"
                />

                <FloatingInput
                    label="E-Mail-Adresse"
                    type="email"
                    value={value?.email || ''}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    autoComplete="email"
                />

                <div className="relative">
                    <select
                        value={value?.availability || ''}
                        onChange={(e) => handleChange('availability', e.target.value)}
                        required
                        className="block w-full rounded-xl border-2 border-brand-100 bg-white/80 px-4 py-4 text-brand-900 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none appearance-none transition-all shadow-sm"
                    >
                        <option value="" disabled>Beste Erreichbarkeit *</option>
                        <option value="all-day">Ganztags</option>
                        <option value="morning">Morgens (08 - 12 Uhr)</option>
                        <option value="noon">Mittags (12 - 14 Uhr)</option>
                        <option value="afternoon">Nachmittags (14 - 18 Uhr)</option>
                        <option value="evening">Abends (ab 18 Uhr)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-400">▼</div>
                </div>

                <div className="pt-4">
                    <Button type="submit" disabled={isSubmitting} className="shadow-lg shadow-brand-300/30 text-xl py-5">
                        {isSubmitting ? 'Wird gesendet...' : 'Kostenloses Angebot anfordern'}
                    </Button>
                    <p className="text-center text-xs text-brand-400 mt-4">
                        Deine Daten sind sicher und werden SSL-verschlüsselt übertragen.
                    </p>
                </div>
            </form>
        </motion.div>
    );
};

export default Step4LeadForm;
