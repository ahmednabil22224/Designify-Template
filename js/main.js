///////////////////////Handle Active/////////////////////////
function handleActive(element) {
  element.target.parentElement.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  element.target.classList.add("active");
}
///////////////////////open setting-box/////////////////////////
let settingBox = document.querySelector(".setting-box");
let iIcon = document.querySelector(".toggle-setting i");
iIcon.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
});
///////////////////////change main-color/////////////////////////
let mainColor = document.querySelectorAll(".setting-container ul li");
if (localStorage.getItem("color") !== null) {
  mainColor.forEach((e) => {
    e.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${localStorage.getItem("color")}"]`)
    .classList.add("active");
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
}
mainColor.forEach((e) => {
  e.addEventListener("click", (ele) => {
    document.documentElement.style.setProperty(
      "--main-color",
      ele.target.dataset.color
    );
    // mainColor.forEach(e => {
    //     e.classList.remove("active");
    // });
    // ele.target.classList.add("active");
    handleActive(ele);
    localStorage.setItem("color", ele.target.dataset.color);
  });
});
///////////////////////Options change background-image/////////////////////////
let backgroundImg = document.querySelector(".landing");
lstImg = [1, 2, 3, 4, 5];

let backgroundInterval;
function randomizeImage() {
  backgroundInterval = setInterval((e) => {
    let randNum = Math.floor(Math.random() * lstImg.length);
    backgroundImg.style.backgroundImage = `url("./images/${randNum + 1}.jpeg")`;
  }, 5000);
}

let span = document.querySelectorAll(".random-backgrounds span");

if (localStorage.getItem("isActive") === "yes") {
  randomizeImage();
} else {
  clearInterval(backgroundInterval);
}

if (localStorage.getItem("isActive") !== null) {
  span.forEach((e) => {
    e.classList.remove("active");
  });
  document
    .querySelector(`[data-background="${localStorage.getItem("isActive")}"]`)
    .classList.add("active");
} else {
  randomizeImage();
}

span.forEach((e) => {
  e.onclick = () => {
    span.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    localStorage.setItem("isActive", e.dataset.background);

    if (e.dataset.background === "yes") {
      randomizeImage();
    } else {
      clearInterval(backgroundInterval);
    }
  };
});
///////////////////////Show Bullets/////////////////////////
let bulletsOption = document.querySelectorAll(".show-bullets span");
let bullets = document.querySelector(".nav-bullets");

if (localStorage.getItem("show") !== null) {
  bulletsOption.forEach((e) => {
    e.classList.remove("active");
  });
  document
    .querySelector(`[data-option="${localStorage.getItem("show")}"]`)
    .classList.add("active");
  if (localStorage.getItem("show") == "none") {
    bullets.style.display = "none";
  } else {
    bullets.style.display = "block";
  }
}

bulletsOption.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    bulletsOption.forEach((e) => {
      e.classList.remove("active");
    });
    ele.classList.add("active");
    if (ele.dataset.option == "none") {
      bullets.style.display = "none";
    } else {
      bullets.style.display = "block";
    }
    localStorage.setItem("show", bullets.style.display);
  });
});
///////////////////////change Progress-Bar/////////////////////////
let ourSkills = document.querySelector(".our-skills");
window.onscroll = function () {
  let skillOffsetTop = ourSkills.offsetTop;
  let skillOuterHeight = ourSkills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillOffsetTop + skillOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".our-skills .skill .progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
///////////////////////Popup-overLay/////////////////////////
let imgs = document.querySelectorAll(".our-gallery img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    let popUpoverLay = document.createElement("div");
    let popUpbox = document.createElement("div");
    let popUPimage = document.createElement("img");
    popUpoverLay.className = "popup-overlay";
    popUpbox.className = "popup-box";

    document.body.appendChild(popUpoverLay);
    document.body.appendChild(popUpbox);
    if (img.alt != "") {
      let h3 = document.createElement("h3");
      let txt = document.createTextNode(img.alt);
      h3.appendChild(txt);
      popUpbox.appendChild(h3);
    }
    popUPimage.src = img.src;
    popUpbox.appendChild(popUPimage);
    let closeButton = document.createElement("span");
    closeButton.className = "button";
    let closeButtontxt = document.createTextNode("X");
    closeButton.appendChild(closeButtontxt);
    popUpbox.appendChild(closeButton);
  });
});
document.addEventListener("click", function (e) {
  if (e.target.className == "button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});
///////////////////////Nav Bullets & Links/////////////////////////
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
let allLinks = document.querySelectorAll(".link a");
function scrolltoSection(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrolltoSection(allBullets);
scrolltoSection(allLinks);
///////////////////////Reset Options////////////////////////////////
let reset = document.querySelector(".reset-options");
reset.onclick = () => {
  //localStorage.removeItem("color");
  localStorage.clear();
  window.location.reload();
};
///////////////////////Show&Hides MenuLinkc/////////////////////////
let toggelButton = document.querySelector(".toggle");
let menu = document.querySelector(".link");
toggelButton.onclick = function (e) {
  e.stopPropagation();
  menu.classList.toggle("open");
};
document.addEventListener("click", (e) => {
  if (e.target !== menu && e.target !== toggelButton) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  }
});
// menu.onclick = (e) => {
//     e.stopPropagation();
// }
///////////////////////Show Links bar/////////////////////////
let linkref = document.querySelectorAll(".link a");
if (localStorage.getItem("activeLink") !== null) {
  linkref.forEach((ele) => {
    ele.classList.remove("active");
  });
  document
    .querySelector(`[data-link="${localStorage.getItem("activeLink")}"]`)
    .classList.add("active");
}
linkref.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    linkref.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
    localStorage.setItem("activeLink", e.target.dataset.link);
  });
});
