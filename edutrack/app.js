/**
 * 🎓 EduTrack — BCA Student Progress Tracker
 * Shared Data & Core Application Logic
 * Pure Vanilla JavaScript (Works 100% Offline)
 */

// ── BCA SUBJECTS (IGNOU Programme All 6 Semesters) ──────────────────────
const BCA_SUBJECTS = {
  1: [
    { code: 'FEG-02',   name: 'Foundation Course in English-2',           credits: 4, type: 'Theory' },
    { code: 'ECO-01',   name: 'Business Organization',                    credits: 4, type: 'Theory' },
    { code: 'BCS-011',  name: 'Computer Basics and PC Software',          credits: 3, type: 'Theory' },
    { code: 'BCS-012',  name: 'Basic Mathematics',                        credits: 4, type: 'Theory' },
    { code: 'BCSL-013', name: 'Computer Basics and PC Software Lab',      credits: 2, type: 'Lab' },
  ],
  2: [
    { code: 'ECO-02',   name: 'Accountancy-1',                            credits: 4, type: 'Theory' },
    { code: 'MCS-011',  name: 'Problem Solving and Programming',          credits: 3, type: 'Theory' },
    { code: 'MCS-012',  name: 'Computer Organization and Assembly Language', credits: 4, type: 'Theory' },
    { code: 'MCS-013',  name: 'Discrete Mathematics',                     credits: 2, type: 'Theory' },
    { code: 'MCS-015',  name: 'Communication Skills',                     credits: 2, type: 'Theory' },
    { code: 'BCSL-021', name: 'C Language Programming Lab',               credits: 1, type: 'Lab' },
    { code: 'BCSL-022', name: 'Assembly Language Programming Lab',        credits: 1, type: 'Lab' },
  ],
  3: [
    { code: 'MCS-014',  name: 'Systems Analysis and Design',              credits: 3, type: 'Theory' },
    { code: 'MCS-021',  name: 'Data and File Structures',                 credits: 4, type: 'Theory' },
    { code: 'MCS-023',  name: 'Introduction to DBMS',                     credits: 3, type: 'Theory' },
    { code: 'BCS-031',  name: 'Programming in C++',                       credits: 3, type: 'Theory' },
    { code: 'BCSL-032', name: 'C++ Programming Lab',                      credits: 1, type: 'Lab' },
    { code: 'BCSL-033', name: 'Data and File Structures Lab',             credits: 1, type: 'Lab' },
    { code: 'BCSL-034', name: 'DBMS Lab',                                 credits: 1, type: 'Lab' },
  ],
  4: [
    { code: 'BCS-040',  name: 'Statistical Techniques',                   credits: 4, type: 'Theory' },
    { code: 'MCS-024',  name: 'Object Oriented Technologies and Java',    credits: 3, type: 'Theory' },
    { code: 'BCS-041',  name: 'Fundamentals of Computer Networks',        credits: 4, type: 'Theory' },
    { code: 'BCS-042',  name: 'Introduction to Algorithm Design',         credits: 2, type: 'Theory' },
    { code: 'MCSL-016', name: 'Internet Concepts and Web Design',         credits: 2, type: 'Lab' },
    { code: 'BCSL-043', name: 'Java Programming Lab',                     credits: 1, type: 'Lab' },
    { code: 'BCSL-044', name: 'Statistical Techniques Lab',               credits: 1, type: 'Lab' },
    { code: 'BCSL-045', name: 'Algorithm Design Lab',                     credits: 1, type: 'Lab' },
  ],
  5: [
    { 
      code: 'BCS-051',  
      name: 'Introduction to Software Engineering',     
      credits: 3, 
      type: 'Theory',
      blocks: [
        { title: 'Block 1: Development Methodologies', units: ['Unit 1: Software Lifecycle Models & Agile', 'Unit 2: Requirement Analysis & DFDs', 'Unit 3: Object-Oriented Modeling with UML'] },
        { title: 'Block 2: Software Quality & Maintenance', units: ['Unit 1: Black-Box & White-Box Testing', 'Unit 2: Software Metrics & Reliability', 'Unit 3: Maintenance & Re-engineering'] }
      ]
    },
    { 
      code: 'BCS-052',  
      name: 'Network Programming and Administration',   
      credits: 3, 
      type: 'Theory',
      blocks: [
        { title: 'Block 1: Socket Programming & TCP/IP', units: ['Unit 1: Network Architecture & Sockets', 'Unit 2: Client-Server Paradigms in C/Java', 'Unit 3: Multithreaded Network Services'] },
        { title: 'Block 2: Network Administration & Security', units: ['Unit 1: DNS, DHCP, Web & Mail Config', 'Unit 2: Firewalls, NAT & Routing Protocols', 'Unit 3: IP Security & SSL/TLS'] }
      ]
    },
    { 
      code: 'BCS-053',  
      name: 'Web Programming',                          
      credits: 2, 
      type: 'Theory',
      blocks: [
        { title: 'Block 1: Basics of Web Technology & HTML', units: ['Unit 1: Internet concepts, URLs, HTTP headers, DNS and Web Servers configuration', 'Unit 2: HTML foundational tags, structural tables, forms, frames, and multimedia embeds', 'Unit 3: Cascading Style Sheets (CSS), pseudo-classes, font rules, layout boxes, and layers'] },
        { title: 'Block 2: Client-Side Scripting Languages', units: ['Unit 1: JavaScript programming, data types, control logic, arrays, and standard libraries', 'Unit 2: Document Object Model (DOM), Window hierarchy, browser detection, form validation', 'Unit 3: VBScript language syntax, message dialogs, runtime error handlers, and ActiveX controls'] }
      ]
    },
    { 
      code: 'BCS-054',  
      name: 'Computer Oriented Numerical Techniques',   
      credits: 3, 
      type: 'Theory',
      blocks: [
        { title: 'Block 1: Numerical Solutions of Equations', units: ['Unit 1: Floating-Point Errors & Computer Arithmetic', 'Unit 2: Bisection, Regula-Falsi & Newton-Raphson', 'Unit 3: Gauss Elimination & LU Decomposition'] },
        { title: 'Block 2: Interpolation & Numerical Calculus', units: ['Unit 1: Lagrange & Newton Divided Difference', 'Unit 2: Trapezoidal & Simpson 1/3 Rules', 'Unit 3: Runge-Kutta 4th Order ODE Solutions'] }
      ]
    },
    { 
      code: 'BCS-055',  
      name: 'Business Communication',                   
      credits: 2, 
      type: 'Theory',
      blocks: [
        { title: 'Block 1: Business Writing Essentials', units: ['Unit 1: Principles of Business Correspondence', 'Unit 2: Memorandum, Minutes & Agenda Preparation', 'Unit 3: Project Proposals & Executive Reports'] },
        { title: 'Block 2: Oral & Professional Interaction', units: ['Unit 1: Group Discussions & Presentation Skills', 'Unit 2: Interview Techniques & Body Language', 'Unit 3: Workplace Ethics & Cross-Cultural Dialogues'] }
      ]
    },
    { code: 'BCSL-056', name: 'Network Programming Lab',                  credits: 1, type: 'Lab' },
    { code: 'BCSL-057', name: 'Web Programming Lab',                      credits: 1, type: 'Lab' },
    { code: 'BCSL-058', name: 'Numerical Techniques Lab',                 credits: 1, type: 'Lab' },
  ],
  6: [
    { code: 'BCS-062',  name: 'E-Commerce',                               credits: 2, type: 'Theory' },
    { code: 'MCS-022',  name: 'Operating System Concepts and Networking', credits: 4, type: 'Theory' },
    { code: 'BCSL-063', name: 'OS and Networking Lab',                    credits: 1, type: 'Lab' },
    { code: 'BCSP-064', name: 'Project',                                  credits: 8, type: 'Project' },
  ],
};

