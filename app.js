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
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 13.5 12 5l8 8.5M6.5 11v8h11v-8M10 19v-5h4v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
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
    speaker.textContent = "TOYOTA電車小幫手";
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
  return (
    answerTopics.find((topic) =>
      topic.matches.some((keyword) => normalizedMessage.includes(keyword.toLowerCase())),
    ) || fallbackAnswer
  );
}

function sendMessage(message) {
  const trimmedMessage = message.trim();
  if (!trimmedMessage) return;

  addMessage(trimmedMessage, "user");
  addMessage("", "assistant", findAnswer(trimmedMessage));
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
      <span class="speaker-name">TOYOTA電車小幫手</span>
      <div class="bubble">
        <p>嗨！我可以陪你了解電動車與 TOYOTA bZ4X，也能一起整理適合你的選車條件。你現在最想先知道什麼？</p>
        <div class="suggestion-list" aria-label="常見痛點問題">
          <button class="suggestion" type="button" data-message="家裡沒充電器怎麼辦">家裡沒充電器怎麼辦</button>
          <button class="suggestion" type="button" data-message="價格和維修費怎麼比較？">價格和維修費怎麼比較？</button>
          <button class="suggestion" type="button" data-message="電車值得換嗎？">電車值得換嗎？</button>
          <button class="suggestion" type="button" data-message="我想了解電動車充電與續航">充電與續航</button>
          <button class="suggestion" type="button" data-message="想了解 TOYOTA bZ4X">認識 bZ4X</button>
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
