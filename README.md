# TOYOTA純電生活小助手

以繁體中文呈現的電動車選購聊天介面原型，提供主題選單、快捷問題、對話訊息、TOYOTA bZ4X 型錄入口與 CCS1 充電站地圖，強調「從你的生活開始 油你做主 電亮未來」的生活化電動車選購體驗。

聊天回答由 `app.js` 中的預設內容提供，使用關鍵字顯示相關資訊；目前沒有串接 AI、後端服務或個人化診斷功能。

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可。聊天區可使用主題選單、快捷問題、選車診斷表單或輸入問題測試介面互動。

## 部署到 GitHub 與 Vercel

1. 在 GitHub 建立一個空白 repository。
2. 將這個資料夾的檔案推送到 repository。
3. 在 Vercel 選擇 **Add New → Project**，匯入該 GitHub repository。
4. Application Preset 選 **Other**；Build Command 與 Output Directory 留空，然後部署。

之後每次推送變更到 GitHub，Vercel 都會自動重新部署。
