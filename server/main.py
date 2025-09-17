from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from data.mandals import mandals

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/mandals")
def list_mandals():
    return {"mandals": list(mandals.keys())}

@app.get("/mandals_all")
def get_all_mandals():
    merged = {
        "type": "FeatureCollection",
        "features": []
    }
    for mandal_data in mandals.values():
        for feature in mandal_data["features"]:
            if "geometry" in feature and feature["geometry"] is not None:
                merged["features"].append(feature)
    return merged


@app.get("/mandals/{mandal_name}")
def get_mandal(mandal_name: str):
    if mandal_name not in mandals:
        raise HTTPException(status_code=404, detail="Mandal not found")
    return mandals[mandal_name]
