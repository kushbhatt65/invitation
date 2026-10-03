/* =========================================================
   PARMAR FAMILY INVITATION — SCRIPT
   Edit the CONFIG object below to update names, times, venue,
   and contact details. See README.md for full instructions.
   ========================================================= */

const MAPS_URL = "https://maps.app.goo.gl/Fni1WMzMqJu8yJEu9";

const T = {
  en: {
    introFamily: "PARMAR FAMILY", introLine: "Invites You To Celebrate", introSub: "Come, let us celebrate together", enter: "Enter Invitation",
    navHome: "Home", navEvents: "Events", navVenue: "Venue", navContact: "Contact", music: "Music", musicPause: "Pause",
    bless: "With the blessings of Ganesh Ji<br>and the love of our family", familyName: "Parmar Family",
    welcome: "warmly invites you to join us in these joyful moments of devotion, celebration and togetherness.",
    eventsTitle: "Celebration Days",
    d1: "12 OCTOBER 2026", d1tag: "Auspicious Day",
    e1: "Griha Pravesh &amp; Puja", e1m: "Morning · 8:00 AM<br>Puja by Pandit Ji · At our home",
    e2: "Shri Satyanarayan Bhagwan Katha", e2m: "Evening · 7:30 PM<br>Gayan Katha · At our home",
    d2: "13 OCTOBER 2026", d2tag: "Special Day", d2short: "13 Oct",
    e3: "Ring Ceremony", e3m: "Khushi &amp; Abhishek <br> Morning · 11:00 AM <br> Shree Manglik Bhawan Narsinghpura, Jaora <br>", e3t: "11:00 AM",
   
    pTag: "प्रतिभोज", pTitle: "Pratibhoj", pTime: "13 October · From 12:00 pm  until your arrival",
    pWhere: "📍 Shree Manglik Bhawan, Narsinghpura, Jaora", openMaps: "Open in Google Maps",
    engEyebrow: "A Beautiful New Beginning", photoSoon: "Photo coming soon", lCouple: "Couple", lDate: "Date", lTime: "Time", lVenue: "Venue",
    couple: "Khushi Parmar &amp; Abhishek Verma", venueName: "Shree Manglik Bhawan", venueAddr: "Narsinghpura, Jaora",
    bhajanLine: "Devotion in every note,<br>family by our side",
    venueTitle: "📍 Venue", contactTitle: "Need Any Information?",
    closing: "Your presence<br>will mean<br>the world to us ❤️", sign: "With Love,<br><strong>Parmar Family</strong>",
    toggleLabel: "हिन्दी", ariaPlay: "Play background music", ariaPause: "Pause background music"
  },
  hi: {
    introFamily: "परमार परिवार", introLine: "आपको सादर आमंत्रित करता है", introSub: "आइए मिलकर खुशियाँ मनाएँ", enter: "निमंत्रण खोलें",
    navHome: "होम", navEvents: "कार्यक्रम", navVenue: "स्थान", navContact: "संपर्क", music: "संगीत", musicPause: "रोकें",
    bless: "श्री गणेश जी के आशीर्वाद<br>और परिवार के स्नेह के साथ", familyName: "परमार परिवार",
    welcome: "आपको भक्ति, उत्सव और अपनेपन के इन आनंदमय पलों में सहर्ष आमंत्रित करता है।",
    eventsTitle: "उत्सव के दिन",
    d1: "12 अक्टूबर 2026", d1tag: "शुभ दिवस",
    e1: "गृह प्रवेश एवं पूजा", e1m: "प्रातः · 8:00 बजे<br>पंडित जी द्वारा पूजन · हमारे निवास पर",
    e2: "श्री सत्यनारायण भगवान की कथा", e2m: "संध्या · 7:30 बजे<br>गायन कथा · हमारे निवास पर",
    d2: "13 अक्टूबर 2026", d2tag: "विशेष दिवस", d2short: "13 अक्टूबर",
    e3: "सगाई", e3m: "खुशी एवं अभिषेक <br>प्रातः · 11:00 बजे <br>श्री मांगलिक भवन, नरसिंहपुरा, जावरा", e3t: "प्रातः 11:00 बजे",
   
    pTag: "Pratibhoj", pTitle: "प्रतिभोज", pTime: "13 अक्टूबर · प्रातः 12:00 pm बजे से आपके आगमन तक",
    pWhere: "📍 श्री मांगलिक भवन, नरसिंहपुरा, जावरा", openMaps: "गूगल मैप्स में खोलें",
    engEyebrow: "एक सुंदर नई शुरुआत", photoSoon: "फोटो जल्द ही", lCouple: "जोड़ी", lDate: "दिनांक", lTime: "समय", lVenue: "स्थान",
    couple: "खुशी परमार एवं अभिषेक वर्मा", venueName: "श्री मांगलिक भवन", venueAddr: "नरसिंहपुरा, जावरा",
    bhajanLine: "सुरों में भक्ति,<br>संग में परिवार",
    venueTitle: "📍 स्थान", contactTitle: "कोई जानकारी चाहिए?",
    closing: "आपका आना<br>हमारे लिए<br>बहुत खास होगा ❤️", sign: "स्नेह सहित,<br><strong>परमार परिवार</strong>",
    toggleLabel: "English", ariaPlay: "संगीत चलाएँ", ariaPause: "संगीत रोकें"
  }
};

