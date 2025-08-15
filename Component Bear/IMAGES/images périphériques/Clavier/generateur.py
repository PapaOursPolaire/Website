import os

dossier_images = "/Website Beta/IMAGES/images périphériques/Souris/ASUS/"
fichier_sortie = "papaours.txt"

prefixe = ""

fichiers = os.listdir(dossier_images)

extensions_images = ['.jpg', '.jpeg', '.png', '.gif']
fichiers_images = [f for f in fichiers if os.path.splitext(f)[1].lower() in extensions_images]

fichiers_images.sort()

donnees = []
for fichier in fichiers_images:
    titre = os.path.splitext(fichier)[0]  
    structure = {
        "name": f"{prefixe}{titre}",  
        "image": f"/Website Beta/IMAGES/images périphériques/Souris/ASUS/{fichier}",
        "description": "Ecran",
        "price": 0,  
        "rating": 0,  
        "brand": f"{prefixe}",
        "SF":"OUI",
        "TDS":"Optique",
        "availability": "green"
    }
    donnees.append(structure)

with open(fichier_sortie, "w", encoding="utf-8") as f:
    for item in donnees:
        f.write("{\n")
        for key, value in item.items():
            if isinstance(value, str):
                f.write(f'    {key}: "{value}",\n')
            else:
                f.write(f'    {key}: {value},\n')
        f.write("},\n")

print(f"Les données ont été enregistrées dans {fichier_sortie}")