// ── DEFAULT STUDENTS ─────────────────────────────────────
function getDefaultStudents() {
  return [
    {
      id: 1,
      name: 'Aashish Kumar',
      enrollment: 'BCA2022002',
      semester: 5,
      contact: '+91 98765 43210',
      email: 'aashish.bca22@ignou.ac.in',
      center: 'Delhi-2 (07) • RC-0731',
      colorIdx: 0,
      documents: [
        { label: '1st Sem IGNOU Result', file: '../Aashish Document/1st sem IGNOU TERM-END RESULTS.pdf', sem: 1, term: 'Dec 2022' },
        { label: '2nd Sem IGNOU Result', file: '../Aashish Document/2st sem IGNOU TERM-END RESULTS.pdf', sem: 2, term: 'June 2023' },
        { label: '3rd Sem IGNOU Result', file: '../Aashish Document/3rd sem IGNOU TERM-END RESULTS.pdf', sem: 3, term: 'Dec 2023' },
        { label: '4th Sem IGNOU Result', file: '../Aashish Document/4th IGNOU TERM-END RESULTS.pdf', sem: 4, term: 'June 2024' },
        { label: '5th Sem IGNOU Result', file: '../Aashish Document/5th IGNOU TERM-END RESULTS.pdf', sem: 5, term: 'Dec 2024' },
        { label: 'BCA Grade Card',       file: '../Aashish Document/Aashish_BCA_Grade_Card.pdf', sem: 5, term: 'Consolidated' },
      ],
      subjects: {
        'BCS-051':  { theory: 'complete', assignment: 'complete' },
        'BCS-052':  { theory: 'complete', assignment: 'complete' },
        'BCS-053':  { theory: 'pending',  assignment: 'complete' },
        'BCS-054':  { theory: 'complete', assignment: 'complete' },
        'BCS-055':  { theory: 'complete', assignment: 'complete' },
        'BCSL-056': { theory: 'complete', assignment: 'complete' },
        'BCSL-057': { theory: 'pending',  assignment: 'pending'  },
        'BCSL-058': { theory: 'complete', assignment: 'complete' },
      }
    },
    {
      id: 2,
      name: 'Vaishnavi Sharma',
      enrollment: 'BCA2022001',
      semester: 3,
      contact: '+91 98111 22334',
      email: 'vaishnavi.bca@ignou.ac.in',
      center: 'Delhi-1 (01) • RC-0711',
      colorIdx: 1,
      documents: [
        { label: 'ID Card & Registration Slip', file: '../Vaishnavi_ID-card.pdf', sem: 3, term: '2023-2024' },
        { label: '1st Sem Term-End Result',     file: '../Vaishnavi_Sem1_Result.pdf', sem: 1, term: 'Dec 2022' },
        { label: '2nd Sem Term-End Result',     file: '../Vaishnavi_Sem2_Result.pdf', sem: 2, term: 'June 2023' },
      ],
      subjects: {
        'MCS-014':  { theory: 'complete', assignment: 'complete' },
        'MCS-021':  { theory: 'complete', assignment: 'complete' },
        'MCS-023':  { theory: 'pending',  assignment: 'complete' },
        'BCS-031':  { theory: 'complete', assignment: 'pending'  },
        'BCSL-032': { theory: 'complete', assignment: 'complete' },
        'BCSL-033': { theory: 'pending',  assignment: 'pending'  },
        'BCSL-034': { theory: 'complete', assignment: 'complete' },
      }
    }
  ];
}

