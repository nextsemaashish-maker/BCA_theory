/* ============================================
   EduTrack — app.js (Shared Data & Utilities)
============================================ */

const BCA_SUBJECTS = {
  1: [
    { code:'FEG-02',   name:'Foundation Course in English-2',              credits:4 },
    { code:'ECO-01',   name:'Business Organization',                       credits:4 },
    { code:'BCS-011',  name:'Computer Basics and PC Software',             credits:3 },
    { code:'BCS-012',  name:'Basic Mathematics',                           credits:4 },
    { code:'BCSL-013', name:'Computer Basics and PC Software Lab',         credits:2 },
  ],
  2: [
    { code:'ECO-02',   name:'Accountancy-1',                               credits:4 },
    { code:'MCS-011',  name:'Problem Solving and Programming',             credits:3 },
    { code:'MCS-012',  name:'Computer Organization and Assembly Language', credits:4 },
    { code:'MCS-013',  name:'Discrete Mathematics',                        credits:2 },
    { code:'MCS-015',  name:'Communication Skills',                        credits:2 },
    { code:'BCSL-021', name:'C Language Programming Lab',                  credits:1 },
    { code:'BCSL-022', name:'Assembly Language Programming Lab',           credits:1 },
  ],
  3: [
    { code:'MCS-014',  name:'Systems Analysis and Design',                 credits:3 },
    { code:'MCS-021',  name:'Data and File Structures',                    credits:4 },
    { code:'MCS-023',  name:'Introduction to DBMS',                        credits:3 },
    { code:'BCS-031',  name:'Programming in C++',                          credits:3 },
    { code:'BCSL-032', name:'C++ Programming Lab',                         credits:1 },
    { code:'BCSL-033', name:'Data and File Structures Lab',                credits:1 },
    { code:'BCSL-034', name:'DBMS Lab',                                    credits:1 },
  ],
  4: [
    { code:'BCS-040',  name:'Statistical Techniques',                      credits:4 },
    { code:'MCS-024',  name:'Object Oriented Technologies and Java',       credits:3 },
    { code:'BCS-041',  name:'Fundamentals of Computer Networks',           credits:4 },
    { code:'BCS-042',  name:'Introduction to Algorithm Design',            credits:2 },
    { code:'MCSL-016', name:'Internet Concepts and Web Design',            credits:2 },
    { code:'BCSL-043', name:'Java Programming Lab',                        credits:1 },
    { code:'BCSL-044', name:'Statistical Techniques Lab',                  credits:1 },
    { code:'BCSL-045', name:'Algorithm Design Lab',                        credits:1 },
  ],
  5: [
    { code:'BCS-051',  name:'Introduction to Software Engineering',        credits:3 },
    { code:'BCS-052',  name:'Network Programming and Administration',      credits:3 },
    { code:'BCS-053',  name:'Web Programming',                             credits:2 },
    { code:'BCS-054',  name:'Computer Oriented Numerical Techniques',      credits:3 },
    { code:'BCS-055',  name:'Business Communication',                      credits:2 },
    { code:'BCSL-056', name:'Network Programming Lab',                     credits:1 },
    { code:'BCSL-057', name:'Web Programming Lab',                         credits:1 },
    { code:'BCSL-058', name:'Numerical Techniques Lab',                    credits:1 },
  ],
  6: [
    { code:'BCS-062',  name:'E-Commerce',                                  credits:2 },
    { code:'MCS-022',  name:'Operating System Concepts and Networking',    credits:4 },
    { code:'BCSL-063', name:'OS and Networking Lab',                       credits:1 },
    { code:'BCSP-064', name:'Project',                                     credits:8 },
  ],
};

const AVATAR_COLORS = [
  '#3b82f6','#8b5cf6','#10b981','#f59e0b',
  '#ef4444','#06b6d4','#ec4899','#84cc16'
];

const STORE_KEY = 'bca_edutrack_v3';

function loadDB() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { students: getDefaultStudents() };
}

function saveDB(db) {
  localStorage.setItem(STORE_KEY, JSON.stringify(db));
}

