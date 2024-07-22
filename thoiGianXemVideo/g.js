function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

let h2 = getElementByXpath(
  '//li[@onclick="SaveProcess(this);"]/../li[2]'
).innerText;
h2 = h2.split(" ")[2];

// let hms = "02:04:33"; // your input string

let a = h2.split(":"); // split it at the colons

// minutes are worth 60 seconds. Hours are worth 60 minutes.
let seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

try {
  let baikiemtra = document.evaluate(
    '//div[@class="modal-footer"]/a',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );

  baikiemtra.singleNodeValue.click();
} catch (err) {}
