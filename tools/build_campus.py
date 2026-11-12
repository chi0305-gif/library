"""組合四維自主學習校園（毛氈版）：插入學習站內容與 three.js，輸出 swsh-campus.html / .txt"""
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'src/felt.template.html').read_text(encoding='utf-8')
html = html.replace('/*@@STATIONS@@*/', (root / 'src/stations.js').read_text(encoding='utf-8'))
html = html.replace('__THREE_JS__', (root / 'vendor/three.min.js').read_text(encoding='utf-8'))
assert '@@STATIONS@@' not in html and '__THREE_JS__' not in html
for ext in ('html', 'txt'):
    (root / f'swsh-campus.{ext}').write_text(html, encoding='utf-8')
print(len(html.encode()) // 1024, 'KB')
