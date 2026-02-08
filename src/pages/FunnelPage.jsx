import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import ProgressBar from '../components/funnel/ProgressBar';
import Step1Beneficiary from '../components/funnel/Step1Beneficiary';
import Step2Amount from '../components/funnel/Step2Amount';
import Step3Birthdate from '../components/funnel/Step3Birthdate';
import Step4LeadForm from '../components/funnel/Step4LeadForm';
import { submitToHubSpot } from '../services/hubspot';
import { motion } from 'framer-motion';

const FunnelPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        beneficiary: '',
        amount: '',
        birthdate: { day: '', month: '', year: '' },
        contact: {},
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Scroll to top on step change for mobile
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

    const totalSteps = 4;
    const progress = (step / totalSteps) * 100;

    const handleUpdate = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await submitToHubSpot(formData);
            setIsSuccess(true);
        } catch (error) {
            console.error("Submission failed", error);
            alert("Es gab einen Fehler beim Senden.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="pt-12">
                <Card>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center space-y-6 py-12"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner">
                            ✓
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-brand-900">Vielen Dank!</h2>
                        <p className="text-brand-600 text-lg leading-relaxed">
                            Wir haben Ihre Anfrage erhalten. Ein Berater wird sich in Kürze telefonisch bei Ihnen melden, um das beste Angebot zu besprechen.
                        </p>
                    </motion.div>
                </Card>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Card>
                <ProgressBar progress={progress} />

                <div className="min-h-[400px]">
                    {step === 1 && (
                        <Step1Beneficiary
                            value={formData.beneficiary}
                            onChange={handleUpdate}
                            onNext={nextStep}
                        />
                    )}
                    {step === 2 && (
                        <Step2Amount
                            value={formData.amount}
                            onChange={handleUpdate}
                            onNext={nextStep}
                            onBack={prevStep}
                        />
                    )}
                    {step === 3 && (
                        <Step3Birthdate
                            value={formData.birthdate}
                            onChange={handleUpdate}
                            onNext={nextStep}
                            onBack={prevStep}
                        />
                    )}
                    {step === 4 && (
                        <Step4LeadForm
                            value={formData.contact}
                            onChange={handleUpdate}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                        />
                    )}
                </div>
            </Card>
        </div>
    );
};

export default FunnelPage;
