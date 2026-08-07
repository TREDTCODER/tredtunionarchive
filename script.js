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
      "Executive Order of Union #002.pdf",
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
      "Company Name Registration Form #1 URSC.pdf",
      "Company Registration Form #3 ICCO.pdf",
      "Company Registration Form #5 UMSC.pdf",
      "Company Registration Form #6 Union Technologies Inc.pdf",
      "Company Registration Form #7 TREDT Industries Inc.pdf",
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
      "Tax and Revenue Department of TREDT Union, Tax Coll. #1.pdf",
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
    "videos": [
      "COMMUNITY BLAZE ROD FARM (TTCO).mp4",
      "EXECUTION ISLAND.mp4",
      "FACT 2023 - 2025 Farewell.mp4",
      "Oath Taking Ceremony of CJTU Ishaan Das - Made with Clipchamp.mp4",
      "OLD TREDT LEGISLATIVE HOUSE.mp4",
      "Podium Intro for Naved Khan - Made with Clipchamp.mp4",
      "SUPER SNIPER CANNON 1000+ BLOCK RANGE SHOWCASE.mp4",
      "TREDT SMP Showcase.mp4",
      "TREDT UNION FLAG WAVE.mp4",
      "TTCO CONCESSION 1 FIRST TRADE.mp4",
      "TTCO FIRST TRADING HALL.mp4",
      "TTCO FLAG WAVE.mp4",
      "TTCO HQ.mp4",
      "TTCO NEW HQ.mp4",
      "TTCO TRADE WITH NK AND AS SHOWCASE.mp4",
      "ZANYUNG'S RESIDENCE SHOWCASE.mp4"
    ]
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
        cursor: default;
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

  function formatFileList(files) {
    return files.map((name, i) => {
      const n = String(i + 1).padStart(3, "0");
      return ` ${n}  ${name}`;
    });
  }

  function showPdfCategory(output, alias) {
    const category = CATEGORY_ALIASES[alias];

    if (!category) {
      print(output, "Invalid category.");
      return;
    }

    const files = DATA.pdfCategories[category] || [];

    printLines(output, [
      ...dirHeader(category, files.length),
      ...formatFileList(files)
    ]);
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

    printLines(output, [
      ...dirHeader("*.PDF", files.length),
      ...formatFileList(files)
    ]);
  }

  function showMedia(output, type, label, files) {
    printLines(output, [
      ...dirHeader(label, files.length),
      ...formatFileList(files)
    ]);

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
      ["PDF", allPdfFiles()],
      ["IMAGE", DATA.media.images],
      ["VIDEO", DATA.media.videos],
      ["RADIO / MP3", DATA.media.radio],
      ["CDR", DATA.media.cdr],
      ["ZIP", DATA.media.zip]
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

    for (const [label, files] of groups) {
      print(output, "");
      print(
        output,
        `[${label}] ${files.length} file(s)`
      );

      printLines(
        output,
        formatFileList(files)
      );
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

    terminal.addEventListener("click", () => input.focus());
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