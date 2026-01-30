from PIL import Image, ImageFilter
import sys

def remove_blue(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        newData = []
        
        # Stricter threshold for blue removal
        for item in datas:
            # item is (r, g, b, a)
            # If significant blue component compared to others, make transparent
            # Blue > 100 and Blue > Red + 50 and Blue > Green + 50
            if item[2] > 100 and item[2] > item[0] + 30 and item[2] > item[1] + 30:
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Optional: erode slightly to kill edges? 
        # For now, just rely on color logic.
        
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_bg.py <input> <output>")
    else:
        remove_blue(sys.argv[1], sys.argv[2])
