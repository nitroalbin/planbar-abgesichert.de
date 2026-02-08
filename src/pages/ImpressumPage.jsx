import React from 'react';
import Card from '../components/ui/Card';

const ImpressumPage = () => {
    return (
        <Card className="max-w-3xl text-left">
            <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-brand-900 prose-p:text-brand-700">
                <h1>Impressum</h1>
                
                <p>
                    René Rosenthal<br />
                    Harsefelder Straße 10 a<br />
                    21614 Buxtehude-Hedendorf
                </p>

                <h3>Kontakt</h3>
                <p>
                    Telefon: 04163 809300<br />
                    E-Mail: <a href="mailto:rosenthal.rene@allianz.de">rosenthal.rene@allianz.de</a>
                </p>

                <p>Inhaltlicher Verantwortlicher: wie oben</p>

                <h3>Streitschlichtung</h3>
                <p>
                    Allgemeine Informationspflichten zur alternativen Streitbeilegung nach Art. 14 Abs. 1 ODR-VO
                    und § 36 VSBG (Verbraucherstreitbeilegungsgesetz)
                </p>
                <p>
                    Die europäische Kommission stellt eine Plattform zur Online-Streitbelegung (OS) zur
                    Verfügung, die Sie unter dieser Adresse finden: <a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/consumers/odr/</a>. Zur
                    Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind
                    wir nicht verpflichtet und auch nicht bereit.
                </p>
            </div>
        </Card>
    );
};

export default ImpressumPage;
