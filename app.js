const mapUrl =
  "https://www.google.com/maps/d/u/0/viewer?mid=19OGC8E8JMvUgHOEJkpkBUXnqiYgfwEcZ&ll=23.71715317641448%2C120.886376184375&z=6";
const catalogUrl =
  "https://hotaicdn.azureedge.net/toyotaweb/CAR_2026061516341694702228.pdf";

const answerTopics = [
  {
    matches: [
      "家裡沒充電器",
      "沒充電器",
      "沒有充電器",
      "家裡沒充電樁",
      "沒充電樁",
      "沒有充電樁",
      "沒樁",
      "沒有家用充電樁",
    ],
    paragraphs: [
      "如果家裡沒有充電樁，不代表就不能選電動車。很多人其實可以透過社區充電、公司充電、公共快速充電站，或未來安裝家用充電設備來滿足日常需求。",
      "先看你的停車位是否能安裝充電設備、通勤距離是否穩定、以及常用路線上是否有固定可用充電站。若你每天的通勤不長，且路線上有評估良好的充電站，電動車依然是一個合理選擇。",
      "如果你還在猶豫，最實際的做法是先確認：住家、上班地點、常跑路線與休閒地點，哪裡有可用充電資源，從這些條件來決定要不要安裝家用充電樁。",
    ],
    links: [{ label: "查看 CCS1 充電站地圖", href: mapUrl }],
    suggestions: ["家裡沒充電器怎麼辦", "價格和維修費怎麼比較？", "我想知道充電站在哪裡"],
  },
  {
    matches: ["地圖", "充電站", "附近", "找站", "充電地圖", "站點"],
    paragraphs: [
      "可以先用 CCS1 充電站地圖查看台灣各地的站點位置。出發前建議再確認站點營運狀態、充電規格與是否需要事先註冊。",
      "如果你常跑高速公路、長距離旅遊或入住外縣市，提前確認充電站位置能大幅降低換電車的心理負擔。",
    ],
    links: [{ label: "開啟 CCS1 充電站地圖", href: mapUrl }],
    suggestions: ["沒有家用充電樁怎麼辦？", "想了解 bZ4X", "價格和維修費怎麼比較？"],
  },
  {
    matches: ["診斷", "推薦", "適合我", "幫我挑", "選車", "適合"],
    paragraphs: [
      "可以！先從日常使用情境開始評估。你可以告訴我居住縣市、每天大約行駛距離、停車時能否充電，以及預算範圍，我會根據這些條件整理選車時值得比較的重點。",
      "如果你以「通勤＋購物＋假日出遊」作為主要需求，可以先把日常路線與充電方式整理出來，這樣會比直接比較車價更有幫助。",
    ],
    suggestions: ["我想了解電動車充電與續航", "價格和維修費怎麼比較？", "想了解 TOYOTA bZ4X"],
  },
  {
    matches: ["充電", "續航", "里程", "電池", "充電樁", "快速充電", "公用充電"],
    paragraphs: [
      "評估電動車充電時，可以先確認住家或工作地點附近是否有穩定可用的充電設備，再依照日常通勤距離安排充電。沒有家用充電樁也可以使用公共充電站，但建議先確認常用路線上的站點與充電規格。",
      "實際續航與充電時間會受到車型、電池狀態、溫度、路況及駕駛習慣影響。若你主要是城市與通勤使用，實際上可能不需要特別追求極長續航。",
      "在選車過程中，建議把『可用充電的便利性』和『續航表現』一起考慮，因為這兩者往往比單純看數字更重要。",
    ],
    links: [{ label: "查看 CCS1 充電站地圖", href: mapUrl }],
    suggestions: ["想了解 bZ4X", "價格和維修費怎麼比較？", "幫我整理選車條件"],
  },
  {
    matches: ["預算", "售價", "價格", "補助", "費用", "成本", "維修", "省錢", "總成本", "比油車", "油車", "值得換", "換不換", "值得不值得", "電車值得"],
    paragraphs: [
      "很多人會把電動車的車價拿去和油車比較，但真正比較值得看的，是『5 到 10 年的總持有成本』。除了車價，還要計入保險、稅費、充電或加油、維修與車輛折舊。",
      "電動車的維修頻率通常低於油車，因為沒有引擎、變速箱與排氣系統等高維護部件。若是長期持有，電動車的維修次數與維護成本往往有明顯優勢。",
      "如果你每天固定通勤、停車地點有充電條件，電動車在能源成本與維修成本上的優勢，往往能抵銷一部分車價差距。所以『買車當下價格高』不一定代表『長期不划算』。",
    ],
    suggestions: ["我想開始選車診斷", "沒充電器怎麼辦？", "想了解 bZ4X"],
  },
  {
    matches: ["bz4x", "bZ4X", "toyota", "外觀", "內裝", "安全", "車款", "b z4x", "SUV", "續航表現"],
    paragraphs: [
      "TOYOTA bZ4X 是純電 SUV，採用 e-TNGA 純電平台。了解車款時，可以從外觀與座艙、乘坐空間、安全配備、續航表現與充電方式等面向開始比較。",
      "bZ4X 的優勢之一，是它適合作為油轉電的入門車款，因為外觀設計、車內體驗與充電使用方式都比較容易讓第一次接觸電動車的車主接受。",
      "不同車型與配備差異很大，若你是首次考慮電動車，可以先把「通勤範圍、充電條件與預算」放在一起比，這樣會更容易做出正確判斷。",
    ],
    links: [{ label: "查看 TOYOTA bZ4X 官方型錄", href: catalogUrl }],
    suggestions: ["我想了解電動車充電與續航", "價格和維修費怎麼比較？", "查看 CCS1 充電站地圖"],
  },
  {
    matches: ["聯絡專人", "聯絡我", "找專人", "專人", "預約諮詢", "請專人聯絡我", "聯絡"],
    paragraphs: [
      "如果你想先聽專人把車款、充電方式與購車需求整理成更清楚的建議，我們可以安排一對一諮詢。",
      "你可以把目前的預算、居住城市、是否有充電條件，以及最在意的使用場景先告訴專人，讓對話更有方向。",
      "這樣比較適合你先聚焦在『適合我』，而不是只看單一車價數字。",
    ],
    suggestions: ["我想開始選車診斷", "家裡沒充電器怎麼辦", "想了解 TOYOTA bZ4X"],
  },
];

