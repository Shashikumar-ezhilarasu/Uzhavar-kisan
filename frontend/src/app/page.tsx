import Link from "next/link";
import { Leaf, TrendingUp, Building2, Mic } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">Kisan AI</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Smart Farming Ally
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            In Your Language. In Your Pocket.
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Get AI-powered crop disease diagnosis, real-time market prices, and government scheme information - all in Kannada and English.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            Start Farming Smart
            <Leaf className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div id="features" className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Disease Detection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Crop Disease Detection</h3>
            <p className="text-gray-600 mb-6">
              Upload a photo of your plant and get instant AI-powered disease diagnosis with treatment recommendations.
            </p>
            <Link 
              href="/dashboard/disease" 
              className="text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              Try Now →
            </Link>
          </div>

          {/* Market Prices */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Real-Time Market Prices</h3>
            <p className="text-gray-600 mb-6">
              Get current market prices for your crops in nearby mandis with trend analysis and selling recommendations.
            </p>
            <Link 
              href="/dashboard/market" 
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Check Prices →
            </Link>
          </div>

          {/* Government Schemes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Government Schemes</h3>
            <p className="text-gray-600 mb-6">
              Find and apply for relevant government subsidies and schemes available for farmers in simple language.
            </p>
            <Link 
              href="/dashboard/schemes" 
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              Explore Schemes →
            </Link>
          </div>
        </div>

        {/* Voice Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/20 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Mic className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Voice-First Experience</h3>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Speak in Kannada or English - our AI understands you perfectly and responds in your preferred language.
            </p>
            <Link 
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Try Voice Assistant
              <Mic className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      {/* All Features Section */}
      <section className="container mx-auto px-4 py-12" id="all-features">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">All Features</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">✅ Completed Features</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Completed Features Cards */}
            <div className="bg-green-50 rounded-xl shadow p-6 flex flex-col items-start">
              <span className="font-bold text-green-700 mb-2">Backend API (FastAPI)</span>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Disease Detection API</li>
                <li>Health Check Endpoint</li>
                <li>CORS Configuration</li>
                <li>Error Handling</li>
                <li>Demo Disease Database</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-start">
              <span className="font-bold text-blue-700 mb-2">Frontend Web App (Next.js)</span>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Landing Page</li>
                <li>Dashboard</li>
                <li>Disease Detection Page</li>
                <li>Responsive Design</li>
                <li>Modern UI</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-start">
              <span className="font-bold text-yellow-700 mb-2">User Experience</span>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Image Upload</li>
                <li>Real-time Analysis</li>
                <li>Detailed Results</li>
                <li>Confidence Scoring</li>
                <li>Navigation</li>
              </ul>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">🚧 Next To Build</h3>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Next To Build Feature Cards */}
            <div className="bg-purple-50 rounded-xl shadow p-6 flex flex-col items-start">
              <span className="font-bold text-purple-700 mb-2">Voice Features</span>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Speech-to-text (Kannada/English)</li>
                <li>Voice navigation and responses</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-start">
              <span className="font-bold text-pink-700 mb-2">Market Prices</span>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Real-time crop prices from local mandis</li>
                <li>Price trend analysis</li>
                <li>Selling recommendations</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-xl shadow p-6 flex flex-col items-start">
              <span className="font-bold text-indigo-700 mb-2">Government Schemes</span>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Database of farmer subsidies and schemes</li>
                <li>Eligibility checker</li>
                <li>Application guidance</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start">
              <span className="font-bold text-gray-700 mb-2">Advanced AI</span>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Real machine learning model</li>
                <li>Multi-language support</li>
                <li>Conversational chatbot</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            <p><b>Current Status:</b> MVP core features complete. Next phase: Real AI model integration.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>© 2024 Kisan AI. Empowering farmers with technology.</p>
        </div>
      </footer>
    </div>
  );
}
