"""組合四維立體圖書館：內嵌 three.js 與 IP 角色圖，輸出 swsh-library.html / .txt"""
import base64, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'src/library.template.html').read_text(encoding='utf-8')
html = html.replace('__THREE_JS__', (root / 'vendor/three.min.js').read_text(encoding='utf-8'))
for k in ('xiner', 'xiaosi', 'sisi', 'juanmao', 'pijbo'):
    b64 = base64.b64encode((root / f'images/swsh-{k}.png').read_bytes()).decode()
    html = html.replace(f'__IMG_{k}__', 'data:image/png;base64,' + b64)
assert '__THREE_JS__' not in html and '__IMG_' not in html
for ext in ('html', 'txt'):
    (root / f'swsh-library.{ext}').write_text(html, encoding='utf-8')
print(len(html.encode()) // 1024, 'KB')
