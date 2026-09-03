/*
 * TREDT UNION ARCHIVE V1.02(R)
 * Complete archive-terminal script generated from:
 * "TREDT Union PDF Archive Classification"
 *
 * The source supplied for this archive lists 15 PDF categories.
 * No additional PDF categories have been invented.
 *
 * Usage:
 *   1. Load this script after your page/container exists, OR include it
 *      normally in a page and let it build the terminal automatically.
 *   2. Optional: set window.TREDT_ARCHIVE_VIDEO_URL before loading this file.
 *   3. Optional: provide an element with id="tredt-terminal"; otherwise one
 *      is created automatically.
 *
 * Commands:
 *   HELP, CLS, EXIT, VER, COPYRIGHT, CREDITS
 *   DIR/F, DIR/I, DIR/V, DIR/R, DIR/CDR, DIR/Z, DIR/A
 *   DIR/C/F
 *   DIR/C/F/ACT, CON, ORD, LET, LAW, CHA, DEC, JUD, BOK,
 *              FCC, REG, GAZ, CAS, USR, OTH
 */

(() => {
  "use strict";

  const ARCHIVE_NAME = "TREDT UNION ARCHIVE V1.02(R)";
  const VERSION = "V1.02(R)";
  const VIDEO_URL = window.TREDT_ARCHIVE_VIDEO_URL || "";

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

  const DATA = {
  "pdfCategories": {
    "Acts": [
      "Abolition of the Union Governor's Pass of Legislature Act.pdf",
      "Charter Regulation Act, 2025.pdf",
      "Company Names and Logo Registration Act. of 2024.pdf",
      "Copyright Act 2023.pdf",
      "Election Regulation Amendment Act, 2024.pdf",
      "Nonproliferation Nuclear Act, 2025.pdf",
      "Stamp Issue Act. 2023.pdf",
      "THE GOD'S ENLIGHTENMENT WORD OF PEACE ACT 2023.pdf",
      "The TREDT Trading Company Total-Stock-Division Redemption Act.pdf",
      "TREDT LEGISLATIVE HOUSE ACTS OF DECEMBER,ABOLITION OF TREDT NATIONAL CONGRESS ACT 2023.pdf",
      "TREDT SMP Financial and Marketing System Enhancement Act. 2024 .pdf",
      "TREDT Trading Company Total Stock Redemption and Dividend Act, 2022.pdf",
      "TREDT Trading Company Total Stock Redemption Gaming Group Act.pdf",
      "TREDT Trading Company Total Stock Redemption Gaming Group Act[1]-signed.pdf",
      "Uniform Tax Code Act, 2025.pdf",
      "Villagers Rights and Liberty Act. 2024 .pdf",
      "Bill No. 01.pdf"
    ],
    "Constitution Versions": [
      "Constitution of TREDT UNION Latest Finished(12th(or)6thAmedment(or)RegulatingAct).pdf",
      "Constitution of TREDT UNION Old Version.pdf",
      "Constitution of TREDT UNION.pdf",
      "The Constitution of TREDT (Simplified).pdf"
    ],
    "Orders": [
      "AN ORDER TO ESTABLISH THE UNION COUNCIL OF COMPANIES.pdf",
      "Dissolution of TREDT Union Executive Order Ethan Administration 2023.pdf",
      "Division of the TREDT Legislative House Imperial Order 4.pdf",
      "Executive ORDER OF company.pdf",
      "Executive_Order_of_Union_002.pdf",
      "ORDER OF REISSUANCE OF ROYAL CHARTER AND ABOLISHMENT OF BOARD OF DIRECTORS.pdf",
      "Order of Succession of Power of the Head of State and Government of the TREDT Union.pdf",
      "Order of Succession of Power of the Head of State and Government of the TREDT Union_signed.pdf",
      "Presidential Executive Order I (1).pdf",
      "Presidential Executive Order II.pdf",
      "Union Imperial Order I.pdf",
      "Vizlandia Forestry & Mining Order, 2024.pdf",
      "Vizlandia Governor's Order.pdf"
    ],
    "Letters": [
      "Ishaan Das to OPOTU.pdf",
      "Letter 056.pdf",
      "Letter to Appointment of Ishaan Das.pdf",
      "Letter to Governor General of TTCO.pdf",
      "Letter to Ishaan Das.pdf",
      "Letter to President Of Union(2).pdf",
      "Letter to President Of Union.pdf",
      "Letter to the Governor General of ITCO.pdf",
      "Letter to the ICJT.pdf",
      "Letter to the President of Union.pdf",
      "Letter to the TTCO.pdf",
      "Letter to the Union Governor of TREDT Union..pdf",
      "Skull and Bones Society, Letter of Acceptance 45DSBSGXD.pdf",
      "UMSC Stock Issuance Letter.pdf",
      "FULL PARDON FOR ISHAAN DAS.pdf",
      "Re-Appointment of Soumya D. Das as Governor.pdf",
      "Removal of Article 10 after invocation and Abolition of Powers of the Office of Union Governor.pdf",
      "Request to IIL.pdf",
      "Resignation of Governor of State of Vizlandia.pdf",
      "Resignation of President of CWP.pdf",
      "Resignation of the Governor General of TTCO.pdf",
      "Transfer of Power Joseph admin to Khan admin OPTU 2024.pdf",
      "Governor General Appointed Ishaan Das.pdf",
      "Surrender of Self-Governing Rights of TREDT Trading Company to TREDT Union.pdf"
    ],
    "Laws": [
      "Constitutional-Bill-Regulation-of-Nuclear-Weapon-Use.pdf",
      "Fourth Regulating Act (Amendment Bill), 2025.pdf",
      "Regulating Act 3rd Amendment Bill, 2025.pdf",
      "Regulating Act. 1st Amendment Bill.pdf",
      "Regulating Act. 2024.pdf",
      "TREDT Union Regulating Act. 2nd Amendment 2025.pdf",
      "Imperial Court of Justice of TREDT Amend Approval.pdf",
      "The Imperial Industries Limited Funding Bill (Money Bill)(Black and White).pdf",
      "The TREDT National Congress.pdf",
      "TLH SUMMER SESSION OF 2024.pdf",
      "TREDT Gaming Stamp Issue Act.pdf",
      "TREDT Union Annual Report of Economy.pdf",
      "TREDT UNION CODEX.pdf",
      "TREDT UNION PRESIDENTIAL ELECTIONS 2024 & ANNOUNCEMENT OF 2024 MEMBER OF TLH LIST.pdf",
      "TREDT Union Presidential Oath.pdf",
      "TREDT Union Stock Exchange Committee.pdf",
      "UEC Ballot Paper.pdf"
    ],
    "Charters": [
      "CHARTER OF GOVERNOR BY STATE OF CRABLAND OF TREDT INDUSTRIES.pdf",
      "CHARTER OF GOVERNOR OF UNION TECHNOLOGIES INC.pdf",
      "Charter of the Bill of State Rights.pdf",
      "Charter of Union.pdf",
      "Royal Charter of Imperial Trading Company.pdf",
      "Royal Charter of Royal Trading Company Granted by Union Renewed Khan Adm.pdf",
      "Royal Charter of Royal Trading Company Granted by Union.pdf",
      "ROYAL CHARTER OF THE ROYAL TRADING COMPANY.pdf",
      "Royal Charter of TREDT Trading Company Latest.pdf",
      "Royal Charter of TREDT Trading Company(2).pdf",
      "Royal Charter of TREDT Trading Company.pdf"
    ],
    "Declarations": [
      "Declaration by the Governor General's Council of Governors & Company Administrators.pdf",
      "Declaration of Colonial Authority and Entrustment of Powers to TREDT Industries Inc.pdf",
      "Declaration of Dissolution of the House of TREDT Legislation, ICJT.pdf",
      "Declaration of Privatization by the Royal Trading Company.pdf",
      "Declaration of Privatization by the TREDT Trading Company.pdf",
      "Declaration of Privatization by the Union State Railways Company.pdf",
      "Declaration of Subsidiary Establishment UTI.pdf",
      "Declaration of TREDT Union National Recession.pdf",
      "Declaration of War on Stephenson Kingdom.pdf",
      "TREDT UNION 2024 PRESIDENTIAL ELECTION DECLARATION.pdf",
      "TREDT Union Declaration to TTCO.pdf",
      "TREDT UNION DECLARATION.pdf",
      "UNION STATE RAILWAYS COMPANY Registration Declaration to Union.pdf"
    ],
    "Judicial Orders": [
      "Apology Statement to the People of Vizlandia.pdf",
      "Arrest Warrant of Revolutionaries .pdf",
      "EVIDENCE.pdf",
      "Official Record of Incumbentation of President Soumya D. Das.pdf",
      "TREDT UNION NON-JUDICIAL AFFIDAVIT.pdf",
      "TREDT UNION, ICJT Request.pdf",
      "Tsarland High Court of Justice TREDT UNION NON-JUDICIAL Ishaan Das to Union.pdf",
      "WARRANT OF ARREST ASS 19th3rd2025.pdf"
    ],
    "Books": [
      "Are we alone.pdf",
      "DeadPlants.exe - The Horror of the Unseen Edition I.pdf",
      "From the Fears to Fathom Full Volume (3) (1).pdf",
      "My Preparedness for a Heat Wave.pdf",
      "Plants Vs. Zombies Garden Warfare 2 Exclusive Comic Book.pdf",
      "Plants Vs. Zombies Reinforcement learning to a tower defense game.pdf",
      "SpeechSDDas004.pdf",
      "The Art of Plants Vs. Zombies.pdf",
      "The Constitution of India.pdf",
      "The Constitution of Japan.pdf",
      "The History of Andaman and Nicobar Islands.pdf",
      "The Holy Bhagavad Gita.pdf",
      "The Holy Bible.pdf",
      "The Holy Quran.pdf",
      "The Israeli - Palestinian Conflict (Gaza War).pdf",
      "THE VIZLANDIA AWAKENING Edition I and Volume I 21122024.pdf",
      "the-complete-works-leonardo-da-vinci.pdf",
      "When Ice Cream Screams! Edition I.pdf"
    ],
    "FACT AND CHESS CCL": [
      "CCL, FACT Last Season Match Rules.pdf",
      "Chess Tournamet 2, 2023.pdf",
      "FACT License(Black and White).pdf"
    ],
    "Company Registrations": [
      "COMPANY LICENSE TREDT INDUSTRIES.pdf",
      "Company_Name_Registration_Form_1_URSC.pdf",
      "Company_Registration_Form_3_ICCO.pdf",
      "Company_Registration_Form_5_UMSC.pdf",
      "Company_Registration_Form_6_Union_Technologies_Inc.pdf",
      "Company_Registration_Form_7_TREDT_Industries_Inc.pdf",
      "Name Change Form ICCT.pdf",
      "Trading License ITCO.pdf",
      "Trading License RTCO.pdf",
      "UMSC Registration Approval.pdf"
    ],
    "Gazette": [
      "Gazette of TREDT Union Cover 002.pdf",
      "Gazette of TREDT Union Cover.pdf",
      "GTU 001.pdf"
    ],
    "Contracts and Survey": [
      "CONTRACT FOR THE UNION RAILWAYS PROJECT.pdf",
      "JOINT STOCK AGREEMENT TREDT INDUSTRIES .pdf",
      "MATERIALS List with TTCO.pdf",
      "PARTY MEMBERSHIP AGREEMENT.pdf",
      "RMS-Titanic-Replica-Ownership-Property.pdf",
      "St. George's School Interclass Union Agreement TREDT Union.pdf",
      "TREDT UNION TAX AND REVENUE COMMISSION  JTR_52_2025_0442-T.pdf",
      "TREDT UNION TOTAL REVISION 2023.pdf",
      "Vizlandia State Survey of Population.pdf",
      "Vizlandia State Survey of Population Raw Data.pdf",
            "Vizlandia State Survey of Population Raw Data.pdf",
      "TTCO Trading Concession 1.pdf"
    ],
    "Union and State Records": [
      "DEPARTMENT OF WAR AND DEFENCE OF TREDT UNION H-B15M2.pdf",
      "GOVERNMENT OF VIZLANDIA Preface.pdf",
      "Military Permit.pdf",
      "Names with Rank Titles in TREDT.pdf",
      "Operation Pt. Nemo.pdf",
      "Tax_and_Revenue_Department_of_TREDT_Union_Tax_Coll_1.pdf",
      "Tax Return Form .pdf",
      "The Royal Ender Dragon Team's Union Of State Manifesto.pdf",
      "TREDT TImes 1 2024.pdf",
      "TREDT Times 4.pdf",
      "TREDT Times1 2024.pdf",
      "TREDT Trading Company Details.pdf",
      "TREDT Union 2023.pdf",
      "TREDT Union 2024 Presents.pdf",
      "TREDT Union National Recession.pdf",
      "UT-2025-006.pdf",
      "Imperial Bank of TREDT Treasure Tax and Returns.pdf",
      "OPOTU D&S 001 NOTICE.pdf",
      "Stocks to Soumya D. Das.pdf",
      "TTCO Confedential.pdf"
    ],
    "Other": [
      "Induction Coil.pdf"
    ]
  },
  "media": {
    "zip": [
      "Defunction of TTCO.zip",
      "NBT Data and Proof Case No 2024ICCr01.zip"
      "tusec-main-archive.zip"
    ],
    "cdr": [
      "Royal Charter ITCO. Print.CDR",
      "Royal Charter of ITCO..CDR",
      "TTCO LOGO (NEW).cdr",
      "ttco Logo in progress.cdr",
      "TUSEC.CDR",
      "UEC Ballot Paper.cdr"
    ],
    "images": [
      "Cheque Ishaan Das.PNG",
      "Election Poster.PNG",
      "Evidence4.PNG",
      "Grand Roost.png",
      "Graphic1.PNG",
      "ICCO Logo.PNG",
      "Imperial Railways Logo.PNG",
      "Imperila Bank of TREDT LOGO.jpg",
      "Ind Day Poster.PNG",
      "napoleon-marek-burbul.jpg",
      "output-onlinepngtools.png",
      "Poem of 26th Jan.PNG",
      "President Badge of TG.jpg",
      "President Badge of TU.jpg",
      "Republic Day Union.PNG",
      "Republic Day.PNG",
      "Royal Charter of Imperial Trading Company.PNG",
      "Screenshot 2023-04-30 165242.png",
      "Screenshot 2023-04-30 165313.png",
      "Seal of Approval of TTCO.jpg",
      "Semi Freind's Union.jpg",
      "Stamp of TG.jpg",
      "Stamp of TTCO.png",
      "Stamp of TU.png",
      "TREDT Football Club Logo.PNG",
      "TREDT SMP 2D Render Map.png",
      "TREDT SMP Background.PNG",
      "TREDT SMP Merch Design.jpg",
      "TREDT SMP NOTICE1.PNG",
      "TREDT SMP-logos.jpeg",
      "TREDT Times LOGO.jpg",
      "TREDT Times New LOGO.jpg",
      "TREDT Union COA.PNG",
      "TREDT Union Fleur de lIs.jpg",
      "Tsarland Districts Division.PNG",
      "TTCO Flag.jpg",
      "TTCO LOGO.jpg",
      "TTCO LOGO.png",
      "TU Eid Al Fitr.png",
      "TUSEC Logo.PNG",
      "WhatsApp Image 2024-08-10 at 23.14.06_25065eda.jpg"
    ],
    "radio": [
      "Apology Statement from TTCO to Vizlandia.mp3",
      "Vizlandia Massacre News Radio.mp3"
    ],
    "videos": []
  }
};

  const FILE_TYPES = {
    pdf: "PDF",
    images: "IMAGE",
    videos: "VIDEO",
    radio: "RADIO",
    cdr: "CDR",
    zip: "ZIP"
  };

  // Public archive paths. Filenames are URL-encoded automatically below.
  const ARCHIVE_PATHS = {
    pdf: "archive/pdf/",
    images: "archive/images/",
    videos: "archive/video/",
    radio: "archive/radio/",
    cdr: "archive/cdr/",
    zip: "archive/zip/"
  };

  // The two large aggregate archives live on the GitHub Release rather than
  // in the normal Netlify deployment.
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

      .tredt-error {
        color: #fff;
      }

      .tredt-dim {
        opacity: .8;
      }

      .tredt-file {
        cursor: pointer;
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

      @media (max-width: 1100px) {
        #tredt-download-sidebar {
          width: 42vw;
          min-width: 340px;
        }
        #tredt-terminal-output,
        #tredt-terminal-input-row {
          width: calc(100% - 42vw);
          max-width: calc(100% - 340px);
        }
      }

      @media (max-width: 700px) {
        #tredt-download-sidebar {
          position: relative;
          width: 100%;
          min-width: 0;
          border-left: 0;
          border-top: 1px solid #fff;
          max-height: 48vh;
        }
        #tredt-terminal-output,
        #tredt-terminal-input-row {
          width: 100%;
          max-width: 100%;
        }
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
        text-shadow: 0 0 5px rgba(255,255,255,.18);
      }

      #tredt-boot-prompt {
        min-height: 28px;
        margin-top: 10px;
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
        opacity: .75;
      }

      #tredt-boot-skip:hover {
        opacity: 1;
        background: #fff;
        color: #000;
      }

      .tredt-boot-cursor {
        display: inline-block;
        width: 10px;
        height: 18px;
        background: #fff;
        vertical-align: -3px;
        animation: tredtBootBlink 1s steps(1) infinite;
      }

      @keyframes tredtBootBlink {
        50% { opacity: 0; }
      }

      @media (max-width: 700px) {
        #tredt-terminal {
          font-size: 13px;
        }

        #tredt-terminal-output {
          padding-left: 10px;
          padding-right: 10px;
        }

        #tredt-terminal-input-row {
          padding-left: 10px;
          padding-right: 10px;
        }
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
    return [
      "",
      ` Directory of ${label}`,
      ` ${count} file(s)`,
      ""
    ];
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
    while (value >= 1024 && i < units.length - 1) { value /= 1024; i++; }
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
    if (mins < 60) return `${mins}m ${secs}s`;
    const hrs = Math.floor(mins / 60);
    return `${hrs}h ${mins % 60}m`;
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
      link.addEventListener("click", () => beginDownloadMonitor(name, link.href, type));
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

  function drawGraph(canvas, values, maxValue, label) {
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

    // Task Manager-style grid.
    ctx.strokeStyle = "rgba(0, 255, 0, .32)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += Math.max(35, width / 10)) {
      ctx.beginPath(); ctx.moveTo(Math.round(x) + .5, 0); ctx.lineTo(Math.round(x) + .5, height); ctx.stroke();
    }
    for (let y = 0; y <= height; y += Math.max(16, height / 6)) {
      ctx.beginPath(); ctx.moveTo(0, Math.round(y) + .5); ctx.lineTo(width, Math.round(y) + .5); ctx.stroke();
    }

    if (!values.length) return;
    const safeMax = Math.max(maxValue || 1, 1);
    const step = width / Math.max(values.length - 1, 1);
    ctx.beginPath();
    values.forEach((value, i) => {
      const x = i * step;
      const y = height - Math.min(1, Math.max(0, value / safeMax)) * (height - 2);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
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
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
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
      drawGraph(document.getElementById("tredt-network-graph"), network, netMax, "Network");
      drawGraph(document.getElementById("tredt-disk-graph"), disk, 10, "Disk");
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
      const elapsed = Math.max((performance.now() - DOWNLOAD_STATE.startedAt) / 1000, .1);
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
    eta.textContent = DOWNLOAD_STATE.speed > 0 && DOWNLOAD_STATE.total > DOWNLOAD_STATE.bytes
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
      ...names.map(
        (name, i) =>
          ` ${String(i + 1).padStart(2, "0")}. ${name}`
      ),
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
    const mediaType = {
      IMAGE: "images",
      VIDEO: "videos",
      RADIO: "radio",
      CDR: "cdr",
      ZIP: "zip"
    }[type] || fileTypeForName(files[0] || "");
    renderFileList(output, files, mediaType);

    if (type === "VIDEO") {
      print(output, "");
      print(
        output,
        " VIDEO RECORDS ARE OUT OF STORAGE."
      );

      if (VIDEO_URL) {
        print(
          output,
          ` WEBSITE LINK: ${VIDEO_URL}`
        );
      } else {
        print(
          output,
          " WEBSITE LINK: NOT CONFIGURED."
        );

        print(
          output,
          " Set window.TREDT_ARCHIVE_VIDEO_URL to enable the link."
        );
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
    print(
      output,
      " TREDT UNION ARCHIVE - ALL FILES"
    );
    print(
      output,
      " ================================="
    );

    for (const [label, files, type] of groups) {
      print(output, "");
      print(
        output,
        `[${label}] ${files.length} file(s)`
      );

      renderFileList(output, files, type);
    }

    print(output, "");
    print(
      output,
      ` TOTAL ARCHIVED FILE RECORDS: ${allFiles().length}`
    );
  }

  function showHelp(output) {
    printLines(output, [
      "",
      " TREDT UNION ARCHIVE COMMAND REFERENCE",
      " =====================================",
      "",
      ...COMMANDS.map(
        ([cmd, desc]) =>
          ` ${cmd.padEnd(16)} - ${desc}`
      ),
      "",
      " Notes:",
      "  DIR/F = PDF records",
      "  DIR/I = image records",
      "  DIR/V = video records",
      "  DIR/R = radio/MP3 records",
      "  DIR/CDR = CorelDRAW CDR records",
      "  DIR/Z = ZIP records",
      "  DIR/A = every archived record",
      "  DIR/C/F/<code> = PDF category listing",
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
    return raw
      .trim()
      .replace(/[()]/g, "")
      .replace(/\\/g, "/")
      .replace(/\s+/g, "")
      .toLowerCase();
  }

  function execute(raw, output, terminal) {
    const command = normalizeCommand(raw);

    if (!command) {
      return true;
    }

    print(
      output,
      `C:\\TREDT> ${raw}`
    );

    if (
      command === "help" ||
      command === "?"
    ) {
      showHelp(output);
      return true;
    }

    if (
      command === "cls" ||
      command === "clear"
    ) {
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
      printLines(
        output,
        [
          "",
          ...COPYRIGHT_TEXT,
          ""
        ]
      );

      return true;
    }

    if (command === "credits") {
      printLines(output, [
        "",
        " ATTRIBUTIONS AND NAMES OF THE MEMBERS",
        " =====================================",
        ...CREDITS.map(
          (x, i) =>
            ` ${String(i + 1).padStart(2, "0")}. ${x}`
        ),
        ""
      ]);

      return true;
    }

    if (command === "exit") {
      print(output, "");
      print(
        output,
        " Exiting TREDT UNION ARCHIVE..."
      );

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
      showMedia(
        output,
        "IMAGE",
        "*.PNG / *.JPEG / *.JPG",
        DATA.media.images
      );

      return true;
    }

    if (command === "dir/v") {
      showMedia(
        output,
        "VIDEO",
        "*.MP4",
        DATA.media.videos
      );

      return true;
    }

    if (command === "dir/r") {
      showMedia(
        output,
        "RADIO",
        "*.MP3",
        DATA.media.radio
      );

      return true;
    }

    if (command === "dir/cdr") {
      showMedia(
        output,
        "CDR",
        "*.CDR",
        DATA.media.cdr
      );

      return true;
    }

    if (command === "dir/z") {
      showMedia(
        output,
        "ZIP",
        "*.ZIP",
        DATA.media.zip
      );

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

    const categoryMatch =
      command.match(/^dir\/c\/f\/([a-z]+)$/);

    if (categoryMatch) {
      showPdfCategory(
        output,
        categoryMatch[1]
      );

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
      <div
        id="tredt-terminal-output"
        aria-live="polite"
      ></div>

      <form
        id="tredt-terminal-input-row"
        autocomplete="off"
      >
        <span id="tredt-terminal-prompt">
          C:\\TREDT&gt;
        </span>

        <input
          id="tredt-terminal-input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          aria-label="TREDT archive command"
        />
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
      clear: () => { output.innerHTML = ""; },
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
    const prompt = $("#tredt-boot-prompt", terminal);
    const skip = $("#tredt-boot-skip", terminal);

    let stopped = false;
    let timer = null;
    let spinnerTimer = null;

    // The complete startup is deliberately paced to approximately 14 seconds.
    const INTRO_TOTAL_MS = 14000;
    const SPINNER_FRAMES = ["\\", "|", "/", "-"];
    const checks = [
      "CHECKING ARCHIVE STORAGE",
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
      if (
        event.key === "Enter" ||
        event.key === "Escape" ||
        event.key === " "
      ) {
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

    // Initial BIOS text: ~2 seconds.
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

    // Each check gets a DOS spinner first, then resolves to a tick.
    // Eight checks at ~1 second each plus the opening/closing sequence gives
    // an approximately 14-second complete boot animation.
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
        const CHECK_MS = 1250;

        spinnerTimer = setInterval(() => {
          if (stopped) return;
          line.textContent =
            `${label} ............ ${SPINNER_FRAMES[frame]}`;
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
        progress.textContent =
          `LOADING ARCHIVE INDEX................. ${String(percent).padStart(3, "0")}%`;

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

          // Keep the completed boot visible briefly before entering DOS.
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

  function boot() {
    injectStyles();
    startBootSequence();
  }

  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      boot,
      {
        once: true
      }
    );
  } else {
    boot();
  }

})();
