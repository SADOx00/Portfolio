// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".heading-sec__main");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(heading);
});

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skills__skill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  skills.forEach((skill) => {
    observer.observe(skill);
  });
});

const textElement = document.getElementById("text");
const text = "Merhaba, portfolyoma hoşgeldiniz.";
let index = 0;
let speed = 200; // Harflerin yazılma hızı

function type() {
  if (index < text.length) {
    const span = document.createElement("span");

    // Boşluk karakteri için görünmez bir boşluk oluştur
    if (text[index] === " ") {
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = text[index];
    }

    textElement.appendChild(span);

    // Harfi görünür yap
    setTimeout(() => {
      span.style.opacity = 1;
    }, speed);

    index++;
    setTimeout(type, speed);
    speed = Math.max(50, speed - 10); // Hızı artır
  } else {
    // Yazı tamamlandıktan sonra harfleri "disappear" animasyonuna geçir
    setTimeout(() => {
      const spans = textElement.querySelectorAll("span");
      spans.forEach((span, i) => {
        setTimeout(() => {
          span.classList.add("disappear");
        }, i * 100); // Her harf için gecikme ekle
      });

      // Tekrar yazma işlemini başlat
      setTimeout(() => {
        textElement.innerHTML = ""; // Mevcut yazıyı temizle
        index = 0;
        speed = 200;
        type(); // Tekrar yazı yazmaya başla
      }, 5000); // Disappear animasyonundan sonra 2 saniye bekle
    }, 1000); // Yazı tamamlandıktan 1 saniye sonra başlat
  }
}

type();