function getDefaultStudents() {
  return [
    {
      id: 1,
      name: 'Aashish Kumar',
      enrollment: 'BCA2022002',
      semester: 5,
      contact: '',
      colorIdx: 1,
      documents: [
        { label: '1st Sem IGNOU Result',  file: '../Aashish Document/1st sem IGNOU TERM-END RESULTS.pdf' },
        { label: '2nd Sem IGNOU Result',  file: '../Aashish Document/2st sem IGNOU TERM-END RESULTS.pdf' },
        { label: '3rd Sem IGNOU Result',  file: '../Aashish Document/3rd sem IGNOU TERM-END RESULTS.pdf' },
        { label: '4th Sem IGNOU Result',  file: '../Aashish Document/4th IGNOU TERM-END RESULTS.pdf' },
        { label: '5th Sem IGNOU Result',  file: '../Aashish Document/5th IGNOU TERM-END RESULTS.pdf' },
        { label: 'BCA Grade Card',        file: '../Aashish Document/Aashish_BCA_Grade_Card.pdf' },
      ],
      subjects: {
        'BCS-051': { theory:'complete',  assignment:'complete' },
        'BCS-052': { theory:'complete',  assignment:'complete' },
        'BCS-053': { theory:'pending',   assignment:'complete' },
        'BCS-054': { theory:'complete',  assignment:'complete' },
        'BCS-055': { theory:'complete',  assignment:'complete' },
        'BCSL-056':{ theory:'complete',  assignment:'complete' },
        'BCSL-057':{ theory:'pending',   assignment:'pending'  },
        'BCSL-058':{ theory:'complete',  assignment:'complete' },
      },
      createdAt: Date.now()
    },
    {
      id: 2,
      name: 'Vaishnavi Sharma',
      enrollment: 'BCA2022001',
      semester: 3,
      contact: '',
      colorIdx: 0,
      documents: [
        { label: 'ID Card', file: '../Vaishnavi_ID-card.pdf' }
      ],
      subjects: {
        'MCS-014': { theory:'complete',  assignment:'complete' },
        'MCS-021': { theory:'complete',  assignment:'complete' },
        'MCS-023': { theory:'pending',   assignment:'complete' },
        'BCS-031': { theory:'complete',  assignment:'pending'  },
        'BCSL-032':{ theory:'complete',  assignment:'complete' },
        'BCSL-033':{ theory:'pending',   assignment:'pending'  },
        'BCSL-034':{ theory:'complete',  assignment:'complete' },
      },
      createdAt: Date.now()
    },
    {
      id: 3,
      name: 'Priya Mishra',
      enrollment: 'BCA2022003',
      semester: 2,
      contact: '',
      colorIdx: 2,
      documents: [],
      subjects: {
        'ECO-02':  { theory:'complete',  assignment:'complete' },
        'MCS-011': { theory:'complete',  assignment:'complete' },
        'MCS-012': { theory:'pending',   assignment:'complete' },
        'MCS-013': { theory:'complete',  assignment:'complete' },
        'MCS-015': { theory:'complete',  assignment:'pending'  },
        'BCSL-021':{ theory:'complete',  assignment:'complete' },
        'BCSL-022':{ theory:'pending',   assignment:'pending'  },
      },
      createdAt: Date.now()
    },
    {
      id: 4,
      name: 'Rahul Verma',
      enrollment: 'BCA2022004',
      semester: 4,
      contact: '',
      colorIdx: 3,
      documents: [],
      subjects: {
        'BCS-040': { theory:'complete',  assignment:'complete' },
        'MCS-024': { theory:'complete',  assignment:'pending'  },
        'BCS-041': { theory:'pending',   assignment:'complete' },
        'BCS-042': { theory:'complete',  assignment:'complete' },
        'MCSL-016':{ theory:'complete',  assignment:'complete' },
        'BCSL-043':{ theory:'complete',  assignment:'complete' },
        'BCSL-044':{ theory:'pending',   assignment:'pending'  },
        'BCSL-045':{ theory:'complete',  assignment:'complete' },
      },
      createdAt: Date.now()
    },
  ];
}

// ── UTILITIES ──────────────────────────────────────
let _idCounter = 100;