// ── LOCALSTORAGE PERSISTENCE ─────────────────────────────
const STORE_KEY = 'bca_edutrack_v3';

function loadDB() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.students) && parsed.students.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('EduTrack: Could not parse localStorage DB, resetting to defaults.', err);
  }
  const defaultDB = { students: getDefaultStudents() };
  saveDB(defaultDB);
  return defaultDB;
}

function saveDB(db) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(db));
  } catch (err) {
    console.error('EduTrack: Could not save DB to localStorage.', err);
  }
}

// ── GLOBAL NAVIGATION HELPERS ────────────────────────────
function getActiveStudentId() {
  const urlParam = new URLSearchParams(window.location.search).get('id') || new URLSearchParams(window.location.search).get('student');
  if (urlParam) {
    const parsed = parseInt(urlParam, 10);
    localStorage.setItem('edutrack_active_student', String(parsed));
    return parsed;
  }
  const saved = localStorage.getItem('edutrack_active_student');
  if (saved) return parseInt(saved, 10);
  const db = loadDB();
  return (db.students && db.students[0]) ? db.students[0].id : 1;
}

function setActiveStudentId(id) {
  localStorage.setItem('edutrack_active_student', String(id));
}

function getActiveSubjectCode() {
  const urlParam = new URLSearchParams(window.location.search).get('subject');
  if (urlParam) {
    localStorage.setItem('edutrack_active_subject', urlParam);
    return urlParam;
  }
  return localStorage.getItem('edutrack_active_subject') || 'BCS-053';
}

function setActiveSubjectCode(code) {
  localStorage.setItem('edutrack_active_subject', code);
}

// ── UTILITIES ────────────────────────────────────────────
const AVATAR_COLORS = [
  '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b',
  '#ef4444', '#06b6d4', '#ec4899', '#84cc16'
];

function getColor(idx) {
  return AVATAR_COLORS[(idx || 0) % AVATAR_COLORS.length];
}

function getInitials(name) {
  if (!name) return 'ST';
  return name.trim().split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

function getSubjects(sem) {
  return BCA_SUBJECTS[parseInt(sem, 10)] || [];
}

function getStats(student) {
  const list = getSubjects(student.semester);
  let tc = 0; // Theory complete
  let ac = 0; // Assignment complete
  let fc = 0; // Fully complete (both theory and assignment)

  list.forEach(s => {
    const st = (student.subjects && student.subjects[s.code]) || { theory: 'pending', assignment: 'pending' };
    if (st.theory === 'complete') tc++;
    if (st.assignment === 'complete') ac++;
    if (st.theory === 'complete' && st.assignment === 'complete') fc++;
  });

  const total = list.length;
  return {
    total,
    theoryComplete: tc,
    assignComplete: ac,
    fullyComplete: fc,
    theoryPending: total - tc,
    assignPending: total - ac,
    pct: total ? Math.round((fc / total) * 100) : 0
  };
}

// ── FLOATING TOAST NOTIFICATION ──────────────────────────
let toastTimeout = null;

function showToast(message, icon = '✅') {
  let toastEl = document.getElementById('globalToast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'globalToast';
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }

  toastEl.innerHTML = `<span style="font-size: 16px;">${icon}</span> <span>${message}</span>`;
  toastEl.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2500);
}

// ── GLOBAL PDF VIEWER / LOCAL FILE HANDLER ────────────────
function openPDF(filePath, label = 'Academic Document') {
  if (!filePath) {
    showToast('File path not provided!', '⚠️');
    return;
  }

  // 1. Trigger open in a new browser tab
  try {
    window.open(filePath, '_blank');
  } catch (e) {
    console.error(e);
  }

  showToast(`Opening: ${label}`, '📂');

  // 2. Also ensure a fallback preview modal exists if opened offline without server PDF file
  showDocumentPreviewModal(filePath, label);
}

