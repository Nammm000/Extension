function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

let c = 0;
let h = 3000;

let syncButton = document.evaluate(
  '//span[@onclick="SyncProcess(this);"]/i',
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
);

let h2 = getElementByXpath(
  '//li[@onclick="SaveProcess(this);"]/../li[2]'
).innerText;
h2 = h2.split(" ")[2];

let a = h2.split(":"); // split it at the colons

// minutes are worth 60 seconds. Hours are worth 60 minutes.
let seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

setInterval(function () {
  console.log(seconds);
}, 8000);

// syncButton.singleNodeValue.click();

// setInterval(function () {
//   let h1 = getElementByXpath(
//     '//li[@onclick="SaveProcess(this);"]/../li[3]/span'
//   ).innerText;

//   if (h1 === h2) {
//     console.log(h1 + "+");
//     console.log(h2 + "+");
//     c = 0;
//     h = 9000;
//     let baikiemtra = document.evaluate(
//       '//div[@class="modal-footer"]/a',
//       document,
//       null,
//       XPathResult.FIRST_ORDERED_NODE_TYPE,
//       null
//     );

//     baikiemtra.singleNodeValue.click();
//   } else if (!h1.includes("-")) {
//     console.log(h1 + "-");
//     console.log(h2 + "-");
//     c = 1;
//   } else {
//     // h1.includes("-")
//     console.log(h1);
//     console.log(h2);
//     c = 0;
//     syncButton.singleNodeValue.click();
//     h = 8000;
//   }
// }, h);

// function start(d, format) {
//   if (d == "now") {
//     let n = new Date();
//     console.log(c);
//     if (c == 1) {
//       timeA[num] = n.setMinutes(n.getMinutes() + 5);
//     } else if (c == 0) {
//       timeA[num] = new Date();
//       console.log(timeA[num]);
//     }
//   } else timeA[num] = new Date(d);
//   formatA[num] = format;
//   if (num == 0) tid = window.setTimeout("doDate()", speed);
//   num++;
// }
