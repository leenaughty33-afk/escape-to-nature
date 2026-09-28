/* ==============================================================
   Escape to Nature Resort — site behaviour.
   Language switching, mobile menu, scroll effects.
   All copy lives in translations.js (STRINGS) — this file only
   renders it and wires up interaction.
   ============================================================== */
(function(){
  "use strict";

  const BOOKING_URL = "https://www.booking.com/hotel/om/escape-to-nature-resort.html?aid=356980";

  const LANGS = [
    { code:"ar", native:"العربية" },
    { code:"zh", native:"中文" },
    { code:"nl", native:"Nederlands" },
    { code:"en", native:"English" },
    { code:"fr", native:"Français" },
    { code:"de", native:"Deutsch" },
    { code:"it", native:"Italiano" },
    { code:"pt", native:"Português" },
    { code:"ru", native:"Русский" },
    { code:"es", native:"Español" }
  ];

  let current = "en";

  function t(path){
    const parts = path.split(".");
    let node = STRINGS[current];
    for(const p of parts){ node = node && node[p]; }
    if(node === undefined){
      node = STRINGS.en;
      for(const p of parts){ node = node && node[p]; }
    }
    return node;
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function renderDropcap(el, data){
    if(!el || !data) return;
    if(data.script && data.rest){
      el.innerHTML = `<span class="script">${escapeHtml(data.script)}</span>${escapeHtml(data.rest)}`;
    } else {
      el.textContent = data.full || "";
    }
  }

  function setBookingLinks(){
    document.querySelectorAll("[data-booking-link]").forEach(a => { a.href = BOOKING_URL; });
  }

  function renderStatic(){
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const val = t(el.getAttribute("data-i18n"));
      if(typeof val === "string") el.textContent = val;
    });
  }

  function renderDropcaps(){
    document.querySelectorAll("[data-dropcap]").forEach(el => {
      renderDropcap(el, t(el.getAttribute("data-dropcap")));
    });
  }

  function renderTags(){
    const row = document.getElementById("tagRow");
    if(!row) return;
    row.innerHTML = "";
    t("rooms.tags").forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag-pill";
      span.textContent = tag;
      row.appendChild(span);
    });
  }

  function renderRoomCards(){
    const wrap = document.getElementById("roomCards");
    if(!wrap) return;
    wrap.innerHTML = "";
    t("rooms.items").forEach(item => {
      const card = document.createElement("div");
      card.className = "room-card reveal";
      card.innerHTML = `
        <div class="rc-name serif">${escapeHtml(item.name)}</div>
        <div class="rc-meta">${escapeHtml(item.meta)}</div>
        <p>${escapeHtml(item.desc)}</p>`;
      wrap.appendChild(card);
    });
    observeReveals();
  }

  function renderExperience(){
    const wrap = document.getElementById("expGrid");
    if(!wrap) return;
    wrap.innerHTML = "";
    t("experience.items").forEach(item => {
      const card = document.createElement("div");
      card.className = "exp-card reveal";
      card.innerHTML = `
        <div class="exp-num">${escapeHtml(item.n)}</div>
        <h3 class="serif">${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>`;
      wrap.appendChild(card);
    });
    observeReveals();
  }

  function renderInfoStrip(){
    const wrap = document.getElementById("infoGrid");
    if(!wrap) return;
    const info = t("info");
    wrap.innerHTML = "";
    ["checkin","checkout","parking","airport"].forEach(key => {
      const item = info[key];
      const div = document.createElement("div");
      div.className = "info-item";
      div.innerHTML = `<div class="info-label">${escapeHtml(item.label)}</div><div class="info-value serif">${escapeHtml(item.value)}</div>`;
      wrap.appendChild(div);
    });
  }

  function renderFooterLinks(){
    const wrap = document.getElementById("footerLinks");
    if(!wrap) return;
    wrap.innerHTML = "";
    t("footer.links").forEach(label => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = label;
      a.addEventListener("click", e => e.preventDefault());
      wrap.appendChild(a);
    });
  }

  function renderAlts(){
    const alts = t("alts");
    document.querySelectorAll("[data-alt]").forEach(img => {
      const key = img.getAttribute("data-alt");
      if(alts[key]) img.alt = alts[key];
    });
  }

  function renderBadge(){
    const titleEl = document.getElementById("badgeTitle");
    const metaEl = document.getElementById("badgeMeta");
    const ctaEl = document.getElementById("badgeCta");
    if(titleEl) titleEl.textContent = t("rooms.badge_title");
    if(metaEl) metaEl.textContent = t("rooms.badge_meta");
    if(ctaEl) ctaEl.textContent = t("rooms.badge_cta");
  }

  function updateLangUI(){
    document.querySelectorAll(".lang-current").forEach(el => {
      el.textContent = LANGS.find(l => l.code === current).native;
    });
    document.querySelectorAll(".lang-menu button").forEach(btn => {
      btn.setAttribute("aria-current", btn.dataset.lang === current ? "true" : "false");
    });
  }

  function setLang(code){
    if(!STRINGS[code]) return;
    current = code;
    const html = document.documentElement;
    html.setAttribute("lang", code);
    html.setAttribute("dir", t("dir"));
    document.title = t("meta_title");
    renderStatic();
    renderDropcaps();
    renderTags();
    renderRoomCards();
    renderExperience();
    renderInfoStrip();
    renderFooterLinks();
    renderAlts();
    renderBadge();
    updateLangUI();
    document.querySelectorAll(".lang-menu").forEach(m => m.classList.remove("open"));
  }

  function buildLangMenus(){
    document.querySelectorAll(".lang-menu").forEach(menu => {
      menu.innerHTML = "";
      LANGS.forEach(l => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.dataset.lang = l.code;
        btn.innerHTML = `<span>${l.native}</span>`;
        btn.addEventListener("click", () => setLang(l.code));
        menu.appendChild(btn);
      });
    });
  }

  function wireLangToggles(){
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const menu = btn.parentElement.querySelector(".lang-menu");
        document.querySelectorAll(".lang-menu").forEach(m => { if(m !== menu) m.classList.remove("open"); });
        menu.classList.toggle("open");
      });
    });
    document.addEventListener("click", () => {
      document.querySelectorAll(".lang-menu").forEach(m => m.classList.remove("open"));
    });
  }

  function wireMobileNav(){
    const burger = document.getElementById("burger");
    const panel = document.getElementById("mobileNav");
    const close = document.getElementById("mobileNavClose");
    if(!burger || !panel) return;
    burger.addEventListener("click", () => panel.classList.add("open"));
    if(close) close.addEventListener("click", () => panel.classList.remove("open"));
    panel.querySelectorAll("a").forEach(a => a.addEventListener("click", () => panel.classList.remove("open")));
  }

  function wireHeaderScroll(){
    const header = document.getElementById("siteHeader");
    if(!header) return;
    const onScroll = () => {
      if(window.scrollY > 60) header.classList.add("is-solid");
      else header.classList.remove("is-solid");
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    onScroll();
  }

  let revealObserver;
  function observeReveals(){
    if(!revealObserver){
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
      }, { threshold:0.12 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    setBookingLinks();
    buildLangMenus();
    wireLangToggles();
    wireMobileNav();
    wireHeaderScroll();
    setLang("en");
    observeReveals();
  });
})();