function showDocumentPreviewModal(filePath, label) {
  let modal = document.getElementById('docPreviewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'docPreviewModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-box" style="max-width: 600px;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(239,68,68,0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 18px;">
              📄
            </div>
            <div>
              <h3 id="previewDocTitle" style="font-size: 16px; font-weight: 700; color: #fff;">Document Preview</h3>
              <p id="previewDocPath" style="font-size: 11px; font-family: 'JetBrains Mono', monospace; color: #94a3b8; word-break: break-all;"></p>
            </div>
          </div>
          <button id="closeDocPreviewBtn" style="background: transparent; border: none; color: #94a3b8; font-size: 20px; cursor: pointer; padding: 4px;">✕</button>
        </div>

        <div style="background: rgba(10,15,30,0.85); border: 1px solid rgba(30,45,74,0.8); border-radius: 10px; padding: 18px; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid rgba(30,45,74,0.8); padding-bottom: 8px;">
            <span style="font-size: 12px; font-weight: 700; color: #3b82f6;">🏛️ INDIRA GANDHI NATIONAL OPEN UNIVERSITY</span>
            <span style="font-size: 10px; color: #10b981; font-weight: 700; background: rgba(16,185,129,0.15); padding: 2px 8px; border-radius: 50px;">PROVISIONAL RECORD</span>
          </div>
          <p style="font-size: 12px; color: #cbd5e1; line-height: 1.6; margin-bottom: 10px;">
            Target Document: <b id="previewDocHeading" style="color: #fff;"></b><br>
            Local storage path: <code id="previewDocCode" style="color: #60a5fa; font-family: 'JetBrains Mono'; font-size: 11px;"></code>
          </p>
          <div style="background: rgba(17,24,39,0.9); border: 1px dashed rgba(59,130,246,0.4); border-radius: 8px; padding: 12px; text-align: center;">
            <p style="font-size: 11px; color: #94a3b8; margin-bottom: 8px;">
              Direct offline file reference opened in new browser tab.
            </p>
            <div style="display: flex; justify-content: center; gap: 8px;">
              <a id="previewDirectLink" href="#" target="_blank" class="btn btn-primary btn-sm">
                <span>🔗 Open File URL</span>
              </a>
              <button onclick="document.getElementById('docPreviewModal').classList.remove('open')" class="btn btn-outline btn-sm">
                <span>Dismiss</span>
              </button>
            </div>
          </div>
        </div>

        <button onclick="document.getElementById('docPreviewModal').classList.remove('open')" class="btn btn-outline" style="width: 100%;">
          Close Window
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#closeDocPreviewBtn').addEventListener('click', () => {
      modal.classList.remove('open');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  modal.querySelector('#previewDocTitle').textContent = label;
  modal.querySelector('#previewDocHeading').textContent = label;
  modal.querySelector('#previewDocPath').textContent = filePath;
  modal.querySelector('#previewDocCode').textContent = filePath;
  modal.querySelector('#previewDirectLink').href = filePath;
  modal.classList.add('open');
}

// ── BACKUP / EXPORT & IMPORT UTILITIES ────────────────────

/**
 * Generates structured JSON backup with metadata
 */
function generateBackupData() {
  const db = loadDB();
  return {
    _meta: {
      app: 'EduTrack — BCA Student Progress Tracker',
      version: '3.0',
      exportDate: new Date().toISOString(),
      studentCount: (db.students || []).length,
      storageKey: STORE_KEY,
      description: 'Comprehensive IGNOU BCA academic progress, live theory/assignment evaluation, and local PDF references.'
    },
    students: db.students || []
  };
}

/**
 * Triggers file download of the database as a formatted JSON file
 */
function exportDatabase() {
  const backup = generateBackupData();
  const dateStr = new Date().toISOString().slice(0, 10);
  const fileName = `edutrack_bca_backup_${dateStr}.json`;
  const jsonStr = JSON.stringify(backup, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showToast(`Backup downloaded: ${fileName}`, '💾');
}

/**
 * Validates and restores backup data
 * @param {string|object} input - JSON string or parsed object
 * @param {'replace'|'merge'} mode - Overwrite all or merge records
 */
function restoreBackupData(input, mode = 'replace') {
  try {
    let parsed = typeof input === 'string' ? JSON.parse(input) : input;
    
    // Support both { students: [...] } and raw array [...]
    let incomingStudents = null;
    if (parsed && Array.isArray(parsed.students)) {
      incomingStudents = parsed.students;
    } else if (Array.isArray(parsed)) {
      incomingStudents = parsed;
    }

    if (!incomingStudents || incomingStudents.length === 0) {
      throw new Error('No valid student records found in backup file.');
    }

    // Validate essential student fields
    const validStudents = incomingStudents.filter(s => s && s.name && s.enrollment);
    if (validStudents.length === 0) {
      throw new Error('No valid student entries with name and enrollment found.');
    }

    let finalStudents = [];
    if (mode === 'replace') {
      finalStudents = validStudents;
    } else {
      // Merge mode
      const currentDB = loadDB();
      const existing = currentDB.students || [];
      const map = new Map();
      existing.forEach(s => map.set(s.id || s.enrollment, s));
      validStudents.forEach(s => map.set(s.id || s.enrollment, s));
      finalStudents = Array.from(map.values());
    }

    saveDB({ students: finalStudents });
    showToast(`Restored ${validStudents.length} student record(s)!`, '🎉');

    // Trigger re-render if active on page
    if (typeof renderPage === 'function') {
      appDB = loadDB();
      renderPage();
    } else if (typeof renderStudentPage === 'function') {
      appDB = loadDB();
      renderStudentPage();
    } else if (typeof renderSubjectPage === 'function') {
      appDB = loadDB();
      renderSubjectPage();
    } else {
      setTimeout(() => location.reload(), 600);
    }
    return { success: true, count: validStudents.length };
  } catch (err) {
    console.error('EduTrack Restore Error:', err);
    showToast(err.message || 'Failed to restore backup.', '❌');
    return { success: false, error: err.message };
  }
}

/**
 * Opens or injects the universal Backup & Restore Modal
 */
function openBackupModal(defaultTab = 'export') {
  let modal = document.getElementById('backupRestoreModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'backupRestoreModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-box" style="max-width: 640px;">
        <!-- Modal Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 42px; height: 42px; border-radius: 12px; background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple)); display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 0 16px rgba(59,130,246,0.3);">
              💾
            </div>
            <div>
              <h3 style="font-size: 18px; font-weight: 800; color: #fff; letter-spacing: -0.01em;">Backup &amp; Restore Database</h3>
              <p style="font-size: 12px; color: var(--text-secondary);">Manage local JSON snapshots of students, subjects, and documents</p>
            </div>
          </div>
          <button id="closeBackupModalBtn" style="background: transparent; border: none; color: #94a3b8; font-size: 20px; cursor: pointer; padding: 4px;">✕</button>
        </div>

        <!-- Tab Switcher -->
        <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--border); margin-bottom: 20px; padding-bottom: 2px;">
          <button id="modalTabExportBtn" class="tab-btn active" style="padding: 10px 16px; font-size: 13px;">
            <span>📤 Export JSON</span>
          </button>
          <button id="modalTabImportBtn" class="tab-btn" style="padding: 10px 16px; font-size: 13px;">
            <span>📥 Import Backup</span>
          </button>
        </div>

        <!-- TAB 1: EXPORT SECTION -->
        <div id="modalExportSection" class="space-y-4">
          <div style="background: rgba(10,15,30,0.7); border: 1px solid var(--border); border-radius: 12px; padding: 18px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-size: 13px; font-weight: 700; color: #fff;">Current Roster Snapshot</span>
              <span id="exportSummaryBadge" class="badge badge-info" style="font-family: 'JetBrains Mono';">Loading...</span>
            </div>
            <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px;">
              Exporting downloads a formatted <code style="color: #60a5fa;">.json</code> file containing all enrolled BCA learners, semester course clearance statuses (Theory TEE &amp; Assignments TMA), contact info, and local PDF references.
            </p>

            <!-- Export Stats Grid -->
            <div id="exportStatsGrid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px;">
              <!-- Populated dynamically -->
            </div>

            <!-- Export Actions -->
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button id="modalDownloadExportBtn" class="btn btn-primary" style="flex: 1;">
                <span>💾 Download JSON File</span>
              </button>
              <button id="modalCopyExportBtn" class="btn btn-outline" style="font-size: 12px;">
                <span>📋 Copy JSON</span>
              </button>
            </div>
          </div>
        </div>

        <!-- TAB 2: IMPORT SECTION -->
        <div id="modalImportSection" class="space-y-4" style="display: none;">
          <!-- File Dropzone -->
          <div id="backupDropzone" class="dropzone" style="margin-bottom: 16px;">
            <input type="file" id="backupFileInput" accept=".json,application/json" style="display: none;" />
            <div style="font-size: 32px; margin-bottom: 8px;">📥</div>
            <div style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px;">
              Drop backup JSON file here, or <span style="color: var(--accent-blue); text-decoration: underline;">Browse</span>
            </div>
            <p style="font-size: 11px; color: var(--text-secondary);">
              Supports .json files exported from EduTrack BCA
            </p>
          </div>

          <!-- Staged Backup Inspection Card -->
          <div id="stagedInspectionBox" style="display: none; background: rgba(10,15,30,0.85); border: 1px solid rgba(16,185,129,0.4); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: #34d399; font-size: 16px;">✅</span>
                <span style="font-size: 13px; font-weight: 700; color: #34d399;">Valid Backup File Detected</span>
              </div>
              <span id="stagedStudentCountBadge" class="badge badge-complete font-mono">0 Students</span>
            </div>

            <p id="stagedDetailsText" style="font-size: 11px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px;">
              <!-- Injected by JS -->
            </p>

            <div style="display: flex; gap: 10px;">
              <button id="executeReplaceBtn" class="btn btn-primary" style="flex: 1; font-size: 12px; background: linear-gradient(135deg, #10b981, #059669);">
                <span>Overwirte &amp; Replace All</span>
              </button>
              <button id="executeMergeBtn" class="btn btn-outline" style="flex: 1; font-size: 12px;">
                <span>Merge with Existing</span>
              </button>
            </div>
          </div>

          <!-- Textarea Alternative -->
          <details style="font-size: 12px; color: var(--text-secondary); background: rgba(10,15,30,0.5); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border);">
            <summary style="cursor: pointer; font-weight: 600; color: #60a5fa;">Or paste raw JSON text directly</summary>
            <div style="margin-top: 10px;">
              <textarea id="pasteJsonTextarea" placeholder='Paste JSON here (e.g. { "students": [...] })...' style="width: 100%; height: 110px; background: rgba(5,8,18,0.9); border: 1px solid var(--border); border-radius: 6px; padding: 10px; color: #f1f5f9; font-family: 'JetBrains Mono'; font-size: 11px; resize: vertical;"></textarea>
              <button id="executePasteRestoreBtn" class="btn btn-primary btn-sm" style="margin-top: 8px; width: 100%;">
                <span>Restore Pasted JSON</span>
              </button>
            </div>
          </details>
        </div>

        <!-- Footer Notice & Reset Option -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border); font-size: 11px; color: var(--text-muted);">
          <span>100% Client-side local data storage</span>
          <button id="modalResetDemoBtn" style="background: transparent; border: none; color: #94a3b8; cursor: pointer; text-decoration: underline; font-size: 11px;">
            Reset to sample demo data
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Wire Modal Event Handlers
    modal.querySelector('#closeBackupModalBtn').addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });

    // Tab switching inside modal
    const tabExpBtn = modal.querySelector('#modalTabExportBtn');
    const tabImpBtn = modal.querySelector('#modalTabImportBtn');
    const expSec = modal.querySelector('#modalExportSection');
    const impSec = modal.querySelector('#modalImportSection');

    tabExpBtn.addEventListener('click', () => {
      tabExpBtn.classList.add('active');
      tabImpBtn.classList.remove('active');
      expSec.style.display = 'block';
      impSec.style.display = 'none';
      refreshExportStats(modal);
    });

    tabImpBtn.addEventListener('click', () => {
      tabImpBtn.classList.add('active');
      tabExpBtn.classList.remove('active');
      impSec.style.display = 'block';
      expSec.style.display = 'none';
    });

    // Download Backup
    modal.querySelector('#modalDownloadExportBtn').addEventListener('click', () => {
      exportDatabase();
    });

    // Copy JSON to clipboard
    modal.querySelector('#modalCopyExportBtn').addEventListener('click', () => {
      const json = JSON.stringify(generateBackupData(), null, 2);
      navigator.clipboard.writeText(json).then(() => {
        showToast('Backup JSON copied to clipboard!', '📋');
      }).catch(() => {
        showToast('Could not copy to clipboard', '⚠️');
      });
    });

    // File Dropzone & Input
    const dropzone = modal.querySelector('#backupDropzone');
    const fileInput = modal.querySelector('#backupFileInput');

    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleIncomingFile(e.dataTransfer.files[0], modal);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleIncomingFile(e.target.files[0], modal);
      }
    });

    // Paste Textarea Handler
    modal.querySelector('#executePasteRestoreBtn').addEventListener('click', () => {
      const val = modal.querySelector('#pasteJsonTextarea').value.trim();
      if (!val) {
        showToast('Please paste valid JSON text first', '⚠️');
        return;
      }
      const res = restoreBackupData(val, 'replace');
      if (res.success) {
        modal.classList.remove('open');
      }
    });

    // Reset Demo Data
    modal.querySelector('#modalResetDemoBtn').addEventListener('click', () => {
      if (confirm('Reset entire roster back to original 2 demo students?')) {
        saveDB({ students: getDefaultStudents() });
        showToast('Reset to demo dataset!', '↺');
        modal.classList.remove('open');
        setTimeout(() => location.reload(), 400);
      }
    });
  }

  // Switch to requested tab
  if (defaultTab === 'import') {
    modal.querySelector('#modalTabImportBtn').click();
  } else {
    modal.querySelector('#modalTabExportBtn').click();
  }

  refreshExportStats(modal);
  modal.classList.add('open');
}

