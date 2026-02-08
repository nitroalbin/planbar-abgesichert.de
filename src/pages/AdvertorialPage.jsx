import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';

const AdvertorialPage = () => {
    const navigate = useNavigate();
    const currentDate = new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation / Header */}
            <header className="border-b border-gray-100 py-4">
                <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500 font-medium">Ratgeber &gt; Finanzen & Vorsorge</div>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-8 md:py-12 pb-32">
                {/* Article Header */}
                <div className="space-y-6 mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                        Wenn ein Todesfall plötzlich zur finanziellen Belastung wird
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                        Was viele Familien in Deutschland über Beerdigungskosten unterschätzen
                    </h2>

                    <div className="flex items-center gap-3 text-sm text-gray-500 border-t border-b border-gray-100 py-3 mt-6">
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold text-xs">Vorsorge</span>
                        <span>•</span>
                        <span>2 Min. Lesezeit</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="mb-10 rounded-xl overflow-hidden shadow-sm">
                    <img
                        src="/home/hero.jpeg"
                        alt="Älteres Ehepaar sieht glücklich aus"
                        className="w-full h-auto object-cover aspect-video"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                    <p className="text-xs text-gray-400 mt-2 italic px-1">Ein Todesfall ist emotional schwer genug – finanzielle Sorgen sollten nicht dazu kommen.</p>
                </div>

                {/* Article Content */}
                <article className="prose prose-lg prose-gray max-w-none text-gray-800">
                    <p className="font-serif text-xl leading-relaxed text-gray-900 mb-8 border-l-4 border-brand-500 pl-4 italic">
                        Ein Todesfall kommt meist unerwartet. Neben der emotionalen Belastung stehen Angehörige oft vor hohen Kosten.
                    </p>

                    <p>
                        Der Verlust eines geliebten Menschen ist eine der schwersten Erfahrungen im Leben. In dieser Zeit der Trauer möchte sich niemand mit Rechnungen, Behördengängen und finanziellen Engpässen beschäftigen müssen. Doch genau das ist oft die Realität.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Die unterschätzte Kostenfalle</h3>
                    <p>
                        Eine würdevolle Beerdigung hat ihren Preis. Viele unterschätzen die Gesamtkosten deutlich. Grabstein, Friedhofsgebühren, Bestatterleistungen, Trauerfeier und Blumen – all das summiert sich schnell.
                    </p>

                    <div className="my-8 bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Durchschnittliche Kosten</p>
                        <p className="text-3xl md:text-4xl font-bold text-brand-900">
                            6.000 € – 10.000 €
                        </p>
                        <p className="text-sm text-gray-500 mt-2">für eine traditionelle Bestattung in Deutschland</p>
                    </div>

                    <p>
                        Gerade für Familien mit Kindern oder für den hinterbliebenen Partner kann das zu einer <strong>enormen finanziellen Belastung</strong> werden. Rücklagen sind oft nicht ausreichend vorhanden, da sie für das Alter oder andere Pläne gedacht waren. Im schlimmsten Fall müssen Kredite aufgenommen oder mühsam angesparte Reserven aufgelöst werden.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Der Irrtum mit dem Staat</h3>
                    <p>
                        Ein weit verbreiteter Irrtum ist, dass der Staat oder die Krankenkasse im Todesfall einspringt.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                        <p className="text-red-900 font-medium">
                            Das ist jedoch längst nicht mehr der Fall. Seit 2004 zahlen Krankenkassen kein Sterbegeld mehr.
                        </p>
                    </div>
                    <p>
                        Das bedeutet: Die Angehörigen haften in der Regel voll für die Bestattungskosten. Wer nicht privat vorgesorgt hat, hinterlässt seinen Liebsten oft unbeabsichtigt einen Schuldenberg.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Die Lösung: Verantwortung übernehmen</h3>
                    <p>
                        Es gibt einen einfachen Weg, diese Sorge aus der Welt zu schaffen: Eine <strong>Sterbegeldversicherung</strong>.
                    </p>
                    <p>
                        Sie ist speziell dafür konzipiert, diese finanzielle Lücke zu schließen. Sie sorgt dafür, dass im Todesfall eine festgelegte Summe schnell und unbürokratisch ausgezahlt wird, um Bestattungskosten und organisatorische Aufwände abzudecken.
                    </p>

                    <ul className="grid gap-3 my-8 not-prose">
                        <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-green-900">Keine Gesundheitsprüfung nötig</span>
                        </li>
                        <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-green-900">Sofortiger Schutz möglich</span>
                        </li>
                        <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-green-900">Entlastung der Angehörigen garantiert</span>
                        </li>
                    </ul>

                    <p>
                        Es ist ein letzter Liebesbeweis an Ihre Familie: Die Gewissheit, dass für alles gesorgt ist und niemand in finanzielle Not gerät.
                    </p>
                </article>

                {/* Inline CTA */}
                <div className="mt-12 bg-brand-50 rounded-2xl p-8 border border-brand-100 text-center">
                    <ShieldCheck className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-brand-900 mb-2">Schützen Sie Ihre Familie</h3>
                    <p className="text-brand-700 mb-6">
                        Prüfen Sie jetzt unverbindlich, wie günstig Sie Ihre Liebsten absichern können.
                    </p>
                    <Button onClick={() => navigate('/check')} className="w-full md:w-auto text-lg py-4 px-8 shadow-xl shadow-brand-500/20">
                        Jetzt Beitrag berechnen <ArrowRight className="ml-2 w-5 h-5 inline" />
                    </Button>
                </div>
            </main>

            {/* Sticky Mobile Link */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50"
            >
                <Button onClick={() => navigate('/check')} className="w-full text-lg shadow-lg">
                    Jetzt prüfen
                </Button>
            </motion.div>
        </div>
    );
};

export default AdvertorialPage;

