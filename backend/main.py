from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create FastAPI app
app = FastAPI(
    title="Project Kisan API",
    description="AI Assistant for Small-Scale Farmers",
    version="1.0.0"
)

# Add CORS middleware to allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Project Kisan API - Your Smart Farming Assistant!"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "API is running"}

# Import and include routers
from routers import disease
app.include_router(disease.router, prefix="/api/disease", tags=["Disease Detection"])

# TODO: Add other routers
# from routers import market, schemes  
# app.include_router(market.router, prefix="/api/market", tags=["Market Prices"])
# app.include_router(schemes.router, prefix="/api/schemes", tags=["Government Schemes"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