/**
 * Handles incoming file reading & validation
 */
let stagedBackupContent = null;

function handleIncomingFile(file, modal) {
  if (!file) return;
  if (!file.name.endsWith('.json') && file.type && !file.type.includes('json')) {
    showToast('Please select a valid .json file', '⚠️');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const text = evt.target.result;
      const parsed = JSON.parse(text);
      let studentsList = Array.isArray(parsed.students) ? parsed.students : (Array.isArray(parsed) ? parsed : null);

      if (!studentsList || studentsList.length === 0) {
        throw new Error('No student entries detected in this JSON file.');
      }

      stagedBackupContent = parsed;

      // Show staged inspection card
      const inspectBox = modal.querySelector('#stagedInspectionBox');
      const badge = modal.querySelector('#stagedStudentCountBadge');
      const details = modal.querySelector('#stagedDetailsText');

      badge.textContent = `${studentsList.length} Student${studentsList.length === 1 ? '' : 's'}`;
      
      const sampleNames = studentsList.slice(0, 3).map(s => s.name || s.enrollment).join(', ');
      const extra = studentsList.length > 3 ? ` and ${studentsList.length - 3} more` : '';
      const dateInfo = parsed._meta && parsed._meta.exportDate ? `<br>Exported on: <b>${new Date(parsed._meta.exportDate).toLocaleDateString()}</b>` : '';

      details.innerHTML = `File: <b style="color: #fff;">${file.name}</b> (${Math.round(file.size / 1024 * 10) / 10} KB)<br>Learners detected: <b style="color: #60a5fa;">${sampleNames}${extra}</b>${dateInfo}`;
      inspectBox.style.display = 'block';

      // Setup execution buttons
      const replaceBtn = modal.querySelector('#executeReplaceBtn');
      const mergeBtn = modal.querySelector('#executeMergeBtn');

      replaceBtn.onclick = () => {
        const res = restoreBackupData(stagedBackupContent, 'replace');
        if (res.success) {
          modal.classList.remove('open');
        }
      };

      mergeBtn.onclick = () => {
        const res = restoreBackupData(stagedBackupContent, 'merge');
        if (res.success) {
          modal.classList.remove('open');
        }
      };

      showToast(`Detected ${studentsList.length} students in file!`, '📄');
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Corrupted or invalid JSON format.', '❌');
      modal.querySelector('#stagedInspectionBox').style.display = 'none';
      stagedBackupContent = null;
    }
  };
  reader.readAsText(file);
}