let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  const dict = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll(".map-link").forEach((a) => (a.href = MAPS_URL));
  const t = document.getElementById("langToggle");
  if (t) t.textContent = dict.toggleLabel;
  const m = document.getElementById("musicToggle");
  if (m) {
    const on = m.getAttribute("aria-pressed") === "true";
    m.querySelector(".music-label").textContent = on ? dict.musicPause : dict.music;
    m.setAttribute("aria-label", on ? dict.ariaPause : dict.ariaPlay);
  }
}

function initLangToggle() {
  const t = document.getElementById("langToggle");
  if (t) t.addEventListener("click", () => applyLanguage(currentLang === "en" ? "hi" : "en"));
}

/* ---------------------------------------------------------
   Reduced motion check
--------------------------------------------------------- */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------
   Intro golden sparkle particles (lightweight, capped count)
--------------------------------------------------------- */
function spawnIntroParticles() {
  const container = document.getElementById("introParticles");
  if (!container || prefersReducedMotion) return;
  const count = 18;
  for (let i = 0; i < count; i++) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = Math.random() * 100 + "%";
    spark.style.top = Math.random() * 100 + "%";
    container.appendChild(spark);
    if (window.gsap) {
      gsap.to(spark, {
        opacity: 0.8,
        duration: 1.2,
        delay: Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }
}

/* ---------------------------------------------------------
   Intro reveal sequence (one orchestrated moment)
--------------------------------------------------------- */
function playIntroSequence() {
  if (!window.gsap) return;

  if (prefersReducedMotion) {
    gsap.set([".ganesh-art", ".ganesh-glow", ".floral-ring .petal", ".reveal-item"], { opacity: 1, y: 0, scale: 1 });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(".ganesh-glow", { opacity: 1, duration: 1.2 }, 0.1)
    .to(".ganesh-art", { opacity: 1, scale: 1, duration: 1.1 }, 0.2)
    .to(".floral-ring .petal", { opacity: 1, duration: 0.8, stagger: 0.12 }, 0.6)
    .to(".intro-om", { opacity: 1, y: 0, duration: 0.7 }, 1.0)
    .fromTo(".intro-family", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.8 }, 1.3)
    .fromTo(".intro-line", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7 }, 1.7)
    .fromTo(".intro-hindi", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7 }, 2.0)
    .fromTo(".intro-enter", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7 }, 2.3);
}

/* ---------------------------------------------------------
   Enter invitation: transition from intro to main content
--------------------------------------------------------- */
function enterInvitation() {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  const finish = () => {
    intro.remove();
    main.hidden = false;
    document.body.style.overflow = "";
    initMainAnimations();
    main.focus?.();
  };

  if (prefersReducedMotion || !window.gsap) {
    finish();
    return;
  }

  gsap.to(intro, {
    opacity: 0,
    duration: 0.7,
    ease: "power1.inOut",
    onComplete: finish
  });
}

/* ---------------------------------------------------------
   Mandala petal generation (simple ornamental spokes)
--------------------------------------------------------- */
function buildMandalaPetals() {
  const group = document.getElementById("mandalaPetals");
  if (!group) return;
  const total = 12;
  for (let i = 0; i < total; i++) {
    const angle = (360 / total) * i;
    const petal = document.createElementNS("http://www.w3.org/2000/svg", "path");
    petal.setAttribute("d", "M100 30 Q108 45 100 60 Q92 45 100 30 Z");
    petal.setAttribute("transform", `rotate(${angle} 100 100)`);
    petal.setAttribute("fill", "rgba(184,134,11,0.12)");
    group.appendChild(petal);
  }
}

