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
      name: "PRU（Trisara）",
      region: "澄泰",
      category: "米其林",
      cuisine: "高級泰菜",
      rating: "4.7",
      price: "約 5,000–8,000 銖／人",
      hours: "晚餐為主；週一、日休息（請再核對）",
      hours_uncertain: true,
      need_reserve: true,
      note: "島上少數米其林星級餐廳，Trisara 內的開放式廚房與時令菜單。這趟沒有排入正日，若想專程北上，建議提早訂位，由卡塔約 50–70 分。",
      lat: 8.038478,
      lng: 98.276724,
      places: [
        { name: "PRU", url: gmaps("PRU Restaurant Trisara Phuket") }
      ],
      sources: [
        { label: "官網", url: "https://prurestaurant.com/" }
      ],
      image: "assets/places/food-tasting.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "The Boathouse Wine & Grill",
      region: "卡塔",
      category: "海景",
      cuisine: "泰式海鮮",
      rating: "4.4",
      price: "約 800–1,500 銖",
      hours: "07:00–23:00（晚餐最後點餐約 22:00）",
      hours_source: "https://boathouse-phuket.com/dining",
      note: "卡塔沙灘上的老牌海景餐廳，早午晚都開。抵達日午餐與看完海角的晚餐都順路。菜式偏海鮮與西式，不是街邊檔。",
      lat: 7.814355,
      lng: 98.299062,
      places: [
        { name: "The Boathouse", url: gmaps("The Boathouse Phuket Kata") }
      ],
      sources: [
        { label: "官網用餐頁", url: "https://boathouse-phuket.com/dining" }
      ],
      image: "assets/places/food-wine.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Mom Tri's Kitchen",
      region: "卡塔諾伊",
      category: "海景",
      cuisine: "融合料理",
      rating: "4.5",
      price: "約 1,200–2,500 銖",
      hours: "午餐與晚餐（請再核對）",
      hours_uncertain: true,
      need_reserve: true,
      note: "Villa Royale 懸崖上的精緻餐廳，俯瞰卡塔諾伊。離酒店極近，適合想留在南岸、又想吃得精一點的晚上。建議先訂海景位。",
      lat: 7.8035,
      lng: 98.2988,
      places: [
        { name: "Mom Tri's Kitchen", url: gmaps("Mom Tri's Kitchen Kata Noi Phuket") }
      ],
      image: "assets/places/food-cliff.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "On The Rock",
      region: "卡隆",
      category: "海鮮",
      cuisine: "泰式海鮮",
      rating: "4.4",
      price: "約 800–1,800 銖",
      hours: "12:00–22:00",
      need_reserve: true,
      note: "Marina Phuket 懸崖上的海鮮，面向安達曼海。排在 SPA 那天的晚餐。由卡塔諾伊約 15 分鐘。建議先訂，訂不到就回 The Boathouse。",
      lat: 7.829152,
      lng: 98.293813,
      places: [
        { name: "On The Rock", url: gmaps("On The Rock Marina Phuket") }
      ],
      image: "assets/places/food-seafood.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Baan Rim Pa",
      region: "芭東",
      category: "懸崖",
      cuisine: "高級泰菜",
      rating: "4.5",
      price: "約 1,500–3,000 銖",
      hours: "午餐與晚餐",
      hours_uncertain: true,
      need_reserve: true,
      note: "卡林灣懸崖上的經典泰菜，日落與夜景都很漂亮。由卡塔約 25–35 分。這趟不排正日；若想專程吃一頓高檔泰菜，優先訂日落時段。",
      lat: 7.9085,
      lng: 98.2835,
      places: [
        { name: "Baan Rim Pa", url: gmaps("Baan Rim Pa Phuket Kalim") }
      ],
      image: "assets/places/food-baanrimpa.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Acqua Restaurant",
      region: "芭東",
      category: "義式",
      cuisine: "義式",
      rating: "4.6",
      price: "約 2,000–4,000 銖",
      hours: "晚餐為主（請再核對）",
      hours_uncertain: true,
      need_reserve: true,
      note: "卡林灣上的義式高級餐廳，主廚 Alessandro Frau，pasta 與 tasting menu 常被提起。由卡塔約半小時。專程過去要預留整晚。",
      lat: 7.9102,
      lng: 98.2828,
      places: [
        { name: "Acqua", url: gmaps("Acqua Restaurant Phuket Kalim") }
      ],
      image: "assets/places/food-italian.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Catch Beach Club",
      region: "邦濤",
      category: "海灘俱樂部",
      cuisine: "西式",
      rating: "4.3",
      price: "約 800–2,000 銖",
      hours: "日間至傍晚（請再核對）",
      hours_uncertain: true,
      note: "邦濤沙灘上的 beach club，氣氛輕鬆、海景好。適合中午吃完再躺一天；不是正餐米其林路線。由卡塔約 40–50 分。",
      lat: 7.9945,
      lng: 98.2805,
      places: [
        { name: "Catch Beach Club", url: gmaps("Catch Beach Club Bang Tao Phuket") }
      ],
      image: "assets/places/food-beachclub.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Siam Supper Club",
      region: "澄泰",
      category: "西泰融合",
      cuisine: "融合料理",
      rating: "4.4",
      price: "約 1,200–2,500 銖",
      hours: "晚餐為主",
      hours_uncertain: true,
      need_reserve: true,
      note: "澄泰一帶的老牌高級餐廳，氣氛偏 lounge，牛排與泰菜都有。和 PRU、Suay 同一北岸走廊，可與邦濤沙灘同一天。",
      lat: 7.9968,
      lng: 98.3042,
      places: [
        { name: "Siam Supper Club", url: gmaps("Siam Supper Club Phuket Cherngtalay") }
      ],
      image: "assets/places/food-fine.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Black Ginger（The Slate）",
      region: "邁楊",
      category: "南泰",
      cuisine: "高級泰菜",
      rating: "4.5",
      price: "約 2,500–4,500 銖",
      hours: "約 17:30–23:00",
      need_reserve: true,
      note: "The Slate 湖上木屋，乘筏進場，南泰精緻菜。機場附近，適合抵達或離開前後專程一頓；由卡塔約一小時。",
      lat: 8.085162,
      lng: 98.298309,
      places: [
        { name: "Black Ginger", url: gmaps("Black Ginger The Slate Phuket") }
      ],
      sources: [
        { label: "官網", url: "https://www.blackginger.com/" }
      ],
      image: "assets/places/food-raft.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Blue Elephant Phuket",
      region: "普吉舊城",
      category: "皇家泰菜",
      cuisine: "高級泰菜",
      rating: "4.4",
      price: "約 1,200–2,800 銖",
      hours: "約 09:00–22:30",
      need_reserve: true,
      note: "甲米路的中葡總督府邸，主廚 Nooror 的皇家與南泰菜。舊城住宿期間可步行或短程 Grab。午餐與晚餐都開，適合週日白天避開行人街人潮。",
      lat: 7.8809,
      lng: 98.3855,
      places: [
        { name: "Blue Elephant", url: gmaps("Blue Elephant Phuket Old Town") }
      ],
      sources: [
        { label: "官網", url: "https://blueelephant.com/restaurant/phuket-restaurant/" }
      ],
      image: "assets/places/food-mansion.jpg",
      image_credit: "Google／店家或景點實景",
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
      note: "迪布路百年老屋，蟹肉黃咖哩麵最常被點。曾列米其林必比登。午餐較易入座；週末晚餐致電 076 218 155。",
      lat: 7.885929,
      lng: 98.390905,
      places: [
        { name: "Raya", url: gmaps("Raya Restaurant Dibuk Road Phuket") }
      ],
      image: "assets/places/food-curry.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "One Chun",
      region: "普吉舊城",
      category: "普吉菜",
      cuisine: "普吉本地菜",
      rating: "4.4",
      price: "約 250–500 銖",
      hours: "10:00–22:00（星期二或至 21:00）",
      note: "舊城另一間常被在地人與旅客同時推薦的店，和 Raya 幾乎相鄰。週日 Kopitiam 休息時，這裡可以當早午餐。",
      lat: 7.885781,
      lng: 98.390687,
      places: [
        { name: "One Chun", url: gmaps("One Chun Cafe Restaurant Phuket") }
      ],
      image: "assets/places/food-oldtown.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Tu Kab Khao ตู้กับข้าว",
      region: "普吉舊城",
      category: "普吉菜",
      cuisine: "普吉本地菜",
      rating: "4.2",
      price: "約 200–450 銖",
      hours: "11:00–20:30",
      note: "攀牙路老店屋，蟹肉炒飯常被提起。和 The Memory 同一條路，市集回來若還想坐下，這是最近的一間。20:30 左右打烊。",
      lat: 7.883686,
      lng: 98.388202,
      places: [
        { name: "Tu Kab Khao", url: gmaps("Tu Kab Khao Restaurant Phuket") }
      ],
      image: "assets/places/food-crab.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Kopitiam by Wilai",
      region: "普吉舊城",
      category: "泰華",
      cuisine: "早午餐",
      rating: "4.6",
      price: "約 150–350 銖",
      hours: "約 11:00–20:00；星期日休息",
      note: "塔廊路老店屋的泰華家常。這趟只在週六下午用得上。週日行人街當天不開門，不要把早餐押在這裡。",
      lat: 7.884777,
      lng: 98.388084,
      places: [
        { name: "Kopitiam by Wilai", url: gmaps("Kopitiam by Wilai Phuket") }
      ],
      image: "assets/places/food-breakfast.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Kan Eang @ Pier",
      region: "查龍",
      category: "海鮮",
      cuisine: "泰式海鮮",
      rating: "4.3",
      price: "約 500–1,200 銖",
      hours: "約 10:00–23:00",
      hours_uncertain: true,
      note: "查龍碼頭旁的老海鮮店，樹蔭座位，自 1970 年代經營。想吃碼頭海鮮時由卡塔或舊城約 20–30 分。",
      lat: 7.819901,
      lng: 98.344417,
      places: [
        { name: "Kan Eang @ Pier", url: gmaps("Kan Eang at Pier Chalong") }
      ],
      image: "assets/places/food-grill.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Suay Restaurant Cherngtalay",
      region: "澄泰",
      category: "現代泰菜",
      cuisine: "高級泰菜",
      rating: "4.5",
      price: "約 800–1,800 銖",
      hours: "午餐與晚餐（請再核對）",
      hours_uncertain: true,
      need_reserve: true,
      note: "澄泰的現代泰菜，本地食材與創意擺盤。北岸一天可與 Catch、Siam Supper Club 擇一。舊城另有分店，以當日營業為準。",
      lat: 7.9905,
      lng: 98.3058,
      places: [
        { name: "Suay Cherngtalay", url: gmaps("Suay Restaurant Cherngtalay Phuket") }
      ],
      image: "assets/places/food-thai.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Laem Hin Seafood",
      region: "普吉鎮",
      category: "海鮮",
      cuisine: "泰式海鮮",
      rating: "4.2",
      price: "約 400–1,000 銖",
      hours: "午餐至晚間",
      hours_uncertain: true,
      note: "拉埃欣碼頭一帶的海鮮，本地人常去。由舊城不遠，適合想吃碼頭風味、又不想跨去查龍的晚上。",
      lat: 7.8365,
      lng: 98.4112,
      places: [
        { name: "Laem Hin Seafood", url: gmaps("Laem Hin Seafood Phuket") }
      ],
      image: "assets/places/food-laemhin.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Jampa（Tri Vananda）",
      region: "塔朗",
      category: "農場餐桌",
      cuisine: "融合料理",
      rating: "4.5",
      price: "約 2,500–4,500 銖",
      hours: "晚餐為主（請再核對）",
      hours_uncertain: true,
      need_reserve: true,
      note: "Tri Vananda 的農場火烤與時令菜單，米其林精選／綠星常被提起。北島專程一晚的選擇；出發前再確認營業日。",
      lat: 8.0455,
      lng: 98.338,
      places: [
        { name: "Jampa", url: gmaps("Jampa Restaurant Tri Vananda Phuket") }
      ],
      image: "assets/places/food-farm.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Thai Library（Trisara）",
      region: "澄泰",
      category: "南泰",
      cuisine: "高級泰菜",
      rating: "4.5",
      price: "約 2,000–4,000 銖",
      hours: "晚餐為主",
      hours_uncertain: true,
      need_reserve: true,
      note: "Trisara 內的南泰精緻菜，日落海景。與 PRU 同度假村、風格不同：一邊是實驗菜單，一邊是經典南泰。須預約。",
      lat: 8.0378,
      lng: 98.2759,
      places: [
        { name: "Thai Library", url: gmaps("Thai Library Trisara Phuket") }
      ],
      image: "assets/places/food-thailibrary.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "The Lazy Coconut（Twinpalms）",
      region: "邦濤／Cherngtalay",
      category: "高級／國際菜",
      cuisine: "國際菜・海景",
      rating: "4.5",
      price: "約 1,200–3,000 銖",
      hours: "午餐至晚間",
      hours_uncertain: true,
      note: "Twinpalms 旗下海景餐廳（泳池與沙灘邊），日落氣氛佳，適合慶祝或輕鬆高級晚餐。",
      lat: 7.9845,
      lng: 98.2798,
      places: [
        { name: "The Lazy Coconut", url: gmaps("The Lazy Coconut Twinpalms Phuket") }
      ],
      image: "assets/places/food-garden.jpg",
      image_credit: "Google／店家或景點實景",
  }
  ],
  spas: [
    {
      name: "Trisara Spa",
      region: "澄泰",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.8",
      price: "高檔",
      hours: "日間至傍晚（請預約）",
      hours_uncertain: true,
      need_reserve: true,
      note: "Trisara 的私人水療，環境極安靜，療程偏長。外客名額有限，務必提前預約。由卡塔約一小時，適合當成北岸整天的核心。",
      lat: 8.0375,
      lng: 98.2762,
      places: [
        { name: "Trisara Spa", url: gmaps("Trisara Spa Phuket") }
      ],
      image: "assets/places/spa-luxury.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Tew Son Spa（Katathani）",
      region: "卡塔諾伊",
      category: "度假村",
      type_tag: "度假村",
      hours: "10:00–19:00",
      hours_source: "https://www.katathani.com/facilities/spa/",
      note: "就在前三晚的酒店裡，面對卡塔諾伊。週五若不想再坐車，選這裡。花園按摩、美甲與蒸房都有。",
      lat: 7.807724,
      lng: 98.29932,
      places: [
        { name: "Tew Son Spa", url: gmaps("Tew Son Spa Katathani Phuket") }
      ],
      sources: [
        { label: "官網", url: "https://www.katathani.com/facilities/spa/" }
      ],
      image: "assets/places/spa-resort.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Anantara Spa Phuket",
      region: "邁考",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.7",
      hours: "日間（請預約）",
      hours_uncertain: true,
      need_reserve: true,
      note: "Anantara Mai Khao 的高檔水療，海邊與花園環境。機場一帶，適合抵達後或離開前；由卡塔較遠，約一小時。",
      lat: 8.1295,
      lng: 98.3008,
      places: [
        { name: "Anantara Spa", url: gmaps("Anantara Spa Mai Khao Phuket") }
      ],
      image: "assets/places/spa-ocean.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Banyan Tree Spa Phuket",
      region: "邦濤",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.7",
      hours: "日間至晚間（請預約）",
      hours_uncertain: true,
      need_reserve: true,
      note: "Laguna 區的經典高級水療，雨滴式與泰式療程有名。北岸一天可搭配邦濤沙灘。外客需預約。",
      lat: 8.0045,
      lng: 98.2965,
      places: [
        { name: "Banyan Tree Spa", url: gmaps("Banyan Tree Spa Phuket Laguna") }
      ],
      image: "assets/places/spa-pool.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Coqoon Spa（The Slate｜原 Dewa）",
      region: "邁楊",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.6",
      hours: "日間（請預約）",
      hours_uncertain: true,
      need_reserve: true,
      note: "The Slate 內的 Dewa Spa，工業與熱帶混搭氛圍。可與 Black Ginger 同一帶安排；機場附近較方便。",
      lat: 8.0845,
      lng: 98.2978,
      places: [
        { name: "Dewa Spa", url: gmaps("Dewa Spa The Slate Phuket") }
      ],
      image: "assets/places/spa-stone.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Amanpuri Spa",
      region: "潘西",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.9",
      price: "頂級",
      hours: "預約制",
      need_reserve: true,
      note: "島上最頂級的水療之一，環境極靜。名額與價格都高，外客通常需提前很久；這趟僅作參考清單。",
      lat: 7.9995,
      lng: 98.2788,
      places: [
        { name: "Amanpuri Spa", url: gmaps("Amanpuri Spa Phuket") }
      ],
      image: "assets/places/spa-villa.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Andara Spa",
      region: "卡瑪拉",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.6",
      hours: "日間（請預約）",
      hours_uncertain: true,
      need_reserve: true,
      note: "卡瑪拉山丘上的 Andara Resort 水療，視野開闊。由卡塔約 30–40 分，適合想換西岸中段空氣的半天。",
      lat: 7.9528,
      lng: 98.2835,
      places: [
        { name: "Andara Spa", url: gmaps("Andara Spa Phuket Kamala") }
      ],
      image: "assets/places/spa-andara.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Keemala Spa",
      region: "卡瑪拉",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.7",
      hours: "日間（請預約）",
      hours_uncertain: true,
      need_reserve: true,
      note: "叢林裡的特色度假村水療，建築很特別。外客名額有限，建議提早；適合當成整天放空，不要趕行程。",
      lat: 7.9585,
      lng: 98.2912,
      places: [
        { name: "Keemala Spa", url: gmaps("Keemala Spa Phuket") }
      ],
      image: "assets/places/spa-jungle.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Oasis Sky Breeze Spa",
      region: "卡隆",
      category: "山丘",
      type_tag: "山丘",
      hours: "10:00–22:00",
      need_reserve: true,
      note: "Oasis 在卡隆山丘的一間，地址 26 Soi Plukjae。由卡塔諾伊約 10 分鐘。建議至少提早兩小時預約。",
      lat: 7.816115,
      lng: 98.313789,
      places: [
        { name: "Oasis Sky Breeze", url: gmaps("Oasis Sky Breeze Spa Karon") }
      ],
      sources: [
        { label: "Oasis 布吉", url: "https://oasisspa.net/en/destination/phuket/" }
      ],
      image: "assets/places/spa-massage.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Let's Relax Spa・The SIS Kata",
      region: "卡塔",
      category: "連鎖",
      type_tag: "連鎖",
      rating: "4.5",
      hours: "10:00–23:30",
      note: "在 The SIS Kata 裡，離卡塔市中心與卡塔諾伊都不遠。官網寫 10:00–23:30。外客做 SPA 請先向分店確認。",
      lat: 7.812738,
      lng: 98.29999,
      places: [
        { name: "Let's Relax The SIS Kata", url: gmaps("Let's Relax Spa The SIS Kata") }
      ],
      sources: [
        { label: "分店頁", url: "https://letsrelaxspa.com/branches/phuket-the-sis-kata/" }
      ],
      image: "assets/places/spa-thai.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Ayara Spa",
      region: "卡塔",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.5",
      hours: "日間至晚間（請預約）",
      hours_uncertain: true,
      need_reserve: true,
      note: "卡塔一帶的高檔水療選擇，療程完整、環境安靜。比 Let's Relax 更偏度假村風格；預約時確認是否接待外客。",
      lat: 7.8205,
      lng: 98.3012,
      places: [
        { name: "Ayara Spa", url: gmaps("Ayara Spa Kata Phuket") }
      ],
      image: "assets/places/spa-oil.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "JW Marriott Spa Mai Khao",
      region: "邁考",
      category: "度假村",
      type_tag: "度假村",
      rating: "4.6",
      hours: "日間（請預約）",
      hours_uncertain: true,
      need_reserve: true,
      note: "邁考長沙灘上的 JW 水療，空間大、適合長療程。機場走廊，適合離開日以外的專程半天。",
      lat: 8.1485,
      lng: 98.2975,
      places: [
        { name: "JW Marriott Spa", url: gmaps("JW Marriott Spa Mai Khao Phuket") }
      ],
      image: "assets/places/spa-garden.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Six Senses Spa Yao Noi（離島）",
      region: "瑤內島",
      category: "離島",
      type_tag: "離島",
      rating: "4.9",
      price: "頂級",
      hours: "預約制；需船班",
      need_reserve: true,
      note: "極高級，但在攀牙灣瑤內島，當天來回會吃掉整天。這趟主節奏不排離島；僅列為夢想清單，不要硬塞進五日行程。",
      lat: 8.12,
      lng: 98.58,
      places: [
        { name: "Six Senses Yao Noi", url: gmaps("Six Senses Spa Yao Noi") }
      ],
      image: "assets/places/spa-sixsenses.jpg",
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "The Spa at Katathani（延伸）",
      region: "卡塔諾伊",
      category: "度假村",
      type_tag: "度假村",
      hours: "與酒店設施相同時段",
      hours_uncertain: true,
      note: "若 Tew Son 檔期滿，可向酒店詢問同度假村其他療程或美甲。仍以住客優先；出發前一日再確認。",
      lat: 7.808,
      lng: 98.2995,
      places: [
        { name: "Katathani Spa", url: gmaps("Katathani Phuket Beach Resort Spa") }
      ],
      image: "assets/places/spa-candle.jpg",
      image_credit: "Google／店家或景點實景",
  }
  ],
  beaches: [
    {
      name: "卡塔諾伊 Kata Noi",
      region: "卡塔諾伊",
      category: "主沙灘",
      type_tag: "主行程",
      hours: "全日；下水看旗",
      note: "這趟的海灘。海灣短、酒店多、比芭東安靜。五月仍可能有湧浪，紅旗日改泳池。",
      lat: 7.806338,
      lng: 98.298738,
      image: "assets/places/beach-katanoi.jpg",
      places: [
        { name: "卡塔諾伊", url: gmaps("Kata Noi Beach") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "卡塔海灘 Kata",
      region: "卡塔",
      category: "主沙灘",
      type_tag: "主行程",
      hours: "全日；下水看旗",
      note: "卡塔諾伊北鄰，約一公里半的沙灘，南端有公園與餐廳。The Boathouse 在這裡。",
      lat: 7.81936,
      lng: 98.29805,
      image: "assets/places/beach-kata.jpg",
      places: [
        { name: "卡塔海灘", url: gmaps("Kata Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "卡隆海灘 Karon",
      region: "卡隆",
      category: "可順路",
      type_tag: "主行程",
      hours: "全日；下水看旗",
      note: "再往北的長沙灘，空間比卡塔開闊。On The Rock 在這一段的懸崖上。適合散步，不值得為它搬酒店。",
      lat: 7.843958,
      lng: 98.293425,
      image: "assets/places/beach-karon.jpg",
      places: [
        { name: "卡隆海灘", url: gmaps("Karon Beach") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "拉威海角 Promthep Cape",
      region: "拉威",
      category: "觀景",
      type_tag: "主行程",
      hours: "全日；日落約 18:30",
      note: "島的南端觀景台，不是游泳處。週四傍晚的唯一景點。人多，提早到。",
      lat: 7.761892,
      lng: 98.305358,
      image: "assets/places/beach-promthep.jpg",
      places: [
        { name: "拉威海角", url: gmaps("Promthep Cape") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "奈漢海灘 Nai Harn",
      region: "拉威",
      category: "備選",
      type_tag: "備選",
      hours: "全日；下水看旗",
      note: "南端較受地形保護的沙灘，樹蔭多。若卡塔連續紅旗，又還想下水，這是第一個備選。",
      lat: 7.775707,
      lng: 98.305825,
      image: "assets/places/beach-naiharn.jpg",
      places: [
        { name: "奈漢海灘", url: gmaps("Nai Harn Beach") }
      ],
      image_credit: "Google／店家或景點實景",
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
      image: "assets/places/beach-yanui.jpg",
      places: [
        { name: "亞努伊", url: gmaps("Ya Nui Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "自由沙灘 Freedom Beach",
      region: "芭東",
      category: "可選",
      type_tag: "備選",
      rating: "4.4",
      hours: "日間；船班看海況",
      note: "芭東以南的小灣，沒有馬路直達。長尾船多由 Tri Trang 出發。五月浪大就不要去。",
      lat: 7.875205,
      lng: 98.275581,
      image: "assets/places/beach-freedom.jpg",
      places: [
        { name: "自由沙灘", url: gmaps("Freedom Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "芭東海灘 Patong",
      region: "芭東",
      category: "參考",
      type_tag: "參考",
      hours: "全日；夜生活另計",
      note: "最熱鬧的西岸沙灘。這趟不住、也不安排夜店。五月同樣常有紅旗。",
      lat: 7.896632,
      lng: 98.295429,
      image: "assets/places/beach-patong.jpg",
      places: [
        { name: "芭東海灘", url: gmaps("Patong Beach") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "蘇林海灘 Surin",
      region: "蘇林",
      category: "北岸",
      type_tag: "備選",
      rating: "4.5",
      hours: "全日；下水看旗",
      note: "西岸中北段較安靜的沙灘，水質常被誇。由卡塔約 35–45 分。適合想換一邊海的下午，不排正日。",
      lat: 7.9765,
      lng: 98.2788,
      image: "assets/places/beach-surin.jpg",
      places: [
        { name: "蘇林海灘", url: gmaps("Surin Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "邦濤海灘 Bang Tao",
      region: "邦濤",
      category: "北岸",
      type_tag: "備選",
      rating: "4.4",
      hours: "全日；下水看旗",
      note: "長沙灘，Laguna 與多間度假村在此。Catch Beach Club 一帶可吃可躺。北岸一天的核心沙灘。",
      lat: 7.9928,
      lng: 98.2815,
      image: "assets/places/beach-bangtao.jpg",
      places: [
        { name: "邦濤海灘", url: gmaps("Bang Tao Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "卡瑪拉海灘 Kamala",
      region: "卡瑪拉",
      category: "西岸",
      type_tag: "備選",
      hours: "全日；下水看旗",
      note: "芭東與蘇林之間的海灣，比芭東安靜。Andara、Keemala 在山丘上。可順路停留，不必過夜。",
      lat: 7.9555,
      lng: 98.283,
      image: "assets/places/beach-kamala.jpg",
      places: [
        { name: "卡瑪拉海灘", url: gmaps("Kamala Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "拉揚海灘 Layan",
      region: "拉揚",
      category: "北岸",
      type_tag: "備選",
      hours: "全日；較安靜",
      note: "邦濤北端更安靜的一段，常有人慢跑與看日落。設施較少，適合不想碰 beach club 的人。",
      lat: 8.0105,
      lng: 98.2855,
      image: "assets/places/beach-layan.jpg",
      places: [
        { name: "拉揚海灘", url: gmaps("Layan Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "邁考海灘 Mai Khao",
      region: "邁考",
      category: "機場帶",
      type_tag: "參考",
      hours: "全日；長而空曠",
      note: "島最北的長沙灘，靠近機場與國家公園。五月海況不一；適合喜歡空曠、不住南岸的人。這趟不排。",
      lat: 8.147,
      lng: 98.298,
      image: "assets/places/beach-maikhao.jpg",
      places: [
        { name: "邁考海灘", url: gmaps("Mai Khao Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "邁楊海灘 Nai Yang",
      region: "邁楊",
      category: "機場帶",
      type_tag: "參考",
      hours: "全日；國家公園範圍",
      note: "機場旁國家公園內的沙灘，The Slate 附近。落地或離開前後若還有精神，可比芭東舒服。",
      lat: 8.0885,
      lng: 98.2945,
      image: "assets/places/beach-naiyang.jpg",
      places: [
        { name: "邁楊海灘", url: gmaps("Nai Yang Beach Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Tri Trang 海灘",
      region: "芭東",
      category: "出發點",
      type_tag: "備選",
      hours: "日間",
      note: "芭東南端小灣，多為去自由沙灘的長尾船起點。本身也可散步；五月船班看海況。",
      lat: 7.8865,
      lng: 98.272,
      image: "assets/places/beach-tritrang.jpg",
      places: [
        { name: "Tri", url: gmaps("Tri Trang Beach Patong") }
      ],
      image_credit: "Google／店家或景點實景",
  }
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
      note: "島上最大的週末市集，衣服、雜貨與熟食為主，當週六的晚餐。由舊城 Grab 約 10–15 分。",
      lat: 7.880533,
      lng: 98.366326,
      image: "assets/places/market-night.jpg",
      sources: [
        { label: "市集網站", url: "https://www.phuketnakamarket.com/" }
      ],
      places: [
        { name: "那卡週末市集", url: gmaps("Naka Weekend Market Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "塔廊路週日行人街 Lard Yai",
      region: "普吉舊城",
      category: "週日晚",
      type_tag: "主行程",
      hours: "星期日約 16:00–22:00",
      hours_uncertain: true,
      note: "每週日塔廊路封街。手工、小吃、畫像都有，氣氛比那卡細。酒店走路幾分鐘。",
      lat: 7.88485,
      lng: 98.3884,
      image: "assets/places/market-walking.jpg",
      places: [
        { name: "塔廊路週日行人街", url: gmaps("Thalang Road Sunday Walking Street Phuket Old Town") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "舊城日間步行",
      region: "普吉舊城",
      category: "日間",
      type_tag: "主行程",
      hours: "全日可走",
      note: "羅曼尼巷、迪布路、攀牙路與惹蘭路的中葡街屋，不必等週末。",
      lat: 7.8846,
      lng: 98.3887,
      image: "assets/places/market-oldtown.jpg",
      places: [
        { name: "舊城日間步行", url: gmaps("Soi Romanee Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Chillva Market",
      region: "普吉鎮",
      category: "週末",
      type_tag: "備選",
      rating: "4.3",
      hours: "週末傍晚至夜間（請再核對）",
      hours_uncertain: true,
      note: "較有設計感的週末市集，文創與小吃並重。與那卡擇一即可，不要同一晚兩邊趕。",
      lat: 7.8895,
      lng: 98.385,
      image: "assets/places/market-chill.jpg",
      places: [
        { name: "Chillva", url: gmaps("Chillva Market Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Phuket Weekend Market（Indy）",
      region: "維集",
      category: "週末",
      type_tag: "備選",
      hours: "週末傍晚（請再核對）",
      hours_uncertain: true,
      note: "本地人也叫 Phuket Indy，規模比那卡小、熟食不少。若那卡太擠，可改來這裡逛一圈。",
      lat: 7.8755,
      lng: 98.3785,
      image: "assets/places/market-indy.jpg",
      places: [
        { name: "Phuket", url: gmaps("Phuket Weekend Market Indy") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "邦濤夜市 Bangtao Night Market",
      region: "邦濤",
      category: "夜市",
      type_tag: "備選",
      hours: "部分晚間（請再核對）",
      hours_uncertain: true,
      note: "北岸度假區附近的夜市／小吃攤，規模不大。若白天在邦濤，傍晚可順路。",
      lat: 7.9985,
      lng: 98.2955,
      image: "assets/places/market-food.jpg",
      places: [
        { name: "邦濤夜市", url: gmaps("Bangtao Night Market Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "卡塔夜市 Kata Night Market",
      region: "卡塔",
      category: "夜市",
      type_tag: "備選",
      hours: "部分晚間（請再核對）",
      hours_uncertain: true,
      note: "卡塔主路一帶的小夜市與攤位，方便住南岸時走路逛。不要期待那卡那種規模。",
      lat: 7.8215,
      lng: 98.3018,
      image: "assets/places/market-street.jpg",
      places: [
        { name: "卡塔夜市", url: gmaps("Kata Night Market Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "拉威海鮮市場 Rawai",
      region: "拉威",
      category: "海鮮",
      type_tag: "備選",
      hours: "日間至傍晚",
      hours_uncertain: true,
      note: "拉威碼頭的海鮮攤，可點海鮮請鄰近餐廳代煮。看完海角後若還想吃碼頭風味可停；注意議價與新鮮度。",
      lat: 7.7795,
      lng: 98.3215,
      image: "assets/places/market-seafood.jpg",
      places: [
        { name: "拉威海鮮市場", url: gmaps("Rawai Seafood Market Phuket") }
      ],
      image_credit: "Google／店家或景點實景",
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
      image: "assets/places/market-fresh.jpg",
      places: [
        { name: "Banzaan", url: gmaps("Banzaan Fresh Market Patong") }
      ],
      image_credit: "Google／店家或景點實景",
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
      image: "assets/places/market-plaza.jpg",
      places: [
        { name: "Malin", url: gmaps("Malin Plaza Night Market Patong") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Boat Avenue Night Market",
      region: "澄泰",
      category: "北岸",
      type_tag: "備選",
      hours: "部分晚間（請再核對）",
      hours_uncertain: true,
      note: "澄泰 Boat Avenue 一帶的夜間攤位與餐廳區，偏度假客。北岸吃完飯可散步，不是傳統大市集。",
      lat: 7.9895,
      lng: 98.3048,
      image: "assets/places/market-lantern.jpg",
      places: [
        { name: "Boat", url: gmaps("Boat Avenue Phuket Night Market") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "Laguna Night Market",
      region: "邦濤",
      category: "北岸",
      type_tag: "備選",
      hours: "部分週次晚間（請再核對）",
      hours_uncertain: true,
      note: "Laguna 度假區內不定期／週末夜市，氣氛輕鬆。出發前查當週是否有開。",
      lat: 8.0005,
      lng: 98.3005,
      image: "assets/places/market-craft.jpg",
      places: [
        { name: "Laguna", url: gmaps("Laguna Phuket Night Market") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "舊城週末市集（參考）",
      region: "普吉舊城",
      category: "週末",
      type_tag: "參考",
      hours: "視當週活動",
      hours_uncertain: true,
      note: "舊城偶有臨時市集或藝術市集，多集中在週末。以現場與當週海報為準；主力仍是塔廊路行人街。",
      lat: 7.885,
      lng: 98.389,
      image: "assets/places/market-oldtown.jpg",
      places: [
        { name: "舊城週末市集（參考）", url: gmaps("Phuket Old Town weekend market") }
      ],
      image_credit: "Google／店家或景點實景",
  },
    {
      name: "泰國華博物館（日間）",
      region: "普吉舊城",
      category: "日間",
      type_tag: "主行程",
      hours: "日間",
      hours_uncertain: true,
      note: "由舊泰華學校改成的博物館，講普吉華人與錫礦歷史。週六午後可進去躲太陽。",
      lat: 7.8853,
      lng: 98.3874,
      image: "assets/places/market-oldtown.jpg",
      places: [
        { name: "泰國華博物館（日間）", url: gmaps("Phuket Thai Hua Museum") }
      ],
      image_credit: "Google／店家或景點實景",
  }
  ],
};

const STORAGE_KEY = "phuket-trip-2027-day";
const WEATHER_CACHE_KEY = "phuket-trip-weather-v1";
const VIEWS = ["home", "itinerary", "hotels", "restaurants", "spas", "beaches", "markets"];

const REGION_ORDER = [
  "卡塔諾伊",
  "卡塔",
  "卡隆",
  "拉威",
  "芭東",
  "卡瑪拉",
  "蘇林",
  "邦濤",
  "拉揚",
  "澄泰",
  "潘西",
  "查龍",
  "普吉舊城",
  "普吉鎮",
  "維集",
  "塔朗",
  "邁楊",
  "邁考",
  "瑤內島",
  "喀圖",
  "機場",
  "全島",
];

const CUISINE_ORDER = ["高級泰菜", "泰式海鮮", "普吉本地菜", "融合料理", "義式", "西式", "泰式", "早午餐", "其他"];
const SPA_TYPE_ORDER = ["度假村", "山丘", "連鎖", "離島"];
const BEACH_TYPE_ORDER = ["主行程", "備選", "參考"];
const MARKET_TYPE_ORDER = ["主行程", "備選", "參考"];

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
    "收錄高級餐廳與在地好味，方便挑想去的店；暫時不硬塞進每日行程。評分與營業時間會變動，標了「時段請再核對」的，出發前再看一次。圖片多為氣氛參考，非店家官方照片。"
  );
  renderSpotList(
    "view-spas",
    "spas",
    "spa",
    "💆 SPA",
    "SPA",
    "列出島上高檔與方便的水療供參考，暫時不全部排進正日。想零移動就用酒店的 Tew Son；想換空氣可看北岸度假村或卡隆山丘。務必提前預約。圖片為氣氛參考。"
  );
  renderSpotList(
    "view-beaches",
    "beaches",
    "beach",
    "🏖️ 海灘",
    "海灘",
    "主行程仍是卡塔諾伊、卡塔、卡隆與拉威海角；其餘西岸與北岸沙灘作參考，暫不塞進每日行程。五月西岸常有紅旗，下水只看旗號。"
  );
  renderSpotList(
    "view-markets",
    "markets",
    "market",
    "🏮 市集",
    "市集",
    "週末主力仍是那卡與塔廊路行人街；其餘市集作備選與參考，暫不全部排進正日。出發前再核對營業日。"
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

function renderSpotMedia(s, listKey) {
  const isFood = listKey === "restaurants";
  const imgs = [];
  if (isFood && s.food_image) {
    imgs.push({ src: s.food_image, alt: `${s.name} 食物` });
  }
  if (s.image) {
    imgs.push({ src: s.image, alt: `${s.name}` });
  }
  if (!imgs.length) return "";
  const credit = s.image_credit
    ? `<div class="spot-credit">${escapeHtml(s.image_credit)}</div>`
    : "";
  const media = imgs
    .map(
      (im) =>
        `<button type="button" class="gallery-thumb spot-thumb" data-src="${escapeHtml(im.src)}" aria-label="放大 ${escapeHtml(im.alt)}"><img loading="lazy" src="${escapeHtml(im.src)}" alt="${escapeHtml(im.alt)}" /></button>`
    )
    .join("");
  return `<div class="spot-media">${media}${credit}</div>`;
}

function spotCardHtml(s, listKey, cardClass, defaultBadge) {
  const meta = [];
  if (s.rating) meta.push(`<span class="chip">★ ${escapeHtml(s.rating)}</span>`);
  if (s.price) meta.push(`<span class="chip">${escapeHtml(s.price)}</span>`);
  const media = renderSpotMedia(s, listKey);
  const hasMedia = media ? " has-media" : "";
  const typeVal = spotTypeValue(s, listKey);
  const typeAttr = typeVal ? ` data-type-filter="${escapeHtml(typeVal)}"` : "";
  const sources =
    s.sources && s.sources.length
      ? `<div class="source-block"><div class="source-label">參考</div><div class="spot-actions sources">${sourceButtonsHtml(s.sources)}</div></div>`
      : "";
  return `
    <article class="spot-card ${cardClass}${hasMedia}" data-name="${escapeHtml(s.name)}" data-region="${escapeHtml(s.region || "其他")}"${typeAttr}>
      <div class="spot-body">
        <div class="spot-badge">${escapeHtml(s.category || defaultBadge)}</div>
        <h3>${escapeHtml(s.name)}</h3>
        ${meta.length ? `<div class="spot-meta-row">${meta.join("")}</div>` : ""}
        ${spotPracticalTagsHtml(s)}
        ${s.note ? `<p class="spot-note">${escapeHtml(s.note)}</p>` : ""}
        <div class="spot-actions">${placeButtonsHtml(s.places)}</div>
        ${sources}
      </div>
      ${media}
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
  el.querySelectorAll(".gallery-thumb").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(btn.dataset.src));
  });
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