function refreshExportStats(modal) {
  const db = loadDB();
  const students = db.students || [];
  
  let totalDocs = 0;
  let totalCleared = 0;
  students.forEach(s => {
    totalDocs += (s.documents ? s.documents.length : 0);
    const stats = getStats(s);
    totalCleared += stats.fullyComplete;
  });

  const badge = modal.querySelector('#exportSummaryBadge');
  if (badge) badge.textContent = `${students.length} Records Ready`;

  const grid = modal.querySelector('#exportStatsGrid');
  if (grid) {
    grid.innerHTML = `
      <div style="background: rgba(17,24,39,0.9); padding: 10px; border-radius: 8px; border: 1px solid var(--border); text-align: center;">
        <span style="font-size: 10px; color: var(--text-muted); display: block; text-transform: uppercase;">Enrolled</span>
        <span style="font-size: 16px; font-weight: 800; color: #fff;">${students.length}</span>
      </div>
      <div style="background: rgba(17,24,39,0.9); padding: 10px; border-radius: 8px; border: 1px solid var(--border); text-align: center;">
        <span style="font-size: 10px; color: var(--text-muted); display: block; text-transform: uppercase;">Cleared Courses</span>
        <span style="font-size: 16px; font-weight: 800; color: #34d399;">${totalCleared}</span>
      </div>
      <div style="background: rgba(17,24,39,0.9); padding: 10px; border-radius: 8px; border: 1px solid var(--border); text-align: center;">
        <span style="font-size: 10px; color: var(--text-muted); display: block; text-transform: uppercase;">Linked PDFs</span>
        <span style="font-size: 16px; font-weight: 800; color: #60a5fa;">${totalDocs}</span>
      </div>
    `;
  }
}

