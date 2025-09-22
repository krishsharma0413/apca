import os
from pathlib import Path
from PIL import Image

def convert_and_rename_images(folder_path):
    folder_path = Path(folder_path)
    if not folder_path.is_dir():
        print(f"The path {folder_path} is not a valid directory.")
        return 0

    jpg_files = sorted(folder_path.glob("*.jpg"))
    total = len(jpg_files)

    for index, jpg_file in enumerate(jpg_files, start=1):
        try:
            with Image.open(jpg_file) as img:
                rgb_img = img.convert("RGB")
                new_file_name = folder_path / f"{index}.jpg"
                rgb_img.save(new_file_name, "JPEG")
                if new_file_name != jpg_file:
                    os.remove(jpg_file)
            print(f"Converted and renamed: {jpg_file} to {new_file_name}")
        except Exception as e:
            print(f"Error processing {jpg_file}: {e}")
    return total

base_directory = Path("D:/projects/SDC/apcaBS/assets/img/photo_gallery")
folder_max_dict = {}

for subfolder in base_directory.iterdir():
    if subfolder.is_dir():
        max_jpg = convert_and_rename_images(subfolder)
        folder_max_dict[subfolder.name] = max_jpg

print(folder_max_dict)
