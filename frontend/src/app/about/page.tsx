import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">About Kisan AI</h1>
        {/* About Section */}
        <section className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-powered 24/7 Digital Expert for Farmers</h2>
          <p className="text-gray-700 mb-4">This is an AI-powered advisory system that acts as a 24/7 digital expert for farmers. Farmers can ask questions using voice, text, crop photos, or NFC taps in their local language. A hybrid AI core (Google Gemini + Hugging Face) provides instant, accurate answers. The AI uses a Knowledge Engine with data on crops, market prices, and government schemes. It&apos;s unique because of its offline NFC access which allows financial assistance to the farmers. We are also building a marketplace/community where farmers can sell products and where other farmers can rent farming equipment and resources from one another, creating a networking platform for the farmer community.</p>
        </section>
        {/* Feasibility & Viability Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">Feasibility & Viability</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-100 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-green-800 mb-2">Technology Readiness</h3>
              <p className="text-gray-700 text-sm mb-2">AI models like Gemini, Hugging Face, Whisper already exist and can be fine-tuned.</p>
              <p className="text-gray-700 text-sm">Fine-tuning on agricultural datasets (crop diseases, subsidies, local advisories) for Malayalam + multimodal support.</p>
            </div>
            <div className="bg-blue-100 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-blue-800 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-700 text-sm mb-2">Firebase + Google Cloud already provide scalability, security, and real-time data handling.</p>
              <p className="text-gray-700 text-sm">Integration with Pub/Sub, Cloud Run, and monitoring for robust AI-driven advisory system.</p>
            </div>
            <div className="bg-yellow-100 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-yellow-800 mb-2">Offline Support</h3>
              <p className="text-gray-700 text-sm mb-2">NFC technology is widely available and cost-effective.</p>
              <p className="text-gray-700 text-sm">NFC-enabled offline access to advisory data for farmers in rural, low-connectivity zones.</p>
            </div>
            <div className="bg-pink-100 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-pink-800 mb-2">Farmer Adoption</h3>
              <p className="text-gray-700 text-sm mb-2">Voice + local language interfaces are being adopted in some digital agri tools.</p>
              <p className="text-gray-700 text-sm">Malayalam-first multimodal query handling (voice, text, image) → lowers literacy barriers.</p>
            </div>
            <div className="bg-indigo-100 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-indigo-800 mb-2">Economic Value</h3>
              <p className="text-gray-700 text-sm mb-2">Existing apps focus on weather/market info separately.</p>
              <p className="text-gray-700 text-sm">Integrated marketplace benefits: crop sales, equipment rentals, reducing middlemen.</p>
            </div>
            <div className="bg-purple-100 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-purple-800 mb-2">Community Impact</h3>
              <p className="text-gray-700 text-sm mb-2">Current helplines and agri officers provide limited, one-to-many support.</p>
              <p className="text-gray-700 text-sm">Farmer-to-farmer digital ecosystem with query sharing + knowledge loop.</p>
            </div>
            <div className="bg-gray-100 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Scalability</h3>
              <p className="text-gray-700 text-sm mb-2">LLMs and cloud infra can support multiple regions.</p>
              <p className="text-gray-700 text-sm">Expansion with dataset/language tuning for pan-India rollouts (Indic languages).</p>
            </div>
          </div>
        </section>
        {/* Impact & Benefits Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">Impact & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-green-800 mb-2">Impact</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Provides farmers with continuous, multilingual AI-based advisory support.</li>
                <li>Enhances agricultural sustainability through data-driven insights.</li>
                <li>Promotes financial inclusion and access to government schemes.</li>
                <li>Strengthens community collaboration via marketplace and resource sharing.</li>
                <li>Reduces digital and connectivity barriers through NFC-enabled offline access.</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl shadow p-6">
              <h3 className="font-bold text-lg text-blue-800 mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Knowledge: Quick, reliable answers on crops, prices, and schemes.</li>
                <li>Economy: Direct sales and equipment rental reduce costs and middlemen.</li>
                <li>Productivity: Early disease detection improves yield and efficiency.</li>
                <li>Scalability: Easily adaptable across regions and languages.</li>
                <li>Accessibility: Affordable, works with smartphones and NFC cards.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
