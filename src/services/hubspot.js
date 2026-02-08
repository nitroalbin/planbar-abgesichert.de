/**
 * HubSpot Integration Service
 * 
 * Since this is a client-side application, we cannot securely store API keys here.
 * The data is collected in the Funnel and sent here.
 * 
 * RECOMMENDED STRATEGY:
 * Use a Zapier Webhook or Netlify Function to bridge this data to HubSpot.
 * 
 * 1. Create a "Catch Hook" in Zapier/Make.
 * 2. Paste the Webhook URL below into `WEBHOOK_URL`.
 * 3. Zapier receives the JSON and pushes it to HubSpot CRM.
 */

const PORTAL_ID = "147767429";
const FORM_ID = "6685ac5c-fec9-45fd-b72a-ada28bd8803a";
const REGION = "eu1";

export const submitToHubSpot = async (data) => {
    console.log("🚀 Prepared for HubSpot (Raw Data):", data);

    const submissionUrl = `https://api-${REGION}.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

    // Helper to format fields and filter out completely empty ones
    // Using ONLY the exact names you confirmed from your settings
    const fields = [
        { name: "firstname", value: data.contact?.firstName || "" },
        { name: "lastname", value: data.contact?.lastName || "" },
        { name: "email", value: data.contact?.email || "" },
        { name: "phone", value: data.contact?.phone || "" },
        { name: "plz", value: data.contact?.zip || "" },
        { name: "stadt", value: data.contact?.city || "" },
        { name: "adresse", value: `${data.contact?.street || ""} ${data.contact?.houseNumber || ""}`.trim() },
        { name: "berufsgruppe", value: data.contact?.job || "" },
        { name: "erreichbarkeit", value: data.contact?.availability || "" },
        { name: "empfanger", value: data.beneficiary || "" },
        { name: "versicherungssumme", value: data.amount || "" },
        { name: "geburtsdatum", value: `${data.birthdate?.day || ""}.${data.birthdate?.month || ""}.${data.birthdate?.year || ""}` }
    ].filter(f => f.value !== "" && f.value !== "..");

    const payload = {
        fields,
        context: {
            pageUri: window.location.href,
            pageName: "Planbar Abgesichert"
        }
    };

    console.log("📤 Sending Payload to HubSpot:", JSON.stringify(payload, null, 2));

    try {
        const response = await fetch(submissionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const resultData = await response.json();

        if (!response.ok) {
            console.error("❌ HubSpot Error Response:", resultData);
            if (resultData.errors) {
                console.error("Specific Field Errors:", resultData.errors);
            }
            throw new Error(`HubSpot submission failed: ${resultData.message || 'Unknown error'}`);
        }

        console.log("✅ HubSpot Success Response:", resultData);
        return true;
    } catch (error) {
        console.error("🚨 Critical Submission Error:", error);
        throw error;
    }
};
