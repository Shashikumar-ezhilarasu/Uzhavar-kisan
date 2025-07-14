import Link from "next/link";
import { Leaf, TrendingUp, Building2, Mic, Camera, BarChart3, FileText } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">Kisan AI</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, Farmer!</span>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">F</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h2>
          <p className="text-gray-600">Choose a tool to help with your farming needs</p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Disease Detection */}
          <Link href="/dashboard/disease" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform group-hover:scale-105">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Diagnose Plant Disease</h3>
              <p className="text-gray-600 mb-4">
                Upload a photo of your plant to get instant AI diagnosis and treatment recommendations.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                Upload Photo <Camera className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Market Prices */}
          <Link href="/dashboard/market" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform group-hover:scale-105">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Check Market Prices</h3>
              <p className="text-gray-600 mb-4">
                Get real-time prices for your crops in nearby markets with trend analysis.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                View Prices <TrendingUp className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Government Schemes */}
          <Link href="/dashboard/schemes" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform group-hover:scale-105">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Government Schemes</h3>
              <p className="text-gray-600 mb-4">
                Find relevant subsidies and schemes for farmers in simple language.
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                Explore Schemes <Building2 className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Voice Assistant Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Voice Assistant</h3>
              <p className="text-white/90 text-lg">
                Ask questions in Kannada or English - I&apos;m here to help!
              </p>
            </div>
            <button 
              className="bg-white/20 hover:bg-white/30 transition-colors rounded-full p-6 backdrop-blur-sm"
              title="Start Voice Assistant"
              aria-label="Start Voice Assistant"
            >
              <Mic className="h-12 w-12 text-white" />
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-2">
                  <Camera className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Disease Analysis Complete</p>
                  <p className="text-gray-600 text-sm">Tomato plant analyzed - Early Blight detected</p>
                </div>
                <div className="ml-auto text-gray-500 text-sm">2 hours ago</div>
              </div>
            </div>
            <div className="p-6 border-b">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Market Price Check</p>
                  <p className="text-gray-600 text-sm">Checked tomato prices in Kolar market</p>
                </div>
                <div className="ml-auto text-gray-500 text-sm">1 day ago</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 rounded-full p-2">
                  <Building2 className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Scheme Information</p>
                  <p className="text-gray-600 text-sm">Viewed PM-KISAN scheme details</p>
                </div>
                <div className="ml-auto text-gray-500 text-sm">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
