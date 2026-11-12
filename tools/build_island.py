"""組合 SWSH AI 自學指令島：內嵌 three.js 與角色圖片，輸出單一檔案 ai-island.html / .txt"""
import base64, io, pathlib
from PIL import Image
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'src/ai-island.template.html').read_text(encoding='utf-8')
def uri(path, size, q=86):
    im = Image.open(root / path).convert('RGB'); im.thumbnail((size, size), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=q, optimize=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()
for k in ['xiaosi', 'pijbo', 'juanmao', 'sisi', 'xiner']:
    html = html.replace(f'__IMG_{k}__', uri(f'images/swsh-{k}.png', 220))
three = (root / 'vendor/three.min.js').read_text(encoding='utf-8')
html = html.replace('__THREE_JS__', three)
assert '__IMG_' not in html and '__THREE_JS__' not in html
for ext in ('html', 'txt'):
    (root / f'ai-island.{ext}').write_text(html, encoding='utf-8')
print(len(html.encode()) // 1024, 'KB')
