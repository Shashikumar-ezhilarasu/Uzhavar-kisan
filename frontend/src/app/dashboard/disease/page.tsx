"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Upload, Camera, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react";

interface AnalysisResult {
  predicted_label: string;
  confidence: number;
  disease: string;
  cause: string;
  symptoms: string;
  remedy: string;
  prevention: string;
}

export default function DiseaseDetection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleAnalysis = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://localhost:8000/api/disease/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze image");
      }

      const data = await response.json();
      setResult(data.analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during analysis");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/dashboard" 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Back to Dashboard"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <h1 className="text-2xl font-bold text-gray-800">Plant Disease Detection</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Upload Section */}
          {!result && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Upload Plant Image for Analysis
              </h2>
              
              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6 hover:border-green-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  {previewUrl ? (
                    <div className="space-y-4">
                      <img 
                        src={previewUrl} 
                        alt="Selected plant" 
                        className="max-w-sm max-h-64 mx-auto rounded-lg object-cover"
                      />
                      <p className="text-gray-600">Click to change image</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-green-100 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto">
                        <Camera className="h-12 w-12 text-green-600" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-800 mb-2">
                          Upload a photo of your plant
                        </p>
                        <p className="text-gray-600">
                          Choose a clear image showing the affected leaves or plant parts
                        </p>
                      </div>
                    </div>
                  )}
                </label>
              </div>

              {/* Upload Button */}
              {selectedFile && (
                <div className="text-center">
                  <button
                    onClick={handleAnalysis}
                    disabled={isAnalyzing}
                    className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-5 w-5" />
                        Analyze Plant
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}
            </div>
          )}

          {/* Results Section */}
          {result && (
            <div className="space-y-6">
              {/* Analysis Result Header */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Analysis Complete</h2>
                  <button
                    onClick={resetForm}
                    className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Analyze Another
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image */}
                  {previewUrl && (
                    <div>
                      <img 
                        src={previewUrl} 
                        alt="Analyzed plant" 
                        className="w-full rounded-lg object-cover max-h-80"
                      />
                    </div>
                  )}

                  {/* Quick Results */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Diagnosis</h3>
                      <p className="text-2xl font-bold text-green-600">{result.disease}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Confidence</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                          <div 
                            className={`bg-green-500 h-3 rounded-full transition-all duration-500`}
                            style={{ width: `${Math.min(result.confidence, 100)}%` }}
                          ></div>
                        </div>
                        <span className="font-semibold text-gray-700">{result.confidence}%</span>
                      </div>
                    </div>

                    {result.disease !== "Healthy Plant" && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="h-5 w-5 text-yellow-600" />
                          <span className="font-semibold text-yellow-800">Disease Detected</span>
                        </div>
                      </div>
                    )}

                    {result.disease === "Healthy Plant" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-800">Plant Looks Healthy!</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Cause & Symptoms */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Cause & Symptoms</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">What causes this?</h4>
                      <p className="text-gray-600">{result.cause}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Symptoms to look for</h4>
                      <p className="text-gray-600">{result.symptoms}</p>
                    </div>
                  </div>
                </div>

                {/* Treatment & Prevention */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Treatment & Prevention</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Recommended treatment</h4>
                      <p className="text-gray-600">{result.remedy}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Prevention tips</h4>
                      <p className="text-gray-600">{result.prevention}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tips Section */}
          {!result && (
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Tips for best results:</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Take photos in good lighting</li>
                <li>• Focus on affected leaves or plant parts</li>
                <li>• Ensure the image is clear and not blurry</li>
                <li>• Upload images in JPG, PNG, or JPEG format</li>
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
