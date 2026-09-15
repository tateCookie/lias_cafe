(function () {
  "use strict";

  var translations = {
    en: {
      skip: "Skip to content",
      nav_story: "Our Story",
      nav_menu: "Menu",
      nav_visit: "Visit",
      nav_order: "Order",

      hero_mark: "Lía Cafe · Muaither, Doha",
      hero_h1: "A quiet corner of Doha, poured into every cup.",
      hero_p: "A neighborhood coffeehouse serving specialty coffee, fresh toasts and cold drinks made to order — in the café, or wherever you are.",
      hero_cta_primary: "Order for Delivery",
      hero_cta_secondary: "Our Story",

      delivery_h2: "Wherever You Are",
      delivery_p: "Order Lía straight to your door through your favorite delivery app.",
      delivery_snoonu_h3: "Order on Snoonu",
      delivery_snoonu_p: "Browse the full Lía menu and get it delivered through Snoonu.",
      delivery_snoonu_cta: "Order on Snoonu",
      delivery_talabat_h3: "Order on Talabat",
      delivery_talabat_p: "Browse the full Lía menu and get it delivered through Talabat.",
      delivery_talabat_cta: "Order on Talabat",

      about_h2: "Our Story",
      about_p1: "Lía Cafe began with a simple idea: coffee should feel personal. Every cup is pulled to order, every toast is built fresh, and every visit is treated like the first.",
      about_quote: "\u201CA small daily ritual, done properly.\u201D",
      about_p2: "Tucked into Muaither, Lía has become a quiet fixture of the neighborhood — a place to slow down, catch up, and taste something made with care, one cup at a time.",

      gallery_h2: "Something for Every Mood",
      gallery_p: "A glimpse of what's on the counter — hot, cold, sweet, and fresh.",

      visit_h2: "See You Soon",
      visit_p: "Drop by in person, or find us on the map below.",
      visit_hours_label: "Opening Hours",
      visit_hours_value: "Open every day",
      visit_hours_time: "5:00 AM – 11:00 PM",
      visit_location_label: "Location",
      visit_location_value: "Muaither, Doha, Qatar",
      visit_directions_cta: "Get Directions",

      loop_h2: "Stay in the Loop",
      loop_p: "Follow @lia.cafe.doha for new drinks, daily specials, and behind-the-counter moments.",
      loop_cta: "Follow on Instagram",

      footer_tagline: "A neighborhood coffeehouse in Muaither, Doha.",
      footer_explore: "Explore",
      footer_order: "Order",
      footer_visit: "Visit",
      footer_copy: "© 2026 Lía Cafe. All rights reserved."
    },
    ar: {
      skip: "تخطَّ إلى المحتوى",
      nav_story: "قصتنا",
      nav_menu: "القائمة",
      nav_visit: "زورونا",
      nav_order: "اطلب",

      hero_mark: "ليا كافيه · مؤيثر، الدوحة",
      hero_h1: "زاوية هادئة في الدوحة، في كل كوب.",
      hero_p: "مقهى محلي يقدّم قهوة مختصة وتوست طازج ومشروبات بارِدة تُحضّر عند الطلب — في المقهى، أو أينما كنت.",
      hero_cta_primary: "اطلب التوصيل",
      hero_cta_secondary: "قصتنا",

      delivery_h2: "أينما كنت",
      delivery_p: "اطلب ليا حتى باب منزلك عبر تطبيق التوصيل المفضل لديك.",
      delivery_snoonu_h3: "اطلب عبر سنونو",
      delivery_snoonu_p: "تصفّح قائمة ليا كاملة واطلبها عبر سنونو.",
      delivery_snoonu_cta: "اطلب عبر سنونو",
      delivery_talabat_h3: "اطلب عبر طلبات",
      delivery_talabat_p: "تصفّح قائمة ليا كاملة واطلبها عبر طلبات.",
      delivery_talabat_cta: "اطلب عبر طلبات",

      about_h2: "قصتنا",
      about_p1: "بدأت ليا كافيه بفكرة بسيطة: يجب أن يكون للقهوة طابع شخصي. كل كوب يُحضّر عند الطلب، وكل توست يُجهّز طازجًا، وكل زيارة تُعامَل كأنها الأولى.",
      about_quote: "«طقس يومي صغير، يُنجَز بعناية.»",
      about_p2: "في قلب مؤيثر، أصبحت ليا معلمًا هادئًا لأهل الحي — مكانًا للتمهّل واللقاء وتذوّق شيء أُعدّ بعناية، كوبًا بعد كوب.",

      gallery_h2: "شيء يناسب كل مزاج",
      gallery_p: "لمحة عمّا يُقدَّم على المنضدة — ساخن، بارد، حلو، وطازج.",

      visit_h2: "نراكم قريبًا",
      visit_p: "تفضّلوا بزيارتنا شخصيًا، أو تعرّفوا على موقعنا من الخريطة أدناه.",
      visit_hours_label: "ساعات العمل",
      visit_hours_value: "مفتوح كل يوم",
      visit_hours_time: "٥:٠٠ صباحًا – ١١:٠٠ مساءً",
      visit_location_label: "الموقع",
      visit_location_value: "مؤيثر، الدوحة، قطر",
      visit_directions_cta: "الحصول على الاتجاهات",

      loop_h2: "تابعونا",
      loop_p: "تابعوا @lia.cafe.doha لمعرفة المشروبات الجديدة والعروض اليومية ولقطات من خلف المنضدة.",
      loop_cta: "تابعونا على إنستغرام",

      footer_tagline: "مقهى محلي في مؤيثر، الدوحة.",
      footer_explore: "استكشف",
      footer_order: "اطلب",
      footer_visit: "زورونا",
      footer_copy: "© 2026 ليا كافيه. جميع الحقوق محفوظة."
    }
  };

  var STORAGE_KEY = "lia-cafe-lang";
  var nodes = document.querySelectorAll("[data-i18n]");
  var mapTitles = {
    en: "Map showing Lía Cafe location in Muaither, Doha",
    ar: "خريطة توضح موقع ليا كافيه في مؤيثر، الدوحة"
  };
  var uiLabels = {
    en: {
      openMenu: "Open menu",
      galleryOpen: "Open larger image {n} of {total}",
      lightboxClose: "Close",
      lightboxPrev: "Previous image",
      lightboxNext: "Next image",
      lightboxViewer: "Image viewer"
    },
    ar: {
      openMenu: "افتح القائمة",
      galleryOpen: "فتح صورة أكبر {n} من {total}",
      lightboxClose: "إغلاق",
      lightboxPrev: "الصورة السابقة",
      lightboxNext: "الصورة التالية",
      lightboxViewer: "عارض الصور"
    }
  };

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.en;

    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        node.textContent = dict[key];
      }
    });

    var mapFrame = document.getElementById("visit-map-frame");
    if (mapFrame) {
      mapFrame.setAttribute("title", mapTitles[lang] || mapTitles.en);
    }

    var labels = uiLabels[lang] || uiLabels.en;

    var toggleBtn = document.getElementById("nav-toggle");
    if (toggleBtn) toggleBtn.setAttribute("aria-label", labels.openMenu);

    var galleryButtons = document.querySelectorAll(".gallery-item");
    galleryButtons.forEach(function (btn, i) {
      var text = labels.galleryOpen
        .replace("{n}", String(i + 1))
        .replace("{total}", String(galleryButtons.length));
      btn.setAttribute("aria-label", text);
    });

    var lb = document.getElementById("lightbox");
    if (lb) lb.setAttribute("aria-label", labels.lightboxViewer);
    var lbClose = document.getElementById("lightbox-close");
    if (lbClose) lbClose.setAttribute("aria-label", labels.lightboxClose);
    var lbPrev = document.getElementById("lightbox-prev");
    if (lbPrev) lbPrev.setAttribute("aria-label", labels.lightboxPrev);
    var lbNext = document.getElementById("lightbox-next");
    if (lbNext) lbNext.setAttribute("aria-label", labels.lightboxNext);

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    [["lang-en", "lang-ar"], ["lang-en-m", "lang-ar-m"]].forEach(function (pair) {
      var enBtn = document.getElementById(pair[0]);
      var arBtn = document.getElementById(pair[1]);
      if (enBtn && arBtn) {
        enBtn.setAttribute("aria-pressed", String(lang === "en"));
        arBtn.setAttribute("aria-pressed", String(lang === "ar"));
      }
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }

  function initLanguage() {
    var saved = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      saved = null;
    }
    applyLanguage(saved === "ar" ? "ar" : "en");
  }

  ["lang-en", "lang-en-m"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", function () { applyLanguage("en"); });
  });
  ["lang-ar", "lang-ar-m"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", function () { applyLanguage("ar"); });
  });

  initLanguage();

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById("nav-toggle");
  var panel = document.getElementById("mobile-panel");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Gallery lightbox ---------- */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var lightboxClose = document.getElementById("lightbox-close");
  var lightboxPrev = document.getElementById("lightbox-prev");
  var lightboxNext = document.getElementById("lightbox-next");

  var slides = galleryItems.map(function (btn) {
    var img = btn.querySelector("img");
    return { src: img.getAttribute("src"), alt: img.getAttribute("alt") };
  });

  var activeIndex = 0;
  var lastFocused = null;

  function showSlide(index) {
    activeIndex = (index + slides.length) % slides.length;
    var slide = slides[activeIndex];
    lightboxImg.setAttribute("src", slide.src);
    lightboxImg.setAttribute("alt", slide.alt);
    lightboxCaption.textContent = slide.alt;
  }

  function openLightbox(index, triggerEl) {
    lastFocused = triggerEl || document.activeElement;
    showSlide(index);
    lightbox.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
    document.addEventListener("keydown", onLightboxKeydown);
  }

  function closeLightbox() {
    lightbox.setAttribute("hidden", "");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onLightboxKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onLightboxKeydown(e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showSlide(activeIndex + 1);
    if (e.key === "ArrowLeft") showSlide(activeIndex - 1);
  }

  galleryItems.forEach(function (btn, i) {
    btn.addEventListener("click", function () { openLightbox(i, btn); });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", function () { showSlide(activeIndex - 1); });
  if (lightboxNext) lightboxNext.addEventListener("click", function () { showSlide(activeIndex + 1); });

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
})();