function getColor(idx) { return AVATAR_COLORS[idx % AVATAR_COLORS.length]; }

function getInitials(name) {
  return name.trim().split(' ').slice(0,2).map(w => w[0].toUpperCase()).join('');
}

function getSubjectList(sem) {
  return BCA_SUBJECTS[parseInt(sem)] || [];
}

function getStudentStats(student) {
  const list = getSubjectList(student.semester);
  let tc = 0, ac = 0, fc = 0;
  list.forEach(s => {
    const st = student.subjects[s.code] || { theory:'pending', assignment:'pending' };
    if (st.theory === 'complete') tc++;
    if (st.assignment === 'complete') ac++;
    if (st.theory === 'complete' && st.assignment === 'complete') fc++;
  });
  return {
    total: list.length,
    fullyComplete: fc,
    theoryPending: list.length - tc,
    assignPending: list.length - ac,
    pct: list.length ? Math.round((fc / list.length) * 100) : 0
  };
}

function showToast(msg, color) {
  let t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  if (color) {
    t.style.borderColor = color;
    t.style.color = color;
  } else {
    t.style.borderColor = '';
    t.style.color = '';
  }
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

function nextId(students) {
  return students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
}

// ── UNIVERSAL NAVBAR ────────────────────────────────
function renderGlobalNavbar(activePage = 'home', options = {}) {
  const currentStudentId = options.studentId || null;
  const currentSubjectCode = options.subjectCode || null;
  const db = loadDB();
  const students = db.students || [];

  const header = document.querySelector('.site-header');
  if (!header) return;

  // Render header contents
  let studentsHtml = '';
  students.forEach(s => {
    const isAct = currentStudentId === s.id ? 'active' : '';
    studentsHtml += `
      <a href="student.html?id=${s.id}" class="nav-dropdown-item ${isAct}">
        <span class="nav-avatar-mini" style="background:${getColor(s.colorIdx)}">${getInitials(s.name)}</span>
        <div style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          <div>${s.name}</div>
          <div style="font-size:11px;color:var(--text-muted)">${s.enrollment}</div>
        </div>
        <span class="nav-badge-mini">Sem ${s.semester}</span>
      </a>
    `;
  });

  // Current or default student's subjects for fast jump
  const curStudent = students.find(s => s.id === currentStudentId) || students[0] || null;
  const curSem = curStudent ? curStudent.semester : 5;
  const subjectsList = getSubjectList(curSem);

  let subjectsHtml = `<div class="nav-dropdown-heading">Semester ${curSem} Subjects (${curStudent ? curStudent.name : 'BCA'})</div>`;
  subjectsList.forEach(sub => {
    const isAct = currentSubjectCode === sub.code ? 'active' : '';
    subjectsHtml += `
      <a href="subject.html?student=${curStudent ? curStudent.id : 1}&subject=${sub.code}" class="nav-dropdown-item ${isAct}">
        <span style="font-weight:700;color:var(--blue-light);font-size:12px;width:75px;flex-shrink:0">${sub.code}</span>
        <span style="font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${sub.name}</span>
      </a>
    `;
  });

  // Collect documents (especially Aashish's PDFs)
  let docsHtml = '';
  students.forEach(s => {
    if (s.documents && s.documents.length > 0) {
      docsHtml += `<div class="nav-dropdown-heading">${s.name} Documents (${s.documents.length})</div>`;
      s.documents.forEach(doc => {
        docsHtml += `
          <a href="javascript:void(0)" onclick="window.open('${doc.file}','_blank')" class="nav-dropdown-item">
            <span style="color:var(--amber-light);font-size:14px">📄</span>
            <span style="font-size:12px;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${doc.label}</span>
            <span style="font-size:10px;color:var(--text-muted);border:1px solid rgba(255,255,255,0.1);padding:1px 5px;border-radius:4px">PDF ↗</span>
          </a>
        `;
      });
    }
  });
  if (!docsHtml) {
    docsHtml = `<div style="padding:12px;font-size:12px;color:var(--text-muted);text-align:center">Koi document nahi mila</div>`;
  }

  // Quick switch options
  let switchOptions = '<option value="">👨‍🎓 Switch Student...</option>';
  students.forEach(s => {
    const sel = currentStudentId === s.id ? 'selected' : '';
    switchOptions += `<option value="${s.id}" ${sel}>${s.name} (Sem ${s.semester})</option>`;
  });

  header.innerHTML = `
    <div class="nav-left">
      <a class="logo" href="index.html">
        <span class="logo-icon">🎓</span>
        <div>
          <div class="logo-text">EduTrack</div>
          <div class="logo-sub">BCA Progress Tracker</div>
        </div>
      </a>

      <nav class="nav-menu" id="navMenu">
        <a href="index.html" class="nav-item ${activePage === 'home' ? 'active' : ''}">
          <span>🏠</span> Home
        </a>

        <!-- STUDENTS DROPDOWN -->
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn nav-item ${activePage === 'student' ? 'active' : ''}" type="button">
            <span>👨‍🎓</span> Students <span class="nav-caret">▾</span>
          </button>
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-heading">Sabhi Students (${students.length})</div>
            ${studentsHtml}
          </div>
        </div>

        <!-- SUBJECTS DROPDOWN -->
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn nav-item ${activePage === 'subject' ? 'active' : ''}" type="button">
            <span>📚</span> BCA Subjects <span class="nav-caret">▾</span>
          </button>
          <div class="nav-dropdown-menu">
            ${subjectsHtml}
          </div>
        </div>

        <!-- DOCUMENTS DROPDOWN -->
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn nav-item" type="button">
            <span>📄</span> Documents &amp; PDFs <span class="nav-caret">▾</span>
          </button>
          <div class="nav-dropdown-menu">
            ${docsHtml}
          </div>
        </div>

        <!-- BACKUP & DATA DROPDOWN -->
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn nav-item" type="button">
            <span>💾</span> Backup &amp; Data <span class="nav-caret">▾</span>
          </button>
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-heading">Database Backup &amp; Restore</div>
            <a href="javascript:void(0)" onclick="exportDatabaseJSON()" class="nav-dropdown-item">
              <span style="font-size:16px">📤</span>
              <div style="flex:1">
                <div style="font-weight:600">Export JSON Backup</div>
                <div style="font-size:11px;color:var(--text-muted)">Download current database</div>
              </div>
            </a>
            <a href="javascript:void(0)" onclick="openBackupModal()" class="nav-dropdown-item">
              <span style="font-size:16px">📥</span>
              <div style="flex:1">
                <div style="font-weight:600">Import / Restore JSON</div>
                <div style="font-size:11px;color:var(--text-muted)">Upload JSON file to restore</div>
              </div>
            </a>
            <a href="javascript:void(0)" onclick="resetDatabaseDefaults()" class="nav-dropdown-item" style="color:var(--red-light)">
              <span style="font-size:16px">🔄</span>
              <div style="flex:1">
                <div style="font-weight:600">Reset to Defaults</div>
                <div style="font-size:11px;color:var(--text-muted)">Restore sample BCA records</div>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div class="nav-right">
      <div class="nav-switcher">
        <select class="nav-select" id="navQuickSelect" onchange="handleNavStudentSwitch(this.value)">
          ${switchOptions}
        </select>
      </div>

      <button class="btn btn-secondary btn-sm" onclick="openBackupModal()" title="Database Backup / Restore" style="padding:7px 12px">
        <span>💾 Backup</span>
      </button>

      <button class="btn btn-primary btn-sm" onclick="handleNavAddStudent()">
        <span>+ Add Student</span>
      </button>

      <button class="nav-hamburger" id="navHamburger" aria-label="Menu" onclick="toggleMobileNav()">
        ☰
      </button>
    </div>
  `;

  // Inject or update mobile drawer
  let drawer = document.getElementById('mobileNavDrawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'mobileNavDrawer';
    drawer.className = 'mobile-nav-drawer';
    header.parentNode.insertBefore(drawer, header.nextSibling);
  }

  drawer.innerHTML = `
    <a href="index.html" class="mobile-nav-item ${activePage === 'home' ? 'active' : ''}">
      <span>🏠</span> Home (Sabhi Students)
    </a>
    <div class="mobile-nav-heading">👨‍🎓 Students List</div>
    ${studentsHtml}
    <div class="mobile-nav-heading">📚 BCA Subjects (Sem ${curSem})</div>
    ${subjectsHtml}
    <div class="mobile-nav-heading">📄 Documents & Results</div>
    ${docsHtml}
    <div class="mobile-nav-heading">💾 Database Backup & Data</div>
    <a href="javascript:void(0)" onclick="exportDatabaseJSON()" class="mobile-nav-item">
      <span>📤</span> Export JSON Backup
    </a>
    <a href="javascript:void(0)" onclick="openBackupModal()" class="mobile-nav-item">
      <span>📥</span> Import / Restore Backup
    </a>
    <div style="padding:10px 0 4px;display:flex;flex-direction:column;gap:8px">
      <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="handleNavAddStudent()">
        + Add New Student
      </button>
    </div>
  `;

  // Ensure Backup Modal and Gemini Chatbot exist on page
  ensureBackupModalDOM();
  initGeminiChatbot();
}

function handleNavStudentSwitch(val) {
  if (!val) return;
  window.open('student.html?id=' + val, '_blank');
}

function handleNavAddStudent() {
  if (typeof openAddModal === 'function') {
    openAddModal();
  } else {
    window.location.href = 'index.html?add=1';
  }
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

// ── EXPORT / IMPORT DATABASE (JSON) ─────────────────
function exportDatabaseJSON() {
  const db = loadDB();
  const payload = {
    appName: "EduTrack - BCA Student Progress Tracker",
    version: "2.0",
    exportedAt: new Date().toISOString(),
    totalStudents: (db.students || []).length,
    students: db.students || []
  };

  const jsonStr = JSON.stringify(payload, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const filename = `edutrack_bca_backup_${dateStr}.json`;

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`💾 Backup exported (${payload.totalStudents} students)!`, "var(--green-light)");
}

let _stagedImportData = null;

function openBackupModal() {
  ensureBackupModalDOM();
  _stagedImportData = null;
  const db = loadDB();
  const countEl = document.getElementById("backupStudentCount");
  if (countEl) countEl.textContent = (db.students || []).length;
  
  const previewBox = document.getElementById("backupPreviewBox");
  if (previewBox) previewBox.innerHTML = "";
  
  const fileInput = document.getElementById("backupFileInput");
  if (fileInput) fileInput.value = "";

  const modal = document.getElementById("backupModal");
  if (modal) modal.classList.add("open");
}

function closeBackupModal() {
  const modal = document.getElementById("backupModal");
  if (modal) modal.classList.remove("open");
}

function handleBackupFileSelect(input) {
  const file = input.files && input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      let students = null;

      if (Array.isArray(data)) {
        students = data;
      } else if (data && Array.isArray(data.students)) {
        students = data.students;
      }

      if (!students || !students.length) {
        throw new Error("Is file me koi valid student data nahi mila!");
      }

      const valid = students.every(s => s && s.name);
      if (!valid) {
        throw new Error("Student format sahi nahi hai (har student ka 'name' hona zaroori hai).");
      }

      _stagedImportData = students;
      const previewBox = document.getElementById("backupPreviewBox");
      if (previewBox) {
        previewBox.innerHTML = `
          <div class="backup-preview-badge">
            ✅ <strong>${file.name}</strong> • ${students.length} students detect huye!
          </div>
        `;
      }
      showToast(`📁 File read: ${students.length} students detect huye!`, "var(--blue-light)");
    } catch (err) {
      _stagedImportData = null;
      const previewBox = document.getElementById("backupPreviewBox");
      if (previewBox) {
        previewBox.innerHTML = `
          <div style="color:var(--red-light);font-size:12px;margin-top:8px">
            ❌ Invalid JSON File: ${err.message}
          </div>
        `;
      }
      showToast("❌ File parse nahi ho saki!", "var(--red-light)");
    }
  };
  reader.readAsText(file);
}

