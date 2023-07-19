let user = [
  '<div class="header__img"><img src="img/Userpic.svg" alt=""></div>',
  "Kate B.",
  '<div class="header__img2"><img src="img/icons/Shapearrow.png" alt=""></div>',
];
var header = document.querySelector(".header__user");
let imgUser = document.createElement("header__img");
let userInfo = document.createElement("user");
let arrow = document.createElement("header__img2");
header.append(imgUser);
imgUser.innerHTML = user[0];
imgUser.classList.add("header__img");
imgUser.after(userInfo);
userInfo.innerHTML = user[1];
userInfo.classList.add("user");
userInfo.after(arrow);
arrow.innerHTML = user[2];
arrow.classList.add("header__img2");

let items = [
  {
    img: `<img src="img/image 311.png" alt="">`,
    subtitle: "Headset",
    title: "Fidelity first. See more than ever before",
    description:
      "We've pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience.",
    footerImg: `<img src="img/icons/coment.png" alt="">`,
    countComment: 349,
    footerWatch: `<img src="img/icons/watch.png" alt="watch">`,
    footerCount: 49501,
    share: `<img src="img/icons/share.png" alt="share">`,
  },
  {
    img: `<img src="img/image 332.png" alt="">`,
    subtitle: "Controllers",
    title: "Your hands, in Virtual Reality",
    description:
      "Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.",
    footerImg: `<img src="img/icons/coment.png" alt="">`,
    countComment: 349,
    footerWatch: `<img src="img/icons/watch.png" alt="watch">`,
    footerCount: 49502,
    share: `<img src="img/icons/share.png" alt="share">`,
  },
  {
    img: `<img src="img/image 323.png" alt="">`,
    subtitle: "Base Stations",
    title: "Best-in-industry room-scale tracking",
    description:
      "The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability.",
    footerImg: `<img src="img/icons/coment.png" alt="">`,
    countComment: 349,
    footerWatch: `<img src="img/icons/watch.png" alt="watch">`,
    footerCount: 49503,
    share: `<img src="img/icons/share.png" alt="share">`,
  },
];
const mainContainer = document.querySelector(".main");
for (let i = 0; i < items.length; i++) {
  var itemsContainer = document.createElement("div");
  mainContainer.append(itemsContainer);
  itemsContainer.classList.add("main__card");
  let mainCardImg = document.createElement("div");
  mainCardImg.classList.add("main__card-img");
  itemsContainer.append(mainCardImg);
  mainCardImg.innerHTML = items[i].img;
  var mainItems = document.createElement("div");
  itemsContainer.append(mainItems);
  mainItems.classList.add("main__items");
  var mainItemsSub = document.createElement("div");
  mainItems.append(mainItemsSub);
  mainItemsSub.innerHTML = items[i].subtitle;
  mainItemsSub.classList.add("main__items-sub");
  const mainItemsTitle = document.createElement("div");
  mainItems.append(mainItemsTitle);
  mainItemsTitle.innerHTML = items[i].title;
  mainItemsTitle.classList.add("main__items-title");

  const mainItemsText = document.createElement("p");
  mainItems.append(mainItemsText);
  mainItemsText.innerHTML = items[i].description;
  mainItemsText.classList.add("main__items-text");
  if (items[i].subtitle == items[1].subtitle) {
    mainItemsSub.classList.add("main__items-sub2");
    itemsContainer.classList.add("main-card2");
    mainItemsTitle.classList.add("main__items-title2");
    mainItemsText.classList.add("text");
  }
  const mainFooter = document.createElement("div");
  itemsContainer.append(mainFooter);
  mainFooter.classList.add("main__footer");
  const foters = document.createElement("div");
  mainFooter.append(foters);
  foters.classList.add("foters");
  const mainFooterComment = document.createElement("div");
  foters.append(mainFooterComment);
  mainFooterComment.classList.add("main__footer-comment");
  mainFooterComment.innerHTML = items[i].footerImg;
  const mainFooterCount = document.createElement("div");
  foters.append(mainFooterCount);
  mainFooterCount.classList.add("main__footer-count");
  mainFooterCount.innerHTML = items[i].countComment;
  const mainFooterComment2 = document.createElement("div");
  foters.append(mainFooterComment2);
  mainFooterComment2.classList.add("main__footer-comment");
  mainFooterComment2.innerHTML = items[i].footerWatch;
  const mainFooterCount2 = document.createElement("div");
  foters.append(mainFooterCount2);
  mainFooterCount2.classList.add("main__footer-count");
  mainFooterCount2.innerHTML = items[i].footerCount;
  const mainFooterShare = document.createElement("div");
  foters.append(mainFooterShare);
  mainFooterShare.classList.add("main__footer-share");
  const mainFooterShare2 = document.createElement("a");
  mainFooterShare.prepend(mainFooterShare2)
  mainFooterShare2.innerHTML = items[i].share;
  mainFooterShare2.setAttribute("href","https://www.google.ge/")
}
var butonImg = [`img/Oval.svg`, `img/Oval (1).svg`];
var buton = document.createElement("div");
mainContainer.after(buton);
buton.classList.add("main__button");
for (let i = 0; i < butonImg.length; i++) {
  var img = document.createElement("img");
  buton.append(img);
  img.src = butonImg[i];
}
const footer = document.createElement("div");
buton.after(footer);
footer.classList.add("footerr");
const cro = document.createElement("div");
footer.append(cro);
cro.innerHTML = "© 2019 crowdfund. All Rights Reserved";
cro.classList.add("footer__crowdfund");
const links = ["CONTACT", "HELP", "TERMS OF USE", "PRIVACY POLICY",`img/icons/Twitter.png`,`img/icons/Facebook.png`,`img/icons/YouTube.png`];
const ul = document.createElement("ul");
cro.after(ul);
let footerIcons = document.createElement("div");
for (let i = 0; i < links.length; i++) {
  if (i < 4) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    ul.prepend(li);
    li.prepend(a);
    a.innerHTML = links[i];
    a.setAttribute("href","https://www.google.ge/")
  }
 if(i>=4){
    ul.after(footerIcons);
    footerIcons.classList.add("footer-icons");
    var imgFooter = document.createElement("img");
    footerIcons.prepend(imgFooter)
    imgFooter.src = links[i]
  }
}
