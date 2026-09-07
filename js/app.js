(function () {
  const YEAR0 = 30;
  const YEAR1 = 325;
  const PAD = 140;
  const PX_MIN = 8;
  const PX_MAX = 48;
  const PX_DEFAULT = 18;

  const eventsEl = document.getElementById("events");
  const track = document.getElementById("track");
  const svg = document.getElementById("links");
  const scroller = document.getElementById("scroller");
  const sheet = document.getElementById("sheet");
  const sheetContent = document.getElementById("sheet-content");

  let pxPerYear = PX_DEFAULT;
  let items = [];
  let layoutRaf = 0;

  function isCompact() {
    return window.matchMedia("(max-width: 720px)").matches;
  }

  function xOf(year) {
    return PAD + (year - YEAR0) * pxPerYear;
  }

  function sizeSvg() {
    const w = track.offsetWidth;
    const h = track.offsetHeight;
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  }

  function drawLine(x1, y1, x2, y2) {
    const ns = "http://www.w3.org/2000/svg";
    const back = document.createElementNS(ns, "line");
    const front = document.createElementNS(ns, "line");
    back.setAttribute("stroke", "#1a1008");
    back.setAttribute("stroke-width", "5");
    front.setAttribute("stroke", "#f3dd8a");
    front.setAttribute("stroke-width", "2.2");
    [back, front].forEach((ln) => {
      ln.setAttribute("stroke-linecap", "round");
      ln.setAttribute("x1", x1);
      ln.setAttribute("y1", y1);
      ln.setAttribute("x2", x2);
      ln.setAttribute("y2", y2);
      svg.appendChild(ln);
    });
  }

  function assignLevels(minGap, maxLevel) {
    const placed = [];
    items
      .slice()
      .sort((a, b) => a.ev.year - b.ev.year)
      .forEach((item) => {
        const x = xOf(item.ev.year);
        let level = 0;
        let bump = true;
        while (bump) {
          bump = false;
          for (let p = 0; p < placed.length; p++) {
            const other = placed[p];
            if (other.side !== item.side || other.level !== level) continue;
            if (Math.abs(other.x - x) < minGap) {
              level += 1;
              bump = true;
              break;
            }
          }
        }
        if (level > maxLevel) level = maxLevel;
        item.x = x;
        item.level = level;
        placed.push(item);
      });
  }

  function openSheet(ev) {
    if (!ev || !sheet) return;
    sheetContent.innerHTML = `
      <div class="sheet-source">
        <div class="sheet-head">
          <div class="disk"><img src="${ev.image}" alt=""></div>
          <div>
            <div class="sheet-kicker">On the line</div>
            <h3 id="sheet-title">${ev.title}</h3>
            <div class="dates">${ev.label}</div>
          </div>
        </div>
        <p>${ev.summary || ""}</p>
      </div>`;
    sheet.classList.add("is-open");
    sheet.setAttribute("aria-hidden", "false");
  }

  function closeSheet() {
    if (!sheet || !sheet.classList.contains("is-open")) return;
    sheet.classList.remove("is-open");
    sheet.setAttribute("aria-hidden", "true");
  }

  function bindTap(node, ev) {
    const open = (e) => {
      e.preventDefault();
      e.stopPropagation();
      openSheet(ev);
    };
    node.addEventListener("click", open);
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") open(e);
    });
  }

  function build() {
    eventsEl.innerHTML = "";
    items = [];
    EVENTS.forEach((ev, i) => {
      const side = i % 2 === 0 ? "up" : "down";
      const node = document.createElement("div");
      node.className = "event " + side;
      node.tabIndex = 0;
      node.setAttribute("role", "button");
      node.setAttribute("aria-label", ev.title);
      node.innerHTML = `
        <div class="caption">${ev.short || ev.title}</div>
        <div class="disk"><img src="${ev.image}" alt=""></div>`;
      eventsEl.appendChild(node);
      bindTap(node, ev);
      items.push({ ev, i, side, node, disk: node.querySelector(".disk") });
    });
  }

  function yearMarks() {
    if (pxPerYear < 11) return [50, 100, 200, 325];
    if (pxPerYear < 22) return [33, 50, 70, 100, 150, 200, 250, 300, 325];
    return [33, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325];
  }

  function layout() {
    const compact = isCompact();
    const h = scroller.clientHeight;
    const mid = h * 0.5;
    const minGap = compact ? 56 : 100;
    const stem0 = compact ? 14 : 16;
    const stemStep = compact ? 58 : 100;
    assignLevels(minGap, compact ? 3 : 2);

    const width = PAD * 2 + (YEAR1 - YEAR0) * pxPerYear;
    track.style.width = width + "px";
    svg.innerHTML = "";
    track.querySelectorAll(".year-mark, .tick-spine").forEach((el) => el.remove());
    sizeSvg();

    yearMarks().forEach((y) => {
      const el = document.createElement("div");
      el.className = "year-mark";
      el.style.left = xOf(y) + "px";
      el.textContent = String(y);
      track.appendChild(el);
    });

    items.forEach((item) => {
      const tick = document.createElement("div");
      tick.className = "tick-spine";
      tick.style.left = item.x + "px";
      track.appendChild(tick);

      item.node.style.left = item.x + "px";
      item.node.style.top = mid + "px";
      const pad = stem0 + item.level * stemStep;
      if (item.side === "up") {
        item.node.style.paddingBottom = pad + "px";
        item.node.style.paddingTop = "";
      } else {
        item.node.style.paddingTop = pad + "px";
        item.node.style.paddingBottom = "";
      }
    });

    void track.offsetHeight;
    const tr = track.getBoundingClientRect();
    items.forEach((item) => {
      const dr = item.disk.getBoundingClientRect();
      const dx = dr.left + dr.width / 2 - tr.left;
      const dy = dr.top + dr.height / 2 - tr.top;
      const r = dr.width / 2;
      const ang = Math.atan2(mid - dy, item.x - dx);
      drawLine(item.x, mid, dx + Math.cos(ang) * r, dy + Math.sin(ang) * r);
    });
  }

  function zoomAt(clientX, nextPx) {
    const clamped = Math.min(PX_MAX, Math.max(PX_MIN, nextPx));
    if (Math.abs(clamped - pxPerYear) < 0.04) return;
    const rect = scroller.getBoundingClientRect();
    const xInView = clientX - rect.left;
    const yearAt = YEAR0 + (scroller.scrollLeft + xInView - PAD) / pxPerYear;
    pxPerYear = clamped;
    layout();
    scroller.scrollLeft = PAD + (yearAt - YEAR0) * pxPerYear - xInView;
  }

  function scheduleLayout() {
    if (layoutRaf) return;
    layoutRaf = requestAnimationFrame(() => {
      layoutRaf = 0;
      layout();
    });
  }

  if (sheet) {
    sheet.querySelector(".sheet-backdrop").addEventListener("click", closeSheet);
    sheet.querySelector(".sheet-close").addEventListener("click", closeSheet);
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSheet();
  });
  window.addEventListener("resize", scheduleLayout);

  scroller.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && !e.ctrlKey) return;
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      zoomAt(e.clientX, pxPerYear * factor);
    },
    { passive: false }
  );

  let pinch = null;
  function touchDist(a, b) {
    const dx = a.clientX - b.clientX;
    const dy = a.clientY - b.clientY;
    return Math.hypot(dx, dy);
  }
  scroller.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 2) {
        pinch = {
          dist: touchDist(e.touches[0], e.touches[1]),
          midX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          px: pxPerYear
        };
      }
    },
    { passive: true }
  );
  scroller.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length === 2 && pinch) {
        e.preventDefault();
        const d = touchDist(e.touches[0], e.touches[1]);
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        zoomAt(midX, pinch.px * (d / pinch.dist));
      }
    },
    { passive: false }
  );
  scroller.addEventListener("touchend", (e) => {
    if (e.touches.length < 2) pinch = null;
  });

  build();
  layout();

  const params = new URLSearchParams(location.search);
  const yearShot = Number(params.get("year"));
  if (yearShot) {
    scroller.scrollLeft = Math.max(0, xOf(yearShot) - window.innerWidth * 0.4);
  }
  const openShot = params.get("open");
  if (openShot != null && openShot !== "") {
    const idx = Number(openShot);
    if (EVENTS[idx]) openSheet(EVENTS[idx]);
  }
})();