function restoreDatabaseJSON() {
  if (!_stagedImportData || !_stagedImportData.length) {
    showToast("⚠️ Pehle koi valid JSON file choose karein!", "var(--amber-light)");
    return;
  }

  const mode = document.querySelector('input[name="backupMode"]:checked')?.value || "merge";
  let db = loadDB();

  if (mode === "replace") {
    db.students = _stagedImportData;
  } else {
    // Merge: update existing by ID or enrollment or append
    _stagedImportData.forEach(imported => {
      const existingIdx = db.students.findIndex(s => 
        (imported.id && s.id === imported.id) || 
        (imported.enrollment && s.enrollment && s.enrollment === imported.enrollment)
      );
      if (existingIdx !== -1) {
        db.students[existingIdx] = { ...db.students[existingIdx], ...imported };
      } else {
        if (!imported.id) imported.id = nextId(db.students);
        db.students.push(imported);
      }
    });
  }

  saveDB(db);
  closeBackupModal();
  showToast(`🎉 Database restore safal raha (${db.students.length} students total)!`, "var(--green-light)");

  // Re-render current page
  if (typeof renderCards === "function") renderCards();
  if (typeof renderStats === "function") renderStats();
  if (typeof init === "function" && window.location.pathname.includes("student.html")) init();
  if (typeof init === "function" && window.location.pathname.includes("subject.html")) init();
  
  // Re-render navbar
  const curPage = window.location.pathname.includes("student.html") ? "student" :
                  window.location.pathname.includes("subject.html") ? "subject" : "home";
  renderGlobalNavbar(curPage);
}

