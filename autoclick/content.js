function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

function baiTiepButton() {
  let baiTiep = getElementByXpath(
    '//div[@class="menu-lesion lesionItem ok"]/div[1]/p[contains(@class, "comming last left ")]'
  ); // //p[@class="comming last left status254"]/../p[1]
  console.log(baiTiep + "");

  // if (baiTiep === null) {
  //   baiTiep = getElementByXpath(
  //     '//div[@class="menu-lesion lesionItem active ok"]/div[1]/p[contains(@class, "comming last left ")]'
  //   );
  // }
  // console.log(baiTiep + "");

  return baiTiep;
}

function autoClick() {
  // document.querySelector('button').click(); // Example: Click the first button found
  console.log("hihihi");
  let h2 = getElementByXpath(
    '//li[@onclick="SaveProcess(this);"]/../li[2]'
  ).innerText;
  h2 = h2.split(" ")[2];
  let a = h2.split(":"); // split it at the colons
  let h2seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

  let h1 = getElementByXpath(
    '//li[@onclick="SaveProcess(this);"]/../li[3]/span'
  ).innerText;
  let b = h1.split(":");
  let h1seconds = +b[0] * 60 * 60 + +b[1] * 60 + +b[2];

  if (h1 === h2) {
    console.log(h1 + "+");
    console.log(h2 + "+");
    let baiTiep = baiTiepButton();
    console.log(baiTiep + "");

    baiTiep.click();
  }
}

setInterval(autoClick, 60000);
