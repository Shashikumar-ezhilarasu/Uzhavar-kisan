from fastapi import APIRouter, File, UploadFile, HTTPException
from services.disease_model import disease_service
import io

router = APIRouter()

@router.post("/analyze")
async def analyze_plant_disease(file: UploadFile = File(...)):
    """
    Analyze an uploaded plant image for disease detection
    
    - Upload an image of a plant leaf
    - Get disease diagnosis with remedies
    """
    
    # Validate file type
    if not file.content_type.startswith('image/'):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    # Check file size (limit to 10MB)
    contents = await file.read()
    if len(contents) > 10 * 1024 * 1024:  # 10MB
        raise HTTPException(status_code=400, detail="File size too large. Maximum 10MB allowed.")
    
    try:
        # Get prediction from the model
        result = await disease_service.predict_disease(contents)
        
        # Return structured response
        return {
            "success": True,
            "filename": file.filename,
            "analysis": result
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@router.get("/supported-plants")
async def get_supported_plants():
    """
    Get list of plants that can be analyzed
    """
    supported_plants = [
        "Apple", "Tomato", "Potato", "Corn", "Grape", 
        "Cherry", "Peach", "Pepper", "Strawberry"
    ]
    
    return {
        "supported_plants": supported_plants,
        "total_diseases": "38+ diseases supported",
        "note": "Upload clear images of affected leaves for best results"
    }
