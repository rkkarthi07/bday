import os

folder = r"D:\RK\bday\photos"   # change this path if needed
start_number = 1              # rename begins at photo100

files = sorted(os.listdir(folder))
counter = start_number

for file in files:
    old_path = os.path.join(folder, file)

    # Skip folders
    if not os.path.isfile(old_path):
        continue

    # Get file extension (e.g., .jpg, .png)
    _, ext = os.path.splitext(file)

    new_name = f"photo{counter}{ext}"
    new_path = os.path.join(folder, new_name)

    print(f"Renaming: {file} → {new_name}")
    os.rename(old_path, new_path)

    counter += 1

print("Done!")