const fallbackAnswer = {
  paragraphs: [
    "我目前是網站中的靜態資訊導覽，會依照你的問題整理關於電動車、充電、價格與 bZ4X 的重點資訊。你可以直接問我：家裡沒充電器怎麼辦、價格和維修費怎麼比較、電車是否值得換、充電站地圖或 bZ4X 介紹。",
    "如果你正在比較是否換電車，最實際的方式是先看自己的通勤距離、住家停車條件與長期總成本，而不是只看車價這一項。",
  ],
  suggestions: ["沒有家用充電樁怎麼辦？", "價格和維修費怎麼比較？", "想了解 TOYOTA bZ4X"],
};

const chatFeed = document.querySelector("#chat-feed");
const chatForm = document.querySelector("#chat-form");
const questionInput = document.querySelector("#question");
const newChatButton = document.querySelector("#new-chat");
const menuToggle = document.querySelector("#menu-toggle");
const sidebar = document.querySelector("#sidebar");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");

const assistantIcon = `
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="4" y="5" width="24" height="22" rx="8" fill="currentColor" opacity="0.08"/>
    <path d="M9 17.5 16 11l7 6.5v7.7a1.8 1.8 0 0 1-1.8 1.8H10.8A1.8 1.8 0 0 1 9 25.2v-7.7Z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 17.5h7v-4.7h-7v4.7Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
    <path d="M12 22.5h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    <circle cx="12.2" cy="25.6" r="1.4" fill="currentColor"/>
    <circle cx="19.8" cy="25.6" r="1.4" fill="currentColor"/>
    <path d="M13.3 13.5h5.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M14.6 9.8c.9-.8 2.9-.8 3.8 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
  </svg>`;

