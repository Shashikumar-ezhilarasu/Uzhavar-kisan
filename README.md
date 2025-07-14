# 🌾 Project Kisan - AI Assistant for Small-Scale Farmers

> **Status: 🚧 In Active Development**

An AI-powered farming assistant designed specifically for small-scale farmers in India. Get crop disease diagnosis, real-time market prices, and government scheme information - all in your local language through voice-first interaction.

<img width="1270" height="699" alt="image" src="https://github.com/user-attachments/assets/c89a9aa1-71b4-4f1e-92ef-f7b1424b6c0e" />

## 🎯 Project Vision

Project Kisan aims to democratize agricultural technology by providing farmers with:
- **Multilingual Support**: Kannada and English language interface
- **Voice-First Experience**: Speak naturally, get instant responses
- **AI-Powered Insights**: Crop disease detection and market analysis
- **Government Integration**: Simplified access to schemes and subsidies
- **Mobile-Friendly**: Works on any device, anywhere

## ✅ Current Implementation Status

### 🖥️ **Backend (FastAPI) - COMPLETED**
- ✅ **Server Setup**: FastAPI with CORS configuration
- ✅ **API Structure**: Organized routers and services
- ✅ **Disease Detection API**: 
  - Image upload endpoint (`POST /api/disease/analyze`)
  - Plant disease simulation with detailed remedies
  - Supported plants endpoint (`GET /api/disease/supported-plants`)
- ✅ **Error Handling**: Comprehensive error responses
- ✅ **Health Checks**: Server monitoring endpoint (`GET /health`)
- ✅ **Demo Mode**: Working disease detection simulation

### 🌐 **Frontend (Next.js) - COMPLETED**
- ✅ **Landing Page**: Beautiful hero section with feature showcase
- ✅ **Dashboard**: Main navigation hub for all features
- ✅ **Disease Detection Page**: 
  - Image upload interface
  - Real-time analysis display
  - Detailed results with treatment recommendations
  - Progress indicators and error handling
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Modern UI**: Tailwind CSS with gradient backgrounds and animations
- ✅ **Navigation**: Seamless routing between pages

### 🎨 **User Experience - COMPLETED**
- ✅ **Professional Design**: Green/blue agricultural theme
- ✅ **Intuitive Interface**: Clear call-to-action buttons
- ✅ **Loading States**: Smooth animations during processing
- ✅ **Error Messages**: User-friendly error handling
- ✅ **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚧 In Development

### 🔊 **Voice Features** - PLANNED
- 🟡 **Speech-to-Text**: Kannada and English voice input
- 🟡 **Text-to-Speech**: Audio responses in local language
- 🟡 **Voice Navigation**: Complete hands-free operation

### 📊 **Market Prices** - PLANNED
- 🟡 **Real-Time Data**: Integration with Agmarknet/APEDA APIs
- 🟡 **Location-Based**: Prices from nearby mandis
- 🟡 **Trend Analysis**: Historical price charts and predictions
- 🟡 **Selling Recommendations**: Best time and place to sell

### 🏛️ **Government Schemes** - PLANNED
- 🟡 **Scheme Database**: Comprehensive list of farmer subsidies
- 🟡 **Eligibility Checker**: Personalized scheme recommendations
- 🟡 **Application Assistance**: Step-by-step application guidance
- 🟡 **Document Helper**: Required documents checklist

### 🤖 **Advanced AI Features** - PLANNED
- 🟡 **Real ML Model**: Replace demo with actual disease detection AI
- 🟡 **Multi-Language NLP**: Kannada language understanding
- 🟡 **Conversational AI**: ChatBot for farming questions
- 🟡 **Personalized Recommendations**: Based on farmer's location and crops

### 🔐 **Authentication & Data** - PLANNED
- 🟡 **Firebase Integration**: User accounts and data storage
- 🟡 **Farmer Profiles**: Personal farming information
- 🟡 **History Tracking**: Previous diagnoses and consultations
- 🟡 **Offline Support**: Basic functionality without internet

## 🏗️ Technical Architecture

### **Frontend Stack**
- **Framework**: Next.js 15.3.5 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **Language**: TypeScript
- **Hosting**: Ready for Firebase Hosting

### **Backend Stack**
- **Framework**: FastAPI 0.104.1
- **Language**: Python 3.12
- **Image Processing**: Pillow (PIL)
- **Server**: Uvicorn with hot reload
- **API Documentation**: Automatic OpenAPI/Swagger docs

### **Development Environment**
- **Package Management**: npm (frontend), pip (backend)
- **Development**: Hot reload on both frontend and backend
- **Version Control**: Git ready
- **Cross-Origin**: CORS configured for local development

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.12+
- Git

### Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 📱 Current Features Demo

### 🌿 **Disease Detection**
1. **Upload Image**: Select a plant photo from your device
2. **AI Analysis**: Get instant disease diagnosis (demo mode)
3. **Treatment Plan**: Receive detailed remedies and prevention tips
4. **Confidence Score**: See how confident the AI is in its diagnosis

### 🏠 **Dashboard**
- **Quick Access**: Three main feature cards
- **Recent Activity**: Track your previous consultations
- **Voice Assistant**: Ready for future voice integration

### 📱 **Mobile Experience**
- **Responsive Design**: Perfect on phones, tablets, and desktops
- **Touch Friendly**: Large buttons and easy navigation
- **Fast Loading**: Optimized images and code

## 🎯 Next Development Phases

### **Phase 1: Core AI Integration** (Next 2-3 weeks)
- [ ] Integrate real plant disease detection model
- [ ] Set up Firebase backend
- [ ] Add user authentication

### **Phase 2: Market Features** (Weeks 4-6)
- [ ] Market price API integration
- [ ] Location-based services
- [ ] Price trend visualization

### **Phase 3: Voice & Language** (Weeks 7-9)
- [ ] Kannada speech recognition
- [ ] Voice navigation
- [ ] Multi-language interface

### **Phase 4: Government Integration** (Weeks 10-12)
- [ ] Scheme database
- [ ] Application workflows
- [ ] Document management

## 🤝 Contributing

This project is currently in active development. Key areas where we're working:

1. **AI/ML**: Disease detection model training and optimization
2. **Data Integration**: Government APIs and market data sources
3. **Language Processing**: Kannada language support
4. **User Testing**: Feedback from actual farmers
5. **Mobile Optimization**: Progressive Web App features

## 📞 Project Status

**Last Updated**: July 14, 2025
**Development Stage**: MVP Core Features Complete
**Next Milestone**: Real AI Model Integration
**Estimated Beta Release**: August 2025

---

## 🌟 Vision Statement

> "Empowering every small-scale farmer in India with AI-powered insights, breaking language barriers, and making advanced agricultural technology accessible to all."

**Built with ❤️ for Indian Farmers**
