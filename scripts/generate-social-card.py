from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "assets" / "social-card.png"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

image = Image.new("RGB", (1200, 630), "#14181F")
draw = ImageDraw.Draw(image)

display = ImageFont.truetype(r"C:\Windows\Fonts\georgiab.ttf", 86)
body = ImageFont.truetype(r"C:\Windows\Fonts\arial.ttf", 31)
mono = ImageFont.truetype(r"C:\Windows\Fonts\consola.ttf", 23)

draw.ellipse((76, 78, 94, 96), fill="#C8453A")
draw.text((112, 72), "PUBLIC CRIMINOLOGY  ·  EVIDENCE OVER ANECDOTE", font=mono, fill="#D9A441")
draw.text((76, 164), "Serial Criminologist", font=display, fill="#F5F2EC")
draw.line((76, 292, 1124, 292), fill="#3A4A5C", width=2)
draw.text((76, 338), "Understanding crime before responding to it.", font=body, fill="#CFC9BF")
draw.text((76, 492), "DR. WADE DEISMAN", font=mono, fill="#F5F2EC")
draw.text((76, 535), "serialcriminologist.ca", font=mono, fill="#C8453A")

image.save(OUTPUT, "PNG", optimize=True)
print(f"Generated {OUTPUT}")
