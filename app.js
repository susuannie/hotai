const mapUrl =
  "https://www.google.com/maps/d/u/0/viewer?mid=19OGC8E8JMvUgHOEJkpkBUXnqiYgfwEcZ&ll=23.71715317641448%2C120.886376184375&z=6";
const catalogUrl =
  "https://hotaicdn.azureedge.net/toyotaweb/CAR_2026061516341694702228.pdf";

const answerTopics = [
  {
    matches: ["地圖", "充電站", "附近", "找站"],
    paragraphs: [
      "可以先用 CCS1 充電站地圖查看台灣各地的站點位置。出發前建議再確認站點營運狀態、充電規格與是否需要事先註冊。",
    ],
    links: [{ label: "開啟 CCS1 充電站地圖", href: mapUrl }],
    suggestions: ["沒有家用充電樁怎麼辦？", "想了解 bZ4X"],
  },
  {
    matches: ["診斷", "推薦", "適合我", "幫我挑", "選車"],
    paragraphs: [
      "可以！先從日常使用情境開始評估。你可以告訴我居住縣市、每天大約行駛距離、停車時能否充電，以及預算範圍，我會根據這些條件整理選車時值得比較的重點。",
      "目前這是靜態導覽原型，尚未連接 AI 或個人化計算服務；請勿輸入個人敏感資料。",
    ],
    suggestions: ["我想了解電動車充電與續航", "想了解 TOYOTA bZ4X"],
  },
  {
    matches: ["充電", "續航", "里程", "電池", "沒樁", "充電樁"],
    paragraphs: [
      "評估電動車充電時，可以先確認住家或工作地點附近是否有穩定可用的充電設備，再依照日常通勤距離安排充電。沒有家用充電樁也可以使用公共充電站，但建議先確認常用路線上的站點與充電規格。",
      "實際續航與充電時間會受到車型、電池狀態、溫度、路況及駕駛習慣影響，請以官方公布的車款資料及實際使用狀況為準。",
    ],
    links: [{ label: "查看 CCS1 充電站地圖", href: mapUrl }],
    suggestions: ["想了解 bZ4X", "幫我整理選車條件"],
  },
  {
    matches: ["預算", "售價", "價格", "補助", "費用", "成本"],
    paragraphs: [
      "購車預算除了車價，也可以一併比較保險、稅費、家用充電設備、公共充電費用與日常行駛成本。售價與政府補助可能隨時間或車型調整，請以品牌和政府官方公告為準。",
      "如果你願意提供預算區間與每年大約行駛里程，我可以先幫你列出比較時應注意的項目。",
    ],
    suggestions: ["我想開始選車診斷", "想了解 bZ4X"],
  },
  {
    matches: ["bz4x", "bZ4X", "toyota", "外觀", "內裝", "安全", "車款"],
    paragraphs: [
      "TOYOTA bZ4X 是純電 SUV，採用 e-TNGA 純電平台。了解車款時，可以從外觀與座艙、乘坐空間、安全配備，以及充電方式等面向開始比較。",
      "各項配備與規格可能依車型等級而異，詳細資訊請以官方型錄及實際車款為準。",
    ],
    links: [{ label: "查看 TOYOTA bZ4X 官方型錄", href: catalogUrl }],
    suggestions: ["我想了解電動車充電與續航", "查看 CCS1 充電站地圖"],
  },
];

const fallbackAnswer = {
  paragraphs: [
    "我目前是網站中的靜態資訊導覽，尚未串接 AI，因此無法即時回答這類開放式問題。你可以從下方主題選單開始，或試著詢問 bZ4X、充電與續航、選車條件或充電站地圖。",
  ],
  suggestions: ["想了解 TOYOTA bZ4X", "我想了解電動車充電與續航", "我想開始選車診斷"],
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
    speaker.textContent = "電車選購助手";
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
      <span class="speaker-name">電車選購助手</span>
      <div class="bubble">
        <p>嗨！我可以陪你了解電動車與 TOYOTA bZ4X，也能一起整理適合你的選車條件。你現在最想先知道什麼？</p>
        <div class="suggestion-list" aria-label="建議問題">
          <button class="suggestion" type="button" data-message="想了解 TOYOTA bZ4X">認識 bZ4X</button>
          <button class="suggestion" type="button" data-message="我想了解電動車充電與續航">充電與續航</button>
          <button class="suggestion" type="button" data-message="我想開始選車診斷">幫我挑選適合的電車</button>
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
