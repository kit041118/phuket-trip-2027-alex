/* 布吉之旅 2027 */
function gmaps(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

const TRIP_DATA = {
  trip: {
    title: "布吉之旅",
    subtitle: "香港 ⇄ 布吉・卡塔諾伊三晚，舊城兩晚",
    start: "2027-05-19",
    end: "2027-05-24",
    nights: 5,
    flights: [
      {
        code: "UO724",
        from: "香港 T2",
        to: "布吉",
        time: "07:55–10:30",
        date: "2027-05-19",
        fare: "隨心飛",
        duration: "約 3 小時 35 分",
      },
      {
        code: "UO725",
        from: "布吉",
        to: "香港 T1",
        time: "11:15–15:55",
        date: "2027-05-24",
        fare: "隨心飛",
        duration: "約 3 小時 40 分",
      },
    ],
  },
  flight_image: "assets/flight-uo724-uo725.png",
  weather_regions: [
    { date: "2027-05-19", region: "卡塔諾伊", lat: 7.808, lon: 98.299 },
    { date: "2027-05-20", region: "卡塔諾伊", lat: 7.808, lon: 98.299 },
    { date: "2027-05-21", region: "卡塔諾伊", lat: 7.808, lon: 98.299 },
    { date: "2027-05-22", region: "卡塔至舊城", lat: 7.85, lon: 98.34 },
    { date: "2027-05-23", region: "普吉舊城", lat: 7.884, lon: 98.388 },
    { date: "2027-05-24", region: "舊城・機場", lat: 7.95, lon: 98.35 },
  ],
  areas: [
    {
      title: "前三晚・卡塔諾伊",
      text: "5 月 19 日至 22 日住 Kata Noi。小海灣比芭東安靜，沙灘就在酒店外；浪大就改用泳池。卡塔、卡隆與拉威海角都在十多分鐘車程內。",
    },
    {
      title: "後兩晚・普吉舊城",
      text: "5 月 22 日午後退房，改住攀牙路的老屋酒店。週六晚是那卡週末市集，週日晚是塔廊路行人街，走路就到。週一去機場也比從南端出海灘近。",
    },
    {
      title: "這趟不排的事",
      text: "不去皮皮島、攀牙灣或詹姆斯邦島。五月海況不穩，一日遊也會把五晚變成趕船。每天只做一件出門的事，下午留白。",
    },
  ],
  tips: [
    "五月是雨季初段。上午多半仍晴，午後常有驟雨，出門帶薄外套或摺傘。",
    "西岸（芭東、卡隆、卡塔）此季常有大浪。下水只看海灘旗：紅旗不要游。卡塔諾伊與奈漢相對較受岬角保護，但仍以當日旗號為準。",
    "香港是英式三腳插，泰國多用兩腳扁插或圓插。電壓同為約 220V，帶一個轉接頭即可。",
    "市集、長尾船與部分小店收現金。酒店與較大餐廳一般可刷卡。Grab 用 App 付款最省事。",
    "大佛與寺院要遮肩蓋膝。機場不要跟主動拉客的人走，上車點以指示牌與 App 為準。",
    "行李額、櫃檯截止與餐飲以香港快運 App 當日顯示為準。國際線常見於起飛前約 60 分鐘停止接受行李，這趟按提早到機場來排，不卡在截止線上。",
  ],
  overview: [
    { name: "布吉國際機場", lat: 8.105882, lng: 98.305702, places: [{ name: "布吉國際機場", url: gmaps("Phuket International Airport") }] },
    { name: "卡塔坦尼海灘度假村", lat: 7.807724, lng: 98.29932, places: [{ name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") }] },
    { name: "The Memory at On On", lat: 7.883809, lng: 98.388544, places: [{ name: "The Memory", url: gmaps("The Memory at On On Hotel Phuket") }] },
    { name: "拉威海角", lat: 7.761892, lng: 98.305358, places: [{ name: "拉威海角", url: gmaps("Promthep Cape") }] },
    { name: "普吉大佛", lat: 7.827521, lng: 98.312445, places: [{ name: "大佛", url: gmaps("Big Buddha Phuket") }] },
    { name: "那卡週末市集", lat: 7.880533, lng: 98.366326, places: [{ name: "那卡市集", url: gmaps("Naka Weekend Market Phuket") }] },
  ],
  days: [
    {
      date: "2027-05-19",
      weekday: "三",
      region: "卡塔諾伊",
      summary: "上午落地。下午只留給海灘和補眠，不排景點。",
      items: [
        {
          time: "0755-1030",
          cat: "flight",
          title: "UO724 香港 T2 → 布吉",
          notes: [
            "出發：香港國際機場客運大樓 2，07:55\n到達：布吉國際機場國際線航廈，當地 10:30\n車程：約 3 小時 35 分\n車費：機票已含（隨心飛）\n香港與泰國相差一小時，10:30 已是布吉時間。機上餐飲以機票為準，建議在香港機場用完早餐再上機。",
          ],
          places: [
            { name: "香港機場 T2", url: gmaps("Hong Kong International Airport Terminal 2") },
            { name: "布吉國際機場", url: gmaps("Phuket International Airport") },
          ],
          links: ["https://www.hkexpress.com/"],
        },
        {
          time: "1030-1200",
          cat: "note",
          title: "入境、取行李",
          notes: [
            "建議離開航廈：約 12:00 前後\n國際線尖峰時入境可能接近一小時。護照、回程機位與酒店地址放在手邊。不要跟航廈出口主動招攬的司機走。",
          ],
          places: [{ name: "布吉國際機場", url: gmaps("Phuket International Airport") }],
        },
        {
          time: "1200-1330",
          cat: "transport",
          title: "機場 → 卡塔諾伊",
          notes: [
            "出發：布吉國際機場\n到達：Katathani Phuket Beach Resort\n車程：約 60–80 分，雨天或塞車再加\n上車地點：Grab 指定上車點（以當日指示牌與 App 為準）\n車費：Grab 約 900–1,200 銖，浮動；機場櫃台計程車多為一口價\n行李多，這段用專車或 Grab，不轉機場巴士。",
          ],
          places: [
            { name: "布吉國際機場", url: gmaps("Phuket International Airport") },
            { name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") },
          ],
        },
        {
          time: "1330-1430",
          cat: "hotel",
          title: "寄行李，午餐",
          notes: [
            "建議抵達：約 13:30\n入住時間以確認信為準，多在下午。未到時間可先寄行李。\n午餐可在酒店，或到卡塔海灘的 The Boathouse（約 07:00–23:00）。",
          ],
          places: [
            { name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") },
            { name: "The Boathouse", url: gmaps("The Boathouse Phuket Kata Beach") },
          ],
        },
        {
          time: "1430-1730",
          cat: "beach",
          title: "卡塔諾伊：游泳、泳池、補眠",
          notes: ["下午不安排第二個景點。先看海灘旗，浪大就留在泳池。五月陽光仍強，補擦防曬。"],
          places: [
            { name: "卡塔諾伊海灘", url: gmaps("Kata Noi Beach") },
            { name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") },
          ],
        },
        {
          time: "1800-2000",
          cat: "food",
          title: "晚餐：After Beach Bar 或酒店",
          notes: [
            "建議抵達：約 18:00\n建議離開：約 20:00\nAfter Beach Bar 在卡塔諾伊往奈漢的山路上，日落與泰菜都輕鬆，約 12:00–22:00。太累就在酒店吃，不必出門。",
          ],
          places: [
            { name: "After Beach Bar", url: gmaps("After Beach Bar Kata Noi") },
            { name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") },
          ],
        },
      ],
    },
    {
      date: "2027-05-20",
      weekday: "四",
      region: "卡塔・拉威海角",
      summary: "海灘為主。傍晚只去拉威海角看日落，然後在卡塔吃海鮮。",
      items: [
        {
          time: "0800-0930",
          cat: "food",
          title: "慢早餐",
          notes: ["若訂房含早餐，留在酒店。若不含，The Boathouse 早餐約 07:00–11:00，就在卡塔沙灘。"],
          places: [{ name: "The Boathouse", url: gmaps("The Boathouse Phuket Kata Beach") }],
        },
        {
          time: "0930-1230",
          cat: "beach",
          title: "卡塔諾伊，或走到卡塔、卡隆",
          notes: [
            "三個沙灘相鄰。想換風景就 Grab 或沿海岸到卡塔、卡隆，單程約十多分鐘。\n只在旗號允許時下水。這不是浮潛日，也不租水上摩托。",
          ],
          places: [
            { name: "卡塔諾伊", url: gmaps("Kata Noi Beach") },
            { name: "卡塔海灘", url: gmaps("Kata Beach Phuket") },
            { name: "卡隆海灘", url: gmaps("Karon Beach Phuket") },
          ],
        },
        {
          time: "1230-1400",
          cat: "food",
          title: "午餐：海灘一帶",
          notes: ["不必訂位。The Boathouse 或卡塔南端的小店都可以。吃完回房。"],
          places: [{ name: "The Boathouse", url: gmaps("The Boathouse Phuket Kata Beach") }],
        },
        {
          time: "1400-1600",
          cat: "buffer",
          title: "留白：午睡、泳池、讀書",
          notes: ["這段故意空着。午後陣雨就當在房裡。不要把拉威海角提前塞進中午。"],
        },
        {
          time: "1615-1845",
          cat: "sight",
          title: "拉威海角看日落",
          notes: [
            "出發：酒店約 16:15\n到達：拉威海角約 16:30\n車程：約 15 分\n車費：Grab 約 200–300 銖（以 App 為準）\n五月日落約 18:30 前後，雲多也值得看。觀景台人多，可早到；看完天空轉色再走。此處是觀景，不是游泳。",
          ],
          places: [{ name: "拉威海角", url: gmaps("Promthep Cape Phuket") }],
        },
        {
          time: "1900-2100",
          cat: "food",
          title: "海鮮晚餐：The Boathouse",
          notes: [
            "建議抵達：約 19:00\n建議離開：約 21:00\n地點在卡塔海灘，從海角回去順路。晚餐營業至約 23:00，最後點餐約 22:00。想換懸崖座位可改 On The Rock（卡隆，約 12:00–22:00，建議先訂）。",
          ],
          places: [
            { name: "The Boathouse", url: gmaps("The Boathouse Phuket Kata Beach") },
            { name: "On The Rock", url: gmaps("On The Rock Marina Phuket") },
          ],
          links: ["https://boathouse-phuket.com/dining"],
        },
      ],
    },
    {
      date: "2027-05-21",
      weekday: "五",
      region: "卡塔諾伊",
      summary: "上午 SPA，下午完全留白。這是海灘假期的正日。",
      items: [
        {
          time: "0830-0930",
          cat: "food",
          title: "早餐",
          notes: ["吃完直接去做 SPA，不必先去沙灘晒一輪。"],
          places: [{ name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") }],
        },
        {
          time: "1000-1230",
          cat: "spa",
          title: "SPA 半日",
          notes: [
            "建議抵達：10:00\n建議離開：約 12:30\n首選不必出門：酒店 Tew Son Spa，官網寫 10:00–19:00。\n想換環境：Oasis Sky Breeze 在卡隆山丘，Grab 約 10 分，官網寫 10:00–22:00，建議前一日預約。\nLet's Relax 在 The SIS Kata，離卡塔諾伊很近，官網寫 10:00–23:30。做 90–120 分鐘泰式或精油按摩即可，不必加一整套。",
          ],
          places: [
            { name: "Tew Son Spa", url: gmaps("Tew Son Spa Katathani") },
            { name: "Oasis Sky Breeze", url: gmaps("Oasis Sky Breeze Spa Kata Karon") },
            { name: "Let's Relax The SIS Kata", url: gmaps("Let's Relax Spa The SIS Kata Phuket") },
          ],
          links: [
            "https://www.katathani.com/facilities/spa/",
            "https://oasisspa.net/en/destination/phuket/",
            "https://letsrelaxspa.com/branches/phuket-the-sis-kata/",
          ],
        },
        {
          time: "1230-1400",
          cat: "food",
          title: "午餐",
          notes: ["回到卡塔或酒店吃。SPA 後不要立刻再坐車跨區。"],
          places: [{ name: "卡塔海灘", url: gmaps("Kata Beach Phuket") }],
        },
        {
          time: "1400-1800",
          cat: "buffer",
          title: "留白：沙灘或泳池",
          notes: ["下午沒有第二個預約。陣雨、想睡覺、想再下水，都可以。傍晚可沿卡隆海邊散步，不強制。"],
          places: [
            { name: "卡塔諾伊", url: gmaps("Kata Noi Beach") },
            { name: "卡隆海灘", url: gmaps("Karon Beach Phuket") },
          ],
        },
        {
          time: "1830-2030",
          cat: "food",
          title: "晚餐：On The Rock",
          notes: [
            "建議抵達：約 18:30\n建議離開：約 20:30\nMarina Phuket 的懸崖海鮮，約 12:00–22:00。由卡塔諾伊過去約 15 分。訂不到就回 The Boathouse 或酒店，不必改去芭東。",
          ],
          places: [{ name: "On The Rock", url: gmaps("On The Rock Marina Phuket Resort") }],
        },
      ],
    },
    {
      date: "2027-05-22",
      weekday: "六",
      region: "舊城・那卡",
      summary: "上午最後一次下海，中午換酒店。大佛只停一會兒，傍晚留給舊城和週末市集。",
      items: [
        {
          time: "0800-1100",
          cat: "beach",
          title: "早餐，最後一泳，退房",
          notes: [
            "建議退房離開：約 11:00\n行李在酒店集中好。泳裝放在手提袋，下午不會再回沙灘。",
          ],
          places: [{ name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") }],
        },
        {
          time: "1100-1230",
          cat: "food",
          title: "卡塔午餐",
          notes: ["吃完再上路。不要空肚子去大佛。"],
          places: [{ name: "The Boathouse", url: gmaps("The Boathouse Phuket Kata Beach") }],
        },
        {
          time: "1230-1400",
          cat: "sight",
          title: "順路：普吉大佛",
          notes: [
            "出發：卡塔約 12:30\n到達：大佛約 12:50\n車程：約 15–20 分\n車費：Grab 約 200–350 銖\n建議離開：約 14:00，參觀 30–40 分夠了\n免費入內（可隨喜）。肩膀與膝蓋要遮好。若午後大雨或隊伍很長，直接去舊城，不必勉強。",
          ],
          places: [{ name: "普吉大佛", url: gmaps("Big Buddha Phuket") }],
        },
        {
          time: "1400-1530",
          cat: "hotel",
          title: "入住 The Memory at On On",
          notes: [
            "出發：大佛\n到達：普吉舊城攀牙路 19 號\n車程：約 20–30 分\n車費：約 250–400 銖\n1927 年中葡式老屋改建。放下行李，不必立刻再出門趕場。",
          ],
          places: [{ name: "The Memory at On On", url: gmaps("The Memory at On On Hotel Phuket") }],
          links: ["https://www.thememoryhotel.com/en/"],
        },
        {
          time: "1530-1630",
          cat: "market",
          title: "舊城散步",
          notes: [
            "攀牙路、塔廊路、羅曼尼巷、迪布路都在步行範圍。Kopitiam by Wilai 星期六開到約 20:00，可先坐下喝一杯；星期日休息，不要留到明天。\n泰國華博物館若已關門，看街屋外觀即可。",
          ],
          places: [
            { name: "羅曼尼巷", url: gmaps("Soi Romanee Phuket Old Town") },
            { name: "Kopitiam by Wilai", url: gmaps("Kopitiam by Wilai Phuket") },
            { name: "泰國華博物館", url: gmaps("Phuket Thai Hua Museum") },
          ],
        },
        {
          time: "1630-1930",
          cat: "market",
          title: "那卡週末市集當晚餐",
          notes: [
            "出發：舊城約 16:30\n到達：維集，Wirat Hong Yok 路\n車程：約 10–15 分\n車費：Grab 約 120–200 銖\n星期六、日約 16:00 開，有資料寫至 22:00，亦有寫至 23:00。逛熟食、水果和日用品，約兩小時足夠，不必走完。\n若想坐下吃：回舊城可到 Raya（約至 22:00，週末宜先致電）或 Tu Kab Khao（攀牙路，約至 20:30，離酒店很近）。",
          ],
          places: [
            { name: "那卡週末市集", url: gmaps("Naka Weekend Market Phuket") },
            { name: "Raya", url: gmaps("Raya Restaurant Phuket Dibuk Road") },
            { name: "Tu Kab Khao", url: gmaps("Tu Kab Khao Phuket") },
          ],
          links: ["https://www.phuketnakamarket.com/"],
        },
      ],
    },
    {
      date: "2027-05-23",
      weekday: "日",
      region: "普吉舊城",
      summary: "慢日。午餐吃一頓本地菜，下午休息，傍晚塔廊路行人街。早睡，因為明天 11:15 的飛機。",
      items: [
        {
          time: "0800-1100",
          cat: "buffer",
          title: "睡到自然醒",
          notes: [
            "Kopitiam by Wilai 星期日休息。早餐用酒店，或十時後到 One Chun。\n不要把奈漢或自由沙灘排進上午。",
          ],
          places: [
            { name: "The Memory at On On", url: gmaps("The Memory at On On Hotel Phuket") },
            { name: "One Chun", url: gmaps("One Chun Cafe Restaurant Phuket") },
          ],
        },
        {
          time: "1130-1330",
          cat: "food",
          title: "午餐：Raya 或 One Chun",
          notes: [
            "建議抵達：約 11:30，比晚餐容易有位\nRaya 在迪布路老屋，普吉與南泰家常菜，蟹肉黃咖哩麵是招牌。約 10:30–22:00，週末晚餐宜先致電 076 218 155。\nOne Chun 就在附近，約 10:00–22:00（星期二或較早收）。",
          ],
          places: [
            { name: "Raya", url: gmaps("Raya Restaurant Dibuk Road Phuket") },
            { name: "One Chun", url: gmaps("One Chun Cafe Restaurant Phuket") },
          ],
        },
        {
          time: "1330-1600",
          cat: "buffer",
          title: "回酒店休息",
          notes: [
            "預設不再出門。明天要早起。\n若海況好又仍想見海：Grab 去奈漢或亞努伊，單程約 30–40 分，最遲 15:30 起程回舊城。浪大或下雨就取消。",
          ],
          places: [
            { name: "奈漢海灘", url: gmaps("Nai Harn Beach") },
            { name: "亞努伊海灘", url: gmaps("Ya Nui Beach Phuket") },
          ],
        },
        {
          time: "1600-1930",
          cat: "market",
          title: "塔廊路週日行人街",
          notes: [
            "建議抵達：16:00 後，行人街約開放至 22:00（時段請再核對）\n由酒店步行數分鐘。小吃、手工與街屋都在這條路上。\n建議離開：約 19:30。不要熬到收攤。晚餐就在街上解決。",
          ],
          places: [{ name: "塔廊路行人街", url: gmaps("Thalang Road Sunday Walking Street Phuket") }],
        },
        {
          time: "1930-2100",
          cat: "note",
          title: "回房，整理行李，約明天的車",
          notes: [
            "請酒店代叫週一 07:15 的車，或前一晚在 Grab 看得到司機再下單。\n護照、充電器、轉接頭放進手提行李。泳裝可以收起來了。",
          ],
          places: [{ name: "The Memory at On On", url: gmaps("The Memory at On On Hotel Phuket") }],
        },
      ],
    },
    {
      date: "2027-05-24",
      weekday: "一",
      region: "機場・香港",
      summary: "早上只有一件事：去機場趕 UO725。11:15 起飛，15:55 到香港 T1。",
      items: [
        {
          time: "0630-0715",
          cat: "food",
          title: "簡單早餐，退房",
          notes: [
            "若酒店早餐未開，用週日晚上買的面包或水果。\n建議離開酒店：07:15。雨天或想更穩，改 07:00。",
          ],
          places: [{ name: "The Memory at On On", url: gmaps("The Memory at On On Hotel Phuket") }],
        },
        {
          time: "0715-0845",
          cat: "transport",
          title: "舊城 → 布吉國際機場",
          notes: [
            "出發：攀牙路酒店 07:15\n到達：國際線航廈，目標約 08:15–08:45\n車程：約 40–70 分（Thepkrasattri 路週一早上可能慢）\n上車地點：酒店門口\n車費：Grab 或酒店叫車約 600–900 銖，以當日為準\n這就是把最後兩晚放在舊城的原因。若仍住卡塔諾伊，同一班飛機要再早約一小時出門。",
          ],
          places: [
            { name: "The Memory at On On", url: gmaps("The Memory at On On Hotel Phuket") },
            { name: "布吉國際機場", url: gmaps("Phuket International Airport") },
          ],
        },
        {
          time: "0845-1115",
          cat: "flight",
          title: "辦登機，UO725 等候起飛",
          notes: [
            "建議抵達機場：08:30 前後，大約起飛前兩小時半。\nUO725 11:15 自布吉國際線航廈起飛。請預先在香港快運 App 辦登機。櫃檯截止以當日規定為準。\n安檢後在航廈用午餐即可。",
          ],
          places: [{ name: "布吉國際機場", url: gmaps("Phuket International Airport") }],
          links: ["https://www.hkexpress.com/"],
        },
        {
          time: "1115-1555",
          cat: "flight",
          title: "UO725 布吉 → 香港 T1",
          notes: [
            "出發：布吉國際機場 11:15\n到達：香港國際機場客運大樓 1，15:55\n車程：約 3 小時 40 分\n車費：機票已含（隨心飛）",
          ],
          places: [
            { name: "布吉國際機場", url: gmaps("Phuket International Airport") },
            { name: "香港機場 T1", url: gmaps("Hong Kong International Airport Terminal 1") },
          ],
        },
      ],
    },
  ],
  hotels: [
    {
      name: "Katathani Phuket Beach Resort 卡塔坦尼",
      region: "卡塔諾伊",
      category: "海灘三晚",
      stay: "5/19 入住 → 5/22 退房",
      hours: "沙灘全日；Tew Son Spa 10:00–19:00",
      hours_source: "https://www.katathani.com/facilities/spa/",
      note: "佔了卡塔諾伊大半段沙灘的度假村，有泳池與園林。選這裡是因為想醒來看海，又不要芭東的酒吧街。五月西岸若掛紅旗，泳池就是海灘的替身。SPA 也可不下榻。地址：14 Kata Noi Road。電話 +66 76 318 350。",
      lat: 7.807724,
      lng: 98.29932,
      places: [{ name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") }],
      sources: [
        { label: "酒店官網", url: "https://www.katathani.com/contact/" },
        { label: "Tew Son Spa", url: "https://www.katathani.com/facilities/spa/" },
      ],
    },
    {
      name: "The Memory at On On Hotel",
      region: "普吉舊城",
      category: "舊城兩晚",
      stay: "5/22 入住 → 5/24 退房",
      hours: "舊城步行範圍",
      note: "攀牙路 19 號，1927 年中葡式建築，舊名 On On。週六下午入住後，塔廊路行人街、羅曼尼巷、Raya 與 Tu Kab Khao 都走路可到。週一 11:15 的飛機，從這裡出發比從島的南端從容。電話 +66 76 363 700。",
      lat: 7.883809,
      lng: 98.388544,
      places: [{ name: "The Memory at On On", url: gmaps("The Memory at On On Hotel Phuket") }],
      sources: [{ label: "酒店官網", url: "https://www.thememoryhotel.com/en/" }],
    },
  ],
  restaurants: [
    {
      name: "The Boathouse",
      region: "卡塔",
      category: "海鮮",
      cuisine: "泰式海鮮",
      hours: "07:00–23:00（晚餐最後點餐約 22:00）",
      hours_source: "https://boathouse-phuket.com/dining",
      price: "約 800 銖起",
      note: "卡塔沙灘上的老牌海景餐廳，早午晚都開，所以抵達日午餐和看完海角的晚餐都順。菜式偏海鮮與西式，不是街邊檔。",
      lat: 7.814355,
      lng: 98.299062,
      places: [{ name: "The Boathouse", url: gmaps("The Boathouse Phuket Kata") }],
      sources: [{ label: "官網用餐頁", url: "https://boathouse-phuket.com/dining" }],
    },
    {
      name: "On The Rock",
      region: "卡隆",
      category: "海鮮",
      cuisine: "泰式海鮮",
      hours: "12:00–22:00",
      note: "Marina Phuket 懸崖上的海鮮，面向安達曼海。排在 SPA 那天的晚餐。由卡塔諾伊約 15 分鐘。建議先訂，訂不到就回 The Boathouse。",
      lat: 7.829152,
      lng: 98.293813,
      places: [{ name: "On The Rock", url: gmaps("On The Rock Marina Phuket") }],
    },
    {
      name: "After Beach Bar",
      region: "卡塔諾伊",
      category: "泰菜",
      cuisine: "泰式",
      hours: "12:00–22:00",
      note: "卡塔諾伊往奈漢的山坡小店，reggae 氣氛，日落好看，菜是家常泰菜。抵達日若還有精神，比再坐車找「名店」合適。",
      lat: 7.808954,
      lng: 98.302168,
      places: [{ name: "After Beach Bar", url: gmaps("After Beach Bar Kata Noi") }],
    },
    {
      name: "Raya ระย้า",
      region: "普吉舊城",
      category: "南泰",
      cuisine: "普吉本地菜",
      rating: "4.4",
      price: "約 300–600 銖",
      hours: "約 10:30–22:00",
      hours_uncertain: true,
      note: "迪布路百年老屋，1994 年由家族菜式做成的店，蟹肉黃咖哩麵最常被點。曾列米其林必比登，2026 年指南未再列入，菜仍是同一家。午餐較易入座；週末晚餐致電 076 218 155。由 On On 酒店步行可到。",
      lat: 7.885929,
      lng: 98.390905,
      places: [{ name: "Raya", url: gmaps("Raya Restaurant Dibuk Road Phuket") }],
    },
    {
      name: "One Chun",
      region: "普吉舊城",
      category: "普吉菜",
      cuisine: "普吉本地菜",
      rating: "4.4",
      hours: "10:00–22:00（星期二或至 21:00）",
      note: "舊城另一間常被在地人與旅客同時推薦的店，和 Raya 幾乎相鄰。週日 Kopitiam 休息時，這裡可以當早午餐。",
      lat: 7.885781,
      lng: 98.390687,
      places: [{ name: "One Chun", url: gmaps("One Chun Cafe Restaurant Phuket") }],
    },
    {
      name: "Tu Kab Khao ตู้กับข้าว",
      region: "普吉舊城",
      category: "普吉菜",
      cuisine: "普吉本地菜",
      rating: "4.2",
      hours: "11:00–20:30",
      note: "攀牙路老店屋，蟹肉炒飯常被提起。和 The Memory 同一條路，市集回來若還想坐下，這是最近的一間。20:30 左右打烊，不要排太晚。",
      lat: 7.883686,
      lng: 98.388202,
      places: [{ name: "Tu Kab Khao", url: gmaps("Tu Kab Khao Restaurant Phuket") }],
    },
    {
      name: "Kopitiam by Wilai",
      region: "普吉舊城",
      category: "泰華",
      cuisine: "早午餐",
      rating: "4.6",
      hours: "約 11:00–20:00；星期日休息",
      note: "塔廊路老店屋的泰華家常。這趟只在週六下午用得上。週日行人街當天不開門，不要把早餐押在這裡。",
      lat: 7.884777,
      lng: 98.388084,
      places: [{ name: "Kopitiam by Wilai", url: gmaps("Kopitiam by Wilai Phuket") }],
    },
    {
      name: "Kan Eang @ Pier",
      region: "查龍",
      category: "海鮮",
      cuisine: "泰式海鮮",
      hours: "約 10:00–23:00",
      hours_uncertain: true,
      note: "查龍碼頭旁的老海鮮店，樹蔭座位，自 1970 年代經營。這趟沒有排進去，避免多一次跨區。若某晚特別想吃碼頭海鮮，由卡塔或舊城約 20–30 分。",
      lat: 7.819901,
      lng: 98.344417,
      places: [{ name: "Kan Eang @ Pier", url: gmaps("Kan Eang at Pier Chalong") }],
    },
    {
      name: "Natural Restaurant",
      region: "普吉舊城",
      category: "泰菜",
      cuisine: "泰式",
      hours: "午餐至晚間",
      hours_uncertain: true,
      note: "素萬那普路附近的園林餐廳，在地人與長住客都去。Raya 滿座時的另一個選擇。營業時間請再核對。",
      lat: 7.881245,
      lng: 98.384303,
      places: [{ name: "Natural Restaurant", url: gmaps("Natural Restaurant Phuket Old Town") }],
    },
    {
      name: "Mee Ton Poe หมี่ต้นโพธิ์",
      region: "喀圖",
      category: "福建麵",
      cuisine: "早午餐",
      hours: "日間為主",
      hours_uncertain: true,
      note: "普吉福建麵的名字。此座標在喀圖帕普吉凱路，不在舊城步行範圍。賣完可能提早收。這趟不特意繞路，只在剛好經過時才去。",
      lat: 7.910938,
      lng: 98.3344,
      places: [{ name: "Mee Ton Poe", url: gmaps("Mee Ton Poe Phuket Kathu") }],
    },
  ],
  spas: [
    {
      name: "Tew Son Spa（Katathani）",
      region: "卡塔諾伊",
      category: "度假村",
      type_tag: "度假村",
      hours: "10:00–19:00",
      hours_source: "https://www.katathani.com/facilities/spa/",
      note: "就在前三晚的酒店裡，面對卡塔諾伊。官網寫 10:00–19:00；另有目錄寫到更晚，以當天為準。週五若不想再坐車，選這裡。花園按摩、美甲與蒸房都有。",
      lat: 7.807724,
      lng: 98.29932,
      places: [{ name: "Tew Son Spa", url: gmaps("Tew Son Spa Katathani Phuket") }],
      sources: [{ label: "官網", url: "https://www.katathani.com/facilities/spa/" }],
    },
    {
      name: "Oasis Sky Breeze Spa",
      region: "卡隆",
      category: "山丘",
      type_tag: "山丘",
      hours: "10:00–22:00",
      note: "Oasis 在卡隆山丘的一間，地址 26 Soi Plukjae。官網寫每日 10:00–22:00。由卡塔諾伊約 10 分鐘。預約中心約 08:30–21:30，建議至少提早兩小時。兩小時療程不要卡在關門前。",
      lat: 7.816115,
      lng: 98.313789,
      places: [{ name: "Oasis Sky Breeze", url: gmaps("Oasis Sky Breeze Spa Karon") }],
      sources: [{ label: "Oasis 布吉", url: "https://oasisspa.net/en/destination/phuket/" }],
    },
    {
      name: "Let's Relax Spa・The SIS Kata",
      region: "卡塔",
      category: "連鎖",
      type_tag: "連鎖",
      rating: "4.5",
      hours: "10:00–23:30",
      note: "在 The SIS Kata 裡，離卡塔市中心與卡塔諾伊都不遠。官網寫 10:00–23:30。分店頁註明該度假村客房歡迎 12 歲以上；外客做 SPA 請先向分店確認。電話 +66 76 609 555。",
      lat: 7.812738,
      lng: 98.29999,
      places: [{ name: "Let's Relax The SIS Kata", url: gmaps("Let's Relax Spa The SIS Kata") }],
      sources: [{ label: "分店頁", url: "https://letsrelaxspa.com/branches/phuket-the-sis-kata/" }],
    },
  ],
  beaches: [
    {
      name: "卡塔諾伊 Kata Noi",
      region: "卡塔諾伊",
      category: "主沙灘",
      type_tag: "主行程",
      hours: "全日；下水看旗",
      note: "這趟的海灘。海灣短、酒店多、比芭東安靜。五月仍可能有湧浪，紅旗日改泳池。酒店就在沙上。",
      lat: 7.806338,
      lng: 98.298738,
      places: [{ name: "卡塔諾伊", url: gmaps("Kata Noi Beach") }],
    },
    {
      name: "卡塔海灘 Kata",
      region: "卡塔",
      category: "主沙灘",
      type_tag: "主行程",
      hours: "全日；下水看旗",
      note: "卡塔諾伊北鄰，約一公里半的沙灘，南端有公園與餐廳。The Boathouse 在這裡。由酒店過去很近。",
      lat: 7.81936,
      lng: 98.29805,
      places: [{ name: "卡塔海灘", url: gmaps("Kata Beach Phuket") }],
    },
    {
      name: "卡隆海灘 Karon",
      region: "卡隆",
      category: "可順路",
      type_tag: "主行程",
      hours: "全日；下水看旗",
      note: "再往北的長沙灘，空間比卡塔開闊。On The Rock 在這一段的懸崖上。適合週五下午散步，不值得為它搬酒店。",
      lat: 7.843958,
      lng: 98.293425,
      places: [{ name: "卡隆海灘", url: gmaps("Karon Beach") }],
    },
    {
      name: "拉威海角 Promthep Cape",
      region: "拉威",
      category: "觀景",
      type_tag: "主行程",
      hours: "全日；日落約 18:30",
      note: "島的南端觀景台，不是游泳處。週四傍晚的唯一景點。人多，提早到；看完晚霞再離開。souvenir 攤可逛可不逛。",
      lat: 7.761892,
      lng: 98.305358,
      places: [{ name: "拉威海角", url: gmaps("Promthep Cape") }],
    },
    {
      name: "奈漢海灘 Nai Harn",
      region: "拉威",
      category: "備選",
      type_tag: "備選",
      hours: "全日；下水看旗",
      note: "南端較受地形保護的沙灘，樹蔭多。若卡塔連續紅旗，又還想下水，這是第一個備選。由舊城約 30–40 分，只作週日可選，不排進主行程。",
      lat: 7.775707,
      lng: 98.305825,
      places: [{ name: "奈漢", url: gmaps("Nai Harn Beach") }],
    },
    {
      name: "亞努伊 Ya Nui",
      region: "拉威",
      category: "備選",
      type_tag: "備選",
      hours: "全日；灣小人多即離",
      note: "拉威海角旁的小海灣，水清時很漂亮，灣小，容易滿。和奈漢二選一即可。",
      lat: 7.767622,
      lng: 98.306166,
      places: [{ name: "亞努伊", url: gmaps("Ya Nui Beach Phuket") }],
    },
    {
      name: "自由沙灘 Freedom Beach",
      region: "芭東",
      category: "可選",
      type_tag: "備選",
      rating: "4.4",
      hours: "日間；船班看海況",
      note: "芭東以南的小灣，沒有馬路直達。長尾船多由芭東南端 Tri Trang 出發，備現金，價格當日面議。五月浪大就不要去。這趟不排，避免為了一個沙灘跨去芭東再趕船。",
      lat: 7.875205,
      lng: 98.275581,
      places: [
        { name: "自由沙灘", url: gmaps("Freedom Beach Phuket") },
        { name: "Tri Trang", url: gmaps("Tri Trang Beach Patong") },
      ],
    },
    {
      name: "芭東海灘 Patong",
      region: "芭東",
      category: "參考",
      type_tag: "參考",
      hours: "全日；夜生活另計",
      note: "最熱鬧的西岸沙灘。這趟不住、也不安排夜店。五月同樣常有紅旗。只在你臨時想看熱鬧時才來，吃完就回卡塔或舊城。",
      lat: 7.896632,
      lng: 98.295429,
      places: [{ name: "芭東海灘", url: gmaps("Patong Beach") }],
    },
  ],
  markets: [
    {
      name: "那卡週末市集 Naka",
      region: "維集",
      category: "週六晚",
      type_tag: "主行程",
      rating: "4.4",
      hours: "六、日約 16:00–22:00",
      hours_uncertain: true,
      note: "島上最大的週末市集，在維集 Wirat Hong Yok 路，中央 Festival 附近。衣服、雜貨與熟食為主，當週六的晚餐。官網有的頁寫到 22:00，有的寫到 23:00；平日只有熟食，不是這趟要的大市集。由舊城 Grab 約 10–15 分。",
      lat: 7.880533,
      lng: 98.366326,
      places: [{ name: "那卡週末市集", url: gmaps("Naka Weekend Market Phuket") }],
      sources: [{ label: "市集網站", url: "https://www.phuketnakamarket.com/" }],
    },
    {
      name: "塔廊路週日行人街",
      region: "普吉舊城",
      category: "週日晚",
      type_tag: "主行程",
      hours: "星期日約 16:00–22:00",
      hours_uncertain: true,
      note: "每週日塔廊路封街，本地人叫 Lard Yai 行人街。手工、小吃、畫像都有，氣氛比那卡細。酒店在攀牙路，走路幾分鐘。週一要早起，約 19:30 回房。",
      lat: 7.88485,
      lng: 98.3884,
      places: [{ name: "塔廊路", url: gmaps("Thalang Road Sunday Walking Street Phuket Old Town") }],
    },
    {
      name: "舊城日間步行",
      region: "普吉舊城",
      category: "日間",
      type_tag: "主行程",
      hours: "全日可走",
      note: "羅曼尼巷、迪布路、攀牙路與惹蘭路的中葡街屋，不必等週末。週六入住後先走這一圈，再決定晚上去那卡還是留下吃 Raya。",
      lat: 7.8846,
      lng: 98.3887,
      places: [
        { name: "羅曼尼巷", url: gmaps("Soi Romanee Phuket") },
        { name: "迪布路", url: gmaps("Dibuk Road Phuket Old Town") },
      ],
    },
    {
      name: "泰國華博物館",
      region: "普吉舊城",
      category: "日間",
      type_tag: "主行程",
      hours: "日間",
      hours_uncertain: true,
      note: "由舊泰華學校改成的博物館，講普吉華人與錫礦歷史。週六若還開就進去躲一下午後的太陽；時間對不上就只在門外看建築。",
      lat: 7.8853,
      lng: 98.3874,
      places: [{ name: "泰國華博物館", url: gmaps("Phuket Thai Hua Museum") }],
    },
    {
      name: "Banzaan 生鮮市場",
      region: "芭東",
      category: "參考",
      type_tag: "參考",
      hours: "日間",
      hours_uncertain: true,
      note: "芭東的室內生鮮市場，看海鮮與熟食可以，但這趟不住芭東，不特意去。",
      lat: 7.891286,
      lng: 98.301741,
      places: [{ name: "Banzaan", url: gmaps("Banzaan Fresh Market Patong") }],
    },
    {
      name: "Malin Plaza 夜市",
      region: "芭東",
      category: "參考",
      type_tag: "參考",
      hours: "傍晚至夜間",
      hours_uncertain: true,
      note: "芭東每晚都有的市集之一。那卡與塔廊路已經覆蓋週末，不必再加一晚芭東。",
      lat: 7.8822,
      lng: 98.292589,
      places: [{ name: "Malin Plaza", url: gmaps("Malin Plaza Night Market Patong") }],
    },
  ],
  transport: [
    {
      name: "布吉國際機場・國際線",
      region: "機場",
      category: "航班",
      hours: "航廈全日",
      note: "UO724 於 5 月 19 日 10:30 抵達，UO725 於 5 月 24 日 11:15 離開，都使用國際線航廈。出口跟現場指示，不要接受主動拉客。",
      lat: 8.105882,
      lng: 98.305702,
      places: [{ name: "布吉國際機場", url: gmaps("Phuket International Airport") }],
      sources: [{ label: "香港快運", url: "https://www.hkexpress.com/" }],
    },
    {
      name: "抵達日：機場 → 卡塔諾伊",
      region: "機場",
      category: "接機",
      hours: "落地後",
      note: "Grab 或機場櫃台一口價計程車。車程約 60–80 分，Grab 常見約 900–1,200 銖，雨天會變。上車點以 App 與指示牌為準，近年多在國際與國內航廈之間，不要靠過時的閘口號碼。機場巴士較便宜，但行李與轉車不適合落地第一天。",
      lat: 8.105882,
      lng: 98.305702,
      places: [
        { name: "機場", url: gmaps("Phuket International Airport") },
        { name: "Katathani", url: gmaps("Katathani Phuket Beach Resort") },
      ],
    },
    {
      name: "島上日常：Grab／Bolt",
      region: "全島",
      category: "日常",
      note: "沙灘、舊城、市集之間都用叫車。卡塔一帶日間通常叫得到；深夜與暴雨要多等。價格以下單畫面為準。嘟嘟車先講好價錢，往往比 App 貴。這趟不租機車：雨季路面滑，意外時保險也麻煩。",
    },
    {
      name: "週六：卡塔 → 大佛 → 舊城",
      region: "卡塔諾伊",
      category: "換酒店",
      note: "退房後一程車，可請司機在大佛等 30–40 分再繼續，或分成兩段 Grab。直達舊城約 35–50 分。行李放後車廂，人不需要再搬第二次，直到週一。",
      lat: 7.827521,
      lng: 98.312445,
      places: [
        { name: "大佛", url: gmaps("Big Buddha Phuket") },
        { name: "The Memory", url: gmaps("The Memory at On On Hotel") },
      ],
    },
    {
      name: "舊城 ↔ 那卡市集",
      region: "普吉舊城",
      category: "市集",
      note: "週六傍晚約 10–15 分，Grab 約 120–200 銖。回程在市集門口叫車即可，不要走到大路中央攔車。",
      lat: 7.880533,
      lng: 98.366326,
      places: [{ name: "那卡市集", url: gmaps("Naka Weekend Market") }],
    },
    {
      name: "舊城步行",
      region: "普吉舊城",
      category: "步行",
      note: "週日行人街、Raya、Tu Kab Khao、羅曼尼巷都不需要車。中午太陽大，走陰影側，或回酒店再開冷氣。",
      lat: 7.883809,
      lng: 98.388544,
      places: [{ name: "The Memory", url: gmaps("The Memory at On On Hotel Phuket") }],
    },
    {
      name: "離開日：舊城 → 機場",
      region: "普吉舊城",
      category: "送機",
      hours: "07:15 出門",
      note: "目標 08:15–08:45 到國際線航廈。車程約 40–70 分，車費約 600–900 銖。週日晚請酒店代叫，比週一早上臨時等司機穩。若改回卡塔出發，提早到約 06:15–06:30。",
      lat: 7.883809,
      lng: 98.388544,
      places: [
        { name: "舊城酒店", url: gmaps("The Memory at On On Hotel") },
        { name: "機場", url: gmaps("Phuket International Airport") },
      ],
    },
    {
      name: "自由沙灘的船（不排入正日）",
      region: "芭東",
      category: "可選",
      note: "只在海況平靜時才考慮。長尾船由芭東 Tri Trang 一帶出發，備現金，當日講價。回程預留等船的時間。五月不值得為了這一程打亂節奏。",
      lat: 7.886468,
      lng: 98.272022,
      places: [{ name: "Tri Trang", url: gmaps("Tri Trang Beach longtail Freedom Beach") }],
    },
    {
      name: "不安排的船",
      region: "全島",
      category: "不做",
      note: "皮皮島、珊瑚島、攀牙灣都是整天的船。5 月 23 日晚上還要早睡，任何離島都會撞上週一的 11:15 航班。這次用拉威海角代替「必須坐船才算看過海」。",
    },
  ],
};

const STORAGE_KEY = "phuket-trip-2027-day";
const WEATHER_CACHE_KEY = "phuket-trip-weather-v1";
const VIEWS = ["home", "itinerary", "hotels", "restaurants", "spas", "beaches", "markets", "transport"];

const REGION_ORDER = [
  "卡塔諾伊",
  "卡塔",
  "卡隆",
  "拉威",
  "芭東",
  "查龍",
  "普吉舊城",
  "維集",
  "喀圖",
  "機場",
  "全島",
];

const CUISINE_ORDER = ["泰式海鮮", "普吉本地菜", "泰式", "早午餐", "其他"];
const SPA_TYPE_ORDER = ["度假村", "山丘", "連鎖"];
const BEACH_TYPE_ORDER = ["主行程", "備選", "參考"];
const MARKET_TYPE_ORDER = ["主行程", "參考"];

const CAT = {
  flight: { icon: "✈️", label: "航班" },
  transport: { icon: "🚗", label: "交通" },
  hotel: { icon: "🏨", label: "住宿" },
  food: { icon: "🍽️", label: "用餐" },
  sight: { icon: "🌅", label: "景點" },
  beach: { icon: "🏖️", label: "海灘" },
  spa: { icon: "💆", label: "SPA" },
  market: { icon: "🏮", label: "市集" },
  buffer: { icon: "🌿", label: "留白" },
  note: { icon: "⚠️", label: "注意" },
  other: { icon: "📌", label: "行程" },
};

const WMO = {
  0: ["☀️", "晴"],
  1: ["🌤", "大致晴"],
  2: ["⛅", "少雲"],
  3: ["☁️", "陰"],
  45: ["🌫", "霧"],
  48: ["🌫", "霧"],
  51: ["🌦", "毛毛雨"],
  53: ["🌦", "毛毛雨"],
  55: ["🌧", "毛毛雨"],
  61: ["🌧", "小雨"],
  63: ["🌧", "雨"],
  65: ["🌧", "大雨"],
  80: ["🌦", "陣雨"],
  81: ["🌧", "陣雨"],
  82: ["⛈", "強陣雨"],
  95: ["⛈", "雷雨"],
};

const MAP_COLORS = {
  overview: "#d06a45",
  hotels: "#1c7c84",
  restaurants: "#d06a45",
  spas: "#b85c8a",
  beaches: "#2a8fbf",
  markets: "#c4892a",
  transport: "#3d5a80",
};

const PHUKET_CENTER = [7.89, 98.35];

let currentDay = 0;
let searchQuery = "";
const spotMaps = {};

function categorize(item) {
  if (item && item.cat && CAT[item.cat]) return item.cat;
  const t = ((item && item.title) || "") + " " + ((item && item.time) || "");
  if (/UO\d+|航班/.test(t)) return "flight";
  if (/SPA|按摩|水療/.test(t)) return "spa";
  if (/午餐|晚餐|早餐|用餐/.test(t)) return "food";
  if (/酒店|入住|退房|寄行李/.test(t)) return "hotel";
  if (/海灘|海角|大佛|市集|行人街/.test(t)) return "sight";
  if (/Grab|機場|上車/.test(t)) return "transport";
  if (/留白|休息/.test(t)) return "buffer";
  return "other";
}

function formatDate(iso) {
  if (!iso) return "";
  const [, m, d] = iso.split("-");
  return `${parseInt(m, 10)}月${parseInt(d, 10)}日`;
}

function formatTime(t) {
  if (!t) return null;
  const s = String(t).trim();
  const range = s.match(/^(\d{3,4})\s*[-–—]\s*(\d{3,4})$/);
  if (range) {
    const fmt = (x) => {
      const n = x.padStart(4, "0");
      return n.slice(0, 2) + ":" + n.slice(2);
    };
    return { text: fmt(range[1]) + "–" + fmt(range[2]), warn: false };
  }
  return { text: s, warn: /注意/.test(s) };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function linkLabel(url) {
  try {
    if (String(url).startsWith("tel:")) return "致電";
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host.includes("google") || host.includes("goo.gl") || host.includes("maps")) return "Google 地圖";
    if (host.includes("hkexpress")) return "香港快運";
    if (host.includes("katathani")) return "酒店官網";
    if (host.includes("thememoryhotel")) return "酒店官網";
    if (host.includes("letsrelax")) return "Let's Relax";
    if (host.includes("oasisspa")) return "Oasis Spa";
    if (host.includes("boathouse")) return "The Boathouse";
    if (host.includes("phuketnakamarket")) return "那卡市集";
    return host;
  } catch {
    return "開啟連結";
  }
}

function itemPlaces(item) {
  if (item.places && item.places.length) return item.places;
  return [];
}

function placeButtonsHtml(places) {
  if (!places || !places.length) return "";
  return places
    .map(
      (p) =>
        `<a class="btn btn-place" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">📍 ${escapeHtml(p.name)}</a>`
    )
    .join("");
}

function sourceButtonsHtml(sources) {
  if (!sources || !sources.length) return "";
  return sources
    .map(
      (s) =>
        `<a class="btn btn-source" href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">🔗 ${escapeHtml(s.label)}</a>`
    )
    .join("");
}

function init() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    const n = parseInt(saved, 10);
    if (!isNaN(n) && n >= 0 && n < TRIP_DATA.days.length) currentDay = n;
  }
  bindNav();
  renderHome();
  renderDayPills();
  renderItinerary();
  bindSearch();
  renderSpotList(
    "view-hotels",
    "hotels",
    "hotel",
    "🏨 酒店",
    "酒店",
    "只住兩處，中間搬一次。前三晚在安靜的卡塔諾伊看海；週六下午改住舊城，剛好碰上週末市集，週一去機場也近一截。若最後決定全程留在海灘，仍可週末搭 Grab 來回舊城，但 5 月 24 日要再早約一小時出門。"
  );
  renderSpotList(
    "view-restaurants",
    "restaurants",
    "food",
    "🍽️ 餐廳",
    "餐廳",
    "海灘幾天以海鮮和輕鬆泰菜為主，舊城幾天吃普吉本地菜。評分是公開地圖的彙整，會變動。標了「時段請再核對」的，出發前再看一次。"
  );
  renderSpotList(
    "view-spas",
    "spas",
    "spa",
    "💆 SPA",
    "SPA",
    "週五上午留 90–120 分鐘。想零交通就用酒店的 Tew Son；想換空氣就去山丘上的 Oasis，或卡塔的 Let's Relax。建議前一日預約。"
  );
  renderSpotList(
    "view-beaches",
    "beaches",
    "beach",
    "🏖️ 海灘",
    "海灘",
    "主行程是卡塔諾伊、卡塔、卡隆，加上拉威海角的日落。奈漢、亞努伊與自由沙灘是浪況允許時的備選。五月西岸常有紅旗。"
  );
  renderSpotList(
    "view-markets",
    "markets",
    "market",
    "🏮 市集",
    "市集",
    "週六晚去那卡，週日晚留在塔廊路。舊城街屋白天隨時可走。芭東的市集只作參考，這趟不特意過去。"
  );
  renderSpotList(
    "view-transport",
    "transport",
    "transport",
    "🚗 交通",
    "交通",
    "落地與離開用專車或 Grab。島上也不租車。船只保留自由沙灘作為可選，離島一日遊不排。車費都是大約數字，以下單時的 App 為準。"
  );
  bindLightbox();
  loadWeather();
  const hash = (location.hash || "#home").replace("#", "");
  showView(VIEWS.indexOf(hash) >= 0 ? hash : "home");
  window.addEventListener("hashchange", () => {
    const next = (location.hash || "#home").replace("#", "");
    if (VIEWS.indexOf(next) >= 0) showView(next, true);
  });
}

function bindNav() {
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.view));
  });
}

function showView(name, fromHash) {
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
  document.querySelectorAll(".nav-tab").forEach((t) => t.classList.toggle("active", t.dataset.view === name));
  if (!fromHash && location.hash !== "#" + name) {
    history.replaceState(null, "", "#" + name);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  const mapState = spotMaps["view-" + name];
  if (mapState && mapState.map) {
    setTimeout(() => {
      mapState.map.invalidateSize();
      if (mapState.bounds && mapState.bounds.isValid()) {
        mapState.map.fitBounds(mapState.bounds, { padding: [28, 28], maxZoom: 14 });
      }
    }, 120);
  }
}

function weatherEmoji(code) {
  return WMO[code] || WMO[Math.floor(code / 10) * 10] || ["🌤", "天氣"];
}

async function fetchWeatherJson(url) {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok || data.error) throw new Error(data.reason || "weather http " + res.status);
  return data;
}

async function loadWeather() {
  const slot = document.getElementById("weather-slot");
  if (!slot) return;
  const todayKey = new Date().toISOString().slice(0, 10);
  try {
    const cached = sessionStorage.getItem(WEATHER_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.day === todayKey && parsed.cards) {
        renderWeatherCards(slot, parsed.cards, parsed.mode || "forecast");
        return;
      }
    }
  } catch (_) {}

  slot.innerHTML = `<div class="weather-loading">天氣載入中…</div>`;
  const regions = TRIP_DATA.weather_regions || [];
  const unique = [];
  const keyToIdx = {};
  regions.forEach((r) => {
    const k = `${r.lat},${r.lon}`;
    if (!(k in keyToIdx)) {
      keyToIdx[k] = unique.length;
      unique.push({ lat: r.lat, lon: r.lon });
    }
  });
  const dailyParams =
    "daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok";

  async function loadFrom(base, start, end, dateMapFn) {
    const results = await Promise.all(
      unique.map(({ lat, lon }) =>
        fetchWeatherJson(
          `${base}?latitude=${lat}&longitude=${lon}&${dailyParams}&start_date=${start}&end_date=${end}`
        )
      )
    );
    return regions
      .map((r) => {
        const data = results[keyToIdx[`${r.lat},${r.lon}`]];
        const lookDate = dateMapFn(r.date);
        const di = data.daily.time.indexOf(lookDate);
        if (di < 0) return null;
        const code = data.daily.weathercode[di];
        const [emoji, label] = weatherEmoji(code);
        return {
          date: r.date,
          region: r.region,
          emoji,
          label,
          tmax: Math.round(data.daily.temperature_2m_max[di]),
          tmin: Math.round(data.daily.temperature_2m_min[di]),
        };
      })
      .filter(Boolean);
  }

  try {
    let cards = null;
    let mode = "forecast";
    try {
      cards = await loadFrom(
        "https://api.open-meteo.com/v1/forecast",
        "2027-05-19",
        "2027-05-24",
        (d) => d
      );
      if (!cards.length) throw new Error("empty forecast");
    } catch (_) {
      cards = await loadFrom(
        "https://archive-api.open-meteo.com/v1/archive",
        "2026-05-19",
        "2026-05-24",
        (d) => d.replace("2027-", "2026-")
      );
      mode = "archive";
      if (!cards.length) throw new Error("empty archive");
    }
    try {
      sessionStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify({ day: todayKey, cards, mode }));
    } catch (_) {}
    renderWeatherCards(slot, cards, mode);
  } catch (_) {
    slot.innerHTML = `<div class="weather-fallback">☁️ 天氣需連網更新<br><span class="weather-fallback-sub">連上網路後重新整理即可顯示</span></div>`;
  }
}

function renderWeatherCards(slot, cards, mode) {
  const badge = mode === "archive" ? "往年同期參考" : "預報";
  const note =
    mode === "archive"
      ? "距離出發尚遠，暫顯示 2026 年 5 月 19–24 日實況作參考。出發前約兩週內會改為正式預報。五月本來就開始有午後雨。"
      : "預報會再更新。出發前看一次海灘旗，比看這張小卡重要。";
  slot.innerHTML = `
    <h3 class="section-title">天氣小卡 <span class="badge">${badge}</span></h3>
    <div class="weather-grid">
      ${cards
        .map(
          (c) => `
        <div class="weather-card">
          <div class="weather-date">${formatDate(c.date)}</div>
          <div class="weather-region">${escapeHtml(c.region)}</div>
          <div class="weather-emoji">${c.emoji}</div>
          <div class="weather-label">${escapeHtml(c.label)}</div>
          <div class="weather-temp"><span class="tmax">${c.tmax}°</span><span class="tsep">/</span><span class="tmin">${c.tmin}°</span></div>
        </div>`
        )
        .join("")}
    </div>
    <p class="weather-note">${note}</p>
  `;
}

function renderHome() {
  const trip = TRIP_DATA.trip;
  const days = TRIP_DATA.days;
  const el = document.getElementById("view-home");
  const flightsHtml = (trip.flights || [])
    .map(
      (f) => `
    <div class="flight">
      <span class="flight-code">${escapeHtml(f.code)}</span>
      <div class="flight-detail">
        <div class="flight-route">${escapeHtml(f.from)} → ${escapeHtml(f.to)}</div>
        <div class="flight-meta">${formatDate(f.date)}　${escapeHtml(f.time)}　${escapeHtml(f.fare || "")}　${escapeHtml(f.duration || "")}</div>
      </div>
    </div>`
    )
    .join("");

  const dayChips = days
    .map(
      (d, i) => `
      <button type="button" class="day-chip" data-day="${i}">
        <div class="d-num">第 ${i + 1} 天・星期${escapeHtml(d.weekday)}</div>
        <div class="d-date">${formatDate(d.date)}</div>
        <div class="d-region">${escapeHtml(d.region || "")}</div>
      </button>`
    )
    .join("");

  const areas = (TRIP_DATA.areas || [])
    .map(
      (a) => `
      <article class="area-card">
        <h3>${escapeHtml(a.title)}</h3>
        <p>${escapeHtml(a.text)}</p>
      </article>`
    )
    .join("");

  const tips = (TRIP_DATA.tips || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("");

  el.innerHTML = `
    <div class="hero-card">
      <div class="hero-dates">📅 ${formatDate(trip.start)} ～ ${formatDate(trip.end)}　・　五晚六日</div>
      <h2>${escapeHtml(trip.title)}</h2>
      <p class="hero-sub">${escapeHtml(trip.subtitle || "")}。節奏放慢：海、吃、市集、一次 SPA。</p>
      <div class="stat-row">
        <div class="stat"><div class="num">${days.length}</div><div class="label">天</div></div>
        <div class="stat"><div class="num">${trip.nights}</div><div class="label">晚</div></div>
        <div class="stat"><div class="num">${TRIP_DATA.hotels.length}</div><div class="label">處住宿</div></div>
      </div>
      <div class="flight-list">${flightsHtml}</div>
      <figure class="flight-figure">
        <button type="button" class="gallery-thumb" data-src="${escapeHtml(TRIP_DATA.flight_image)}" aria-label="放大航班訂位畫面">
          <img src="${escapeHtml(TRIP_DATA.flight_image)}" alt="香港快運訂位畫面：5月19日 UO724 香港T2 07:55 至布吉 10:30；5月24日 UO725 布吉 11:15 至香港T1 15:55" />
        </button>
        <figcaption class="flight-caption">香港快運訂位內容（隨心飛）。畫面依你提供的行程截圖整理，方便離線查看；以航空公司 App 為準。</figcaption>
      </figure>
    </div>
    <div class="banner">五月起西岸進入湧浪季節。沙灘看旗，紅旗不下水；下午常有陣雨，所以每天只排一件出門的事。</div>
    <div id="weather-slot"><div class="weather-loading">天氣載入中…</div></div>
    <h3 class="section-title">這趟的範圍</h3>
    <div class="spot-map-wrap">
      <div class="spot-map" id="view-home-map" role="img" aria-label="行程範圍地圖"></div>
      <p class="spot-map-hint">機場、兩間酒店、拉威海角、大佛與那卡市集。右上角 ◎ 可開 GPS；人在香港時地圖仍保持布吉範圍。</p>
    </div>
    <div class="area-grid">${areas}</div>
    <h3 class="section-title">按日瀏覽 <span class="badge">${days.length} 天</span></h3>
    <div class="day-grid">${dayChips}</div>
    <h3 class="section-title">出門前</h3>
    <article class="tip-card"><ul>${tips}</ul></article>
  `;

  el.querySelectorAll(".day-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentDay = parseInt(btn.dataset.day, 10);
      persistDay();
      renderDayPills();
      renderItinerary();
      showView("itinerary");
    });
  });
  el.querySelectorAll(".gallery-thumb").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(btn.dataset.src));
  });
  initSpotMap("view-home", "overview", TRIP_DATA.overview);
}

function spotPracticalTagsHtml(s) {
  const tags = [];
  if (s.stay) tags.push(`<span class="spot-tag spot-tag-info">${escapeHtml(s.stay)}</span>`);
  if (s.hours) tags.push(`<span class="spot-tag spot-tag-hours">🕒 ${escapeHtml(s.hours)}</span>`);
  if (s.hours_uncertain) tags.push(`<span class="spot-tag spot-tag-warn">時段請再核對</span>`);
  if (!tags.length) return "";
  return `<div class="spot-tags">${tags.join("")}</div>`;
}

function spotTypeValue(s, listKey) {
  if (listKey === "restaurants") return s.cuisine || "其他";
  if (listKey === "spas" || listKey === "beaches" || listKey === "markets") return s.type_tag || "其他";
  return "";
}

function spotCardHtml(s, listKey, cardClass, defaultBadge) {
  const meta = [];
  if (s.rating) meta.push(`<span class="chip">★ ${escapeHtml(s.rating)}</span>`);
  if (s.price) meta.push(`<span class="chip">${escapeHtml(s.price)}</span>`);
  const typeVal = spotTypeValue(s, listKey);
  const typeAttr = typeVal ? ` data-type-filter="${escapeHtml(typeVal)}"` : "";
  const sources =
    s.sources && s.sources.length
      ? `<div class="source-block"><div class="source-label">參考</div><div class="spot-actions sources">${sourceButtonsHtml(s.sources)}</div></div>`
      : "";
  return `
    <article class="spot-card ${cardClass}" data-name="${escapeHtml(s.name)}" data-region="${escapeHtml(s.region || "其他")}"${typeAttr}>
      <div class="spot-body">
        <div class="spot-badge">${escapeHtml(s.category || defaultBadge)}</div>
        <h3>${escapeHtml(s.name)}</h3>
        ${meta.length ? `<div class="spot-meta-row">${meta.join("")}</div>` : ""}
        ${spotPracticalTagsHtml(s)}
        ${s.note ? `<p class="spot-note">${escapeHtml(s.note)}</p>` : ""}
        <div class="spot-actions">${placeButtonsHtml(s.places)}</div>
        ${sources}
      </div>
    </article>`;
}

function groupSpotsByRegion(spots) {
  const map = new Map();
  for (const s of spots) {
    const r = s.region || "其他";
    if (!map.has(r)) map.set(r, []);
    map.get(r).push(s);
  }
  const ordered = [];
  for (const r of REGION_ORDER) {
    if (map.has(r) && map.get(r).length) ordered.push([r, map.get(r)]);
    map.delete(r);
  }
  for (const [r, list] of map) ordered.push([r, list]);
  return ordered;
}

function typeFilterOrder(listKey) {
  if (listKey === "restaurants") return CUISINE_ORDER;
  if (listKey === "spas") return SPA_TYPE_ORDER;
  if (listKey === "beaches") return BEACH_TYPE_ORDER;
  if (listKey === "markets") return MARKET_TYPE_ORDER;
  return null;
}

function typeFilterLabel(listKey) {
  if (listKey === "restaurants") return "菜式";
  if (listKey === "spas" || listKey === "beaches" || listKey === "markets") return "類型";
  return "";
}

function countByType(spots, listKey) {
  const counts = new Map();
  for (const s of spots) {
    const t = spotTypeValue(s, listKey) || "其他";
    counts.set(t, (counts.get(t) || 0) + 1);
  }
  return counts;
}

function applySpotFilters(el) {
  const regionBtn = el.querySelector(".region-filter:not(.type-filter) .region-chip.is-active");
  const typeBtn = el.querySelector(".type-filter .region-chip.is-active");
  const regionVal = regionBtn ? regionBtn.dataset.regionFilter : "__all__";
  const typeVal = typeBtn ? typeBtn.dataset.typeFilter : "__all__";
  el.querySelectorAll(".region-section").forEach((sec) => {
    const regionOk = regionVal === "__all__" || sec.dataset.region === regionVal;
    let visibleCards = 0;
    sec.querySelectorAll(".spot-card").forEach((card) => {
      const typeOk = typeVal === "__all__" || !card.dataset.typeFilter || card.dataset.typeFilter === typeVal;
      const show = regionOk && typeOk;
      card.hidden = !show;
      if (show) visibleCards += 1;
    });
    sec.hidden = !regionOk || visibleCards === 0;
  });
  if (el.id) updateSpotMapFilters(el.id);
}

function bindSpotFilterRow(el, viewId, rowSelector) {
  const filter = el.querySelector(rowSelector);
  if (!filter || filter.dataset.bound) return;
  filter.dataset.bound = "1";
  filter.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".region-chip");
    if (!btn || btn.dataset.spotView !== viewId) return;
    filter.querySelectorAll(".region-chip").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    applySpotFilters(el);
    const regionBtn = el.querySelector(".region-filter:not(.type-filter) .region-chip.is-active");
    const regionVal = regionBtn ? regionBtn.dataset.regionFilter : "__all__";
    if (btn.dataset.regionFilter && regionVal !== "__all__") {
      const sec = el.querySelector(`.region-section[data-region="${CSS.escape(regionVal)}"]`);
      if (sec && !sec.hidden) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function spotMapIcon(color) {
  return L.divIcon({
    className: "spot-map-pin",
    html: `<span style="background:${color}"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -8],
  });
}

function initSpotMap(viewId, listKey, spots) {
  if (typeof L === "undefined") return;
  const mapEl = document.getElementById(viewId + "-map");
  if (!mapEl) return;
  if (spotMaps[viewId] && spotMaps[viewId].map) {
    clearSpotMapGps(viewId);
    spotMaps[viewId].map.remove();
    delete spotMaps[viewId];
  }
  const color = MAP_COLORS[listKey] || "#1c7c84";
  const map = L.map(mapEl, { scrollWheelZoom: false, attributionControl: true });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const layer = L.layerGroup().addTo(map);
  const markersByName = {};
  const withCoords = (spots || []).filter(
    (s) => typeof s.lat === "number" && typeof s.lng === "number" && !Number.isNaN(s.lat) && !Number.isNaN(s.lng)
  );
  withCoords.forEach((s) => {
    const mapsUrl =
      s.places && s.places[0] && s.places[0].url ? s.places[0].url : gmaps(s.name);
    const marker = L.marker([s.lat, s.lng], { icon: spotMapIcon(color), title: s.name });
    marker.bindPopup(
      `<div class="spot-map-popup"><strong>${escapeHtml(s.name)}</strong><a href="${escapeHtml(mapsUrl)}" target="_blank" rel="noopener noreferrer">開啟 Google 地圖</a></div>`
    );
    markersByName[s.name] = marker;
  });
  spotMaps[viewId] = {
    map,
    layer,
    markersByName,
    listKey,
    spots: withCoords,
    bounds: null,
    gpsLayer: L.layerGroup().addTo(map),
  };
  addSpotMapLocateControl(viewId, map);
  updateSpotMapFilters(viewId);
  setTimeout(() => map.invalidateSize(), 80);
}

function clearSpotMapGps(viewId) {
  const state = spotMaps[viewId];
  if (!state || !state.gpsLayer) return;
  state.gpsLayer.clearLayers();
}

function showSpotMapGps(viewId, lat, lng, accuracy) {
  const state = spotMaps[viewId];
  if (!state || !state.map || !state.gpsLayer) return;
  state.gpsLayer.clearLayers();
  const latlng = L.latLng(lat, lng);
  const acc = typeof accuracy === "number" && accuracy > 0 ? Math.min(accuracy, 200) : 40;
  L.circle(latlng, {
    radius: acc,
    color: "#1a73e8",
    weight: 1,
    fillColor: "#1a73e8",
    fillOpacity: 0.15,
  }).addTo(state.gpsLayer);
  const center =
    state.bounds && state.bounds.isValid() ? state.bounds.getCenter() : L.latLng(PHUKET_CENTER[0], PHUKET_CENTER[1]);
  const dist = state.map.distance(center, latlng);
  const near = dist < 80000;
  L.circleMarker(latlng, {
    radius: 8,
    color: "#fff",
    weight: 2,
    fillColor: "#1a73e8",
    fillOpacity: 1,
  })
    .bindPopup(near ? "你的目前位置" : "你目前不在布吉附近，地圖仍顯示行程範圍")
    .addTo(state.gpsLayer);
  if (near && state.bounds && state.bounds.isValid()) {
    const b = L.latLngBounds(state.bounds);
    b.extend(latlng);
    state.map.fitBounds(b, { padding: [36, 36], maxZoom: 16 });
  } else if (near) {
    state.map.setView(latlng, 15);
  }
}

function locateUserOnSpotMap(viewId) {
  const state = spotMaps[viewId];
  if (!state || !state.map) return;
  const btn = document.querySelector(`.spot-map-locate[data-view="${viewId}"]`);
  if (!navigator.geolocation) {
    alert("此裝置或瀏覽器不支援定位。");
    return;
  }
  if (btn) {
    btn.disabled = true;
    btn.classList.add("is-loading");
    btn.setAttribute("aria-busy", "true");
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      showSpotMapGps(viewId, pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy);
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("is-loading");
        btn.removeAttribute("aria-busy");
        btn.classList.add("is-active");
      }
    },
    (err) => {
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("is-loading");
        btn.removeAttribute("aria-busy");
      }
      let msg = "無法取得目前位置。";
      if (err && err.code === 1) msg = "請允許此網站使用位置權限，才能顯示 GPS。";
      else if (err && err.code === 2) msg = "暫時無法取得位置，請稍後再試。";
      else if (err && err.code === 3) msg = "定位逾時，請移到較空曠處再試。";
      alert(msg);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
}

function addSpotMapLocateControl(viewId, map) {
  const Locate = L.Control.extend({
    options: { position: "topright" },
    onAdd: function () {
      const container = L.DomUtil.create("div", "leaflet-bar spot-map-locate-wrap");
      const btn = L.DomUtil.create("a", "spot-map-locate", container);
      btn.href = "#";
      btn.dataset.view = viewId;
      btn.title = "顯示目前位置（GPS）";
      btn.setAttribute("role", "button");
      btn.setAttribute("aria-label", "顯示目前位置");
      btn.innerHTML = "◎";
      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.on(btn, "click", (e) => {
        L.DomEvent.preventDefault(e);
        locateUserOnSpotMap(viewId);
      });
      return container;
    },
  });
  map.addControl(new Locate());
}

function updateSpotMapFilters(viewId) {
  const state = spotMaps[viewId];
  if (!state || !state.map) return;
  const el = document.getElementById(viewId);
  const cards = el ? [...el.querySelectorAll(".spot-card")] : [];
  const visible = new Set();
  cards.forEach((card) => {
    if (!card.hidden && card.dataset.name) visible.add(card.dataset.name);
  });
  const useFilter = cards.length > 0;
  state.layer.clearLayers();
  const latLngs = [];
  Object.keys(state.markersByName).forEach((name) => {
    if (useFilter && !visible.has(name)) return;
    const marker = state.markersByName[name];
    state.layer.addLayer(marker);
    latLngs.push(marker.getLatLng());
  });
  if (latLngs.length) {
    const bounds = L.latLngBounds(latLngs);
    state.bounds = bounds;
    state.map.fitBounds(bounds, { padding: [28, 28], maxZoom: 14 });
  } else {
    state.bounds = null;
    state.map.setView(PHUKET_CENTER, 11);
  }
}

function renderSpotList(viewId, listKey, cardClass, heroTitle, defaultBadge, subtitle) {
  const el = document.getElementById(viewId);
  if (!el) return;
  const spots = TRIP_DATA[listKey] || [];
  const groups = groupSpotsByRegion(spots);
  const chipHtml = groups
    .map(
      ([region, list]) =>
        `<button type="button" class="region-chip" data-region-filter="${escapeHtml(region)}" data-spot-view="${viewId}">${escapeHtml(region)} <span class="region-count">${list.length}</span></button>`
    )
    .join("");
  const allChip = `<button type="button" class="region-chip is-active" data-region-filter="__all__" data-spot-view="${viewId}">全部 <span class="region-count">${spots.length}</span></button>`;
  let typeRow = "";
  const typeOrder = typeFilterOrder(listKey);
  if (typeOrder) {
    const counts = countByType(spots, listKey);
    const typeChips = typeOrder
      .filter((t) => counts.get(t))
      .map(
        (t) =>
          `<button type="button" class="region-chip" data-type-filter="${escapeHtml(t)}" data-spot-view="${viewId}">${escapeHtml(t)} <span class="region-count">${counts.get(t)}</span></button>`
      )
      .join("");
    const allType = `<button type="button" class="region-chip is-active" data-type-filter="__all__" data-spot-view="${viewId}">全部 <span class="region-count">${spots.length}</span></button>`;
    typeRow = `
      <div class="filter-label">${escapeHtml(typeFilterLabel(listKey))}</div>
      <div class="region-filter type-filter" data-spot-view="${viewId}">${allType}${typeChips}</div>`;
  }
  const sections = groups
    .map(([region, list]) => {
      const cards = list.map((s) => spotCardHtml(s, listKey, cardClass, defaultBadge)).join("");
      return `
        <section class="region-section" data-region="${escapeHtml(region)}">
          <h3 class="region-heading">${escapeHtml(region)} <span class="region-count">${list.length}</span></h3>
          <div class="spot-grid">${cards}</div>
        </section>`;
    })
    .join("");
  el.innerHTML = `
    <div class="hero-card" style="margin-bottom:16px">
      <h2>${heroTitle}</h2>
      <p class="hero-sub">${escapeHtml(subtitle || "")}</p>
    </div>
    <div class="spot-map-wrap">
      <div class="spot-map" id="${viewId}-map" role="img" aria-label="${escapeHtml(heroTitle)}地圖"></div>
      <p class="spot-map-hint">只顯示此分頁、且目前篩選看得到的地點。右上角 ◎ 可開 GPS（需允許位置權限）。</p>
    </div>
    <div class="spot-filters-sticky">
      <div class="filter-label">地區</div>
      <div class="region-filter" data-spot-view="${viewId}">${allChip}${chipHtml}</div>
      ${typeRow}
    </div>
    <div class="region-sections">${sections}</div>
  `;
  bindSpotFilterRow(el, viewId, ".region-filter:not(.type-filter)");
  bindSpotFilterRow(el, viewId, ".type-filter");
  initSpotMap(viewId, listKey, spots);
}

function renderDayPills() {
  const scroller = document.getElementById("day-scroller");
  if (!scroller) return;
  scroller.innerHTML = TRIP_DATA.days
    .map((d, i) => {
      const active = i === currentDay ? "active" : "";
      return `<button type="button" class="day-pill ${active}" data-day="${i}" role="tab" aria-selected="${i === currentDay}">第${i + 1}天・${escapeHtml(d.weekday)} ${escapeHtml(d.region || "")}</button>`;
    })
    .join("");
  scroller.querySelectorAll(".day-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentDay = parseInt(btn.dataset.day, 10);
      persistDay();
      renderDayPills();
      renderItinerary();
      btn.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  });
}

function persistDay() {
  try {
    localStorage.setItem(STORAGE_KEY, String(currentDay));
  } catch (_) {}
}

function bindSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("input", () => {
    searchQuery = input.value.trim().toLowerCase();
    applyFilters();
  });
}

function parseNotes(notesArr) {
  const FACT_LABELS = ["上車地點", "建議抵達", "建議離開", "建議退房離開", "出發", "到達", "車程", "車費"];
  const facts = [];
  const rest = [];
  const lines = [];
  (notesArr || []).forEach((n) => {
    String(n)
      .split(/\n/)
      .forEach((line) => {
        const t = line.trim();
        if (t) lines.push(t);
      });
  });
  for (const line of lines) {
    let matched = false;
    for (const prefix of FACT_LABELS) {
      if (!line.startsWith(prefix)) continue;
      const colonIdx = line.search(/[：:]/);
      if (colonIdx < prefix.length) continue;
      const label = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim();
      if (!value) continue;
      let kind = "default";
      if (prefix === "車費") {
        if (/已含/.test(value)) kind = "pass";
        else if (/銖|THB|฿/.test(value)) kind = "fare";
      }
      facts.push({ label, value, kind });
      matched = true;
      break;
    }
    if (!matched) rest.push(line);
  }
  return { facts, rest };
}

function renderNotesHtml(notesArr) {
  const { facts, rest } = parseNotes(notesArr);
  let html = "";
  if (facts.length) {
    html += `<div class="tl-facts">${facts
      .map((f) => {
        const kindClass = f.kind === "pass" ? " is-pass" : f.kind === "fare" ? " is-fare" : "";
        const valueHtml =
          f.kind === "pass" ? `<span class="tl-fact-badge">${escapeHtml(f.value)}</span>` : escapeHtml(f.value);
        return `<div class="tl-fact${kindClass}"><span class="tl-fact-label">${escapeHtml(f.label)}</span><span class="tl-fact-value">${valueHtml}</span></div>`;
      })
      .join("")}</div>`;
  }
  if (rest.length) {
    html += `<div class="tl-notes">${rest.map((line) => `<div class="tl-note-line">${escapeHtml(line)}</div>`).join("")}</div>`;
  }
  return html;
}

function renderItinerary() {
  const day = TRIP_DATA.days[currentDay];
  if (!day) return;
  const header = document.getElementById("day-header");
  header.innerHTML = `
    <div class="day-header-left">
      <h2>第 ${currentDay + 1} 天・星期${escapeHtml(day.weekday)}</h2>
      <div class="meta">${formatDate(day.date)}　·　${escapeHtml(day.region || "")}　·　${day.items.length} 項</div>
      ${day.summary ? `<p class="day-summary">${escapeHtml(day.summary)}</p>` : ""}
    </div>
    <span class="progress-pill">第 ${currentDay + 1} / ${TRIP_DATA.days.length} 天</span>
  `;
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = day.items
    .map((item, idx) => {
      const cat = CAT[categorize(item)] || CAT.other;
      const timeInfo = formatTime(item.time);
      const notesRaw = (item.notes || []).filter((n) => n && String(n).trim());
      const notesText = notesRaw.join("\n");
      const places = itemPlaces(item);
      const links = item.links || [];
      const timeHtml = timeInfo
        ? `<span class="tl-time${timeInfo.warn ? " warn" : ""}">${escapeHtml(timeInfo.text)}</span>`
        : "";
      const placeBtns = placeButtonsHtml(places);
      const linkBtns = links
        .map(
          (url) =>
            `<a class="btn btn-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">🔗 ${escapeHtml(linkLabel(url))}</a>`
        )
        .join("");
      const actions = placeBtns || linkBtns ? `<div class="tl-actions">${placeBtns}${linkBtns}</div>` : "";
      const titleHtml =
        places.length === 1
          ? `<a class="tl-title tl-title-link" href="${escapeHtml(places[0].url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title || "（未命名）")} <span class="map-chip">地圖</span></a>`
          : `<div class="tl-title">${escapeHtml(item.title || "（未命名）")}</div>`;
      const searchBlob = [item.title, notesText, item.time, day.region, ...places.map((p) => p.name)]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return `
        <article class="tl-item" data-idx="${idx}" data-search="${escapeHtml(searchBlob)}">
          <div class="tl-dot" title="${escapeHtml(cat.label)}">${cat.icon}</div>
          <div class="tl-card">
            ${timeHtml}
            ${titleHtml}
            ${renderNotesHtml(notesRaw)}
            ${actions}
          </div>
        </article>`;
    })
    .join("");
  timeline.querySelectorAll(".tl-item").forEach((node, i) => {
    node.style.animationDelay = `${Math.min(i * 0.04, 0.4)}s`;
  });
  applyFilters();
}

function applyFilters() {
  const items = document.querySelectorAll("#timeline .tl-item");
  let visible = 0;
  items.forEach((el) => {
    const blob = el.dataset.search || "";
    const matchSearch = !searchQuery || blob.includes(searchQuery);
    el.classList.toggle("hidden", !matchSearch);
    if (matchSearch) visible += 1;
  });
  let empty = document.getElementById("filter-empty");
  if (visible === 0) {
    if (!empty) {
      empty = document.createElement("div");
      empty.id = "filter-empty";
      empty.className = "empty-state";
      empty.innerHTML = `<div class="icon">🔍</div><p>沒有符合的行程項目</p>`;
      document.getElementById("timeline").after(empty);
    }
  } else if (empty) {
    empty.remove();
  }
}

function bindLightbox() {
  const lb = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  closeBtn.addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open");
  document.getElementById("lightbox-img").src = "";
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", init);
