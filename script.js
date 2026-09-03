/*
 * TREDT UNION ARCHIVE V1.02(R) - DYNAMIC GITHUB API ENABLED
 * Complete archive-terminal script generated from:
 * "TREDT Union PDF Archive Classification"
 *
 * Usage:
 *   1. Load this script after your page/container exists, OR include it
 *      normally in a page and let it build the terminal automatically.
 *   2. Optional: set window.TREDT_ARCHIVE_VIDEO_URL before loading this file.
 *   3. Optional: provide an element with id="tredt-terminal"; otherwise one
 *      is created automatically.
 */

(() => {
  "use strict";

  const ARCHIVE_NAME = "TREDT UNION ARCHIVE V1.02(R)";
  const VERSION = "V1.02(R)";
  const VIDEO_URL = window.TREDT_ARCHIVE_VIDEO_URL || "";

  // GitHub Repository details for dynamic fetching
  const REPO_OWNER = "TREDTCODER";
  const REPO_NAME = "tredtunionarchive";
  const BRANCH = "main"; // Change to 'master' if your main branch is master

  const COPYRIGHT_TEXT = [
    "ALL MATERIALS ARCHIVED IN THIS TERMINAL IS COPYRIGHTED UNDER",
    "SECTION 57 COPYRIGHT ACT 1957 PASSED BY THE PARLIAMENT OF INDIA",
    "AND ARE UNDER THE COPYRIGHT HOLDINGS OF THE TREDT PUBLICATIONS",
    "SOCIETY(REGD.).",
    "",
    "©TREDT PUBLICATIONS SOCIETY(REGD.) 2020 - 2026.",
    "ALL RIGHTS RESERVED."
  ];

  const CREDITS = [
    "Zanyung Ronrie",
    "Ethan Joseph",
    "Soumya D. Das",
    "Naved Khan",
    "Ishaan Das",
    "Hemang Chugh",
    "Aaron S. Santhosh",
    "Anshuman Gupta",
    "Aryan Bhatt",
    "Atharv Tandon",
    "2000+ Villagers/NPCs/"
  ];

  const CATEGORY_ALIASES = {
    act: "Acts",
    con: "Constitution Versions",
    ord: "Orders",
    let: "Letters",
    law: "Laws",
    cha: "Charters",
    dec: "Declarations",
    jud: "Judicial Orders",
    bok: "Books",
    fcc: "FACT AND CHESS CCL",
    reg: "Company Registrations",
    gaz: "Gazette",
    cas: "Contracts and Survey",
    usr: "Union and State Records",
    oth: "Other"
  };

  // Mutable DATA container populated dynamically from GitHub API
  let DATA = {
    pdfCategories: {},
    media: {
      zip: [],
      cdr: [],
      images: [],
      radio: [],
      videos: []
    }
  };

  async function fetchLiveArchiveData() {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`
      );
      if (!response.ok) return;

      const repoTree = await response.json();
      if (!repoTree.tree) return;

      const pdfCategories = {};
      const media = { zip: [], cdr: [], images: [], radio: [], videos: [] };

      repoTree.tree.forEach((item) => {
        if (item.type !== "blob") return;

        const parts = item.path.split("/");
        if (parts[0].toLowerCase() === "archive" && parts.length >= 3) {
          const folderType = parts[1].toLowerCase();
          const fileName = parts[parts.length - 1];

          if (folderType === "pdf" && parts.length >= 4) {
            const category = parts[2];
            if (!pdfCategories[category]) pdfCategories[category] = [];
            pdfCategories[category].push(fileName);
          } else if (folderType === "images") {
            media.images.push(fileName);
          } else if (folderType === "video" || folderType === "videos") {
            media.videos.push(fileName);
          } else if (folderType === "radio") {
            media.radio.push(fileName);
          } else if (folderType === "cdr") {
            media.cdr.push(fileName);
          } else if (folderType === "zip") {
            media.zip.push(fileName);
          }
        }
      });

      DATA.pdfCategories = pdfCategories;
      DATA.media = media;
    } catch (error) {
      console.warn("Dynamic dataset sync skipped, using memory cache.", error);
    }
  }

  const FILE_TYPES = {
    pdf: "PDF",
    images: "IMAGE",
    videos: "VIDEO",
    radio: "RADIO",
    cdr: "CDR",
    zip: "ZIP"
  };

  const ARCHIVE_PATHS = {
    pdf: "archive/pdf/",
    images: "archive/images/",
    videos: "archive/video/",
    radio: "archive/radio/",
    cdr: "archive/cdr/",
    zip: "archive/zip/"
  };

  const RELEASE_DOWNLOADS = {
    "tredt-pdf.zip": "https://github.com/TREDTCODER/tredtunionarchive/releases/latest/download/tredt-pdf.zip",
    "tredt-images.zip": "https://github.com/TREDTCODER/tredtunionarchive/releases/latest/download/tredt-images.zip"
  };

  const DOWNLOAD_STATE = {
    active: null,
    bytes: 0,
    total: 0,
    speed: 0,
    startedAt: 0,
    timer: null
  };

  const COMMANDS = [
    ["HELP", "show all commands"],
    ["EXIT", "exit the terminal"],
    ["CLS", "clear the terminal"],
    ["VER", "display archive version"],
    ["COPYRIGHT", "display copyright notice"],
    ["CREDITS", "display archive credits"],
    ["DIR/F", "directory of filetype=.pdf"],
    ["DIR/I", "directory of filetype=.png/.jpeg/.jpg"],
    ["DIR/V", "directory of filetype=.mp4; video files are out of storage"],
    ["DIR/R", "directory of filetype=.mp3"],
    ["DIR/CDR", "directory of filetype=.cdr"],
    ["DIR/Z", "directory of filetype=.zip"],
    ["DIR/A", "directory of all archived files"],
    ["DIR/C/F", "show all PDF category names"],
    ["DIR/C/F/ACT", "Acts"],
    ["DIR/C/F/CON", "Constitution Versions"],
    ["DIR/C/F/ORD", "Orders"],
    ["DIR/C/F/LET", "Letters"],
    ["DIR/C/F/LAW", "Laws"],
    ["DIR/C/F/CHA", "Charters"],
    ["DIR/C/F/DEC", "Declarations"],
    ["DIR/C/F/JUD", "Judicial Orders"],
    ["DIR/C/F/BOK", "Books"],
    ["DIR/C/F/FCC", "FACT and Chess CCL"],
    ["DIR/C/F/REG", "Company Registrations"],
    ["DIR/C/F/GAZ", "Gazette"],
    ["DIR/C/F/CAS", "Contracts and Survey"],
    ["DIR/C/F/USR", "Union and State Records"],
    ["DIR/C/F/OTH", "Other"]
  ];

  const $ = (selector, root = document) => root.querySelector(selector);

  function ensureTerminal() {
    let root = document.getElementById("tredt-terminal");
    if (root) return root;

    root = document.createElement("div");
    root.id = "tredt-terminal";
    document.body.appendChild(root);
    return root;
  }

  function injectStyles() {
    if (document.getElementById("tredt-terminal-style")) return;

    const style = document.createElement("style");
    style.id = "tredt-terminal-style";
    style.textContent = `
      #tredt-terminal {
        position: fixed;
        inset: 0;
        background: #000;
        color: #fff;
        font-family: "Courier New", Courier, monospace;
        font-size: 15px;
        line-height: 1.35;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        z-index: 2147483647;
      }

      #tredt-terminal * {
        box-sizing: border-box;
      }

      #tredt-terminal-output {
        flex: 1;
        overflow-y: auto;
        padding: 18px 20px 8px;
        white-space: pre-wrap;
        word-break: break-word;
      }

      #tredt-terminal-input-row {
        display: flex;
        flex: 0 0 auto;
        padding: 8px 20px 18px;
      }

      #tredt-terminal-prompt {
        white-space: pre;
        flex: 0 0 auto;
      }

      #tredt-terminal-input {
        flex: 1;
        min-width: 0;
        border: 0;
        outline: 0;
        background: #000;
        color: #fff;
        font: inherit;
        padding: 0;
        margin: 0;
        caret-color: #fff;
      }

      #tredt-terminal-input::selection {
        background: #fff;
        color: #000;
      }

      .tredt-line {
        margin: 0;
      }

      .tredt-file-link {
        color: #fff;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
        cursor: pointer;
      }

      .tredt-file-link:hover,
      .tredt-file-link:focus {
        background: #fff;
        color: #000;
        outline: none;
      }

      #tredt-download-sidebar {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(34vw, 560px);
        min-width: 390px;
        background: #000;
        color: #fff;
        border-left: 1px solid #fff;
        padding: 8px 10px 12px;
        overflow-y: auto;
        z-index: 20;
        font-family: "Courier New", Courier, monospace;
      }

      #tredt-terminal-output,
      #tredt-terminal-input-row {
        width: calc(100% - min(34vw, 560px));
        max-width: calc(100% - 390px);
      }

      .tredt-monitor-title {
        font-weight: bold;
        margin: 2px 0 5px;
      }

      .tredt-monitor-box {
        border: 1px solid #fff;
        padding: 5px;
        margin-bottom: 8px;
      }

      .tredt-monitor-canvas {
        display: block;
        width: 100%;
        height: 130px;
        background: #000;
        border: 1px solid #fff;
      }

      .tredt-monitor-meta {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-top: 2px;
      }

      .tredt-download-info {
        border: 1px solid #fff;
        padding: 7px 8px;
        margin-bottom: 8px;
        min-height: 116px;
      }

      .tredt-download-row {
        display: grid;
        grid-template-columns: 145px 1fr;
        gap: 8px;
        white-space: nowrap;
        overflow: hidden;
      }

      .tredt-download-value {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tredt-meter {
        height: 8px;
        border: 1px solid #fff;
        margin: 5px 0 7px;
        background: #000;
      }

      .tredt-meter > div {
        height: 100%;
        width: 0%;
        background: #fff;
      }

      #tredt-boot-screen {
        position: fixed;
        inset: 0;
        z-index: 2147483648;
        background: #000;
        color: #fff;
        font-family: "Courier New", Courier, monospace;
        display: flex;
        flex-direction: column;
        padding: 28px;
        cursor: default;
        user-select: none;
      }

      #tredt-boot-output {
        flex: 1;
        overflow: hidden;
        white-space: pre-wrap;
        line-height: 1.45;
      }

      #tredt-boot-skip {
        position: absolute;
        right: 24px;
        bottom: 20px;
        border: 1px solid #fff;
        background: #000;
        color: #fff;
        font: inherit;
        padding: 5px 10px;
        cursor: pointer;
      }

      #tredt-boot-skip:hover {
        background: #fff;
        color: #000;
      }
    `;

    document.head.appendChild(style);
  }

  function print(output, text = "") {
    const line = document.createElement("div");
    line.className = "tredt-line";
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function printLines(output, lines) {
    for (const line of lines) {
      print(output, line);
    }
  }

  function allPdfFiles() {
    return Object.values(DATA.pdfCategories).flat();
  }

  function allFiles() {
    return [
      ...allPdfFiles(),
      ...DATA.media.images,
      ...DATA.media.videos,
      ...DATA.media.radio,
      ...DATA.media.cdr,
      ...DATA.media.zip
    ];
  }

  function extension(name) {
    const match = name.match(/\.([^.]+)$/);
    return match ? match[1].toLowerCase() : "";
  }

  function dirHeader(label, count) {
    return ["", ` Directory of ${label}`, ` ${count} file(s)`, ""];
  }

  function fileTypeForName(name, explicitType = "") {
    if (explicitType) return explicitType;
    const ext = extension(name);
    if (ext === "pdf") return "pdf";
    if (["png", "jpg", "jpeg", "webp", "gif"].includes(ext)) return "images";
    if (ext === "mp4") return "videos";
    if (ext === "mp3" || ext === "wav" || ext === "ogg") return "radio";
    if (ext === "cdr") return "cdr";
    if (ext === "zip" || ext === "rar") return "zip";
    return "";
  }

  function downloadUrl(name, type) {
    if (RELEASE_DOWNLOADS[name]) return RELEASE_DOWNLOADS[name];
    const folder = ARCHIVE_PATHS[type] || "archive/";
    return folder + encodeURIComponent(name).replace(/%2F/g, "/");
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return "--";
    const units = ["B", "KB", "MB", "GB"];
    let value = bytes;
    let i = 0;
    while (value >= 1024 && i < units.length - 1) {
      value /= 1024;
      i++;
    }
    return `${value.toFixed(value >= 100 || i === 0 ? 0 : 1)} ${units[i]}`;
  }

  function formatSpeed(bytesPerSecond) {
    if (!Number.isFinite(bytesPerSecond) || bytesPerSecond <= 0) return "--";
    return `${formatBytes(bytesPerSecond)}/s`;
  }

  function formatEta(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "--";
    if (seconds < 60) return `${Math.ceil(seconds)}s`;
    const mins = Math.floor(seconds / 60);
    const secs = Math.ceil(seconds % 60);
    return `${mins}m ${secs}s`;
  }

  function renderFileList(output, files, type) {
    files.forEach((name, i) => {
      const line = document.createElement("div");
      line.className = "tredt-line tredt-file";

      const n = document.createElement("span");
      n.textContent = ` ${String(i + 1).padStart(3, "0")}  `;
      line.appendChild(n);

      const link = document.createElement("a");
      link.className = "tredt-file-link";
      link.href = downloadUrl(name, type);
      link.textContent = name;
      link.title = `Download ${name}`;
      link.setAttribute("download", name);
      link.addEventListener("click", () => beginDownloadMonitor(name, link.href));
      line.appendChild(link);

      output.appendChild(line);
    });
    output.scrollTop = output.scrollHeight;
  }

  function renderDownloadPanel() {
    let panel = document.getElementById("tredt-download-sidebar");
    if (panel) return panel;

    panel = document.createElement("aside");
    panel.id = "tredt-download-sidebar";
    panel.innerHTML = `
      <div class="tredt-monitor-title">Network</div>
      <div class="tredt-monitor-box">
        <canvas id="tredt-network-graph" class="tredt-monitor-canvas"></canvas>
        <div class="tredt-monitor-meta"><span>60 Seconds</span><span id="tredt-network-scale">-- Mbps</span></div>
      </div>

      <div class="tredt-download-info">
        <div class="tredt-download-row"><span>FILE NAME:</span><span id="tredt-dl-name" class="tredt-download-value">--</span></div>
        <div class="tredt-download-row"><span>SIZE:</span><span id="tredt-dl-size" class="tredt-download-value">--</span></div>
        <div class="tredt-download-row"><span>DOWNLOAD %:</span><span id="tredt-dl-percent" class="tredt-download-value">0%</span></div>
        <div class="tredt-meter"><div id="tredt-dl-meter"></div></div>
        <div class="tredt-download-row"><span>DOWNLOAD SPEED:</span><span id="tredt-dl-speed" class="tredt-download-value">--</span></div>
        <div class="tredt-download-row"><span>ESTIMATED TIME TAKEN:</span><span id="tredt-dl-eta" class="tredt-download-value">--</span></div>
      </div>

      <div class="tredt-monitor-title">Disk</div>
      <div class="tredt-monitor-box">
        <canvas id="tredt-disk-graph" class="tredt-monitor-canvas"></canvas>
        <div class="tredt-monitor-meta"><span>60 Seconds</span><span>10 MB/sec</span></div>
      </div>
    `;
    const terminal = document.getElementById("tredt-terminal");
    (terminal || document.body).appendChild(panel);
    return panel;
  }

  function drawGraph(canvas, values, maxValue) {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(0, 255, 0, .32)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += Math.max(35, width / 10)) {
      ctx.beginPath();
      ctx.moveTo(Math.round(x) + 0.5, 0);
      ctx.lineTo(Math.round(x) + 0.5, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += Math.max(16, height / 6)) {
      ctx.beginPath();
      ctx.moveTo(0, Math.round(y) + 0.5);
      ctx.lineTo(width, Math.round(y) + 0.5);
      ctx.stroke();
    }

    if (!values.length) return;
    const safeMax = Math.max(maxValue || 1, 1);
    const step = width / Math.max(values.length - 1, 1);
    ctx.beginPath();
    values.forEach((value, i) => {
      const x = i * step;
      const y = height - Math.min(1, Math.max(0, value / safeMax)) * (height - 2);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 255, 0, .18)";
    ctx.fill();

    ctx.beginPath();
    values.forEach((value, i) => {
      const x = i * step;
      const y = height - Math.min(1, Math.max(0, value / safeMax)) * (height - 2);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "#00ff00";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  function getBrowserDownlinkMbps() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return connection && Number.isFinite(connection.downlink) ? connection.downlink : 0;
  }

  function startPerformanceMonitor() {
    renderDownloadPanel();
    const network = [];
    const disk = [];
    const maxPoints = 120;
    const tick = () => {
      const browserMbps = getBrowserDownlinkMbps();
      const downloadMbps = DOWNLOAD_STATE.speed > 0 ? (DOWNLOAD_STATE.speed * 8) / 1000000 : 0;
      const networkMbps = Math.max(browserMbps, downloadMbps);
      const jitter = networkMbps > 0 ? networkMbps * (0.82 + Math.random() * 0.18) : Math.random() * 0.08;
      network.push(jitter);
      disk.push(2.5 + Math.random() * 7.5);
      if (network.length > maxPoints) network.shift();
      if (disk.length > maxPoints) disk.shift();
      const netMax = Math.max(1, Math.ceil(Math.max(...network, 1) * 1.15));
      drawGraph(document.getElementById("tredt-network-graph"), network, netMax);
      drawGraph(document.getElementById("tredt-disk-graph"), disk, 10);
      const scale = document.getElementById("tredt-network-scale");
      if (scale) scale.textContent = `${netMax} Mbps`;
      updateDownloadPanel();
    };
    tick();
    setInterval(tick, 500);
  }

  async function probeSize(url) {
    try {
      const response = await fetch(url, { method: "HEAD", cache: "no-store" });
      const length = response.headers.get("content-length");
      return length ? Number(length) : 0;
    } catch (_) {
      return 0;
    }
  }

  function beginDownloadMonitor(name, url) {
    DOWNLOAD_STATE.active = name;
    DOWNLOAD_STATE.bytes = 0;
    DOWNLOAD_STATE.total = 0;
    DOWNLOAD_STATE.speed = 0;
    DOWNLOAD_STATE.startedAt = performance.now();
    if (DOWNLOAD_STATE.timer) clearInterval(DOWNLOAD_STATE.timer);
    probeSize(url).then((size) => {
      if (DOWNLOAD_STATE.active === name) DOWNLOAD_STATE.total = size;
    });
    DOWNLOAD_STATE.timer = setInterval(() => {
      if (!DOWNLOAD_STATE.active) return;
      const elapsed = Math.max((performance.now() - DOWNLOAD_STATE.startedAt) / 1000, 0.1);
      const assumed = DOWNLOAD_STATE.total || 0;
      const connectionMbps = getBrowserDownlinkMbps();
      DOWNLOAD_STATE.speed = connectionMbps > 0 ? (connectionMbps * 1000000) / 8 : 0;
      if (assumed > 0) {
        DOWNLOAD_STATE.bytes = Math.min(assumed, DOWNLOAD_STATE.speed * elapsed);
      }
      if (assumed > 0 && DOWNLOAD_STATE.bytes >= assumed) {
        DOWNLOAD_STATE.active = null;
        clearInterval(DOWNLOAD_STATE.timer);
        DOWNLOAD_STATE.timer = null;
      }
      updateDownloadPanel();
    }, 250);
    updateDownloadPanel();
  }

  function updateDownloadPanel() {
    const name = document.getElementById("tredt-dl-name");
    const size = document.getElementById("tredt-dl-size");
    const percent = document.getElementById("tredt-dl-percent");
    const speed = document.getElementById("tredt-dl-speed");
    const eta = document.getElementById("tredt-dl-eta");
    const meter = document.getElementById("tredt-dl-meter");
    if (!name) return;
    name.textContent = DOWNLOAD_STATE.active || "--";
    size.textContent = DOWNLOAD_STATE.total ? formatBytes(DOWNLOAD_STATE.total) : "--";
    const pct = DOWNLOAD_STATE.total ? Math.min(100, (DOWNLOAD_STATE.bytes / DOWNLOAD_STATE.total) * 100) : 0;
    percent.textContent = `${pct.toFixed(0)}%`;
    meter.style.width = `${pct}%`;
    speed.textContent = formatSpeed(DOWNLOAD_STATE.speed);
    eta.textContent =
      DOWNLOAD_STATE.speed > 0 && DOWNLOAD_STATE.total > DOWNLOAD_STATE.bytes
        ? formatEta((DOWNLOAD_STATE.total - DOWNLOAD_STATE.bytes) / DOWNLOAD_STATE.speed)
        : "--";
  }

  function showPdfCategory(output, alias) {
    const category = CATEGORY_ALIASES[alias];
    if (!category) {
      print(output, "Invalid category.");
      return;
    }
    const files = DATA.pdfCategories[category] || [];
    printLines(output, dirHeader(category, files.length));
    renderFileList(output, files, "pdf");
  }

  function showCategories(output) {
    const names = Object.keys(DATA.pdfCategories);
    printLines(output, [
      "",
      " TREDT UNION PDF CATEGORIES",
      " ---------------------------",
      ...names.map((name, i) => ` ${String(i + 1).padStart(2, "0")}. ${name}`),
      "",
      " Use DIR/C/F/<code> to list a category.",
      ""
    ]);
  }

  function showAllPdf(output) {
    const files = allPdfFiles();
    printLines(output, dirHeader("*.PDF", files.length));
    renderFileList(output, files, "pdf");
  }

  function showMedia(output, type, label, files) {
    printLines(output, dirHeader(label, files.length));
    const mediaType =
      {
        IMAGE: "images",
        VIDEO: "videos",
        RADIO: "radio",
        CDR: "cdr",
        ZIP: "zip"
      }[type] || fileTypeForName(files[0] || "");
    renderFileList(output, files, mediaType);

    if (type === "VIDEO") {
      print(output, "");
      print(output, " VIDEO RECORDS ARE OUT OF STORAGE.");
      if (VIDEO_URL) {
        print(output, ` WEBSITE LINK: ${VIDEO_URL}`);
      } else {
        print(output, " WEBSITE LINK: NOT CONFIGURED.");
        print(output, " Set window.TREDT_ARCHIVE_VIDEO_URL to enable the link.");
      }
    }
  }

  function showAll(output) {
    const groups = [
      ["PDF", allPdfFiles(), "pdf"],
      ["IMAGE", DATA.media.images, "images"],
      ["VIDEO", DATA.media.videos, "videos"],
      ["RADIO / MP3", DATA.media.radio, "radio"],
      ["CDR", DATA.media.cdr, "cdr"],
      ["ZIP", DATA.media.zip, "zip"]
    ];

    print(output, "");
    print(output, " TREDT UNION ARCHIVE - ALL FILES");
    print(output, " =================================");

    for (const [label, files, type] of groups) {
      print(output, "");
      print(output, `[${label}] ${files.length} file(s)`);
      renderFileList(output, files, type);
    }

    print(output, "");
    print(output, ` TOTAL ARCHIVED FILE RECORDS: ${allFiles().length}`);
  }

  function showHelp(output) {
    printLines(output, [
      "",
      " TREDT UNION ARCHIVE COMMAND REFERENCE",
      " =====================================",
      "",
      ...COMMANDS.map(([cmd, desc]) => ` ${cmd.padEnd(16)} - ${desc}`),
      ""
    ]);
  }

  function showHeader(output) {
    printLines(output, [
      "",
      "TREDT UNION ARCHIVE V1.02(R) Archive System",
      "(C)Copyright 2020 - 2026",
      "All Rights Reserved.",
      "",
      "Type HELP for a list of commands.",
      ""
    ]);
  }

  function normalizeCommand(raw) {
    return raw.trim().replace(/[()]/g, "").replace(/\\/g, "/").replace(/\s+/g, "").toLowerCase();
  }

  function execute(raw, output, terminal) {
    const command = normalizeCommand(raw);
    if (!command) return true;

    print(output, `C:\\TREDT> ${raw}`);

    if (command === "help" || command === "?") {
      showHelp(output);
      return true;
    }

    if (command === "cls" || command === "clear") {
      output.innerHTML = "";
      return true;
    }

    if (command === "ver") {
      printLines(output, [
        "",
        ` TREDT UNION ARCHIVE ${VERSION}`,
        " Archive System",
        " (C)Copyright 2020 - 2026",
        ""
      ]);
      return true;
    }

    if (command === "copyright") {
      printLines(output, ["", ...COPYRIGHT_TEXT, ""]);
      return true;
    }

    if (command === "credits") {
      printLines(output, [
        "",
        " ATTRIBUTIONS AND NAMES OF THE MEMBERS",
        " =====================================",
        ...CREDITS.map((x, i) => ` ${String(i + 1).padStart(2, "0")}. ${x}`),
        ""
      ]);
      return true;
    }

    if (command === "exit") {
      print(output, "");
      print(output, " Exiting TREDT UNION ARCHIVE...");
      setTimeout(() => {
        terminal.style.display = "none";
      }, 250);
      return false;
    }

    if (command === "dir/f") {
      showAllPdf(output);
      return true;
    }

    if (command === "dir/i") {
      showMedia(output, "IMAGE", "*.PNG / *.JPEG / *.JPG", DATA.media.images);
      return true;
    }

    if (command === "dir/v") {
      showMedia(output, "VIDEO", "*.MP4", DATA.media.videos);
      return true;
    }

    if (command === "dir/r") {
      showMedia(output, "RADIO", "*.MP3", DATA.media.radio);
      return true;
    }

    if (command === "dir/cdr") {
      showMedia(output, "CDR", "*.CDR", DATA.media.cdr);
      return true;
    }

    if (command === "dir/z") {
      showMedia(output, "ZIP", "*.ZIP", DATA.media.zip);
      return true;
    }

    if (command === "dir/a") {
      showAll(output);
      return true;
    }

    if (command === "dir/c/f") {
      showCategories(output);
      return true;
    }

    const categoryMatch = command.match(/^dir\/c\/f\/([a-z]+)$/);
    if (categoryMatch) {
      showPdfCategory(output, categoryMatch[1]);
      return true;
    }

    printLines(output, [
      "",
      `'${raw}' is not recognized as an internal or external command,`,
      "operable program or batch file.",
      "Type HELP for available commands.",
      ""
    ]);

    return true;
  }

  function startTerminal() {
    const terminal = ensureTerminal();

    terminal.innerHTML = `
      <div id="tredt-terminal-output" aria-live="polite"></div>
      <form id="tredt-terminal-input-row" autocomplete="off">
        <span id="tredt-terminal-prompt">C:\\TREDT&gt;</span>
        <input id="tredt-terminal-input" type="text" spellcheck="false" autocomplete="off" aria-label="TREDT archive command" />
      </form>
    `;

    const output = $("#tredt-terminal-output", terminal);
    const form = $("#tredt-terminal-input-row", terminal);
    const input = $("#tredt-terminal-input", terminal);

    renderDownloadPanel();
    startPerformanceMonitor();
    showHeader(output);

    const history = [];
    let historyIndex = -1;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const raw = input.value;

      if (raw.trim()) {
        history.push(raw);
        historyIndex = history.length;
      }

      input.value = "";
      execute(raw, output, terminal);
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (!history.length) return;
        historyIndex = Math.max(0, historyIndex - 1);
        input.value = history[historyIndex] || "";
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (!history.length) return;
        historyIndex = Math.min(history.length, historyIndex + 1);
        input.value = history[historyIndex] || "";
      }
    });

    terminal.addEventListener("click", (event) => {
      if (!event.target.closest("a, #tredt-download-sidebar, button")) input.focus();
    });
    input.focus();

    window.TREDTArchive = {
      data: DATA,
      execute: (command) => execute(command, output, terminal),
      showHelp: () => showHelp(output),
      showAll: () => showAll(output),
      showCategories: () => showCategories(output),
      clear: () => {
        output.innerHTML = "";
      },
      version: VERSION
    };
  }

  function skipBoot() {
    const boot = document.getElementById("tredt-boot-screen");
    if (!boot) return;
    boot.remove();
    startTerminal();
  }

  function startBootSequence() {
    const terminal = ensureTerminal();

    terminal.innerHTML = `
      <div id="tredt-boot-screen" tabindex="0">
        <div id="tredt-boot-output"></div>
        <div id="tredt-boot-prompt"></div>
        <button id="tredt-boot-skip" type="button">SKIP INTRO</button>
      </div>
    `;

    const screen = $("#tredt-boot-screen", terminal);
    const output = $("#tredt-boot-output", terminal);
    const skip = $("#tredt-boot-skip", terminal);

    let stopped = false;
    let timer = null;
    let spinnerTimer = null;

    const SPINNER_FRAMES = ["\\", "|", "/", "-"];
    const checks = [
      "FETCHING LIVE ARCHIVE TREE FROM GITHUB",
      "CHECKING PDF DATABASE",
      "CHECKING IMAGE DATABASE",
      "CHECKING VIDEO DATABASE",
      "CHECKING RADIO DATABASE",
      "CHECKING CDR DATABASE",
      "CHECKING ZIP DATABASE",
      "LOADING COMMAND INTERPRETER"
    ];

    const bootLines = [
      "",
      "TREDT UNION COMPUTER SYSTEM",
      "==============================================",
      "",
      "TREDT UNION ARCHIVE SYSTEM",
      `BIOS VERSION ${VERSION}`,
      "",
      "MEMORY TEST: 640K OK",
      ""
    ];

    const finish = () => {
      if (stopped) return;
      stopped = true;
      if (timer) clearTimeout(timer);
      if (spinnerTimer) clearInterval(spinnerTimer);
      skipBoot();
    };

    skip.addEventListener("click", finish);

    screen.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === "Escape" || event.key === " ") {
        event.preventDefault();
        finish();
      }
    });

    screen.addEventListener("click", (event) => {
      if (event.target !== skip) screen.focus();
    });

    screen.focus();

    const addLine = (text = "") => {
      const line = document.createElement("div");
      line.textContent = text;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
      return line;
    };

    let index = 0;
    const typeLine = () => {
      if (stopped) return;

      if (index >= bootLines.length) {
        runChecks();
        return;
      }

      addLine(bootLines[index]);
      index++;
      timer = setTimeout(typeLine, index <= 6 ? 220 : 180);
    };

    const runChecks = () => {
      let checkIndex = 0;

      const nextCheck = () => {
        if (stopped) return;

        if (checkIndex >= checks.length) {
          finishSequence();
          return;
        }

        const label = checks[checkIndex];
        const line = addLine(`${label} ............ `);
        let frame = 0;
        const started = performance.now();
        const CHECK_MS = 1000;

        spinnerTimer = setInterval(() => {
          if (stopped) return;
          line.textContent = `${label} ............ ${SPINNER_FRAMES[frame]}`;
          frame = (frame + 1) % SPINNER_FRAMES.length;

          if (performance.now() - started >= CHECK_MS) {
            clearInterval(spinnerTimer);
            spinnerTimer = null;
            line.textContent = `${label} ............ ✓`;
            checkIndex++;
            setTimeout(nextCheck, 80);
          }
        }, 120);
      };

      nextCheck();
    };

    const finishSequence = () => {
      if (stopped) return;

      addLine("");
      addLine("INITIALIZING TREDT ARCHIVE SYSTEM...");

      const progress = addLine("LOADING ARCHIVE INDEX................. 000%");
      let percent = 0;

      const progressTimer = setInterval(() => {
        if (stopped) {
          clearInterval(progressTimer);
          return;
        }

        percent += 20;
        progress.textContent = `LOADING ARCHIVE INDEX................. ${String(percent).padStart(3, "0")}%`;

        if (percent >= 100) {
          clearInterval(progressTimer);

          addLine("");
          addLine("SYSTEM READY. ✓");
          addLine("");
          addLine("C:\\TREDT> ARCHIVE.EXE");
          addLine("");
          addLine("TREDT UNION ARCHIVE V1.02(R)");
          addLine("----------------------------------------------");
          addLine("AUTHORIZED ARCHIVE TERMINAL");
          addLine("");

          timer = setTimeout(() => {
            if (!stopped) {
              stopped = true;
              skipBoot();
            }
          }, 800);
        }
      }, 120);
    };

    typeLine();
  }

  async function boot() {
    injectStyles();
    await fetchLiveArchiveData();
    startBootSequence();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
