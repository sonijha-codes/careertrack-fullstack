from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
user = {
    "name": "Sonijha",
    "exp": 6,
    "skills": ["Angular", "Python", "JavaScript"]
}

class JobApplication(BaseModel):
    company: str
    role: str
    status: str


@app.get("/")
def home():
    return {"Hello": "welcome to the FastAPI application!"}

@app.get("/healthStatus")
def health_status():
    return {"status": "healthy"}

@app.post("/applications")
def create_application(application: JobApplication):

    return {
        "message": "Application created successfully",
        "data": application
    }

class UserProfile(BaseModel):
    name: str
    experience: int
    designation: str


@app.post("/users")
def create_user(userprofile: UserProfile):
    return {
        "message": "Successfully created",
        "data": userprofile.model_dump()
    }