// ── UNIVERSAL GLOBAL NAVIGATION (ACCESSIBLE FROM EVERY PAGE) ────

/**
 * Initializes universal navigation across all pages (Home, Student, Subject).
 * Sets dynamic URLs (preserving current student & subject context),
 * active tab highlighting, and sets up instant dropdown switchers.
 *
 * @param {'home'|'student'|'subject'} currentPage
 */
function initUniversalNav(currentPage) {
  const db = loadDB();
  const students = db.students || [];

  // Determine current active student & subject
  const params = new URLSearchParams(window.location.search);
  let activeStudentId = null;
  let activeSubjectCode = null;

  if (params.get('id')) {
    activeStudentId = parseInt(params.get('id'), 10);
  } else if (params.get('studentId')) {
    activeStudentId = parseInt(params.get('studentId'), 10);
  }

  if (!activeStudentId || isNaN(activeStudentId)) {
    const saved = localStorage.getItem('edutrack_last_student');
    if (saved && students.some(s => s.id === parseInt(saved, 10))) {
      activeStudentId = parseInt(saved, 10);
    } else if (students.length > 0) {
      activeStudentId = students[0].id;
    } else {
      activeStudentId = 1;
    }
  }

  // Save as last viewed student
  localStorage.setItem('edutrack_last_student', activeStudentId);

  if (params.get('code')) {
    activeSubjectCode = params.get('code');
  } else {
    const savedCode = localStorage.getItem('edutrack_last_subject');
    if (savedCode) {
      activeSubjectCode = savedCode;
    } else {
      activeSubjectCode = 'BCS-053';
    }
  }
  localStorage.setItem('edutrack_last_subject', activeSubjectCode);

  const activeStudent = students.find(s => s.id === activeStudentId) || students[0];
  const studentShortName = activeStudent ? (activeStudent.name.split(' ')[0] || 'Profile') : 'Profile';

  // 1. Desktop Nav Links
  const navHome = document.getElementById('navHomeLink');
  const navStudent = document.getElementById('navStudentLink');
  const navSubject = document.getElementById('navSubjectLink');

  if (navHome) {
    navHome.href = 'index.html';
    if (currentPage === 'home') navHome.classList.add('active');
    else navHome.classList.remove('active');
  }

  if (navStudent) {
    navStudent.href = `student.html?id=${activeStudentId}`;
    if (currentPage === 'student') navStudent.classList.add('active');
    else navStudent.classList.remove('active');
    const label = document.getElementById('navStudentTitle');
    if (label && activeStudent) {
      label.textContent = `Student (${studentShortName})`;
    }
  }

  if (navSubject) {
    navSubject.href = `subject.html?studentId=${activeStudentId}&code=${encodeURIComponent(activeSubjectCode)}`;
    if (currentPage === 'subject') navSubject.classList.add('active');
    else navSubject.classList.remove('active');
    const label = document.getElementById('navSubjectTitle');
    if (label) {
      label.textContent = `Subject (${activeSubjectCode})`;
    }
  }

  // 2. Mobile Nav Links
  const mobHome = document.getElementById('mobNavHome');
  const mobStudent = document.getElementById('mobNavStudent');
  const mobSubject = document.getElementById('mobNavSubject');

  if (mobHome) {
    mobHome.href = 'index.html';
    if (currentPage === 'home') mobHome.classList.add('active');
    else mobHome.classList.remove('active');
  }
  if (mobStudent) {
    mobStudent.href = `student.html?id=${activeStudentId}`;
    if (currentPage === 'student') mobStudent.classList.add('active');
    else mobStudent.classList.remove('active');
  }
  if (mobSubject) {
    mobSubject.href = `subject.html?studentId=${activeStudentId}&code=${encodeURIComponent(activeSubjectCode)}`;
    if (currentPage === 'subject') mobSubject.classList.add('active');
    else mobSubject.classList.remove('active');
  }

  // 3. Populate Quick Student Switcher
  const studentSwitcher = document.getElementById('navStudentSwitcher');
  if (studentSwitcher) {
    studentSwitcher.innerHTML = '';
    const defOpt = document.createElement('option');
    defOpt.value = '';
    defOpt.disabled = true;
    defOpt.textContent = 'Switch Student:';
    studentSwitcher.appendChild(defOpt);

    students.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = `${s.name} (Sem ${s.semester})`;
      if (s.id === activeStudentId) opt.selected = true;
      studentSwitcher.appendChild(opt);
    });

    studentSwitcher.onchange = (e) => {
      const selectedId = e.target.value;
      if (!selectedId) return;
      localStorage.setItem('edutrack_last_student', selectedId);
      if (currentPage === 'student') {
        window.location.href = `student.html?id=${selectedId}`;
      } else if (currentPage === 'subject') {
        window.location.href = `subject.html?studentId=${selectedId}&code=${encodeURIComponent(activeSubjectCode)}`;
      } else {
        window.location.href = `student.html?id=${selectedId}`;
      }
    };
  }

  // 4. Populate Quick Subject Switcher
  const subjectSwitcher = document.getElementById('navSubjectSwitcher');
  if (subjectSwitcher) {
    subjectSwitcher.innerHTML = '';
    const defSubOpt = document.createElement('option');
    defSubOpt.value = '';
    defSubOpt.disabled = true;
    defSubOpt.textContent = 'Jump to Subject:';
    subjectSwitcher.appendChild(defSubOpt);

    const targetSem = activeStudent ? activeStudent.semester : 5;
    const semSubjects = BCA_SUBJECTS[targetSem] || BCA_SUBJECTS[5];

    semSubjects.forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub.code;
      opt.textContent = `${sub.code} - ${sub.name.length > 18 ? sub.name.substring(0, 16) + '..' : sub.name}`;
      if (sub.code === activeSubjectCode) opt.selected = true;
      subjectSwitcher.appendChild(opt);
    });

    subjectSwitcher.onchange = (e) => {
      const selectedCode = e.target.value;
      if (!selectedCode) return;
      localStorage.setItem('edutrack_last_subject', selectedCode);
      window.location.href = `subject.html?studentId=${activeStudentId}&code=${encodeURIComponent(selectedCode)}`;
    };
  }

  // 5. Global Backup Button hook if present in navbar
  const navBackupBtn = document.getElementById('backupNavBtn');
  if (navBackupBtn) {
    navBackupBtn.onclick = () => {
      openBackupModal('export');
    };
  }
}
