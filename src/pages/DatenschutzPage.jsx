import React from 'react';
import Card from '../components/ui/Card';

const DatenschutzPage = () => {
    return (
        <Card className="max-w-3xl text-left">
            <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-brand-900 prose-p:text-brand-700">
                <h1>Datenschutzerklärung</h1>

                <h3>1. Datenschutz auf einen Blick</h3>
                <p>
                    <strong>Allgemeine Hinweise</strong><br />
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                    wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>

                <h3>2. Datenerfassung auf unserer Website</h3>
                <p>
                    <strong>Cookies</strong><br />
                    Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
                </p>
                <p>
                    <strong>Kontaktformular</strong><br />
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3>3. Analyse-Tools und Tools von Drittanbietern</h3>
                <p>
                    Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen.
                </p>

                <h3>4. Plugins und Tools</h3>
                <p>
                    <strong>Google Fonts</strong><br />
                    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden.
                    Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
            </div>
        </Card>
    );
};

export default DatenschutzPage;
