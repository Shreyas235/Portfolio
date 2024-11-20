let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-150px";
}

/* --------------------------------------------------------Change-theme----------------------------------------------------------  */

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enabledarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disabledarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enabledarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enabledarkmode() : disabledarkmode();
});

/* --------------------------------------------------------Scroll to top----------------------------------------------------------  */

const scrollTop = document.getElementById("scroll-top");
scrollTop.addEventListener("click", function () {
  window.scrollTo(0, 0);

  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: "smooth"
  // })
});

/* --------------------------------------------------------Change-text----------------------------------------------------------  */

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

/* --------------------------------------------------------For Google Sheets----------------------------------------------------------  */

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyWiuIXlbwVL5JjztvU3dv8Q8QBrnY7JwVTXXuJrrW083JCsuggxkECxRrDvCxOZAH3ZA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

/* --------------------------------------------------------For toast Notification----------------------------------------------------------  */

// let toastBox = document.getElementById("toastBox");

// function showToast() {
//   let toast = document.createElement("div");
//   toast.classList.add("toast");
//   toast.innerHTML =
//     '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
//   toastBox.appendChild(toast);

//   setTimeout(() => {
//     toast.remove();
//   }, 5000);
// }