function resetDatabaseDefaults() {
  if (!confirm("⚠️ Kya aap poora database reset karke default sample students (Aashish Kumar ke saath) restore karna chahte hain?")) {
    return;
  }
  const defaultStudents = getDefaultStudents();
  saveDB({ students: defaultStudents });
  showToast("🔄 Database reset ho gaya!", "var(--blue-light)");
  setTimeout(() => location.reload(), 600);
}

function ensureBackupModalDOM() {
  if (document.getElementById("backupModal")) return;

  const modal = document.createElement("div");
  modal.id = "backupModal";
  modal.className = "modal-overlay";
  modal.onclick = function(e) { if (e.target === this) closeBackupModal(); };

  modal.innerHTML = `
    <div class="modal-box" style="max-width:520px">
      <button class="modal-close" onclick="closeBackupModal()">✕</button>
      <div class="modal-title">💾 Database Backup &amp; Restore</div>
      
      <div style="font-size:13px;color:var(--text-muted);margin-bottom:18px">
        Current Database: <strong id="backupStudentCount" style="color:var(--blue-light)">-</strong> Students registered
      </div>

      <!-- EXPORT SECTION -->
      <div class="backup-section-card">
        <div class="backup-section-header">
          <div class="backup-section-title"><span>📤</span> Export Database (JSON)</div>
        </div>
        <div class="backup-section-desc">
          Apne sabhi students ki details, subject marks, theory/assignment progress aur document links ko ek offline JSON file me download karein.
        </div>
        <button class="btn btn-primary btn-sm" onclick="exportDatabaseJSON()">
          <span>💾 Download JSON Backup</span>
        </button>
      </div>

      <!-- IMPORT SECTION -->
      <div class="backup-section-card">
        <div class="backup-section-header">
          <div class="backup-section-title"><span>📥</span> Import / Restore (JSON)</div>
        </div>
        <div class="backup-section-desc">
          Kisi bhi JSON backup file ko select karein aur student data restore karein.
        </div>

        <div class="backup-dropzone" onclick="document.getElementById('backupFileInput').click()">
          <span style="font-size:24px">📁</span>
          <div style="font-size:13px;font-weight:600;margin-top:6px;color:var(--blue-light)">
            JSON File Choose Karein (Click ya Drop)
          </div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:2px">Support: .json files</div>
          <input type="file" id="backupFileInput" accept=".json,application/json" onchange="handleBackupFileSelect(this)"/>
        </div>

        <div id="backupPreviewBox"></div>

        <div class="backup-mode-group">
          <label>
            <input type="radio" name="backupMode" value="merge" checked/>
            <span><strong>Merge</strong> (Naye add karein, existing update)</span>
          </label>
          <label>
            <input type="radio" name="backupMode" value="replace"/>
            <span><strong>Replace All</strong> (Purana saaf karein)</span>
          </label>
        </div>

        <div style="margin-top:14px;display:flex;gap:10px">
          <button class="btn btn-primary btn-sm" onclick="restoreDatabaseJSON()" style="flex:1;justify-content:center">
            <span>🚀 Restore Students Data</span>
          </button>
        </div>
      </div>

      <!-- RESET SECTION -->
      <div style="text-align:center;margin-top:12px">
        <button type="button" class="btn btn-secondary btn-sm" onclick="resetDatabaseDefaults()" style="color:var(--red-light);border-color:rgba(239,68,68,0.3)">
          🔄 Reset to Default IGNOU Data
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// ── GEMINI AI BCA CHATBOT WIDGET ────────────────────
function initGeminiChatbot() {
  if (document.getElementById("aiChatBtn")) return;

  const btn = document.createElement("button");
  btn.id = "aiChatBtn";
  btn.className = "ai-chat-btn";
  btn.onclick = toggleGeminiChat;
  btn.innerHTML = `
    <span class="ai-pulse-dot"></span>
    <span>✨ Ask BCA AI</span>
  `;
  document.body.appendChild(btn);

  const box = document.createElement("div");
  box.id = "aiChatBox";
  box.className = "ai-chat-box";
  box.innerHTML = `
    <div class="ai-chat-header">
      <div class="ai-chat-header-info">
        <div class="ai-chat-avatar">🤖</div>
        <div>
          <div class="ai-chat-title">EduBot — BCA AI Assistant</div>
          <div class="ai-chat-status">
            <span style="width:6px;height:6px;background:#34d399;border-radius:50%"></span>
            Connected to Database
          </div>
        </div>
      </div>
      <button class="ai-chat-close" onclick="toggleGeminiChat()">✕</button>
    </div>

    <div class="ai-chat-chips">
      <button class="ai-chip" onclick="askGeminiChip('Aashish Kumar ki summary batayein')">📊 Aashish Summary</button>
      <button class="ai-chip" onclick="askGeminiChip('BCS-053 Web Programming ke baare me batayein')">🌐 BCS-053</button>
      <button class="ai-chip" onclick="askGeminiChip('Database me kitne students hain?')">👥 Total Students</button>
      <button class="ai-chip" onclick="askGeminiChip('JSON backup kaise download karein?')">💾 JSON Backup</button>
    </div>

    <div class="ai-chat-messages" id="aiChatMessages">
      <div class="ai-msg ai-msg-bot">
        👋 <strong>Namaste!</strong> Main aapka BCA AI Assistant hoon.<br/>
        Main aapke database se student progress, BCA subjects (Sem 1-6), documents aur backups ke baare me bata sakta hoon. Kuch bhi poochiye!
      </div>
    </div>

    <form class="ai-chat-input-bar" onsubmit="handleGeminiChatSubmit(event)">
      <input type="text" id="aiChatInput" class="ai-chat-input" placeholder="BCA ya student ke baare me poochein..." autocomplete="off"/>
      <button type="submit" class="ai-chat-send" title="Send">➤</button>
    </form>
  `;
  document.body.appendChild(box);
}

function toggleGeminiChat() {
  const box = document.getElementById("aiChatBox");
  if (!box) return;
  box.classList.toggle("open");
  if (box.classList.contains("open")) {
    document.getElementById("aiChatInput")?.focus();
  }
}

function askGeminiChip(text) {
  const input = document.getElementById("aiChatInput");
  if (input) {
    input.value = text;
    handleGeminiChatSubmit(new Event('submit'));
  }
}

function handleGeminiChatSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("aiChatInput");
  const query = input.value.trim();
  if (!query) return;

  const msgs = document.getElementById("aiChatMessages");
  msgs.innerHTML += `<div class="ai-msg ai-msg-user">${escapeHtml(query)}</div>`;
  input.value = "";
  msgs.scrollTop = msgs.scrollHeight;

  // Bot thinking simulation & intelligent answer
  setTimeout(() => {
    const answer = generateGeminiAnswer(query);
    msgs.innerHTML += `<div class="ai-msg ai-msg-bot">${answer}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 400);
}

