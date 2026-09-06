(function () {
  const YEAR0 = 30;
  const YEAR1 = 325;
  const PX = 18;
  const PAD = 140;
  const eventsEl = document.getElementById("events");
  const track = document.getElementById("track");
  const svg = document.getElementById("links");
  const scroller = document.getElementById("scroller");
  const sheet = document.getElementById("sheet");
  const sheetContent = document.getElementById("sheet-content");

  function isCompact() {
    return window.matchMedia("(max-width: 720px)").matches;
  }

  function xOf(year) {
    return PAD + (year - YEAR0) * PX;
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

  function placeEvents(compact) {
    const minGap = compact ? 56 : 200;
    const placed = [];
    return EVENTS.map((ev, i) => {
      const side = i % 2 === 0 ? "up" : "down";
      const trueX = xOf(ev.year);
      let x = trueX;
      let level = 0;
      if (compact) {
        let bump = true;
        while (bump) {
          bump = false;
          for (let p = 0; p < placed.length; p++) {
            const other = placed[p];
            if (other.side !== side || other.level !== level) continue;
            if (Math.abs(other.x - x) < minGap) {
              level += 1;
              bump = true;
              break;
            }
          }
        }
      } else {
        for (let p = 0; p < placed.length; p++) {
          const other = placed[p];
          if (other.side !== side) continue;
          if (x - other.x < minGap) x = other.x + minGap;
        }
      }
      const entry = { ev, i, side, x, trueX, level };
      placed.push(entry);
      return entry;
    });
  }

  function openSheet(ev) {
    if (!ev || !sheet || !isCompact()) return;
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
      if (!isCompact()) return;
      e.preventDefault();
      e.stopPropagation();
      openSheet(ev);
    };
    node.addEventListener("click", open);
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") open(e);
    });
  }

  function layout() {
    const compact = isCompact();
    const h = scroller.clientHeight;
    const mid = h * 0.5;
    eventsEl.innerHTML = "";
    svg.innerHTML = "";
    track.querySelectorAll(".year-mark, .tick-spine").forEach((el) => el.remove());

    const stem0 = compact ? 14 : 18;
    const stemStep = compact ? 58 : 0;
    const placed = placeEvents(compact);
    const lastX = placed.reduce((m, p) => Math.max(m, p.x, p.trueX), 0);
    const width = Math.max(PAD * 2 + (YEAR1 - YEAR0) * PX, lastX + PAD);
    track.style.width = width + "px";
    sizeSvg();

    const marks = [33, 50, 70, 100, 150, 200, 250, 300, 325];
    marks.forEach((y) => {
      const el = document.createElement("div");
      el.className = "year-mark";
      el.style.left = xOf(y) + "px";
      el.textContent = String(y);
      track.appendChild(el);
    });

    placed.forEach((item) => {
      const tick = document.createElement("div");
      tick.className = "tick-spine";
      tick.style.left = item.trueX + "px";
      track.appendChild(tick);

      const node = document.createElement("div");
      node.className = "event " + item.side;
      node.style.left = item.x + "px";
      node.style.top = mid + "px";
      const pad = stem0 + item.level * stemStep;
      if (item.side === "up") node.style.paddingBottom = pad + "px";
      else node.style.paddingTop = pad + "px";
      node.innerHTML = `
        <div class="card">
          <h3>${item.ev.title}</h3>
          <div class="dates">${item.ev.label}</div>
          <div class="summary">${item.ev.summary}</div>
        </div>
        <div class="disk" ${compact ? 'tabindex="0" role="button"' : ""} aria-label="${item.ev.title}">
          <img src="${item.ev.image}" alt="">
        </div>`;
      eventsEl.appendChild(node);
      if (compact) bindTap(node, item.ev);

      requestAnimationFrame(() => {
        const disk = node.querySelector(".disk");
        const dr = disk.getBoundingClientRect();
        const tr = track.getBoundingClientRect();
        const dx = dr.left + dr.width / 2 - tr.left;
        const dy = dr.top + dr.height / 2 - tr.top;
        const r = dr.width / 2;
        const ang = Math.atan2(mid - dy, item.trueX - dx);
        drawLine(item.trueX, mid, dx + Math.cos(ang) * r, dy + Math.sin(ang) * r);
      });
    });
  }

  if (sheet) {
    sheet.querySelector(".sheet-backdrop").addEventListener("click", closeSheet);
    sheet.querySelector(".sheet-close").addEventListener("click", closeSheet);
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSheet();
  });
  window.addEventListener("resize", () => {
    if (!isCompact()) closeSheet();
    layout();
  });
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
