"""把角色圖片內嵌進冒險地圖，輸出單一檔案 adventure-map.html / .txt"""
import base64, io, pathlib
from PIL import Image
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'src/adventure-map.template.html').read_text(encoding='utf-8')
def uri(path, size, q=84):
    im = Image.open(root / path).convert('RGB'); im.thumbnail((size, size), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=q, optimize=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()
html = html.replace('__IMG_full__', uri('images/swsh-ip-full.jpg', 480))
for k in ['xiaosi', 'pijbo', 'juanmao', 'sisi', 'xiner']:
    html = html.replace(f'__IMG_{k}__', uri(f'images/swsh-{k}.png', 180))
assert '__IMG_' not in html
for ext in ('html', 'txt'):
    (root / f'adventure-map.{ext}').write_text(html, encoding='utf-8')
print(len(html.encode()) // 1024, 'KB')
