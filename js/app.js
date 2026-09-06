(function () {
  const YEAR0 = 30;
  const YEAR1 = 325;
  const PX = 18;
  const PAD = 140;
  const eventsEl = document.getElementById("events");
  const track = document.getElementById("track");
  const svg = document.getElementById("links");
  const scroller = document.getElementById("scroller");

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

  function layout() {
    const h = scroller.clientHeight;
    const mid = h * 0.5;
    const width = PAD * 2 + (YEAR1 - YEAR0) * PX;
    track.style.width = width + "px";
    eventsEl.innerHTML = "";
    svg.innerHTML = "";
    track.querySelectorAll(".year-mark").forEach((el) => el.remove());
    sizeSvg();

    const marks = [33, 50, 70, 100, 150, 200, 250, 300, 325];
    marks.forEach((y) => {
      const el = document.createElement("div");
      el.className = "year-mark";
      el.style.left = xOf(y) + "px";
      el.textContent = String(y);
      track.appendChild(el);
    });

    EVENTS.forEach((ev, i) => {
      const side = i % 2 === 0 ? "up" : "down";
      const x = xOf(ev.year);
      const node = document.createElement("div");
      node.className = "event " + side;
      node.style.left = x + "px";
      node.style.top = mid + "px";
      node.innerHTML = `
        <div class="card">
          <h3>${ev.title}</h3>
          <div class="dates">${ev.label}</div>
          <div class="summary">${ev.summary}</div>
        </div>
        <div class="disk"><img src="${ev.image}" alt=""></div>
        <div class="tick"></div>`;
      eventsEl.appendChild(node);

      requestAnimationFrame(() => {
        const disk = node.querySelector(".disk");
        const dr = disk.getBoundingClientRect();
        const tr = track.getBoundingClientRect();
        const dx = dr.left + dr.width / 2 - tr.left;
        const dy = dr.top + dr.height / 2 - tr.top;
        const r = dr.width / 2;
        const ang = Math.atan2(mid - dy, x - dx);
        drawLine(x, mid, dx + Math.cos(ang) * r, dy + Math.sin(ang) * r);
      });
    });
  }

  window.addEventListener("resize", layout);
  layout();
})();
