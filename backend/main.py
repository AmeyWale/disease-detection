from fastapi import FastAPI,File,UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message":"Hello World"}


@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):


    return {"filename":file.filename}

    
if __name__ == "__main__":
    uvicorn.run("main:app",reload=True)