function generateGeminiAnswer(query) {
  const q = query.toLowerCase();
  const db = loadDB();
  const students = db.students || [];

  // Question about Aashish or specific student
  const matchedStudent = students.find(s => q.includes(s.name.toLowerCase()) || q.includes((s.enrollment||'').toLowerCase()));
  if (matchedStudent) {
    const st = getStudentStats(matchedStudent);
    return `
      👨‍🎓 <strong>${matchedStudent.name}</strong> (Enrollment: ${matchedStudent.enrollment || 'N/A'})<br/>
      • <strong>Semester:</strong> ${matchedStudent.semester}<br/>
      • <strong>Subjects Status:</strong> ${st.fullyComplete}/${st.total} Fully Complete (${st.pct}%)<br/>
      • <strong>Theory Pending:</strong> ${st.theoryPending} | <strong>Assign Pending:</strong> ${st.assignPending}<br/>
      • <strong>Documents:</strong> ${(matchedStudent.documents || []).length} PDFs attached.<br/>
      <a href="student.html?id=${matchedStudent.id}" target="_blank" style="color:var(--blue-light);font-weight:600;display:inline-block;margin-top:6px">🔗 Student Profile Kholein ↗</a>
    `;
  }

  // Question about Backup / JSON Export
  if (q.includes('backup') || q.includes('json') || q.includes('export') || q.includes('import') || q.includes('restore')) {
    return `
      💾 <strong>JSON Backup & Restore Guide:</strong><br/>
      1. <strong>Export JSON:</strong> Top navbar me <em>Backup & Data ▾ → Export JSON</em> dabayein. Ek <code>.json</code> file download ho jayegi.<br/>
      2. <strong>Import / Restore:</strong> <em>Import / Restore</em> par click karke apni JSON backup file choose karein aur <strong>Restore</strong> par click karein!<br/>
      3. Sabhi students, subject status aur documents safe rehte hain!
    `;
  }

  // Question about Total students
  if (q.includes('kitne student') || q.includes('total student') || q.includes('students')) {
    const names = students.map(s => `<strong>${s.name}</strong> (Sem ${s.semester})`).join(', ');
    return `
      👥 <strong>Database Status:</strong><br/>
      Currently <strong>${students.length} students</strong> registered hain:<br/>
      ${names}<br/>
      Kisi bhi student ka detail dekhne ke liye Students dropdown se unka naam choose karein.
    `;
  }

  // Question about BCS-053
  if (q.includes('bcs-053') || q.includes('web programming')) {
    return `
      🌐 <strong>BCS-053: Web Programming</strong><br/>
      • <strong>Semester:</strong> 5 | <strong>Credits:</strong> 2<br/>
      • <strong>Topics:</strong> HTML, CSS, JavaScript, XML, HTTP, JSP & Server Architecture.<br/>
      • Aashish Kumar ke record me iska Assignment complete hai aur Theory pending hai.
    `;
  }

  // Question about Semesters / BCA Subjects
  for (let sem = 1; sem <= 6; sem++) {
    if (q.includes(`sem ${sem}`) || q.includes(`semester ${sem}`)) {
      const subs = BCA_SUBJECTS[sem] || [];
      const subList = subs.map(s => `• <strong>${s.code}</strong>: ${s.name} (${s.credits} cr)`).join('<br/>');
      return `
        📚 <strong>BCA Semester ${sem} Subjects (${subs.length}):</strong><br/>
        ${subList}
      `;
    }
  }

  // Default intelligent assistant response
  return `
    💡 Main aapke BCA database se connect hoon! Aap mujhse pooch sakte hain:<br/>
    • Kisi student ki progress (jaise <em>"Aashish Kumar"</em> ya <em>"Vaishnavi"</em>)<br/>
    • Kisi subject ke baare me (jaise <em>"BCS-053"</em> ya <em>"Semester 5"</em>)<br/>
    • <em>"JSON backup kaise download karein?"</em>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}


