// function getElementByXpath(path) {
//   return document.evaluate(
//     path,
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null
//   ).singleNodeValue;
// }

// let h1 =
//   getElementByXpath('//li[@onclick="SaveProcess(this);"]/../li[3]/span') + ""; //div[@class="footer-aside"]/ul/li[3]/span
// let h2 = getElementByXpath('//li[@onclick="SaveProcess(this);"]/../li[2]') + ""; //div[@class="footer-aside"]/ul/li[2]

// h2 = h2.split(" ")[2];

// let check = 0; // khong co code

// if (h1 === h2) {
//   // string1.localeCompare(string2) string1 > string2 : 1, -1, 0

//   const doneBtn = document.createElement("img");
//   doneBtn.src = chrome.runtime.getURL("assets/done.png");
//   doneBtn.className = "button done-btn";
//   doneBtn.title = "Done";
//   (document.head || document.documentElement).appendChild(doneBtn);
// } else if (h1.includes("-")) {
//   if (check == 0) {
//     const syncBtn = document.createElement("img");
//     syncBtn.src = chrome.runtime.getURL("assets/sync.png");
//     syncBtn.className = "button sync-btn";
//     syncBtn.title = "Dong bo thoi gian";
//     (document.head || document.documentElement).appendChild(syncBtn);
//   } else {
//     const reloadBtn = document.createElement("img");
//     reloadBtn.src = chrome.runtime.getURL("assets/reload.png");
//     reloadBtn.className = "button reload-btn";
//     reloadBtn.title = "Tai lai trang";
//     (document.head || document.documentElement).appendChild(reloadBtn);
//   }
// } else {
//   // h1 !=== h2 && !h1.includes("-")
//   const addBtn = document.createElement("img");
//   addBtn.src = chrome.runtime.getURL("assets/add.png");
//   addBtn.className = "button add-btn";
//   addBtn.title = "Them code";
//   (document.body || document.documentElement).appendChild(addBtn);

//   // chrome.tabs.onInstalled.addListener(function () {
//   //   alert("Hello Extensions");
//   // });

//   function start(d, format) {
//     if (d == "now") {
//       let n = new Date();
//       timeA[num] = n.setMinutes(n.getMinutes() + 10);
//       console.log(timeA[num]);
//     } else timeA[num] = new Date(d);
//     formatA[num] = format;
//     if (num == 0) tid = window.setTimeout("doDate()", speed);
//     num++;
//   }

//   const daThemBtn = document.createElement("img");
//   daThemBtn.src = chrome.runtime.getURL("assets/v-icon.png");
//   daThemBtn.className = "button v-btn";
//   daThemBtn.title = "Da them code";
//   (document.body || document.documentElement).appendChild(daThemBtn);
// }
