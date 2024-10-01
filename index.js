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



document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("saded");
  const text = `Bu uygulama hem site üzerinden hemde API olarak çalışabilmektedir.
genel olarak bir tür Email Gönderme botu yerine kulanılabir.`;

  let index = 0;
  let delay = 150; // Başlangıç gecikmesi (ms)

  function typeWriter() {
    if (index < text.length) {
      const charSpan = document.createElement("span");
      charSpan.textContent = text.charAt(index);
      charSpan.classList.add("fade-in");
      textContainer.appendChild(charSpan);

      setTimeout(() => {
        charSpan.classList.add("visible");
      }, 50); // Karakterin görünür hale gelmesi için küçük bir gecikme

      index++;
      delay = Math.max(20, delay - 5); // Gecikmeyi azalt (en az 20 ms)
      setTimeout(typeWriter, delay);
    }
  }

  // IntersectionObserver ile görünürlük kontrolü
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Eğer element görünüyorsa yazıyı göster
          textContainer.style.visibility = "visible";
          typeWriter();
          // Observer'ı kaldır
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  ); // Elementin %10'u görünürse

  observer.observe(textContainer);
});

const imgContainer = document.querySelector(".projects__row-img-cont");
const blurDot = document.querySelector(".blur-dot");

imgContainer.addEventListener("mousemove", (e) => {
  const rect = imgContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  blurDot.style.display = "block"; // Blur dotu görünür yap
  blurDot.style.left = `${x}px`; // X koordinatına yerleştir
  blurDot.style.top = `${y}px`; // Y koordinatına yerleştir
});

imgContainer.addEventListener("mouseleave", () => {
  blurDot.style.display = "none"; // Fare çıkınca blur dotu gizle
});