/* ---------------------------------------------------------
   Scroll-triggered reveals for main content
--------------------------------------------------------- */
function initMainAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  if (prefersReducedMotion) return;

  // Section titles: fade upward slightly
  gsap.utils.toArray(".section-title, .eyebrow-soft").forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 18 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  // Event cards: reveal from below
  gsap.utils.toArray(".date-card").forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%" }
    });
  });

  // Timeline line draw
  const timeline = document.querySelector(".timeline");
  const timelineLine = document.querySelector(".timeline-line");
  if (timeline && timelineLine) {
    gsap.to(timelineLine, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: timeline,
        start: "top 75%",
        end: "bottom 80%",
        scrub: 0.6
      }
    });
  }

  // Timeline items
  gsap.utils.toArray(".timeline-item").forEach((el) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" }
    });
  });

  // Ring draw in engagement section
  gsap.utils.toArray(".ring-draw").forEach((ring, i) => {
    gsap.to(ring, {
      strokeDashoffset: 0,
      duration: 1.1,
      delay: i * 0.2,
      ease: "power2.out",
      scrollTrigger: { trigger: ".ring-motif", start: "top 85%" }
    });
  });

  // Photos: soft scale
  gsap.utils.toArray(".photo-frame, .photo-placeholder").forEach((el) => {
    gsap.fromTo(el, { scale: 0.97, opacity: 0.6 }, {
      scale: 1, opacity: 1, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" }
    });
  });

  // Mandala gentle parallax
  const mandala = document.querySelector(".mandala-wrap");
  if (mandala) {
    gsap.fromTo(mandala, { opacity: 0, scale: 0.9 }, {
      opacity: 0.85, scale: 1, duration: 1,
      scrollTrigger: { trigger: mandala, start: "top 85%" }
    });
  }
}

/* ---------------------------------------------------------
   Gentle falling petals (capped, low-frequency, perf-safe)
--------------------------------------------------------- */
function startPetalDrift() {
  if (prefersReducedMotion || !window.gsap) return;
  const symbols = ["✿", "❀", "❁"];
  const colors = ["#E08D3C", "#6B1420", "#5C7A52"];
  let active = 0;
  const MAX_ACTIVE = 6;

  setInterval(() => {
    if (active >= MAX_ACTIVE) return;
    active++;
    const petal = document.createElement("span");
    petal.className = "falling-petal";
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = Math.random() * 100 + "%";
    petal.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(petal);

    gsap.to(petal, {
      y: window.innerHeight + 40,
      x: `+=${(Math.random() - 0.5) * 80}`,
      rotation: (Math.random() - 0.5) * 180,
      opacity: 0,
      duration: 7 + Math.random() * 3,
      ease: "sine.in",
      onComplete: () => {
        petal.remove();
        active--;
      }
    });
  }, 3500);
}

/* ---------------------------------------------------------
   Music toggle
--------------------------------------------------------- */
function initMusicToggle() {
  const btn = document.getElementById("musicToggle");
  const audio = document.getElementById("bgAudio");
  if (!btn || !audio) return;

  btn.addEventListener("click", () => {
    const isPlaying = btn.getAttribute("aria-pressed") === "true";
    if (isPlaying) {
      audio.pause();
      btn.setAttribute("aria-pressed", "false");
      btn.querySelector(".music-label").textContent = T[currentLang].music;
      btn.setAttribute("aria-label", T[currentLang].ariaPlay);
    } else {
      audio.play().catch(() => {
        /* Autoplay/file may be unavailable until a real audio file is added */
      });
      btn.setAttribute("aria-pressed", "true");
      btn.querySelector(".music-label").textContent = T[currentLang].musicPause;
      btn.setAttribute("aria-label", T[currentLang].ariaPause);
    }
  });
}

/* ---------------------------------------------------------
   Init
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("en");
  initLangToggle();
  buildMandalaPetals();
  spawnIntroParticles();
  playIntroSequence();
  initMusicToggle();
  startPetalDrift();

  const enterBtn = document.getElementById("enterBtn");
  if (enterBtn) {
    enterBtn.addEventListener("click", enterInvitation);
  }
});