function currentTime() {
  return new Intl.DateTimeFormat("zh-TW", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function addMessage(text, role, answer) {
  const article = document.createElement("article");
  article.className = `message ${role}-message`;

  if (role === "assistant") {
    const avatar = document.createElement("span");
    avatar.className = "assistant-avatar message-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.innerHTML = assistantIcon;
    article.append(avatar);
  }

  const content = document.createElement("div");
  content.className = "message-content";

  if (role === "assistant") {
    const speaker = document.createElement("span");
    speaker.className = "speaker-name";
    speaker.textContent = "TOYOTA純電生活小助手";
    content.append(speaker);
  }

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  if (role === "user") {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    bubble.append(paragraph);
  } else {
    answer.paragraphs.forEach((copy) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = copy;
      bubble.append(paragraph);
    });

    (answer.links || []).forEach((link) => {
      const anchor = document.createElement("a");
      anchor.className = "answer-link";
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = `${link.label} ↗`;
      bubble.append(anchor);
    });

    if (answer.suggestions?.length) {
      const suggestions = document.createElement("div");
      suggestions.className = "suggestion-list";
      suggestions.setAttribute("aria-label", "延伸問題");

      answer.suggestions.forEach((suggestion) => {
        const button = document.createElement("button");
        button.className = "suggestion";
        button.type = "button";
        button.dataset.message = suggestion;
        button.textContent = suggestion;
        suggestions.append(button);
      });

      bubble.append(suggestions);
    }
  }

  const time = document.createElement("time");
  time.className = "message-time";
  time.textContent = currentTime();
  content.append(bubble, time);
  article.append(content);
  chatFeed.append(article);
  chatFeed.scrollTop = chatFeed.scrollHeight;
}

function findAnswer(message) {
  const normalizedMessage = message.toLowerCase();

  if (
    ["診斷", "選車診斷", "適合我", "幫我診斷", "幫我選車", "適合買電動車"].some((keyword) =>
      normalizedMessage.includes(keyword.toLowerCase()),
    )
  ) {
    return { paragraphs: ["讓我先幫你做一個簡單的選車診斷，填入你的日常使用情境後，我會把適合的選擇整理給你。"], suggestions: [] };
  }

  return (
    answerTopics.find((topic) =>
      topic.matches.some((keyword) => normalizedMessage.includes(keyword.toLowerCase())),
    ) || fallbackAnswer
  );
}

function buildDiagnosticForm() {
  const article = document.createElement("article");
  article.className = "message assistant-message diagnostic-message";
  article.innerHTML = `
    <span class="assistant-avatar message-avatar" aria-hidden="true">${assistantIcon}</span>
    <div class="message-content">
      <span class="speaker-name">TOYOTA純電生活小助手</span>
      <div class="bubble">
        <p>先幫你做一個快速選車診斷。你只要填入這些條件，我會判斷你比較適合哪種使用方式。</p>
        <form class="diagnostic-card" id="diagnostic-form">
          <div class="form-grid">
            <label class="field">
              <span>預算</span>
              <select name="budget" required>
                <option value="">請選擇</option>
                <option value="60-90">60～90 萬</option>
                <option value="90-120">90～120 萬</option>
                <option value="120-160">120～160 萬</option>
                <option value="160+">160 萬以上</option>
              </select>
            </label>

            <label class="field">
              <span>居住城市</span>
              <select name="city" required>
                <option value="">請選擇</option>
                <option value="north">北部</option>
                <option value="central">中部</option>
                <option value="south">南部</option>
                <option value="east">東部/離島</option>
              </select>
            </label>

            <label class="field">
              <span>是否有充電裝置</span>
              <select name="charger" required>
                <option value="">請選擇</option>
                <option value="home">有家用充電樁</option>
                <option value="parking">有停車位可裝充電樁</option>
                <option value="public">只有公共充電站可用</option>
                <option value="none">沒有充電裝置</option>
              </select>
            </label>

            <label class="field">
              <span>每日通勤距離</span>
              <select name="commute" required>
                <option value="">請選擇</option>
                <option value="30">30 公里內</option>
                <option value="30-60">30～60 公里</option>
                <option value="60-100">60～100 公里</option>
                <option value="100+">100 公里以上</option>
              </select>
            </label>

            <label class="field field-full">
              <span>主要用途</span>
              <select name="usage" required>
                <option value="">請選擇</option>
                <option value="commute">上班通勤</option>
                <option value="family">家庭代步</option>
                <option value="travel">週末出遊</option>
                <option value="mixed">通勤＋長途</option>
              </select>
            </label>
          </div>

          <button class="diagnostic-submit" type="submit">開始診斷</button>
        </form>
      </div>
    </div>
  `;

  const form = article.querySelector("#diagnostic-form");
  form.addEventListener("submit", handleDiagnosticSubmit);
  return article;
}

function renderDiagnosticResult(values) {
  const budgetLevel = values.budget;
  const chargerState = values.charger;
  const commuteLevel = values.commute;

  const score = {
    "60-90": 1,
    "90-120": 2,
    "120-160": 3,
    "160+": 4,
    home: 2,
    parking: 1,
    public: 1,
    none: 0,
    "30": 2,
    "30-60": 2,
    "60-100": 1,
    "100+": 0,
  };

  const totalScore =
    score[budgetLevel] +
    score[chargerState] +
    score[commuteLevel];

  let kind = "適合先評估再決定";
  let recommendation = "你比較適合先確認充電與使用範圍，能把不確定因素降到最低。";
  let followUp = [
    "先比較是否有穩定的充電點",
    "再看每月通勤與車程需求",
    "確認長期維修與能源成本的優勢",
  ];

  if (totalScore >= 7) {
    kind = "非常適合換電車";
    recommendation = "你的使用情境偏適合純電車，尤其在通勤與日常代步場景下，車價與維修成本的綜合優勢會比較明顯。";
    followUp = [
      "選擇家用或公司充電方案最省心",
      "可優先考慮入門純電 SUV 如 bZ4X",
      "以通勤與日常出行作為主要比較基準",
    ];
  } else if (totalScore >= 4) {
    kind = "可以考慮電動車";
    recommendation = "你有明顯的換車潛力，但仍建議把充電安排與長程需求一起列入評估。";
    followUp = [
      "確認有無固定停車位充電樁",
      "比較每月充電成本與油耗成本",
      "將週末長途需求納入車款選擇",
    ];
  } else if (totalScore >= 2) {
    kind = "需要更完整充電方案";
    recommendation = "如果你沒有穩定充電點，建議先補足充電環境再選車，否則日常使用體驗可能會受到影響。";
    followUp = [
      "先評估社區充電或公司充電可用性",
      "確認是否能安裝家用充電樁",
      "長途需求可考慮保留油車作為備用",
    ];
  }

  if (chargerState === "none" && commuteLevel === "100+") {
    kind = "建議暫緩換電車";
    recommendation = "在沒有固定充電裝置、且長距離通勤較高的情況下，電動車的便利性可能會受影響。先補齊充電條件或再觀察半年再決定更稳妥。";
    followUp = [
      "確認可否安裝家用充電樁",
      "比較可用公共充電站是否足夠",
      "先保留油車作為長途使用補強",
    ];
  }

  const result = document.createElement("div");
  result.className = "diagnostic-result";
  result.innerHTML = `
    <div class="status-pill">${kind}</div>
    <p>${recommendation}</p>
    <ul>
      ${followUp.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <div class="recommendation-block">
      <strong>建議重點</strong>
      <p>以你現在的條件來看，${chargerState === "none" ? "優先確認充電方式與停車環境" : "充電條件已經具備相當優勢"}，再依 ${budgetLevel === "60-90" ? "入門預算" : budgetLevel === "90-120" ? "中階預算" : budgetLevel === "120-160" ? "中高預算" : "較高預算"} 來看，TOYOTA bZ4X 會是一個值得初步比較的純電 SUV 選項。</p>
    </div>
  `;

  const existingResult = document.querySelector(".diagnostic-result");
  if (existingResult) {
    existingResult.replaceWith(result);
  } else {
    const form = document.querySelector("#diagnostic-form");
    if (form) {
      form.replaceWith(result);
    }
  }

  return result;
}

function handleDiagnosticSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const destination = form.parentElement?.closest(".bubble") || form.parentElement;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());

  renderDiagnosticResult(values);

  const followUpButtons = document.createElement("div");
  followUpButtons.className = "suggestion-list";
  followUpButtons.innerHTML = `
    <button class="suggestion" type="button" data-message="家裡沒充電器怎麼辦">家裡沒充電器怎麼辦</button>
    <button class="suggestion" type="button" data-message="價格和維修費怎麼比較？">價格和維修費怎麼比較？</button>
    <button class="suggestion" type="button" data-message="想了解 TOYOTA bZ4X">認識 bZ4X</button>
    <button class="suggestion" type="button" data-message="聯絡專人">聯絡專人</button>
    <button class="suggestion redo-diagnostic-btn" type="button">重新診斷</button>
  `;

  const redoButton = followUpButtons.querySelector(".redo-diagnostic-btn");
  if (redoButton) {
    redoButton.addEventListener("click", () => {
      const diagnosticMessage = document.querySelector(".diagnostic-message");
      if (diagnosticMessage) {
        diagnosticMessage.remove();
      }
      showDiagnosticForm();
    });
  }

  const existingSuggestions = destination?.querySelector(".suggestion-list");
  if (existingSuggestions) {
    existingSuggestions.remove();
  }

  if (destination) {
    destination.append(followUpButtons);
  }
}

