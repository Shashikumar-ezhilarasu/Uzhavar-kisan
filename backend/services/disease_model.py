import random
from PIL import Image
import io

class DiseaseDetectionService:
    def __init__(self):
        print("Disease detection service initialized (Demo mode)")
        # For demo purposes, we'll simulate AI analysis
        self.demo_diseases = [
            "Tomato___Early_blight",
            "Tomato___Bacterial_spot", 
            "Apple___Apple_scab",
            "Potato___Early_blight",
            "healthy"
        ]
    
    def get_disease_info(self, disease_label):
        """
        Returns detailed information about the disease including causes and remedies
        """
        disease_database = {
            "Apple___Apple_scab": {
                "disease": "Apple Scab",
                "cause": "Fungal infection caused by Venturia inaequalis",
                "symptoms": "Dark, scabby lesions on leaves and fruit",
                "remedy": "Apply fungicide sprays, remove infected leaves, ensure good air circulation",
                "prevention": "Plant resistant varieties, prune for air circulation"
            },
            "Apple___Black_rot": {
                "disease": "Apple Black Rot",
                "cause": "Fungal infection caused by Botryosphaeria obtusa",
                "symptoms": "Brown spots on leaves, black rot on fruit",
                "remedy": "Remove infected fruit and branches, apply fungicide",
                "prevention": "Proper pruning, avoid wounding trees"
            },
            "Tomato___Bacterial_spot": {
                "disease": "Tomato Bacterial Spot",
                "cause": "Bacterial infection caused by Xanthomonas species",
                "symptoms": "Small dark spots on leaves and fruit",
                "remedy": "Use copper-based bactericides, remove infected plants",
                "prevention": "Use disease-free seeds, avoid overhead watering"
            },
            "Tomato___Early_blight": {
                "disease": "Tomato Early Blight",
                "cause": "Fungal infection caused by Alternaria solani",
                "symptoms": "Dark spots with concentric rings on lower leaves",
                "remedy": "Apply fungicide, improve air circulation, water at soil level",
                "prevention": "Crop rotation, mulching, avoid overhead watering"
            },
            "Potato___Early_blight": {
                "disease": "Potato Early Blight",
                "cause": "Fungal infection caused by Alternaria solani",
                "symptoms": "Dark brown spots with concentric rings on leaves",
                "remedy": "Apply fungicide, remove infected foliage",
                "prevention": "Crop rotation, proper spacing for air flow"
            },
            "healthy": {
                "disease": "Healthy Plant",
                "cause": "No disease detected",
                "symptoms": "Plant appears healthy",
                "remedy": "Continue good farming practices",
                "prevention": "Regular monitoring, proper nutrition, pest management"
            }
        }
        
        # Default response for unknown diseases
        default_response = {
            "disease": "Unknown Disease",
            "cause": "Disease not in our database",
            "symptoms": "Please consult with local agricultural expert",
            "remedy": "Contact your local agricultural extension office",
            "prevention": "Follow general good farming practices"
        }
        
        return disease_database.get(disease_label, default_response)
    
    async def predict_disease(self, image_bytes):
        """
        Demo disease prediction - simulates AI analysis
        In production, this would use a real ML model
        """
        try:
            # Validate image
            image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
            
            # Demo: Randomly select a disease for demonstration
            # In production, this would be actual AI inference
            predicted_label = random.choice(self.demo_diseases)
            confidence = random.uniform(75, 95)  # Random confidence between 75-95%
            
            # Get disease information
            disease_info = self.get_disease_info(predicted_label)
            
            return {
                "predicted_label": predicted_label,
                "confidence": round(confidence, 2),
                "disease": disease_info["disease"],
                "cause": disease_info["cause"],
                "symptoms": disease_info["symptoms"],
                "remedy": disease_info["remedy"],
                "prevention": disease_info["prevention"]
            }
            
        except Exception as e:
            print(f"Error in prediction: {e}")
            return {
                "error": f"Prediction failed: {str(e)}",
                "disease": "Unknown",
                "confidence": 0.0,
                "remedy": "Please try uploading a clear image of the affected plant"
            }

# Create a global instance
disease_service = DiseaseDetectionService()
