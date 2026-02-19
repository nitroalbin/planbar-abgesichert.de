import React from 'react';
import Card from '../components/ui/Card';

const ImpressumPage = () => {
    return (
        <Card className="max-w-3xl text-left">
            <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-brand-900 prose-p:text-brand-700">
                <h1>Impressum</h1>
                
                <div className="mb-8">
                    <h3 className="mb-4">Angaben gemäß § 5 TMG</h3>
                    <p className="whitespace-pre-line">
                        René Rosenthal<br />
                        Harsefelder Straße 10a<br />
                        21614 Buxtehude-Hedendorf<br />
                        Telefon: <a href="tel:04163809300" className="text-brand-600 hover:underline">04163 809300</a><br />
                        E-Mail: <a href="mailto:rosenthal.rene@allianz.de" className="text-brand-600 hover:underline">rosenthal.rene@allianz.de</a>
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4">Tätigkeit als Versicherungsvermittler</h3>
                    <p>
                        Vermittlung von Versicherungen als gebundener Vertreter nach § 34d Abs. 4 Gewerbeordnung (GewO) ausschließlich für die Versicherungsunternehmen der Allianz.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4">Eingetragen im Versicherungsvermittlerregister gemäß § 11a GewO</h3>
                    <p className="whitespace-pre-line">
                        Registrierungsnummer: D-SC6X-FSC0V-74<br /><br />
                        Registerführende Stelle:<br />
                        Industrie- und Handelskammer Lüneburg-Wolfsburg<br />
                        Am Sande 1<br />
                        21335 Lüneburg<br /><br />
                        Abrufbar unter:<br />
                        <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">www.vermittlerregister.info</a>
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4">Aufsichtsbehörde</h3>
                    <p className="whitespace-pre-line">
                        Industrie- und Handelskammer Lüneburg-Wolfsburg<br />
                        Am Sande 1<br />
                        21335 Lüneburg
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4">Beteiligungsverhältnisse</h3>
                    <p>
                        Es bestehen keine direkten oder indirekten Beteiligungen von über 10 % an den Stimmrechten oder am Kapital eines Versicherungsunternehmens.
                    </p>
                    <p>
                        Ebenso hält kein Versicherungsunternehmen oder Mutterunternehmen eines Versicherungsunternehmens eine Beteiligung von über 10 % an den Stimmrechten oder am Kapital dieses Unternehmens.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4">Streitbeilegung</h3>
                    <p>
                        Informationen zur außergerichtlichen Streitbeilegung gemäß § 36 VSBG:
                    </p>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                        <a href="http://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">http://ec.europa.eu/consumers/odr</a>
                    </p>
                    <p>
                        Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="mb-4">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</h3>
                    <p>
                        Es wird keine Umsatzsteuer-Identifikationsnummer geführt
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default ImpressumPage;
