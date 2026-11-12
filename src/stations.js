const FORM = 'https://www.swsh.hlc.edu.tw/ischool/rfile/9a3f5bcee556c351c7bd3a55caab7102?fd=1';
const FOLDER = 'https://www.swsh.hlc.edu.tw/ischool/resource/folder/47378c964e822f1065c8228405b16e4f';
const GEMINI = 'https://gemini.google.com/app';
const L = (href, t) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${t}</a>`;
const aiBox = (title, use, p) => `<div class="ai"><h4>🤖 AI 小幫手（選用）：${title}</h4><div class="use">${use}｜填入框框 → 複製 → 貼到 AI。AI 的回答要查證，作品要自己完成。</div><div class="prompt" data-prompt="${encodeURIComponent(p)}"></div><div class="acts"><button class="btn copy" type="button">📋 複製指令</button><a class="btn ghost" href="${GEMINI}" target="_blank" rel="noopener noreferrer">開啟 Gemini ↗</a></div></div>`;

// ===================== 八個學習站 =====================
const STATIONS = [
  { id: 'jiena', no: 1, name: '接納樓', sub: '普通科教室', topic: '認識自主學習', emoji: '🏫', c: '#16A34A', s: '#F0FDF4', i: '#166534',
    html: () => `
      <p class="lead">自主學習是 108 課綱「彈性學習時間」的一種：<b>由你自己決定學什麼、規劃怎麼學、按進度執行，最後發表成果。</b></p>
      <div class="learn">📍 這一站你會知道：<b>自主學習是什麼、為什麼要做、可以學什麼、要遵守哪些規定</b></div>
      <div class="sec"><h3>自主學習 ≠ 自習</h3>
        <div class="compare"><div class="bad"><b>❌ 自習</b>寫作業、讀考試範圍、補進度，內容由課表或考試決定。</div><div class="good"><b>✅ 自主學習</b>選一個你真心好奇的主題，自己訂目標與 18 週進度，最後產出看得見的成果。</div></div>
      </div>
      <div class="sec"><h3>為什麼要自主學習？</h3>
        <div class="grid2">
          <div class="tile"><span class="e">🧭</span><b>學會規劃</b>練習訂目標、排進度、管理時間。</div>
          <div class="tile"><span class="e">🔍</span><b>探索興趣</b>課本以外的世界，找到想深入的方向。</div>
          <div class="tile"><span class="e">📁</span><b>累積歷程</b>成果與反思可以上傳學習歷程檔案。</div>
        </div>
      </div>
      <div class="sec"><h3>可以學什麼？（主題舉例）</h3>
        <div class="grid2">
          <div class="tile"><b>📘 學科延伸</b>把課堂內容學得更深，例如：生活中的統計。</div>
          <div class="tile"><b>🛠️ 技能學習</b>程式設計、攝影剪輯、烹飪、外語⋯</div>
          <div class="tile"><b>🔬 專題探究</b>例如：花蓮在地文化、海洋環境調查。</div>
          <div class="tile"><b>🎨 創作展演</b>繪畫、音樂、寫作、影像作品。</div>
        </div>
        <p style="font-size:13.5px;color:#64748B;margin-top:8px">主題需經學生自主學習小組審核通過才能實施。</p>
      </div>
      <div class="sec"><h3>一定要知道的規定</h3>
        <ul class="check">
          <li>✅ 計畫要經過 <b>家長、指導老師與相關處室簽核</b>，再由 <b>學生自主學習小組審核</b>。</li>
          <li>✅ 執行期間 <b>每週攜帶自主學習紀錄表</b>，由指導教師認證。</li>
          <li>⚠️ 未依規定認證，或未到核定的地點，<b>依校規處理</b>。</li>
        </ul>
      </div>
      <div class="note">📌 實際申請時間、表件與規定，以學校公告的當學年度「學生自主學習實施辦法」及圖資中心公告為準。</div>` },
  { id: 'track', no: 2, name: '操場', sub: '18 週跑道', topic: '學期時程總覽', emoji: '🏃', c: '#DC2626', s: '#FEF2F2', i: '#B91C1C',
    html: () => `
      <p class="lead">自主學習就像跑一圈 <b>18 週的跑道</b>：起跑前先報名，跑完還要衝過終點線！</p>
      <div class="learn">📍 這一站你會知道：<b>整個學期每個階段要做什麼、什麼時候做</b></div>
      <div class="sec"><h3>跑道地圖</h3>
        <div class="track">
          <div style="--d:#64748B"><span class="dot">0</span><div class="tc"><span>起跑前・前一學期</span><b>📣 提出申請</b>注意學校公告的申請期限，填寫自主學習計畫並完成簽核。</div></div>
          <div style="--d:#16A34A"><span class="dot">1</span><div class="tc"><span>第 1-2 週</span><b>✏️ 擬定計畫</b>確立主題與 18 週進度規劃，填妥計畫申請表並請指導老師簽名指導。</div></div>
          <div style="--d:#D97706"><span class="dot">2</span><div class="tc"><span>第 3 週</span><b>🔍 審核核定</b>自主學習推動小組審查，通過後依核定地點前往圖資中心或專科教室研習。</div></div>
          <div style="--d:#0284C7"><span class="dot">3</span><div class="tc"><span>第 4-16 週</span><b>🔧 落實執行</b>每週攜帶紀錄表記錄收穫與困惑，課堂結束前由現場指導老師核章。</div></div>
          <div style="--d:#7C3AED"><span class="dot">4</span><div class="tc"><span>第 17-18 週</span><b>🎉 成果發表</b>彙整成果作品與自我反思，參與成果分享。</div></div>
          <div style="--d:#CA8A04"><span class="dot">🏁</span><div class="tc"><span>終點</span><b>📁 上傳學習歷程</b>把成果與反思上傳到高中學習歷程平台！</div></div>
        </div>
      </div>
      <div class="sec"><h3>我的進度檢查表（可以勾勾看）</h3>
        <ul class="check">
          <li><input type="checkbox" aria-label="已決定主題"> 我已經決定好主題</li>
          <li><input type="checkbox" aria-label="已找指導老師"> 我已經找到指導老師</li>
          <li><input type="checkbox" aria-label="已完成申請表"> 我已經填好申請表並完成簽核</li>
          <li><input type="checkbox" aria-label="已確認核定地點"> 我知道核定的研習地點</li>
          <li><input type="checkbox" aria-label="每週紀錄"> 我每週都有寫紀錄表並請老師核章</li>
          <li><input type="checkbox" aria-label="準備成果"> 我已開始準備成果發表</li>
        </ul>
      </div>
      <div class="note">📌 各階段實際日期以圖資中心當學期公告為準。</div>` },
  { id: 'basket', no: 3, name: '籃球場', sub: '瞄準目標', topic: '找主題、定目標', emoji: '🏀', c: '#EA580C', s: '#FFF7ED', i: '#C2410C',
    html: () => `
      <p class="lead">投籃要先看準籃框。自主學習也一樣：<b>主題選得好、目標訂得清楚</b>，後面就順了。</p>
      <div class="learn">📍 這一站你會知道：<b>怎麼找到好主題、怎麼檢查主題、怎麼寫出清楚的目標</b></div>
      <div class="sec"><h3>三個找主題的方法</h3>
        <div class="grid2">
          <div class="tile"><span class="e">❤️</span><b>從興趣出發</b>你平常最常花時間做什麼？想變得更厲害的是什麼？</div>
          <div class="tile"><span class="e">📖</span><b>從課堂延伸</b>上課時哪個內容讓你想「再多知道一點」？</div>
          <div class="tile"><span class="e">🌏</span><b>從生活問題出發</b>家裡、社區、花蓮有什麼現象值得調查或改善？</div>
        </div>
      </div>
      <div class="sec"><h3>主題健康檢查</h3>
        <ul class="check">
          <li><input type="checkbox" aria-label="真心有興趣"> 我真的有興趣，願意花 18 週投入</li>
          <li><input type="checkbox" aria-label="範圍剛好"> 範圍不會太大，18 週內做得完</li>
          <li><input type="checkbox" aria-label="有資源"> 學校或網路上找得到需要的資源與設備</li>
          <li><input type="checkbox" aria-label="成果具體"> 最後能產出具體成果（作品、報告、影片⋯）</li>
          <li><input type="checkbox" aria-label="指導老師"> 有適合的老師可以指導</li>
        </ul>
      </div>
      <div class="sec"><h3>把目標寫清楚（SMART 原則）</h3>
        <p>具體 Specific・可衡量 Measurable・可達成 Achievable・相關 Relevant・有時限 Time-bound</p>
        <div class="compare"><div class="bad"><b>❌ 模糊的目標</b>「我想學攝影。」</div><div class="good"><b>✅ 清楚的目標</b>「在 18 週內學會手機攝影的構圖與光線技巧，完成 1 組 12 張的花蓮街景攝影作品並辦小型展覽。」</div></div>
      </div>
      ${aiBox('興趣變主題', '還沒有主題時', '你是一位高中自主學習指導老師。我是高中生，我的興趣是【興趣1】、【興趣2】。\n請幫我發想 6 個可以在 18 週內完成的自主學習主題，每個主題用一句話說明要做什麼、最後可以產出什麼成果。')}` },
  { id: 'library', no: 4, name: '圖書館', sub: '圖書資訊中心', topic: '找資源、找資料', short: '找資源', emoji: '📚', c: '#2563EB', s: '#EFF6FF', i: '#1D4ED8',
    html: () => `
      <p class="lead">圖書資訊中心是你的<b>資源補給站</b>：館藏、電子書、線上課程、資料庫都在這裡，有問題也可以直接來找老師。</p>
      <div class="learn">📍 這一站你會知道：<b>去哪裡找資料、怎麼判斷資料可不可信</b></div>
      <div class="feature">
        <a href="http://opac.swsh.hlc.edu.tw/" target="_blank" rel="noopener noreferrer"><span>📖</span><span><b>四維高中 WebPAC 館藏查詢</b><small>查詢校內圖書、期刊與主題書單</small></span></a>
        <a href="https://www.shs.edu.tw/" target="_blank" rel="noopener noreferrer"><span>🏆</span><span><b>中學生網站（小論文／讀書心得）</b><small>自學成果也能投稿參賽</small></span></a>
      </div>
      <div class="sec"><h3>找資料三步驟</h3>
        <ol class="flow">
          <li><span><b>列出關鍵字</b>把主題拆成 3～5 個關鍵詞，再想同義詞與英文。</span></li>
          <li><span><b>先查館藏，再上網</b>書與期刊經過編輯審查，是最可靠的起點。</span></li>
          <li><span><b>查證來源</b>看看：誰寫的？什麼時候寫的？有沒有證據？目的是什麼？</span></li>
        </ol>
      </div>
      <div class="sec"><h3>推薦自學資源</h3>
        <div class="cat">📘 學科學習平台（高中課程）</div>
        <div class="links">${L('https://adl.edu.tw/', '因材網')}${L('https://www.junyiacademy.org/', '均一教育平台')}${L('https://cooc.tp.edu.tw/', '臺北酷課雲')}${L('http://fun.hcc.edu.tw/', 'Fun 學王')}${L('https://www.ewant.org/', 'eWant 自主學習')}${L('https://www.learnmode.net/', '學習吧 LearnMode')}</div>
        <div class="cat">🎓 大學多元課程</div>
        <div class="links">${L('https://taiwanmooc.org/', '磨課師 MOOCs')}${L('http://case.ntu.edu.tw/', '臺大科教中心')}${L('https://apc.cloud.ncnu.edu.tw/', '大學先修課程認證')}${L('http://taaed.org.tw/', 'TAAED 中文文化課程')}${L('http://www.tocwc.org.tw/', '台灣開放式課程聯盟')}${L('http://www.sharecourse.net/', 'ShareCourse 學聯網')}${L('http://moocs.pu.edu.tw/', '靜宜大學免費課程')}${L('https://www.edx.org/', 'edX（英）')}${L('https://www.coursera.org/', 'Coursera（英）')}${L('https://tedxtaipei.com/', 'TEDxTaipei')}${L('https://www.youtube.com/education', 'YouTube EDU')}${L('https://tw.voicetube.com/', 'VoiceTube')}</div>
        <div class="cat">🎨 藝術與音樂</div>
        <div class="links">${L('https://www.youtube.com/@MissGa', '嘎老師 Miss Ga')}${L('https://www.daveconservatoire.org/', 'Dave Conservatoire')}${L('https://www.kadenze.com/', 'Kadenze')}</div>
        <div class="cat">💻 程式設計</div>
        <div class="links">${L('https://code.org/', 'Code.org')}${L('https://www.codecademy.com/', 'Codecademy')}${L('https://scratch.mit.edu/', 'Scratch')}</div>
        <div class="cat">📚 線上資料庫</div>
        <div class="links">${L('https://ebook.nlpi.edu.tw/', '電子書服務平台')}${L('https://www.nlpi.edu.tw/', '國立公共資訊圖書館')}${L('http://hanchi.ihp.sinica.edu.tw/', '漢籍全文資料庫')}${L('https://tm.ncl.edu.tw/', '國圖臺灣鄉土文獻')}${L('https://taiwancinema.bamid.gov.tw/', '電影與文學資料庫')}${L('https://children.moc.gov.tw/', '圓夢繪本資料庫')}</div>
      </div>
      <div class="sec"><h3>聯絡圖書資訊中心</h3>
        <div class="grid2"><div class="tile">📍 970 花蓮市中山路一段 200 號</div><a class="tile" href="tel:+88638561455" style="text-decoration:none;color:inherit">☎️ (03) 856-1455 轉 517（點我撥打）</a></div>
        <p style="margin-top:8px">申請、主題發想或填表時有任何疑問，歡迎隨時到圖資中心找老師諮詢！</p>
      </div>` },
  { id: 'ganen', no: 5, name: '感恩樓', sub: '商科實習大樓', topic: '寫計畫、送申請', emoji: '📝', c: '#0891B2', s: '#ECFEFF', i: '#0E7490',
    html: () => `
      <p class="lead">主題和目標都有了，接下來把想法寫成一份<b>自主學習計畫申請表</b>，完成簽核後送出。</p>
      <div class="learn">📍 這一站你會知道：<b>申請表要寫什麼、送件流程、怎麼把計畫寫好</b></div>
      <div class="feature"><a href="${FORM}" target="_blank" rel="noopener noreferrer"><span>📄</span><span><b>下載：學生自主學習計畫申請表</b><small>包含自學動機、18 週進度時程規劃、設備場地需求申請</small></span></a></div>
      <div class="sec"><h3>申請流程</h3>
        <ol class="flow">
          <li><span><b>下載並填寫申請表</b>寫下自學動機、目標、18 週進度與需要的設備場地。</span></li>
          <li><span><b>找指導老師討論並簽名</b>請老師看過你的計畫，給你建議。</span></li>
          <li><span><b>請家長簽名</b>讓家人知道你這學期要學什麼。</span></li>
          <li><span><b>相關處室簽核</b>依申請表上的欄位完成簽核。</span></li>
          <li><span><b>在期限內繳交</b>交由學生自主學習小組審核（期限依學校公告）。</span></li>
        </ol>
      </div>
      <div class="sec"><h3>把計畫寫好的小技巧</h3>
        <div class="grid2">
          <div class="tile"><b>💭 動機要真誠</b>寫「為什麼」想學，連結你的經驗或未來方向。</div>
          <div class="tile"><b>🗓️ 進度要具體</b>每週寫出要完成的小任務，而不是只寫「學習」。</div>
          <div class="tile"><b>🧰 資源要寫清楚</b>需要哪些書、網站、設備或教室。</div>
          <div class="tile"><b>🎯 成果要看得見</b>說明最後會產出什麼、如何發表。</div>
        </div>
      </div>
      ${aiBox('18 週進度草稿', '寫進度表沒有頭緒時', '我的自主學習主題是【我的主題】，目標是【我的目標】。\n請幫我規劃 18 週進度表草稿：第 1-2 週擬定計畫、第 3 週審核、第 4-16 週執行、第 17-18 週成果發表。請用表格列出每週的小目標與要留下的紀錄。我會再自己修改並和指導老師討論。')}` },
  { id: 'volley', no: 6, name: '排球場', sub: '把球傳好', topic: '審核核定', emoji: '🏐', c: '#D97706', s: '#FFFBEB', i: '#B45309',
    html: () => `
      <p class="lead">把計畫「傳」給審核小組！<b>第 3 週</b>由自主學習推動小組審查計畫，通過後就能正式開始。</p>
      <div class="learn">📍 這一站你會知道：<b>審核在做什麼、送審前怎麼自我檢查、通過後要做什麼</b></div>
      <div class="sec"><h3>送審前自我檢查</h3>
        <ul class="check">
          <li><input type="checkbox" aria-label="主題明確"> 主題明確，看得出要學什麼</li>
          <li><input type="checkbox" aria-label="進度可行"> 18 週進度合理、做得到</li>
          <li><input type="checkbox" aria-label="地點設備"> 需要的地點、設備寫清楚了</li>
          <li><input type="checkbox" aria-label="成果具體"> 預期成果具體</li>
          <li><input type="checkbox" aria-label="簽名齊全"> 家長、指導老師與處室簽核都完成了</li>
        </ul>
      </div>
      <div class="sec"><h3>審核之後</h3>
        <div class="compare"><div class="good"><b>✅ 審核通過</b>確認核定結果與研習地點，依核定地點前往圖資中心或專科教室研習。</div><div class="bad" style="background:#FFFBEB;border-color:#FDE68A"><b>✏️ 需要修改</b>依審核意見和指導老師討論修正，有問題可以到圖資中心詢問。</div></div>
      </div>
      <div class="note">🏐 就像排球需要隊友合作：和指導老師保持溝通，是計畫順利進行的關鍵。</div>` },
  { id: 'tech', no: 7, name: '科技樓', sub: '工科實習工場', topic: '動手執行・每週紀錄', short: '執行與紀錄', emoji: '🔧', c: '#475569', s: '#F1F5F9', i: '#334155',
    html: () => `
      <p class="lead">第 4-16 週是最長的一段：<b>按進度動手做，每週留下紀錄</b>。一點一點累積，成果就會出現。</p>
      <div class="learn">📍 這一站你會知道：<b>每週上課的流程、紀錄表怎麼寫、卡關怎麼辦</b></div>
      <div class="sec"><h3>每週的自主學習時間</h3>
        <ol class="flow">
          <li><span><b>帶紀錄表到核定地點報到</b>準時到核定的研習地點。</span></li>
          <li><span><b>依進度學習與實作</b>對照計畫，完成本週的小目標。</span></li>
          <li><span><b>填寫紀錄表</b>寫下本週的收穫與困惑。</span></li>
          <li><span><b>請指導老師核章</b>課堂結束前，由現場指導老師核章認證。</span></li>
        </ol>
      </div>
      <div class="warn">⚠️ 未依規定認證，或未到核定的地點，依校規處理。請記得每週攜帶紀錄表！</div>
      <div class="sec"><h3>紀錄表這樣寫</h3>
        <div class="compare"><div class="bad"><b>❌ 太簡單</b>「今天看影片學程式。」</div><div class="good"><b>✅ 具體有反思</b>「看完迴圈單元並寫出九九乘法表；卡在巢狀迴圈縮排，下週先複習再做練習題。」</div></div>
      </div>
      <div class="sec"><h3>卡關了怎麼辦？</h3>
        <div class="grid2">
          <div class="tile"><b>🔁 縮小範圍</b>先完成最核心的部分。</div>
          <div class="tile"><b>🙋 問指導老師</b>越早說，越容易調整。</div>
          <div class="tile"><b>📚 回圖書館找資源</b>換一本書或一門課試試。</div>
        </div>
      </div>
      ${aiBox('每週紀錄引導', '不知道紀錄表怎麼寫時', '我這週的自主學習做了：【這週做了什麼】，遇到的困難是：【遇到的困難】。\n請用 3 個問題引導我自己寫出本週紀錄：學到什麼、困難怎麼處理、下週要怎麼調整。一次只問一題。')}` },
  { id: 'wuhe', no: 8, name: '五和樓', sub: '觀光餐飲大樓', topic: '成果發表・上傳歷程', short: '成果發表', emoji: '🎉', c: '#7C3AED', s: '#F5F3FF', i: '#6D28D9',
    html: () => `
      <p class="lead">就像餐飲科把料理端上桌，第 17-18 週要把你的<b>學習成果「端出來」</b>，和大家分享！</p>
      <div class="learn">📍 這一站你會知道：<b>成果怎麼整理、可以怎麼呈現、反思怎麼寫、去哪裡看學長姐的作品</b></div>
      <div class="sec"><h3>完成成果三步驟</h3>
        <ol class="flow">
          <li><span><b>彙整成果作品</b>整理作品、紀錄表、過程照片。</span></li>
          <li><span><b>寫下自我反思</b>做了什麼 → 學到什麼 → 遇到什麼困難 → 怎麼解決 → 未來怎麼應用。</span></li>
          <li><span><b>參與成果分享並上傳</b>參加成果發表，並上傳到高中學習歷程平台。</span></li>
        </ol>
      </div>
      <div class="sec"><h3>成果可以這樣呈現</h3>
        <div class="grid2">
          <div class="tile"><span class="e">📊</span><b>簡報發表</b>5 分鐘說清楚過程與收穫。</div>
          <div class="tile"><span class="e">🎬</span><b>影片紀錄</b>適合技能、實作類主題。</div>
          <div class="tile"><span class="e">🖼️</span><b>作品展示</b>海報、模型、畫作、料理。</div>
          <div class="tile"><span class="e">📝</span><b>小論文</b>可投稿中學生網站。</div>
        </div>
      </div>
      <div class="feature"><a href="${FOLDER}" target="_blank" rel="noopener noreferrer"><span>🏆</span><span><b>學生成果作品專區</b><small>瀏覽歷屆學長姐的自然科普、人文社會、藝術創作與科技程式作品</small></span></a></div>
      ${aiBox('發表前模擬提問', '準備成果發表時', '請扮演成果發表會的評審老師。我的主題是【我的主題】，成果摘要是：【成果摘要】。\n請提出 5 個可能會問的問題，等我回答後再給我回饋。')}` }
];
