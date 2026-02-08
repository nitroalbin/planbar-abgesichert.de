import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-brand-100 h-2.5 rounded-full mb-8 overflow-hidden">
            <motion.div
                className="bg-brand-300 h-full shadow-[0_0_10px_rgba(155,205,225,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        </div>
    );
};

export default ProgressBar;