function showDiagnosticForm() {
  const existing = chatFeed.querySelector(".diagnostic-message");
  if (existing) {
    existing.remove();
  }

  chatFeed.append(buildDiagnosticForm());
  chatFeed.scrollTop = chatFeed.scrollHeight;
}

function sendMessage(message) {
  const trimmedMessage = message.trim();
  if (!trimmedMessage) return;

  addMessage(trimmedMessage, "user");

  if (["診斷", "選車診斷", "適合我", "幫我診斷", "幫我選車", "適合買電動車"].some((keyword) =>
    trimmedMessage.toLowerCase().includes(keyword.toLowerCase()),
  )) {
    showDiagnosticForm();
  } else {
    addMessage("", "assistant", findAnswer(trimmedMessage));
  }

  questionInput.value = "";
  questionInput.focus();
  closeMenu();
}

function resetConversation() {
  chatFeed.replaceChildren();

  const divider = document.createElement("div");
  divider.className = "day-divider";
  const dateLabel = document.createElement("span");
  dateLabel.textContent = "今天";
  divider.append(dateLabel);

  const greeting = document.createElement("article");
  greeting.className = "message assistant-message";
  greeting.innerHTML = `
    <span class="assistant-avatar message-avatar" aria-hidden="true">${assistantIcon}</span>
    <div class="message-content">
      <span class="speaker-name">TOYOTA純電生活小助手</span>
      <div class="bubble">
        <p>嗨！我可以陪你了解電動車與 TOYOTA bZ4X，也能一起整理適合你的選車條件。你現在最想先知道什麼？</p>
        <div class="suggestion-list" aria-label="常見痛點問題">
          <button class="suggestion" type="button" data-message="家裡沒充電器怎麼辦">家裡沒充電器怎麼辦</button>
          <button class="suggestion" type="button" data-message="價格和維修費怎麼比較？">價格和維修費怎麼比較？</button>
          <button class="suggestion" type="button" data-message="電車值得換嗎？">電車值得換嗎？</button>
          <button class="suggestion" type="button" data-message="我想了解電動車充電與續航">充電與續航</button>
          <button class="suggestion" type="button" data-message="想了解 TOYOTA bZ4X">認識 bZ4X</button>
          <button class="suggestion" type="button" data-message="聯絡專人">聯絡專人</button>
          <button class="suggestion" type="button" data-message="我想查看 CCS1 充電站地圖">找附近充電站</button>
        </div>
      </div>
      <time class="message-time">現在</time>
    </div>`;

  chatFeed.append(divider, greeting);
  questionInput.value = "";
  questionInput.focus();
  closeMenu();
}

function openMenu() {
  sidebar.classList.add("is-open");
  sidebarBackdrop.classList.add("is-visible");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  sidebar.classList.remove("is-open");
  sidebarBackdrop.classList.remove("is-visible");
  menuToggle.setAttribute("aria-expanded", "false");
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(questionInput.value);
});

chatFeed.addEventListener("click", (event) => {
  const suggestion = event.target.closest("[data-message]");
  if (suggestion) sendMessage(suggestion.dataset.message);
});

sidebar.addEventListener("click", (event) => {
  const menuItem = event.target.closest("[data-message]");
  if (menuItem) sendMessage(menuItem.dataset.message);
});

newChatButton.addEventListener("click", resetConversation);
menuToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("is-open")) closeMenu();
  else openMenu();
});
sidebarBackdrop.addEventListener("click", closeMenu);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
