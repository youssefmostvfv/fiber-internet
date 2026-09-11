import urllib.request
import re
import os

url = "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
css_content = urllib.request.urlopen(req).read().decode('utf-8')

font_urls = re.findall(r'url\((https://[^\)]+\.woff2)\)', css_content)

os.makedirs('assets/fonts', exist_ok=True)

for idx, font_url in enumerate(font_urls):
    filename = f"almarai-{idx}.woff2"
    urllib.request.urlretrieve(font_url, os.path.join('assets/fonts', filename))
    css_content = css_content.replace(font_url, filename)

with open('assets/fonts/almarai.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Almarai font downloaded locally successfully!")
