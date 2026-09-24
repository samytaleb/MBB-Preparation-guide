// ============================================================
// SAMY CONSULTING INTERVIEW OS — APPLICATION LOGIC
// ============================================================

window.App = {};

// ============================================================
// STATE
// ============================================================
let _state = { view: 'dashboard', subview: null, subviewData: null };
let _lang = 'fr';

// ============================================================
// STORAGE
// ============================================================
const DB = {
  get: (k, def = null) => { try { const v = localStorage.getItem('cio_' + k); return v ? JSON.parse(v) : def; } catch { return def; } },
  set: (k, v) => { try { localStorage.setItem('cio_' + k, JSON.stringify(v)); } catch {} },
};

const _defaults = {
  progress: {}, scores: { structuring: 55, quantitative: 70, businessIntuition: 45, hypothesisDriven: 40, exhibits: 60, creativity: 55, communication: 45, synthesis: 40, recommendation: 50 },
  casesDone: [], mathStats: { total: 0, correct: 0 },
  stories: [], mistakes: [], tasksDone: {}, drillStats: {}, coursesProgress: {},
};

function getDB(k) { return DB.get(k, _defaults[k]); }
function setDB(k, v) { DB.set(k, v); }
function updateDB(k, fn) { setDB(k, fn(getDB(k))); }

// ============================================================
// LANGUAGE
// ============================================================
function t(key) {
  if (!DATA.i18n) return key;
  const l = DATA.i18n[_lang] || DATA.i18n.fr || {};
  return l[key] !== undefined ? l[key] : (DATA.i18n.fr[key] || key);
}

function toggleLang() {
  _lang = _lang === 'fr' ? 'en' : 'fr';
  DB.set('lang', _lang);
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = _lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
  initSidebar();
  renderView();
}
App.toggleLang = toggleLang;

// ============================================================
// HELPERS
// ============================================================
function today() { return new Date().toISOString().split('T')[0]; }

function daysUntil(dateStr) {
  const d = new Date(dateStr), now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((d - now) / 86400000);
}

function currentWeek() {
  const t = today();
  for (const week of DATA.weeks) {
    const day = week.days.find(d => d.date >= t);
    if (day) return { week, day };
  }
  const last = DATA.weeks[DATA.weeks.length - 1];
  return { week: last, day: last.days[last.days.length - 1] };
}

function getReadiness() {
  const scores = getDB('scores');
  let total = 0;
  DATA.scoring.dimensions.forEach(d => { total += (scores[d.id] || 50) * d.weight / 100; });
  return Math.round(total);
}

function getReadinessColor(v) {
  if (v >= DATA.scoring.thresholds.ready) return 'var(--green)';
  if (v >= DATA.scoring.thresholds.almostReady) return 'var(--yellow)';
  return 'var(--red)';
}

function getStreakDays() {
  const td = getDB('tasksDone'); let streak = 0;
  const d = new Date(today());
  while (true) {
    const key = d.toISOString().split('T')[0];
    if (td[key] && td[key].length > 0) { streak++; d.setDate(d.getDate() - 1); } else break;
  }
  return streak;
}

function generateAdaptiveRec(scores) {
  const sorted = DATA.scoring.dimensions.map(d => ({ ...d, val: scores[d.id] || 50 })).sort((a, b) => a.val - b.val);
  const [w1, w2, w3] = sorted;
  if (_lang === 'en') {
    return `Your three weakest areas: <strong>${w1.label_en||w1.label} (${w1.val}%)</strong>, <strong>${w2.label_en||w2.label} (${w2.val}%)</strong>, <strong>${w3.label_en||w3.label} (${w3.val}%)</strong>. Today, prioritize <strong>${w1.label_en||w1.label}</strong> — do 3+ drills with specific focus on it.`;
  }
  return `Vos trois points faibles : <strong>${w1.label} (${w1.val}%)</strong>, <strong>${w2.label} (${w2.val}%)</strong>, <strong>${w3.label} (${w3.val}%)</strong>. Aujourd'hui, priorisez <strong>${w1.label}</strong> — faites 3+ exercices axés spécifiquement dessus.`;
}

function getLang(obj, field) {
  if (!obj) return '';
  if (_lang === 'en' && obj[field + '_en'] !== undefined) return obj[field + '_en'];
  return obj[field] || '';
}

// ============================================================
// RENDER
// ============================================================
function render(html) { document.getElementById('content').innerHTML = html; }

function setActiveNav(view) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.view === view));
}

function navigate(view, sub, data) {
  _state.view = view; _state.subview = sub || null; _state.subviewData = data || null;
  setActiveNav(view);
  document.getElementById('topbar-title').textContent = t('title_' + view) || view;
  renderView();
  window.scrollTo(0, 0);
}
App.navigate = navigate;

function renderView() {
  const views = {
    dashboard: viewDashboard, today: viewToday, academy: viewAcademy,
    cases: viewCases, drills: viewDrills, math: viewMath,
    sizing: viewSizing, pricing: viewPricing, exhibits: viewExhibits, fundamentals: viewFundamentals,
    pei: viewPEI, stories: viewStories,
    mocks: viewMocks, partners: viewPartners, mistakes: viewMistakes,
    progress: viewProgress, resources: viewResources, casebooks: viewCasebooks,
    calendar: viewCalendar, settings: viewSettings, howto: viewHowToPrepare,
    courses: viewCourses, learningpath: viewLearningPath,
  };
  const fn = views[_state.view];
  if (fn) render(fn());
}

// ============================================================
// EVENT DELEGATION (single listener set up once)
// ============================================================
function setupEvents() {
  document.getElementById('content').addEventListener('click', function(e) {
    const t = e.target.closest('[data-action]');
    if (!t) return;
    switch (t.dataset.action) {
      case 'goto': navigate(t.dataset.view); break;
      case 'open-module': openModule(t.dataset.id); break;
      case 'open-case': openCase(t.dataset.id); break;
      case 'toggle-task': toggleTask(t.dataset.date, parseInt(t.dataset.idx)); break;
      case 'toggle-spoiler': toggleSpoiler(t); break;
      case 'start-drill': startDrill(t.dataset.id); break;
      case 'submit-math': submitMath(); break;
      case 'next-math': nextMath(); break;
      case 'mark-done': markCaseDone(t.dataset.id); break;
      case 'add-story': openStoryModal(); break;
      case 'delete-story': deleteStory(t.dataset.id); break;
      case 'add-mistake': openMistakeModal(); break;
      case 'delete-mistake': deleteMistake(t.dataset.idx); break;
      case 'pei-dim': openPEIDim(t.dataset.dim); break;
      case 'module-tab': switchModuleTab(t.dataset.tab, t.dataset.module); break;
      case 'close-modal': closeModal(); break;
      case 'save-story': saveStory(); break;
      case 'save-mistake': saveMistake(); break;
      case 'back': navigate(t.dataset.to); break;
      case 'back-module': _state.subview = null; navigate('academy'); break;
      case 'back-case': _state.subview = null; navigate('cases'); break;
      case 'open-sector': _state.subview = 'sector'; _state.subviewData = t.dataset.id; renderView(); break;
      case 'back-to-fund': _state.subview = null; renderView(); break;
      case 'howto-section': toggleHowToSection(t); break;
      case 'open-course-cat': _state.subview = 'cat'; _state.subviewData = { catId: t.dataset.id }; renderView(); break;
      case 'open-fiche': _state.subview = 'fiche'; _state.subviewData = { catId: t.dataset.catid, ficheId: t.dataset.id }; renderView(); break;
      case 'back-courses': _state.subview = null; _state.subviewData = null; renderView(); break;
      case 'back-submodule': _state.subview = 'cat'; _state.subviewData = { catId: _state.subviewData && _state.subviewData.catId }; renderView(); break;
      case 'mark-fiche-done': markFicheDone(t.dataset.id); break;
    }
  });
  document.getElementById('content').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('math-input')) submitMath();
  });
}

// ============================================================
// DASHBOARD
// ============================================================
function viewDashboard() {
  const readiness = getReadiness();
  const color = getReadinessColor(readiness);
  const streak = getStreakDays();
  const casesDone = getDB('casesDone').length;
  const daysLeft = daysUntil('2026-10-16');
  const scores = getDB('scores');
  const ms = getDB('mathStats');
  const mathAcc = ms.total > 0 ? Math.round(ms.correct / ms.total * 100) : 0;
  const { week, day } = currentWeek();

  return `
<div class="dashboard-header">
  <div class="dashboard-greeting">${_lang==='fr'?'Bonjour':'Hello'}, Samy.</div>
  <div class="dashboard-sub">${_lang==='fr'?getLang(day,'theme')||day.theme:day.theme_en||day.theme} — ${_lang==='fr'?week.title:week.title_en||week.title}</div>
</div>
<div class="stats-row">
  <div class="stat-card"><div class="stat-label">${t('readiness')}</div><div class="stat-value" style="color:${color}">${readiness}%</div><div class="stat-delta">${readiness>=78?(t('ready')||'✓ Ready'):readiness>=62?(t('almost_ready')||'⚡ Almost'):t('needs_work')||'⚠ Needs Work'}</div></div>
  <div class="stat-card"><div class="stat-label">${t('countdown')}</div><div class="stat-value" style="color:var(--yellow)">${daysLeft}</div><div class="stat-delta">${t('days_until')||'days until Oct 16'}</div></div>
  <div class="stat-card"><div class="stat-label">${t('cases_done')||'Cases Completed'}</div><div class="stat-value">${casesDone}</div><div class="stat-delta">${t('target_cases')||'target: 30+'}</div></div>
  <div class="stat-card"><div class="stat-label">${t('streak')||'Daily Streak'}</div><div class="stat-value" style="color:var(--orange)">${streak}</div><div class="stat-delta">${t('days')||'days'}</div></div>
</div>

<div class="today-panel mb-lg">
  <div class="card">
    <div class="card-title">${t('today')||'Today'} — ${day.label}</div>
    <div class="today-tasks">
      ${day.tasks.map((task, i) => {
        const done = (getDB('tasksDone')[day.date] || []).includes(i);
        const taskText = (_lang === 'en' && day.tasks_en && day.tasks_en[i]) ? day.tasks_en[i] : task;
        return `<div class="task-item">
          <div class="task-check ${done?'done':''}" data-action="toggle-task" data-date="${day.date}" data-idx="${i}"></div>
          <div><div class="task-text ${done?'done':''}">${taskText}</div><div class="task-priority p${i+1}">P${i+1}</div></div>
        </div>`;
      }).join('')}
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:1rem;">
    <div class="card" style="flex:1">
      <div class="card-title">${t('skill_snapshot')||'Skill Snapshot'}</div>
      ${DATA.scoring.dimensions.map(d => {
        const v = scores[d.id] || 50;
        const label = _lang === 'en' ? (d.label_en || d.label) : d.label;
        return `<div class="score-row"><div class="score-label text-sm">${label}</div><div class="score-track"><div class="score-fill" style="width:${v}%;background:${d.color}"></div></div><div class="score-pct text-sm" style="color:${d.color}">${v}%</div></div>`;
      }).join('')}
    </div>
    <div class="card">
      <div class="card-title">${t('quick_actions')||'Quick Actions'}</div>
      <div style="display:flex;flex-direction:column;gap:0.5rem;">
        <button class="btn btn-primary w-full" data-action="goto" data-view="howto">${_lang==='fr'?'🗺️ Guide débutant':'🗺️ How to Prepare'}</button>
        <button class="btn btn-secondary w-full" data-action="goto" data-view="cases">📂 ${t('title_cases')||'Case Library'}</button>
        <button class="btn btn-secondary w-full" data-action="goto" data-view="drills">⚡ ${t('title_drills')||'Drills'}</button>
        <button class="btn btn-ghost w-full" data-action="goto" data-view="math">🔢 ${t('title_math')||'Mental Math'}</button>
      </div>
    </div>
  </div>
</div>

<div class="grid grid-2 mb-lg">
  <div class="card">
    <div class="card-title">${t('strength_gap')||'Strength vs Gap'}</div>
    ${(() => {
      const sorted = DATA.scoring.dimensions.map(d => ({ ...d, val: scores[d.id] || 50 }));
      const top = sorted.reduce((a, b) => a.val > b.val ? a : b);
      const bottom = sorted.reduce((a, b) => a.val < b.val ? a : b);
      return `<div style="display:flex;justify-content:space-between;gap:1rem;margin-top:0.5rem;">
        <div><div class="text-xs text-muted mb-sm">${_lang==='fr'?'POINT FORT':'TOP SKILL'}</div><div class="tag tag-green">${_lang==='en'?top.label_en||top.label:top.label}</div><div class="text-sm mt-sm" style="color:var(--green);font-weight:700;">${top.val}%</div></div>
        <div style="width:1px;background:var(--border)"></div>
        <div><div class="text-xs text-muted mb-sm">${_lang==='fr'?'POINT FAIBLE':'MAIN GAP'}</div><div class="tag tag-red">${_lang==='en'?bottom.label_en||bottom.label:bottom.label}</div><div class="text-sm mt-sm" style="color:var(--red);font-weight:700;">${bottom.val}%</div></div>
      </div>`;
    })()}
  </div>
  <div class="card">
    <div class="card-title">${t('math_accuracy')||'Math Accuracy'}</div>
    <div class="stat-value" style="color:var(--accent)">${mathAcc}%</div>
    <div class="stat-delta">${ms.total} ${_lang==='fr'?'calculs tentés':'attempts'}</div>
    <div class="progress-track mt-sm"><div class="progress-bar" style="width:${mathAcc}%;background:var(--accent)"></div></div>
    <button class="btn btn-secondary mt-md btn-sm" data-action="goto" data-view="math">${_lang==='fr'?'Pratiquer →':'Practice Now →'}</button>
  </div>
</div>
<div class="card">
  <div class="card-title">${t('adaptive_rec')||'Adaptive Recommendation'}</div>
  <div class="insight-box" style="margin:0">${generateAdaptiveRec(scores)}</div>
</div>`;
}

// ============================================================
// TODAY'S PLAN
// ============================================================
function viewToday() {
  const { week, day } = currentWeek();
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${_lang==='fr'?week.title:week.title_en||week.title}</h2><p>${day.label}</p></div>
  <div style="display:flex;gap:0.5rem;"><span class="tag tag-blue">Week ${week.id}</span><span class="tag tag-yellow">${daysUntil('2026-10-16')} ${_lang==='fr'?'j. avant l\'entretien':'days to interview'}</span></div>
</div>
<div class="grid grid-2">
  ${week.days.map(d => {
    const isToday = d.date === today();
    const tasksDone = getDB('tasksDone')[d.date] || [];
    const completion = Math.round(tasksDone.length / d.tasks.length * 100);
    const theme = (_lang === 'en' && d.theme_en) ? d.theme_en : d.theme;
    return `<div class="card" style="${isToday?'border-color:var(--accent)':''}">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.8rem">
        <div><div class="font-bold text-sm">${d.label} — ${theme}</div>${isToday?`<span class="tag tag-blue">${_lang==='fr'?'AUJOURD\'HUI':'TODAY'}</span>`:''}</div>
        <div class="text-sm" style="color:${completion===100?'var(--green)':'var(--text-muted)'}">${completion}%</div>
      </div>
      <div class="progress-track mb-md"><div class="progress-bar" style="width:${completion}%;background:${completion===100?'var(--green)':'var(--accent)'}"></div></div>
      ${d.tasks.map((task, j) => {
        const done = tasksDone.includes(j);
        const taskText = (_lang === 'en' && d.tasks_en && d.tasks_en[j]) ? d.tasks_en[j] : task;
        return `<div class="task-item"><div class="task-check ${done?'done':''}" data-action="toggle-task" data-date="${d.date}" data-idx="${j}"></div><div class="task-text text-sm ${done?'done':''}">${taskText}</div></div>`;
      }).join('')}
    </div>`;
  }).join('')}
</div>`;
}

function toggleTask(date, idx) {
  updateDB('tasksDone', td => { const arr = td[date] || []; const pos = arr.indexOf(idx); if (pos === -1) arr.push(idx); else arr.splice(pos, 1); td[date] = arr; return td; });
  renderView();
}

// ============================================================
// HOW TO PREPARE
// ============================================================
function viewHowToPrepare() {
  if (!DATA.howToPrepare) return `<div class="card"><p>${_lang==='fr'?'Contenu bientôt disponible.':'Content coming soon.'}</p></div>`;
  const guide = DATA.howToPrepare[_lang] || DATA.howToPrepare.fr;
  return `
<div class="section-header">
  <div class="section-header-text">
    <h2>${_lang==='fr'?'Guide du débutant — Comment se préparer':'Beginner\'s Guide — How to Prepare'}</h2>
    <p>${_lang==='fr'?'Tout ce que vous devez savoir pour partir de zéro et être prêt':'Everything you need to know to start from scratch and be ready'}</p>
  </div>
  <span class="tag tag-green">${_lang==='fr'?'Pour débutants':'For beginners'}</span>
</div>
${guide.map((section, i) => `
<div class="card mb-md" style="border-left:3px solid ${section.color||'var(--accent)'}">
  <div class="howto-header" data-action="howto-section" data-idx="${i}" style="cursor:pointer;display:flex;justify-content:space-between;align-items:center">
    <div style="display:flex;align-items:center;gap:0.8rem">
      <span style="font-size:1.5rem">${section.icon||'📘'}</span>
      <div>
        <div class="font-bold">${section.title}</div>
        ${section.duration?`<div class="text-xs text-muted">${_lang==='fr'?'Temps de lecture':'Reading time'}: ${section.duration}</div>`:''}
      </div>
    </div>
    <span class="spoiler-chevron">▶</span>
  </div>
  <div class="howto-body" id="howto-body-${i}" style="display:none;margin-top:1rem">
    ${section.content}
  </div>
</div>`).join('')}`;
}

function toggleHowToSection(btn) {
  const idx = btn.dataset.idx;
  const body = document.getElementById('howto-body-' + idx);
  const chevron = btn.querySelector('.spoiler-chevron');
  if (body) { const isOpen = body.style.display !== 'none'; body.style.display = isOpen ? 'none' : 'block'; if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(90deg)'; }
}

// ============================================================
// CASE ACADEMY
// ============================================================
function viewAcademy() {
  if (_state.subview === 'module') return viewModuleDetail(_state.subviewData);
  const progress = getDB('progress');
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_academy')||'Case Academy'}</h2><p>${_lang==='fr'?'16 modules — des fondamentaux aux cas avancés':'16 modules — from fundamentals to advanced cases'}</p></div>
</div>
<div class="module-grid">
  ${DATA.modules.map(m => {
    const mp = progress[m.id] || {};
    const sectionsDone = Object.values(mp.sections || {}).filter(Boolean).length;
    const drillsDone = Object.values(mp.drills || {}).filter(Boolean).length;
    const sections = (_lang === 'en' && m.sections_en) ? m.sections_en : m.sections;
    const pct = sections.length > 0 ? Math.round(sectionsDone / sections.length * 100) : 0;
    const title = (_lang === 'en' && m.title_en) ? m.title_en : m.title;
    return `<div class="module-card" data-action="open-module" data-id="${m.id}" style="cursor:pointer">
      <div class="module-icon">${m.icon}</div>
      <div class="module-num">Module ${m.id}</div>
      <div class="module-title">${title}</div>
      <div class="module-progress">
        <div class="module-pct">${pct}% · ${drillsDone}/${m.drills.length} drills</div>
        <div class="progress-track"><div class="progress-bar" style="width:${pct}%;background:${m.color}"></div></div>
      </div>
    </div>`;
  }).join('')}
</div>`;
}

function openModule(id) { _state.subview = 'module'; _state.subviewData = id; renderView(); }

function viewModuleDetail(id) {
  const m = DATA.modules.find(x => x.id === id);
  if (!m) { navigate('academy'); return ''; }
  const progress = getDB('progress');
  const mp = progress[id] || { sections: {}, drills: {} };
  const activeTab = m._activeTab || 'learn';
  const title = (_lang === 'en' && m.title_en) ? m.title_en : m.title;
  const objectives = (_lang === 'en' && m.objectives_en) ? m.objectives_en : m.objectives;
  const sections = (_lang === 'en' && m.sections_en) ? m.sections_en : m.sections;

  return `
<div class="module-back" data-action="back-module" style="cursor:pointer;color:var(--text-secondary);font-size:0.78rem;display:inline-flex;align-items:center;gap:0.3rem;margin-bottom:1rem;padding:0.3rem 0">← ${t('title_academy')||'Academy'}</div>
<div class="module-hero">
  <div class="module-hero-icon">${m.icon}</div>
  <div>
    <div class="module-num text-xs">Module ${m.id}</div>
    <div class="module-hero-title">${title}</div>
    <div class="module-hero-sub">${objectives.join(' · ')}</div>
  </div>
</div>
<div class="module-tabs">
  <div class="module-tab ${activeTab==='learn'?'active':''}" data-action="module-tab" data-tab="learn" data-module="${id}">${_lang==='fr'?'Cours':'Learn'}</div>
  <div class="module-tab ${activeTab==='drills'?'active':''}" data-action="module-tab" data-tab="drills" data-module="${id}">${_lang==='fr'?'Exercices':'Drills'} (${m.drills.length})</div>
</div>
${activeTab === 'learn' ? renderModuleLearn(m, mp, id, sections) : renderModuleDrills(m, mp)}`;
}

function switchModuleTab(tab, moduleId) {
  const m = DATA.modules.find(x => x.id === moduleId);
  if (m) m._activeTab = tab;
  renderView();
}

function renderModuleLearn(m, mp, id, sections) {
  return sections.map((s, i) => `
  <div class="section-content">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.8rem">
      <h3 style="margin:0;border:none;padding:0">${s.title}</h3>
      <button class="btn btn-sm ${mp.sections[i]?'btn-secondary':'btn-primary'}" onclick="markSectionDone('${id}',${i})">
        ${mp.sections[i] ? (t('marked_done')||'✓ Done') : (t('mark_read')||'Mark as Read')}
      </button>
    </div>
    ${s.content}
  </div>`).join('');
}

function renderModuleDrills(m, mp) {
  if (!m.drills.length) return `<div class="empty-state"><div class="empty-icon">⚡</div><div class="empty-title">${_lang==='fr'?'Aucun exercice pour ce module.':'No drills for this module yet.'}</div></div>`;
  return m.drills.map(d => {
    const prompt = (_lang === 'en' && d.prompt_en) ? d.prompt_en : d.prompt;
    return `<div class="drill-card">
      <div class="drill-header">
        <div style="display:flex;gap:0.4rem;align-items:center"><span class="tag tag-blue">${d.type}</span><span class="text-xs text-muted">⏱ ${d.time}s</span></div>
        <button class="btn btn-primary btn-sm" data-action="start-drill" data-id="${d.id}">${_lang==='fr'?'Démarrer →':'Start →'}</button>
      </div>
      <div class="drill-prompt">${prompt}</div>
    </div>`;
  }).join('');
}

function markSectionDone(moduleId, sectionIdx) {
  updateDB('progress', p => { if (!p[moduleId]) p[moduleId] = { sections: {}, drills: {} }; p[moduleId].sections[sectionIdx] = true; return p; });
  renderView(); showToast(_lang==='fr'?'Section marquée comme lue !':'Section marked as read!', 'success');
}
App.markSectionDone = markSectionDone;

// ============================================================
// CASE LIBRARY
// ============================================================
function viewCases() {
  if (_state.subview === 'case') return viewCaseDetail(_state.subviewData);
  const done = getDB('casesDone');
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_cases')||'Case Library'}</h2><p>${DATA.cases.length} ${_lang==='fr'?'cas':'cases'} · ${done.length} ${_lang==='fr'?'complétés':'completed'}</p></div>
</div>
${DATA.cases.map(c => {
  const isDone = done.includes(c.id);
  const title = (_lang === 'en' && c.title_en) ? c.title_en : c.title;
  return `<div class="case-card ${isDone?'done':''}" data-action="open-case" data-id="${c.id}">
    <div class="case-num text-xs text-muted">${c.id}</div>
    <div class="case-body">
      <div class="case-title">${title} ${isDone?`<span class="tag tag-green">✓</span>`:''}</div>
      <div class="case-meta">
        <span class="tag ${c.difficulty==='Beginner'||c.difficulty==='Débutant'?'tag-green':c.difficulty==='Intermediate'||c.difficulty==='Intermédiaire'?'tag-yellow':'tag-red'}">${c.difficulty}</span>
        <span class="tag tag-blue">${c.type}</span>
        <span class="tag tag-purple">${c.sector || c.industry || ''}</span>
        <span class="case-source text-xs">⏱ ${c.duration} min${c.source ? ' · ' + c.source : c.company ? ' · ' + c.company : ''}</span>
      </div>
    </div>
    <div class="text-sm text-muted">${c.candidateLed?(t('candidate_led')||'Candidate-led'):(t('interviewer_led')||'Interviewer-led')}</div>
  </div>`;
}).join('')}`;
}

function openCase(id) { _state.subview = 'case'; _state.subviewData = id; renderView(); }

function viewCaseDetail(id) {
  const c = DATA.cases.find(x => x.id === id);
  if (!c) { navigate('cases'); return ''; }
  const done = getDB('casesDone').includes(id);
  const title = (_lang === 'en' && c.title_en) ? c.title_en : c.title;
  const sector = c.sector || c.industry || '';
  const source = c.source || c.company || '';
  const skills = Array.isArray(c.skills) ? c.skills.join(', ') : (c.type || '');
  const diffTag = ['Beginner','Débutant','easy'].includes(c.difficulty)?'tag-green':['Intermediate','Intermédiaire','medium'].includes(c.difficulty)?'tag-yellow':'tag-red';

  const header = `
<div class="module-back" data-action="back-case" style="cursor:pointer;color:var(--text-secondary);font-size:0.78rem;display:inline-flex;align-items:center;gap:0.3rem;margin-bottom:1rem">← ${t('title_cases')||'Case Library'}</div>
<div class="case-detail-header">
  <div class="case-tags">
    <span class="tag ${diffTag}">${c.difficulty}</span>
    <span class="tag tag-blue">${c.type}</span>
    ${sector ? `<span class="tag tag-purple">${sector}</span>` : ''}
    <span class="tag tag-orange">${c.duration} min</span>
    ${done?`<span class="tag tag-green">✓ ${t('completed')||'Completed'}</span>`:''}
  </div>
  <h2 style="font-size:1.2rem;font-weight:800;margin:0.5rem 0">${title}</h2>
  ${source || skills ? `<div class="text-sm text-muted">${source ? `${_lang==='fr'?'Source':'Source'}: ${source}` : ''}${source && skills ? ' · ' : ''}${skills ? `${_lang==='fr'?'Compétences':'Skills'}: ${skills}` : ''}</div>` : ''}
</div>`;

  const doneBtn = !done
    ? `<button class="btn btn-primary mt-md" data-action="mark-done" data-id="${c.id}">✓ ${_lang==='fr'?'Marquer comme complété':'Mark as Completed'}</button>`
    : `<div class="tag tag-green mt-sm">✓ ${t('completed')||'Completed'}</div>`;

  function spoiler(emoji, titleFr, titleEn, bodyHtml) {
    return `<div class="spoiler-section">
      <div class="spoiler-header" data-action="toggle-spoiler"><span>${emoji} ${_lang==='fr'?titleFr:titleEn}</span><span class="spoiler-chevron">▶</span></div>
      <div class="spoiler-body"><div class="text-sm text-secondary">${bodyHtml}</div></div>
    </div>`;
  }

  // ── New-format cases (CASE-016+): situation / solution_outline ──
  if (c.situation) {
    const exhibitsHtml = (c.exhibits && c.exhibits.length)
      ? `<div class="card mb-md"><div class="card-title">📊 ${_lang==='fr'?'Données & Exhibits':'Data & Exhibits'}</div>${c.exhibits.map(ex => `<div class="formula-box mb-sm"><strong>${ex.title}</strong><br><span style="font-size:0.88rem">${ex.data}</span></div>`).join('')}</div>`
      : '';
    const keyQ = c.key_question ? `<div class="insight-box mb-md"><strong>${_lang==='fr'?'Question clé :':'Key question:'}</strong> ${c.key_question}</div>` : '';
    const spoilers = [
      c.structure_hint && spoiler('🌳', 'Structure suggérée', 'Suggested Structure', `<div class="formula-box" style="white-space:pre-line">${c.structure_hint}</div>`),
      c.solution_outline && spoiler('✅', 'Correction complète', 'Full Solution', `<div class="example-box" style="white-space:pre-line">${c.solution_outline}</div>`)
    ].filter(Boolean).join('');
    return `${header}
<div class="card mb-md">
  <div class="card-title">${_lang==='fr'?'Énoncé du cas':'Case Prompt'}</div>
  <div class="case-prompt" style="white-space:pre-line">${c.situation}</div>
  ${keyQ}${doneBtn}
</div>
${exhibitsHtml}
<div class="card mb-md">
  <div class="card-title">${_lang==='fr'?'Guide de résolution (révélez quand prêt)':'Solution Guide (reveal when ready)'}</div>
  ${spoilers || `<p class="text-muted text-sm">${_lang==='fr'?'Solution en cours d\'ajout.':'Solution coming soon.'}</p>`}
</div>`;
  }

  // ── Classic-format cases (CASE-001→015) ──
  const prompt = (_lang === 'en' && c.prompt_en) ? c.prompt_en : c.prompt;
  const clarifications = (_lang === 'en' && c.clarifications_en) ? c.clarifications_en : (c.clarifications || []);
  const keyHypotheses = (_lang === 'en' && c.keyHypotheses_en) ? c.keyHypotheses_en : (c.keyHypotheses || []);
  const structure = (_lang === 'en' && c.structure_en) ? c.structure_en : (c.structure || '');
  const insights = (_lang === 'en' && c.insights_en) ? c.insights_en : (c.insights || []);
  const recommendation = (_lang === 'en' && c.recommendation_en) ? c.recommendation_en : (c.recommendation || '');

  return `${header}
<div class="card mb-md">
  <div class="card-title">${_lang==='fr'?'Énoncé du cas':'Case Prompt'}</div>
  <div class="case-prompt">${prompt}</div>
  ${doneBtn}
</div>
<div class="card mb-md">
  <div class="card-title">${_lang==='fr'?'Guide de résolution (révélez quand prêt)':'Solution Guide (reveal when ready)'}</div>
  ${[
    clarifications.length && spoiler('🔍', 'Questions de clarification', 'Clarification Questions', `<ul>${clarifications.map(q=>`<li>${q}</li>`).join('')}</ul>`),
    keyHypotheses.length && spoiler('💡', 'Hypothèses clés', 'Key Hypotheses', `<ul>${keyHypotheses.map(h=>`<li>${h}</li>`).join('')}</ul>`),
    structure && spoiler('🌳', 'Structure suggérée', 'Suggested Structure', `<div class="formula-box">${structure}</div>`),
    insights.length && spoiler('📊', 'Insights clés', 'Key Insights', `<ul>${insights.map(i=>`<li>${i}</li>`).join('')}</ul>`),
    recommendation && spoiler('✅', 'Recommandation', 'Recommendation', `<div class="example-box">${recommendation}</div>`),
  ].filter(Boolean).join('')}
</div>`;
}

function toggleSpoiler(btn) {
  btn.classList.toggle('open');
  const body = btn.nextElementSibling;
  if (body && body.classList.contains('spoiler-body')) body.classList.toggle('open');
}

function markCaseDone(id) {
  updateDB('casesDone', arr => { if (!arr.includes(id)) arr.push(id); return arr; });
  showToast(_lang==='fr'?'Cas complété ! 🎉':'Case completed! 🎉', 'success');
  renderView();
}

// ============================================================
// DRILLS
// ============================================================
let _drillTimer = null;

function viewDrills() {
  const allDrills = DATA.modules.flatMap(m => m.drills);
  const categories = [...new Set(allDrills.map(d => d.type))];
  const filter = _state.subviewData || 'all';

  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_drills')||'Drills'}</h2><p>${allDrills.length} ${_lang==='fr'?'exercices sur tous les modules':'drills across all modules'}</p></div>
</div>
<div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem">
  <button class="btn btn-sm ${filter==='all'?'btn-primary':'btn-ghost'}" onclick="_state.subviewData='all';renderView()">${_lang==='fr'?'Tous':'All'}</button>
  ${categories.map(c => `<button class="btn btn-sm ${filter===c?'btn-primary':'btn-ghost'}" onclick="_state.subviewData='${c}';renderView()">${c}</button>`).join('')}
</div>
${allDrills.filter(d => filter === 'all' || d.type === filter).map(d => {
  const prompt = (_lang === 'en' && d.prompt_en) ? d.prompt_en : d.prompt;
  return `<div class="drill-card">
    <div class="drill-header">
      <div style="display:flex;gap:0.4rem;align-items:center"><span class="tag tag-blue">${d.type}</span><span class="text-xs text-muted">⏱ ${d.time}s</span></div>
      <button class="btn btn-primary btn-sm" data-action="start-drill" data-id="${d.id}">${_lang==='fr'?'Démarrer →':'Start →'}</button>
    </div>
    <div class="drill-prompt">${prompt}</div>
  </div>`;
}).join('')}`;
}

function startDrill(id) {
  const drill = DATA.modules.flatMap(m => m.drills).find(d => d.id === id);
  if (!drill) return;
  if (_drillTimer) { clearInterval(_drillTimer); _drillTimer = null; }
  const prompt = (_lang === 'en' && drill.prompt_en) ? drill.prompt_en : drill.prompt;

  // Exhibit rendering
  let exhibitHtml = '';
  if (drill.exhibitSVG) {
    exhibitHtml = `<div style="margin-bottom:1rem;border-radius:8px;overflow:hidden">${drill.exhibitSVG}</div>`;
  } else if (drill.exhibit) {
    const ex = drill.exhibit;
    let body = '';
    if (ex.type === 'table' && ex.headers && ex.rows) {
      body = `<div style="overflow-x:auto"><table class="data-table"><tr>${ex.headers.map(h => `<th>${h}</th>`).join('')}</tr>${ex.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
    } else if (ex.type === 'waterfall' && ex.items) {
      body = `<table class="data-table"><tr><th>${_lang==='fr'?'Élément':'Item'}</th><th>Impact (M€)</th><th>Cumulé (M€)</th></tr>${ex.items.map(it => `<tr><td>${it.label}</td><td style="color:${it.value >= 0 ? 'var(--green)' : 'var(--red)'}">${it.value >= 0 ? '+' : ''}${it.value}</td><td>${it.cumul}</td></tr>`).join('')}</table>`;
    } else if (ex.type === 'chart_description' && ex.description) {
      body = `<p style="font-size:0.9rem;line-height:1.6;color:var(--text-secondary)">${ex.description}</p>`;
    }
    exhibitHtml = `<div class="formula-box" style="margin-bottom:1rem"><strong style="display:block;margin-bottom:0.5rem;font-size:0.9rem">${ex.title || ''}</strong>${body}</div>`;
  }

  // Questions list
  let questionsHtml = '';
  if (drill.questions && drill.questions.length) {
    questionsHtml = `<div style="margin:0.75rem 0"><strong style="font-size:0.85rem;color:var(--text-secondary)">${_lang==='fr'?'Questions à traiter :':'Questions to address:'}</strong><ol style="margin:0.4rem 0 0 1.2rem;font-size:0.9rem;line-height:1.7">${drill.questions.map(q => `<li>${q}</li>`).join('')}</ol></div>`;
  }

  // MCQ options (BF drills)
  let optionsHtml = '';
  if (drill.options && drill.options.length) {
    optionsHtml = `<div style="margin:0.75rem 0"><strong style="font-size:0.85rem;color:var(--text-secondary)">${_lang==='fr'?'Options :':'Options:'}</strong><ol type="A" style="margin:0.4rem 0 0 1.2rem;font-size:0.9rem;line-height:1.9">${drill.options.map(o => `<li>${o}</li>`).join('')}</ol></div>`;
  }

  // Hint
  let hintHtml = '';
  if (drill.hint) {
    hintHtml = `<div class="insight-box" style="margin-bottom:1rem;font-size:0.85rem"><strong>${_lang==='fr'?'💡 Indice :':'💡 Hint:'}</strong> ${drill.hint}</div>`;
  }

  render(`
<div style="cursor:pointer;color:var(--text-secondary);font-size:0.78rem;display:inline-flex;align-items:center;gap:0.3rem;margin-bottom:1rem" data-action="goto" data-view="drills">← ${t('title_drills')||'Drills'}</div>
<div class="card" style="max-width:700px;margin:0 auto">
  <div style="display:flex;justify-content:space-between;margin-bottom:1rem"><span class="tag tag-blue">${drill.type}</span><span class="text-xs text-muted">${drill.id}</span></div>
  ${exhibitHtml}
  <div class="drill-prompt">${prompt}</div>
  ${questionsHtml}
  ${optionsHtml}
  ${hintHtml}
  <div class="drill-timer" id="drill-timer">${drill.time}</div>
  <div class="progress-track mb-md"><div class="progress-bar" id="drill-prog" style="width:100%;background:var(--accent);transition:width ${drill.time}s linear"></div></div>
  <textarea class="drill-answer" id="drill-answer" placeholder="${_lang==='fr'?'Écrivez votre réponse structurée ici...':'Write your structured answer here...'}"></textarea>
  <div style="display:flex;gap:0.5rem">
    <button class="btn btn-primary" onclick="submitDrill('${id}')">${_lang==='fr'?'Soumettre & voir la correction':'Submit & see correction'}</button>
    <button class="btn btn-ghost" data-action="goto" data-view="drills">${_lang==='fr'?'Passer':'Skip'}</button>
  </div>
  <div id="drill-result"></div>
</div>`);
  setTimeout(() => { const prog = document.getElementById('drill-prog'); if (prog) prog.style.width = '0%'; }, 100);
  let time = drill.time;
  _drillTimer = setInterval(() => {
    time--;
    const el = document.getElementById('drill-timer');
    if (el) { el.textContent = time; el.className = 'drill-timer' + (time <= 10 ? ' critical' : time <= 20 ? ' warning' : ''); }
    if (time <= 0) { clearInterval(_drillTimer); _drillTimer = null; }
  }, 1000);
}

function submitDrill(id) {
  if (_drillTimer) { clearInterval(_drillTimer); _drillTimer = null; }
  const drill = DATA.modules.flatMap(m => m.drills).find(d => d.id === id);
  const result = document.getElementById('drill-result');
  if (result) {
    const rawSolution = drill
      ? (drill.answer || drill.solution_outline ||
         (drill.correctAnswer
           ? `${_lang==='fr'?'Réponse correcte':'Correct answer'} : ${drill.correctAnswer}${drill.explanation ? '\n\n' + (_lang==='fr'?'Explication':'Explanation') + ' : ' + drill.explanation : ''}`
           : null))
      : null;
    const solution = drill ? ((_lang === 'en' && drill.answer_en) ? drill.answer_en : rawSolution) : null;
    const metrics = drill && drill.keyMetrics;
    let metricsHtml = '';
    if (metrics && metrics.length) {
      metricsHtml = `<div style="margin-top:0.75rem;display:flex;gap:0.5rem;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,0.08);padding-top:0.75rem"><strong style="font-size:0.8rem;color:var(--text-secondary);width:100%">${_lang==='fr'?'Chiffres clés :':'Key metrics:'}</strong>${metrics.map(m => `<span class="tag tag-blue">${m}</span>`).join('')}</div>`;
    }
    let solutionHtml = '';
    if (solution) {
      solutionHtml = `<div class="example-box mt-md" style="white-space:pre-line"><strong style="display:block;margin-bottom:0.5rem;font-size:0.95rem">${_lang==='fr'?'✅ Correction modèle :':'✅ Model answer:'}</strong>${solution}${metricsHtml}</div>`;
    } else {
      solutionHtml = `<div class="insight-box mt-md"><strong>${_lang==='fr'?'Réponse enregistrée.':'Answer recorded.'}</strong><br>${_lang==='fr'?'Vérification : votre réponse suit-elle le schéma hypothèse → structure → insight → implication ?':'Self-check: Does your answer follow hypothesis → structure → insight → implication?'}</div>`;
    }
    result.innerHTML = solutionHtml + `<button class="btn btn-primary btn-sm mt-sm" data-action="goto" data-view="drills">→ ${_lang==='fr'?'Drill suivant':'Next drill'}</button>`;
  }
  updateDB('drillStats', ds => { if (!ds[id]) ds[id] = { attempts: 0 }; ds[id].attempts++; return ds; });
}
App.submitDrill = submitDrill;

// ============================================================
// MENTAL MATH
// ============================================================
let _mathState = { idx: 0, exercises: [], correct: 0, showing: false, cat: 'all' };

function viewMath() {
  if (_state.subview === 'math-active') return viewMathActive();
  const stats = getDB('mathStats');
  const acc = stats.total > 0 ? Math.round(stats.correct / stats.total * 100) : 0;
  const allExercises = DATA.mentalMath.exercises;
  const cats = ['all', ...new Set(allExercises.map(e => e.cat))];
  const activeCat = _mathState.cat || 'all';
  const filtered = activeCat === 'all' ? allExercises : allExercises.filter(e => e.cat === activeCat);
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_math')||'Mental Math'}</h2><p>${stats.total} ${_lang==='fr'?'tentatives':'attempts'} · ${_lang==='fr'?'Précision':'Accuracy'}: ${acc}%</p></div>
</div>
<div class="grid grid-4 mb-lg">
  <div class="stat-card"><div class="stat-label">${_lang==='fr'?'Tentatives':'Attempts'}</div><div class="stat-value">${stats.total}</div></div>
  <div class="stat-card"><div class="stat-label">${_lang==='fr'?'Corrects':'Correct'}</div><div class="stat-value text-green">${stats.correct}</div></div>
  <div class="stat-card"><div class="stat-label">${_lang==='fr'?'Précision':'Accuracy'}</div><div class="stat-value" style="color:${acc>=80?'var(--green)':acc>=60?'var(--yellow)':'var(--red)'}">${acc}%</div></div>
  <div class="stat-card"><div class="stat-label">Target</div><div class="stat-value">90%+</div></div>
</div>
<div class="card mb-lg">
  <div class="card-title">${_lang==='fr'?'Choisir une catégorie':'Choose a Category'}</div>
  <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1rem">
    ${cats.map(c => `<button class="btn btn-sm ${activeCat===c?'btn-primary':'btn-ghost'}" onclick="_mathState.cat='${c}';renderView()">${c==='all'?(_lang==='fr'?'Toutes les catégories':'All Categories'):c} ${c==='all'?`(${allExercises.length})`:`(${allExercises.filter(e=>e.cat===c).length})`}</button>`).join('')}
  </div>
  <div style="text-align:center">
    <button class="btn btn-primary" style="padding:0.8rem 2rem;font-size:1rem" onclick="startMathCat('${activeCat}')">${_lang==='fr'?'Commencer':'Start'} ${activeCat==='all'?'':' — '+activeCat} (${filtered.length} ${_lang==='fr'?'exercices':'exercises'}) →</button>
  </div>
</div>
<div class="card">
  <div class="card-title">${activeCat==='all'?(_lang==='fr'?'Tous les exercices':'All Exercises'):activeCat} (${filtered.length})</div>
  <div class="data-table-wrap" style="overflow-x:auto">
    <table class="data-table">
      <tr><th>#</th><th>${_lang==='fr'?'Catégorie':'Category'}</th><th>${_lang==='fr'?'Question':'Question'}</th><th>${_lang==='fr'?'Réponse':'Answer'}</th></tr>
      ${filtered.map((e, i) => `<tr><td class="text-muted">${i+1}</td><td><span class="tag tag-purple">${e.cat}</span></td><td>${(_lang==='en'&&e.q_en)?e.q_en:e.q}</td><td class="text-green font-bold">${(_lang==='en'&&e.a_en)?e.a_en:e.a}</td></tr>`).join('')}
    </table>
  </div>
</div>`;
}

function startMath() { startMathCat('all'); }
function startMathCat(cat) {
  const all = DATA.mentalMath.exercises;
  const pool = cat === 'all' ? all : all.filter(e => e.cat === cat);
  _mathState.exercises = [...pool].sort(() => Math.random() - 0.5);
  _mathState.idx = 0; _mathState.correct = 0; _mathState.showing = false; _mathState.cat = cat;
  _state.subview = 'math-active'; renderView();
}
App.startMath = startMath;
App.startMathCat = startMathCat;

function viewMathActive() {
  const exercises = _mathState.exercises;
  if (_mathState.idx >= exercises.length) {
    const acc = Math.round(_mathState.correct / exercises.length * 100);
    return `<div class="math-card" style="max-width:500px;margin:2rem auto;text-align:center">
      <div style="font-size:3rem">🎉</div>
      <h2 style="margin:1rem 0">${_lang==='fr'?'Session terminée !':'Session Complete!'}</h2>
      <div class="stat-value" style="color:${acc>=80?'var(--green)':acc>=60?'var(--yellow)':'var(--red)'}">${acc}%</div>
      <div class="text-sm text-muted">${_mathState.correct}/${exercises.length} ${_lang==='fr'?'corrects':'correct'}</div>
      <div style="margin-top:1.5rem;display:flex;gap:0.5rem;justify-content:center">
        <button class="btn btn-primary" onclick="startMath()">${_lang==='fr'?'Recommencer':'Again'}</button>
        <button class="btn btn-ghost" data-action="back" data-to="math">${_lang==='fr'?'Retour':'Back'}</button>
      </div>
    </div>`;
  }
  const q = exercises[_mathState.idx];
  const qText = (_lang === 'en' && q.q_en) ? q.q_en : q.q;
  const catLabel = (_lang === 'en' && q.cat_en) ? q.cat_en : q.cat;
  return `
<div style="cursor:pointer;color:var(--text-secondary);font-size:0.78rem;display:inline-flex;gap:0.3rem;margin-bottom:1rem;align-items:center" data-action="back" data-to="math">← ${_lang==='fr'?'Retour':'Back'}</div>
<div class="math-card" style="max-width:500px;margin:0 auto">
  <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem"><span class="tag tag-purple">${catLabel}</span><span class="text-sm text-muted">${_mathState.idx+1} / ${exercises.length}</span></div>
  <div class="progress-track mb-md"><div class="progress-bar" style="width:${(_mathState.idx/exercises.length)*100}%;background:var(--accent)"></div></div>
  <div class="math-question">${qText}</div>
  <input class="math-input" id="math-input" type="text" placeholder="${_lang==='fr'?'Votre réponse...':'Your answer...'}" autocomplete="off">
  <div id="math-result"></div>
  <div style="margin-top:1rem;display:flex;gap:0.5rem;justify-content:center">
    <button class="btn btn-primary" data-action="submit-math">${_lang==='fr'?'Vérifier':'Check'}</button>
    <button class="btn btn-ghost" data-action="next-math">${_lang==='fr'?'Passer →':'Skip →'}</button>
  </div>
</div>`;
}

function submitMath() {
  const exercises = _mathState.exercises;
  const q = exercises[_mathState.idx];
  const input = document.getElementById('math-input');
  if (!input || _mathState.showing) return;
  _mathState.showing = true;
  const val = input.value.trim().toLowerCase().replace(/[,\s]/g, '');
  const ans = q.a.toLowerCase().replace(/[,\s€$]/g, '');
  const correct = val.includes(ans.replace(/[^0-9a-z%.m]/g, '')) || val.replace(/[^0-9]/g, '') === ans.replace(/[^0-9]/g, '');
  if (correct) _mathState.correct++;
  updateDB('mathStats', s => { s.total++; if (correct) s.correct++; return s; });
  const result = document.getElementById('math-result');
  const answerDisplay = (_lang === 'en' && q.a_en) ? q.a_en : q.a;
  const hintDisplay = (_lang === 'en' && q.hint_en) ? q.hint_en : (q.hint || '');
  if (result) {
    result.className = `math-result ${correct ? 'correct' : 'incorrect'}`;
    result.innerHTML = `<div style="margin-bottom:0.4rem">${correct ? `✓ ${_lang==='fr'?'Correct !':'Correct!'}` : `✗ ${_lang==='fr'?'Incorrect':'Incorrect'}`}</div>
    <div style="font-size:1.05rem"><strong>${_lang==='fr'?'Réponse :':'Answer:'}</strong> ${answerDisplay}</div>
    ${hintDisplay ? `<div style="margin-top:0.4rem;font-size:0.85rem;opacity:0.8">${hintDisplay}</div>` : ''}
    <button class="btn btn-primary btn-sm mt-sm" data-action="next-math">${_lang==='fr'?'Suivant →':'Next →'}</button>`;
  }
  if (input) input.disabled = true;
}

function nextMath() { _mathState.idx++; _mathState.showing = false; renderView(); }

// ============================================================
// MARKET SIZING
// ============================================================
function viewSizing() {
  const exercises = DATA.modules.find(m => m.slug === 'market-sizing')?.drills || [];
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_sizing')||'Market Sizing'}</h2><p>${_lang==='fr'?'Toujours croiser top-down et bottom-up':'Always cross-check top-down with bottom-up'}</p></div>
</div>
<div class="card mb-lg">
  <div class="card-title">${_lang==='fr'?'La méthode en 8 étapes':'The 8-Step Method'}</div>
  <div class="formula-box">${_lang==='fr'?`1. Clarifier le périmètre\n2. Choisir l'approche (top-down ou bottom-up)\n3. Écrire l'équation AVANT de calculer\n4. Énoncer les hypothèses explicitement\n5. Calculer\n6. Sanity check (est-ce raisonnable ?)\n7. Énoncer l'implication\n8. Identifier l'hypothèse la plus sensible`:`1. Clarify scope\n2. Choose approach (top-down or bottom-up)\n3. Write the equation BEFORE calculating\n4. State assumptions explicitly\n5. Calculate\n6. Sanity check (does this feel right?)\n7. State the implication\n8. Identify the most sensitive assumption`}</div>
</div>
${exercises.map(d => {
  const prompt = (_lang === 'en' && d.prompt_en) ? d.prompt_en : d.prompt;
  return `<div class="drill-card">
    <div class="drill-header"><span class="tag tag-purple">${_lang==='fr'?'Sizing':'Sizing'} · ${Math.round(d.time/60)} min</span><button class="btn btn-primary btn-sm" data-action="start-drill" data-id="${d.id}">${_lang==='fr'?'Résoudre →':'Solve →'}</button></div>
    <div class="drill-prompt">${prompt}</div>
  </div>`;
}).join('')}`;
}

// ============================================================
// PRICING CASES
// ============================================================
function viewPricing() {
  if (_state.subview === 'drill') return viewDrillDetail(_state.subviewData);
  const cases = DATA.pricingCases || [];
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_pricing')||'Pricing Cases'}</h2><p>${cases.length} ${_lang==='fr'?'cas pratiques de pricing avec corrections détaillées':'pricing cases with detailed worked solutions'}</p></div>
</div>
<div class="card mb-lg" style="border-left:3px solid #eab308">
  <div class="card-title">${_lang==='fr'?'Approche en 3 étapes':'3-Step Approach'}</div>
  <div class="formula-box">1. FLOOR (prix plancher) — Cost-plus : ${_lang==='fr'?'quel est le prix minimum pour ne pas perdre d\'argent ?':'what is the minimum price to avoid losing money?'}
2. CEILING (plafond) — Value-based : ${_lang==='fr'?'quelle est la valeur créée ? quelle est la meilleure alternative ?':'what value is created? what is the best alternative?'}
3. CONTEXTE CONCURRENTIEL : ${_lang==='fr'?'le prix est-il cohérent avec le marché ?':'is the price consistent with the market?'}</div>
</div>
${cases.map(d => {
  const prompt = (_lang === 'en' && d.prompt_en) ? d.prompt_en : d.prompt;
  return `<div class="drill-card">
    <div class="drill-header"><span class="tag tag-yellow">${_lang==='fr'?'Pricing':'Pricing'} · ${Math.round(d.time/60)} min</span><button class="btn btn-primary btn-sm" data-action="start-drill" data-id="${d.id}">${_lang==='fr'?'Résoudre →':'Solve →'}</button></div>
    <div class="drill-prompt">${prompt}</div>
  </div>`;
}).join('')}`;
}

// ============================================================
// EXHIBIT ANALYSIS
// ============================================================
function viewExhibits() {
  const drills = DATA.modules.find(m => m.slug === 'exhibits')?.drills || [];
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_exhibits')||'Exhibit Analysis'}</h2><p>${_lang==='fr'?'Méthode UOQCEI — objectif : 90 secondes par graphique':'UOQCEI method — target: 90 seconds per exhibit'}</p></div>
</div>
<div class="card mb-lg">
  <div class="formula-box">U — ${_lang==='fr'?'Understand (Comprendre)':'Understand'}: ${_lang==='fr'?'Que mesure ce graphique ?':'What does this chart measure?'}
O — ${_lang==='fr'?'Observe':'Observe'}: ${_lang==='fr'?'Tendances, outliers, anomalies ?':'Trends, outliers, anomalies?'}
Q — ${_lang==='fr'?'Quantify (Quantifier)':'Quantify'}: ${_lang==='fr'?'Chiffres clés ?':'Key numbers?'}
C — ${_lang==='fr'?'Compare':'Compare'}: ${_lang==='fr'?'vs référence / période précédente / budget ?':'vs benchmark / prior period / budget?'}
E — ${_lang==='fr'?'Explain (Expliquer)':'Explain'}: ${_lang==='fr'?'Pourquoi ? (hypothèses causales)':'Why? (causal hypotheses)'}
I — ${_lang==='fr'?'Implication':'Implication'}: ${_lang==='fr'?'Et alors ? Que fait-on ?':'So what? What should we do?'}</div>
  <div class="insight-box">${_lang==='fr'?'Objectif : compléter UOQCEI en moins de 90 secondes pour tout graphique.':'Target: Complete UOQCEI in under 90 seconds for any exhibit.'}</div>
</div>
${drills.map(d => {
  const prompt = (_lang === 'en' && d.prompt_en) ? d.prompt_en : d.prompt;
  return `<div class="drill-card">
    <div class="drill-header"><span class="tag tag-red">${_lang==='fr'?'Graphique':'Exhibit'} · ${d.time}s</span><button class="btn btn-primary btn-sm" data-action="start-drill" data-id="${d.id}">${_lang==='fr'?'Analyser →':'Analyze →'}</button></div>
    <div class="drill-prompt">${prompt}</div>
  </div>`;
}).join('')}`;
}

// ============================================================
// BUSINESS FUNDAMENTALS
// ============================================================
function viewFundamentals() {
  if (_state.subview === 'sector') {
    const s = DATA.sectors.find(x => x.id === _state.subviewData);
    if (!s) { _state.subview = null; return viewFundamentals(); }
    return `
<div style="cursor:pointer;color:var(--text-secondary);font-size:0.78rem;display:inline-flex;gap:0.3rem;margin-bottom:1rem;align-items:center" data-action="back-to-fund">← ${t('title_fundamentals')||'Business Fundamentals'}</div>
<div class="card">
  <h2 style="font-size:1.1rem;font-weight:800;margin-bottom:1rem">${s.name}</h2>
  <div class="section-content" style="border:none;padding:0">
    <h3>${_lang==='fr'?'Modèle économique':'Business Model'}</h3><p>${s.model}</p>
    <h3>${_lang==='fr'?'Drivers de revenus':'Revenue Drivers'}</h3><ul>${s.revenue.map(r=>`<li>${r}</li>`).join('')}</ul>
    <h3>${_lang==='fr'?'Structure de coûts':'Cost Structure'}</h3><ul>${s.costs.map(c=>`<li>${c}</li>`).join('')}</ul>
    <h3>Marges / Margins</h3><p>${s.margins}</p>
    <h3>KPIs</h3><ul>${s.kpis.map(k=>`<li><strong>${k}</strong></li>`).join('')}</ul>
    <h3>${_lang==='fr'?'Enjeux stratégiques':'Strategic Issues'}</h3><ul>${s.issues.map(i=>`<li>${i}</li>`).join('')}</ul>
    <h3>${_lang==='fr'?'Risques clés':'Key Risks'}</h3><ul>${s.risks.map(r=>`<li>${r}</li>`).join('')}</ul>
  </div>
</div>`;
  }
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_fundamentals')||'Business Fundamentals'}</h2><p>${DATA.sectors.length} ${_lang==='fr'?'fiches sectorielles':'sector sheets'}</p></div>
</div>
<div class="grid grid-3">
  ${DATA.sectors.map(s => `<div class="card" style="cursor:pointer" data-action="open-sector" data-id="${s.id}">
    <div class="font-bold mb-sm">${s.name}</div>
    <div class="text-xs text-muted">${s.kpis.slice(0,2).join(' · ')}</div>
    <div class="text-xs text-muted mt-sm">${s.issues[0]}</div>
    <div class="text-xs text-accent mt-sm">${_lang==='fr'?'Lire →':'Read →'}</div>
  </div>`).join('')}
</div>`;
}

// ============================================================
// PEI
// ============================================================
function viewPEI() {
  const dims = DATA.pei.dimensions;
  const stories = getDB('stories');
  const activeDim = _state.subview || 'connection';
  const dim = dims.find(d => d.id === activeDim) || dims[0];
  const dimStories = stories.filter(s => s.dimensions && s.dimensions.includes(activeDim));

  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_pei')||'PEI'}</h2><p>${_lang==='fr'?'4 dimensions — Connection, Leadership, Growth, Drive':'4 dimensions — Connection, Leadership, Growth, Drive'}</p></div>
</div>
<div class="pei-dimension-tabs">
  ${dims.map(d => `<div class="pei-tab ${activeDim===d.id?'active':''}" data-action="pei-dim" data-dim="${d.id}">
    <div class="pei-tab-icon">${d.id==='connection'?'🤝':d.id==='leadership'?'⚡':d.id==='growth'?'🌱':'🔥'}</div>
    <div class="pei-tab-name">${d.name}</div>
    <div class="pei-tab-cov">${stories.filter(s=>s.dimensions?.includes(d.id)).length} ${_lang==='fr'?'récits':'stories'}</div>
  </div>`).join('')}
</div>
<div class="grid grid-2 mb-lg">
  <div class="card">
    <div class="card-title">${_lang==='fr'?'Ce que les cabinets recherchent':'What Interviewers Look For'}</div>
    <p class="text-sm">${dim.what}</p>
    <div class="mt-md"><div class="text-xs text-muted mb-sm">SIGNALS</div>
    ${dim.signals.map(s=>`<div class="tag tag-blue" style="margin:0.2rem">${s}</div>`).join('')}</div>
  </div>
  <div class="card">
    <div class="card-title">${_lang==='fr'?'Structure SAI':'SAI Structure'}</div>
    <div class="formula-box" style="font-size:0.75rem">${DATA.pei.structure.format}</div>
  </div>
</div>
<div class="card mb-lg">
  <div class="card-title">${_lang==='fr'?'Questions probables + relances':'Likely Questions + Follow-ups'}</div>
  ${dim.questions.map(q => `<div class="drill-card">
    <div class="drill-prompt">${q}</div>
    <div class="mt-sm"><div class="text-xs text-muted mb-sm">${_lang==='fr'?'RELANCES À PRÉPARER :':'FOLLOW-UPS TO PREPARE:'}</div>
    ${dim.follow_ups.map(f=>`<div class="text-xs text-secondary">• ${f}</div>`).join('')}</div>
  </div>`).join('')}
</div>
<div class="section-header">
  <div class="section-header-text"><h2>${_lang==='fr'?'Vos récits':'Your Stories'} ${dim.name}</h2><p>${dimStories.length} ${_lang==='fr'?'récit(s)':'story(ies)'}</p></div>
  <button class="btn btn-primary" data-action="add-story">+ ${_lang==='fr'?'Ajouter un récit':'Add Story'}</button>
</div>
${dimStories.length === 0 ? `<div class="empty-state"><div class="empty-icon">📝</div><div class="empty-title">${_lang==='fr'?`Aucun récit pour ${dim.name} pour l'instant`:`No stories for ${dim.name} yet`}</div></div>`
: dimStories.map(s => `<div class="story-card">
  <div class="story-title-row"><div class="story-title">${s.title}</div>
  <div>${(s.dimensions||[]).map(d=>`<span class="tag tag-blue">${d}</span>`).join('')}</div></div>
  <div class="grid grid-2 mt-sm">
    <div class="story-field"><div class="story-field-label">${_lang==='fr'?'Actions':'Actions'}</div><div class="story-field-value">${s.actions||'—'}</div></div>
    <div class="story-field"><div class="story-field-label">${_lang==='fr'?'Impact':'Impact'}</div><div class="story-field-value text-green font-bold">${s.impact||'—'}</div></div>
  </div>
</div>`).join('')}`;
}

function openPEIDim(dim) { _state.subview = dim; renderView(); }

// ============================================================
// STORY BANK
// ============================================================
function viewStories() {
  const list = getDB('stories');
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_stories')||'Story Bank'}</h2><p>${list.length} ${_lang==='fr'?'récits · Couvrir les 4 dimensions PEI':'stories · Cover all 4 PEI dimensions'}</p></div>
  <button class="btn btn-primary" data-action="add-story">+ ${_lang==='fr'?'Ajouter':'Add Story'}</button>
</div>
${list.length === 0 ? `<div class="empty-state"><div class="empty-icon">📖</div><div class="empty-title">${_lang==='fr'?'Banque de récits vide':'Story bank empty'}</div></div>`
: list.map((s, i) => `<div class="story-card">
  <div class="story-title-row"><div class="story-title">${s.title}</div>
  <div style="display:flex;gap:0.5rem;align-items:center">${(s.dimensions||[]).map(d=>`<span class="tag tag-blue">${d}</span>`).join('')}
  <button class="btn btn-danger btn-sm" data-action="delete-story" data-id="${i}">✕</button></div></div>
  <div class="grid grid-2 mt-sm">
    <div class="story-field"><div class="story-field-label">${_lang==='fr'?'Entreprise':'Company'}</div><div class="story-field-value">${s.company||'—'}</div></div>
    <div class="story-field"><div class="story-field-label">Impact</div><div class="story-field-value text-green font-bold">${s.impact||'—'}</div></div>
  </div>
</div>`).join('')}`;
}

function openStoryModal() {
  const modal = `<div class="modal-overlay" id="modal-overlay">
  <div class="modal">
    <button class="modal-close" data-action="close-modal">✕</button>
    <h3 style="margin-bottom:1rem">${_lang==='fr'?'Ajouter un récit':'Add Story'}</h3>
    <div class="form-group"><label class="form-label">Titre / Title</label><input class="input" id="s-title" placeholder="${_lang==='fr'?'ex: Conduit l\'adoption de l\'IA chez SAP':'e.g., Led AI adoption at SAP'}"></div>
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Entreprise':'Company'}</label>
      <select class="input" id="s-company"><option>SAP</option><option>Generali</option><option>SNCF</option><option>Other</option></select></div>
    <div class="form-group"><label class="form-label">Dimensions PEI</label>
      <div style="display:flex;gap:0.8rem;flex-wrap:wrap">
        ${DATA.pei.dimensions.map(d=>`<label style="display:flex;align-items:center;gap:0.3rem;cursor:pointer;font-size:0.78rem"><input type="checkbox" class="sdim" value="${d.id}"> ${d.name}</label>`).join('')}
      </div></div>
    <div class="form-group"><label class="form-label">Situation</label><textarea class="textarea" id="s-sit" rows="2"></textarea></div>
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Mes actions (utiliser "je", pas "nous")':'My Actions — use "I", not "we"'}</label><textarea class="textarea" id="s-act" rows="3"></textarea></div>
    <div class="form-group"><label class="form-label">Impact</label><input class="input" id="s-imp" placeholder="${_lang==='fr'?'ex: Économisé 200h/trimestre':'e.g., Saved 200h/quarter'}"></div>
    <div style="display:flex;gap:0.5rem;margin-top:1rem">
      <button class="btn btn-primary" data-action="save-story">${_lang==='fr'?'Sauvegarder':'Save'}</button>
      <button class="btn btn-ghost" data-action="close-modal">${_lang==='fr'?'Annuler':'Cancel'}</button>
    </div>
  </div>
</div>`;
  document.body.insertAdjacentHTML('beforeend', modal);
  document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target.id === 'modal-overlay') closeModal(); });
}

function saveStory() {
  const title = document.getElementById('s-title')?.value?.trim();
  if (!title) { showToast(_lang==='fr'?'Ajoutez un titre':'Please add a title', 'error'); return; }
  const dims = [...document.querySelectorAll('.sdim:checked')].map(el => el.value);
  updateDB('stories', arr => { arr.push({ title, company: document.getElementById('s-company')?.value, dimensions: dims, situation: document.getElementById('s-sit')?.value, actions: document.getElementById('s-act')?.value, impact: document.getElementById('s-imp')?.value, date: today() }); return arr; });
  closeModal(); showToast(_lang==='fr'?'Récit sauvegardé ! 📖':'Story saved! 📖', 'success'); renderView();
}

function deleteStory(id) { updateDB('stories', arr => { arr.splice(parseInt(id), 1); return arr; }); renderView(); }

// ============================================================
// MOCK INTERVIEWS
// ============================================================
function viewMocks() {
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_mocks')||'Mock Interviews'}</h2><p>${_lang==='fr'?'Simulation complète — PEI + Cas + Synthèse':'Full simulation — PEI + Case + Synthesis'}</p></div>
</div>
<div class="grid grid-2 mb-lg">
  <div class="card" style="border-left:3px solid var(--purple)">
    <div style="font-size:2rem;margin-bottom:0.8rem">🎤</div>
    <div class="font-bold mb-sm">${_lang==='fr'?'Simulation complète (45–60 min)':'Full Mock Interview (45–60 min)'}</div>
    <div class="text-sm text-muted mb-md">${_lang==='fr'?'PEI (15 min) + Cas (30-40 min) + Synthèse (5 min)':'PEI (15 min) + Case (30-40 min) + Synthesis (5 min)'}</div>
    <a href="https://www.preplounge.com/meeting-board" target="_blank" class="btn btn-primary">${_lang==='fr'?'Trouver un partenaire sur PrepLounge →':'Find Partner on PrepLounge →'}</a>
  </div>
  <div class="card" style="border-left:3px solid var(--orange)">
    <div style="font-size:2rem;margin-bottom:0.8rem">⚡</div>
    <div class="font-bold mb-sm">${_lang==='fr'?'Cas seul (30–40 min)':'Case Only Mock (30–40 min)'}</div>
    <div class="text-sm text-muted mb-md">${_lang==='fr'?'Uniquement la partie cas':'Just the case portion'}</div>
    <button class="btn btn-secondary" data-action="goto" data-view="cases">${_lang==='fr'?'Ouvrir la bibliothèque de cas →':'Open Case Library →'}</button>
  </div>
</div>
<div class="card mb-lg">
  <div class="card-title">${_lang==='fr'?'Structure d\'une simulation':'Mock Interview Structure'}</div>
  <div class="section-content" style="border:none;padding:0">
    <p><strong>0–5 min</strong> : ${_lang==='fr'?'Introductions, small talk → dimension Connection':'Introductions, small talk → Connection dimension'}</p>
    <p><strong>5–15 min</strong> : ${_lang==='fr'?'Question PEI + 5+ min de relances profondes':'PEI question + 5+ minutes of follow-up probing'}</p>
    <p><strong>15–50 min</strong> : ${_lang==='fr'?'Cas — clarifier → structurer → analyser → synthétiser → recommander':'Case — clarify → structure → analyze → synthesize → recommend'}</p>
    <p><strong>50–55 min</strong> : ${_lang==='fr'?'Vos questions pour l\'intervieweur':'Your questions for the interviewer'}</p>
    <h3>${_lang==='fr'?'Débriefing post-simulation':'Post-Mock Debrief'}</h3>
    <div class="formula-box">${_lang==='fr'?`Notez chaque dimension de 1 à 3 :
Structure / Maths / Intuition business /
Hypothèse / Graphiques / Communication /
Synthèse / Recommandation

→ Top 3 améliorations pour la prochaine session`:`Score each dimension 1-3:
Structure / Math / Business Intuition /
Hypothesis / Exhibits / Communication /
Synthesis / Recommendation

→ Top 3 improvements to work on next`}</div>
  </div>
</div>`;
}

// ============================================================
// CASE PARTNERS
// ============================================================
function viewPartners() {
  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_partners')||'Case Partners'}</h2><p>${_lang==='fr'?'La pratique en conditions réelles est indispensable':'Live practice is essential'}</p></div>
</div>
<div class="card mb-lg" style="border-left:3px solid var(--green)">
  <div class="card-title">Priority 1 — PrepLounge</div>
  <p class="text-sm mb-md">${_lang==='fr'?'La plus grande communauté mondiale de préparation aux cas. Gratuit = 10 sessions de mock + mise en relation avec des partenaires.':'The largest global community for case practice. Free basic = 10 mock sessions + full partner matching.'}</p>
  <a href="https://www.preplounge.com/meeting-board" target="_blank" class="btn btn-primary">${_lang==='fr'?'Ouvrir le Meeting Board PrepLounge →':'Open PrepLounge Meeting Board →'}</a>
</div>
<div class="card mb-lg">
  <div class="card-title">Priority 2 — IGotAnOffer</div>
  <a href="https://igotanoffer.com/pages/case-interview-partner" target="_blank" class="btn btn-secondary">${_lang==='fr'?'Trouver un partenaire IGotAnOffer →':'Find IGotAnOffer Partner →'}</a>
</div>`;
}

// ============================================================
// MISTAKE LOG
// ============================================================
function viewMistakes() {
  const log = getDB('mistakes');
  const catCounts = {};
  log.forEach(m => { catCounts[m.skill] = (catCounts[m.skill] || 0) + 1; });
  const top = Object.entries(catCounts).sort((a,b)=>b[1]-a[1]).slice(0,3);

  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_mistakes')||'Mistake Log'}</h2><p>${log.length} ${_lang==='fr'?'erreurs enregistrées':'mistakes logged'}</p></div>
  <button class="btn btn-primary" data-action="add-mistake">+ ${_lang==='fr'?'Enregistrer':'Log Mistake'}</button>
</div>
${top.length > 0 ? `<div class="card mb-lg" style="border-left:3px solid var(--red)">
  <div class="card-title">${_lang==='fr'?'Erreurs récurrentes':'Top Recurring Mistakes'}</div>
  ${top.map(([k,v]) => `<div class="score-row"><div class="score-label text-sm">${k}</div><div class="score-track"><div class="score-fill" style="width:${v/log.length*100}%;background:var(--red)"></div></div><div class="score-pct text-sm text-red">${v}×</div></div>`).join('')}
</div>` : ''}
${log.length === 0 ? `<div class="empty-state"><div class="empty-icon">📝</div><div class="empty-title">${_lang==='fr'?'Aucune erreur enregistrée':'No mistakes logged yet'}</div></div>`
: log.map((m, i) => `<div class="mistake-item">
  <div class="mistake-header"><span class="tag tag-red">${m.skill}</span><span class="tag tag-blue">${m.case}</span><span class="mistake-date">${m.date}</span></div>
  <div class="font-bold text-sm mb-sm">${m.mistake}</div>
  <div class="text-xs text-muted">${_lang==='fr'?'Cause :':'Cause:'} ${m.cause}</div>
  <div class="text-xs text-secondary mt-sm">${_lang==='fr'?'Correction :':'Fix:'} ${m.correction}</div>
  <button class="btn btn-ghost btn-sm mt-sm" data-action="delete-mistake" data-idx="${i}">${_lang==='fr'?'Supprimer':'Delete'}</button>
</div>`).join('')}`;
}

function openMistakeModal() {
  const skills = DATA.scoring.dimensions.map(d => (_lang==='en'&&d.label_en)?d.label_en:d.label);
  const modal = `<div class="modal-overlay" id="modal-overlay">
  <div class="modal">
    <button class="modal-close" data-action="close-modal">✕</button>
    <h3 style="margin-bottom:1rem">${_lang==='fr'?'Enregistrer une erreur':'Log Mistake'}</h3>
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Cas / Contexte':'Case / Context'}</label><input class="input" id="m-case"></div>
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Compétence':'Skill Area'}</label><select class="input" id="m-skill">${skills.map(s=>`<option>${s}</option>`).join('')}</select></div>
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Ce que j\'ai fait de mal':'What I Did Wrong'}</label><textarea class="textarea" id="m-text" rows="2"></textarea></div>
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Cause racine':'Root Cause'}</label><input class="input" id="m-cause"></div>
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Correction — ce que je ferai différemment':'Correction'}</label><textarea class="textarea" id="m-fix" rows="2"></textarea></div>
    <div style="display:flex;gap:0.5rem;margin-top:1rem">
      <button class="btn btn-primary" data-action="save-mistake">${_lang==='fr'?'Sauvegarder':'Save'}</button>
      <button class="btn btn-ghost" data-action="close-modal">${_lang==='fr'?'Annuler':'Cancel'}</button>
    </div>
  </div>
</div>`;
  document.body.insertAdjacentHTML('beforeend', modal);
  document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target.id === 'modal-overlay') closeModal(); });
}

function saveMistake() {
  const mistake = document.getElementById('m-text')?.value?.trim();
  if (!mistake) { showToast(_lang==='fr'?'Décrivez l\'erreur':'Please describe the mistake', 'error'); return; }
  updateDB('mistakes', arr => { arr.push({ case: document.getElementById('m-case')?.value||'', skill: document.getElementById('m-skill')?.value||'', mistake, cause: document.getElementById('m-cause')?.value||'', correction: document.getElementById('m-fix')?.value||'', date: today() }); return arr; });
  closeModal(); showToast(_lang==='fr'?'Erreur enregistrée 📝':'Mistake logged 📝', 'info'); renderView();
}

function deleteMistake(idx) { updateDB('mistakes', arr => { arr.splice(parseInt(idx), 1); return arr; }); renderView(); }

// ============================================================
// PROGRESS
// ============================================================
function viewProgress() {
  const scores = getDB('scores');
  const readiness = getReadiness();

  return `
<div class="section-header"><div class="section-header-text"><h2>${t('title_progress')||'Progress & Readiness'}</h2></div></div>
<div class="readiness-grid mb-lg">
  <div class="readiness-card">
    <div class="readiness-label">${t('readiness')||'Overall Readiness'}</div>
    <div class="readiness-big" style="color:${getReadinessColor(readiness)}">${readiness}%</div>
    <div class="readiness-verdict ${readiness>=78?'verdict-ready':readiness>=62?'verdict-almost':'verdict-needs'}">${readiness>=78?'✓ READY':readiness>=62?'⚡ ALMOST READY':'⚠ NEEDS WORK'}</div>
  </div>
  <div class="readiness-card">
    <div class="readiness-label">${_lang==='fr'?'Objectif':'Target'}</div>
    <div class="readiness-big" style="color:var(--yellow)">78%</div>
    <div class="readiness-verdict verdict-almost">${_lang==='fr'?'Objectif minimum':'Minimum Target'}</div>
  </div>
  <div class="readiness-card">
    <div class="readiness-label">${_lang==='fr'?'Jours restants':'Days Remaining'}</div>
    <div class="readiness-big" style="color:var(--accent)">${daysUntil('2026-10-16')}</div>
    <div class="readiness-verdict verdict-almost">${_lang==='fr'?'Avant le 16 oct.':'Until Oct 16'}</div>
  </div>
</div>
<div class="card mb-lg">
  <div class="card-title">${_lang==='fr'?'Score par dimension — Mettez à jour après chaque session de cas':'Score Per Dimension'}</div>
  ${DATA.scoring.dimensions.map(d => {
    const v = scores[d.id] || 50;
    const label = (_lang==='en'&&d.label_en)?d.label_en:d.label;
    return `<div class="score-row mb-sm">
      <div class="score-label text-sm">${label} <span class="text-xs text-muted">×${d.weight}%</span></div>
      <div class="score-track"><div class="score-fill" style="width:${v}%;background:${d.color}"></div></div>
      <div style="display:flex;align-items:center;gap:0.5rem">
        <input type="range" min="0" max="100" value="${v}" style="width:80px" onchange="updateScore('${d.id}', parseInt(this.value))">
        <div class="score-pct font-bold" style="color:${d.color}">${v}%</div>
      </div>
    </div>`;
  }).join('')}
</div>
<div class="card">
  <div class="card-title">${t('adaptive_rec')||'Adaptive Recommendation'}</div>
  <div class="insight-box" style="margin:0">${generateAdaptiveRec(scores)}</div>
</div>`;
}

function updateScore(dim, val) {
  updateDB('scores', s => { s[dim] = val; return s; });
  const r = getReadiness();
  const badge = document.getElementById('readiness-badge');
  if (badge) {
    const dot = badge.querySelector('.readiness-dot');
    if (dot) dot.className = 'readiness-dot ' + (r>=78?'green':r>=62?'yellow':'red');
    const valEl = badge.querySelector('.readiness-val');
    if (valEl) valEl.textContent = `${r}% ready`;
  }
}
App.updateScore = updateScore;

// ============================================================
// RESOURCES
// ============================================================
function viewResources() {
  const byCategory = {};
  (DATA.resources || []).forEach(r => {
    const cat = r.category || r.skill || 'Other';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(r);
  });
  const catOrder = ['Case Practice', 'Video & YouTube', 'Other'];
  const catLabels = {
    'Case Practice': _lang==='fr'?'🎯 Pratique des cas':'🎯 Case Practice',
    'Video & YouTube': _lang==='fr'?'📺 Vidéos et YouTube':'📺 Video & YouTube',
    'Other': _lang==='fr'?'🔗 Autres ressources':'🔗 Other Resources'
  };

  const renderList = (list) => list.map(r => `
  <div class="resource-card">
    <div class="resource-priority"><span class="tag ${r.priority==='Must'?'tag-red':r.priority==='Should'?'tag-yellow':'tag-green'}">${r.priority}</span></div>
    <div class="resource-body">
      <div class="resource-name"><a href="${r.url}" target="_blank">${r.name}</a></div>
      <div class="resource-desc">${r.freeContent}</div>
      <div class="resource-meta">
        <span class="tag ${r.free===true?'tag-green':r.free==='Freemium'?'tag-yellow':'tag-red'}">${r.free===true?(_lang==='fr'?'Gratuit':'Free'):r.free}</span>
        <span class="stars-display">${Array.from({length:5},(_,i)=>`<span style="color:${i<r.quality?'var(--yellow)':'var(--border)'};font-size:0.7rem">★</span>`).join('')}</span>
      </div>
    </div>
  </div>`).join('');

  const allCats = [...new Set([...catOrder, ...Object.keys(byCategory)])].filter(c => byCategory[c]);

  return `
<div class="section-header"><div class="section-header-text"><h2>${t('title_resources')||'Resources'}</h2><p>${_lang==='fr'?'Toutes les ressources vérifiées — septembre 2026':'All verified resources — September 2026'}</p></div></div>
<div class="card mb-md" style="border-left:3px solid var(--yellow)">
  <div class="text-sm"><strong>${_lang==='fr'?'Gratuit uniquement.':'Free only.'}</strong> ${_lang==='fr'?'Les ressources freemium ne sont listées que lorsque leur tier gratuit a une valeur réelle. Dernière vérification : 15 septembre 2026.':'Freemium resources listed only when their free tier has real value. Last verified: September 15, 2026.'}</div>
</div>
${allCats.map(cat => byCategory[cat] ? `
<div class="card-title mt-md mb-sm" style="padding:0 0 0.5rem;font-size:0.85rem">${catLabels[cat]||cat}</div>
${renderList(byCategory[cat])}` : '').join('')}`;
}

// ============================================================
// CASEBOOKS
// ============================================================
function viewCasebooks() {
  const sorted = [...DATA.casebooks].sort((a,b) => b.year - a.year);
  return `
<div class="section-header"><div class="section-header-text"><h2>${t('title_casebooks')||'Free Casebooks'}</h2><p>${DATA.casebooks.length} ${_lang==='fr'?'casebooks · PDF vérifiés sept. 2026 — tous téléchargeables':'casebooks · PDFs verified Sept 2026 — all downloadable'}</p></div></div>
<div class="card mb-md" style="border-left:3px solid var(--green)">
  <div class="text-sm"><strong>${_lang==='fr'?'Liens PDF vérifiés septembre 2026 — tous fonctionnels (HTTP 200).':'PDF links verified September 2026 — all live (HTTP 200).'}</strong> ${_lang==='fr'?'Téléchargement direct, sans compte. Priorité : Darden 2018-19, Wharton 2010, Duke Fuqua 2014.':'Direct download, no account required. Priority: Darden 2018-19, Wharton 2010, Duke Fuqua 2014.'}</div>
</div>
<div style="overflow-x:auto">
  <table class="data-table" style="width:100%">
    <tr><th>${_lang==='fr'?'École':'School'}</th><th>${_lang==='fr'?'Année':'Year'}</th><th>Pages</th><th>${_lang==='fr'?'Qualité':'Quality'}</th><th>Notes</th><th>PDF</th></tr>
    ${sorted.map(cb => `<tr>
      <td class="font-bold">${cb.name}</td>
      <td><span class="tag ${cb.year>=2015?'tag-green':cb.year>=2010?'tag-yellow':'tag-orange'}">${cb.year}</span></td>
      <td class="text-muted">${cb.pages||'—'}</td>
      <td style="color:var(--yellow)">${'★'.repeat(cb.quality)}${'☆'.repeat(5-cb.quality)}</td>
      <td class="text-sm text-secondary">${cb.notes}</td>
      <td><a href="${cb.url}" target="_blank" class="btn btn-primary btn-sm">↓ PDF</a></td>
    </tr>`).join('')}
  </table>
</div>`;
}

// ============================================================
// CALENDAR
// ============================================================
function viewCalendar() {
  return `
<div class="section-header"><div class="section-header-text"><h2>${t('title_calendar')||'Calendar'}</h2><p>15 ${_lang==='fr'?'septembre':'September'} → 16 ${_lang==='fr'?'octobre':'October'} 2026</p></div></div>
<div class="calendar-grid">
  <div class="cal-week">
    <div class="cal-week-label"></div>
    ${['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'].map(d=>`<div class="text-xs text-muted" style="text-align:center;padding:0.3rem">${d}</div>`).join('')}
  </div>
  ${DATA.weeks.map(week => `<div class="cal-week">
    <div class="cal-week-label" style="font-size:0.7rem;font-weight:700;color:var(--text-muted);text-align:right;padding-right:0.8rem;padding-top:0.5rem">S${week.id}</div>
    ${week.days.map(d => {
      const isToday = d.date === today();
      const tasksDone = getDB('tasksDone')[d.date] || [];
      const completion = Math.round(tasksDone.length / d.tasks.length * 100);
      const isInterview = d.date === '2026-10-16';
      return `<div class="cal-day ${isToday?'today':''} ${completion===100?'done':''} ${isInterview?'interview':''}" data-action="goto" data-view="today" style="cursor:pointer">
        <div class="cal-date">${d.label.split(' ')[1]}</div>
        <div class="cal-theme">${isInterview?'⚡ MK':(_lang==='en'&&d.theme_en)?d.theme_en:d.theme}</div>
        ${completion>0?`<div style="font-size:0.65rem;color:${completion===100?'var(--green)':'var(--text-muted)'};margin-top:0.2rem">${completion}%</div>`:''}
      </div>`;
    }).join('')}
  </div>`).join('')}
</div>`;
}

// ============================================================
// SETTINGS
// ============================================================
function viewSettings() {
  return `
<div class="section-header"><div class="section-header-text"><h2>${t('title_settings')||'Settings'}</h2></div></div>
<div class="card mb-md">
  <div class="card-title">${_lang==='fr'?'Langue / Language':'Language / Langue'}</div>
  <div style="display:flex;gap:0.5rem;margin-top:0.5rem">
    <button class="btn ${_lang==='fr'?'btn-primary':'btn-ghost'}" onclick="App.toggleLang(); if(window._lang!=='fr') App.toggleLang()">🇫🇷 Français</button>
    <button class="btn ${_lang==='en'?'btn-primary':'btn-ghost'}" onclick="if(window._lang!=='en') App.toggleLang()">🇬🇧 English</button>
  </div>
</div>
<div class="card mb-md">
  <div class="card-title">${_lang==='fr'?'Dates des entretiens':'Interview Dates'}</div>
  <div class="grid grid-2">
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Entretien 1':'Interview 1'}</label><input class="input" type="text" value="October 16, 2026" readonly></div>
    <div class="form-group"><label class="form-label">${_lang==='fr'?'Entretien 2':'Interview 2'}</label><input class="input" type="text" value="~mid-October 2026" readonly></div>
  </div>
</div>
<div class="card mb-md">
  <div class="card-title">${_lang==='fr'?'Réinitialiser toutes les données':'Reset All Data'}</div>
  <div class="text-sm text-muted mb-md">${_lang==='fr'?'Efface définitivement tous les progrès, scores, récits et journal d\'erreurs.':'Permanently erases all progress, scores, stories, and mistake log.'}</div>
  <button class="btn btn-danger" onclick="if(confirm('${_lang==='fr'?'Réinitialiser TOUTES les données ? Impossible à annuler.':'Reset ALL data? This cannot be undone.'}')) resetAll()">${_lang==='fr'?'Tout réinitialiser':'Reset All Data'}</button>
</div>
<div class="card">
  <div class="card-title">About</div>
  <div class="text-sm text-secondary">
    <p><strong>Samy Consulting Interview OS</strong></p>
    <p>Built September 2026</p>
    <p class="mt-md text-muted">${_lang==='fr'?'Toutes les données sauvegardées localement. Aucune donnée envoyée à un serveur.':'All progress saved locally. No data sent to any server.'}</p>
  </div>
</div>`;
}

function resetAll() {
  Object.keys(_defaults).forEach(k => setDB(k, _defaults[k]));
  renderView(); showToast(_lang==='fr'?'Données réinitialisées.':'All data reset.', 'info');
}
App.resetAll = resetAll;

// ============================================================
// MODAL
// ============================================================
function closeModal() { const m = document.getElementById('modal-overlay'); if (m) m.remove(); }

// ============================================================
// TOAST
// ============================================================
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`; el.textContent = msg;
  container.appendChild(el); setTimeout(() => el.remove(), 3000);
}
App.toast = showToast;

// ============================================================
// COURSES — 3-level navigation (Categories → Submodules → Fiches)
// ============================================================
function viewCourses() {
  if (!DATA.courses || !DATA.courses.length) {
    return `<div class="card"><p>${_lang==='fr'?'Contenu des cours bientôt disponible.':'Course content coming soon.'}</p></div>`;
  }
  if (_state.subview === 'fiche') return viewFicheDetail();
  if (_state.subview === 'cat') return viewCourseCategory();

  return `
<div class="section-header">
  <div class="section-header-text"><h2>${t('title_courses')||'Cours'}</h2><p>${DATA.courses.length} ${_lang==='fr'?'catégories':'categories'} · ${DATA.courses.reduce((t,c)=>t+c.submodules.reduce((s,sm)=>s+sm.fiches.length,0),0)} ${_lang==='fr'?'fiches détaillées':'detailed sheets'}</p></div>
</div>
<div class="module-grid">
  ${DATA.courses.map(cat => {
    const prog = getCourseCatProgress(cat.id);
    const total = cat.submodules.reduce((s, sm) => s + sm.fiches.length, 0);
    return `<div class="module-card" data-action="open-course-cat" data-id="${cat.id}" style="cursor:pointer;border-top-color:${cat.color}">
      <div class="module-icon">${cat.icon}</div>
      <div class="module-num">${total} ${_lang==='fr'?'fiches':'sheets'}</div>
      <div class="module-title">${(_lang === 'en' && cat.title_en) ? cat.title_en : cat.title}</div>
      <div class="module-progress">
        <div class="module-pct">${prog.done}/${prog.total} ${_lang==='fr'?'lues':'read'}</div>
        <div class="progress-track"><div class="progress-bar" style="width:${prog.pct}%;background:${cat.color}"></div></div>
      </div>
    </div>`;
  }).join('')}
</div>`;
}

function viewCourseCategory() {
  const catId = _state.subviewData && _state.subviewData.catId;
  const cat = DATA.courses && DATA.courses.find(c => c.id === catId);
  if (!cat) { _state.subview = null; return viewCourses(); }

  return `
<div class="module-back" data-action="back-courses" style="cursor:pointer;color:var(--text-secondary);font-size:0.78rem;display:inline-flex;align-items:center;gap:0.3rem;margin-bottom:1rem;padding:0.3rem 0">← ${t('title_courses')||'Cours'}</div>
<div class="module-hero">
  <div class="module-hero-icon">${cat.icon}</div>
  <div>
    <div class="module-hero-title">${(_lang === 'en' && cat.title_en) ? cat.title_en : cat.title}</div>
    <div class="module-hero-sub">${cat.submodules.length} ${_lang==='fr'?'modules':'modules'} · ${cat.submodules.reduce((s,sm)=>s+sm.fiches.length,0)} ${_lang==='fr'?'fiches':'sheets'}</div>
  </div>
</div>
${cat.submodules.map(sm => {
  const prog = getCourseSubmoduleProgress(catId, sm.id);
  return `<div class="card mb-md">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
      <div class="font-bold">${(_lang === 'en' && sm.title_en) ? sm.title_en : sm.title}</div>
      <div class="text-xs text-muted">${prog.done}/${prog.total}</div>
    </div>
    <div class="progress-track mb-md"><div class="progress-bar" style="width:${prog.pct}%;background:${cat.color}"></div></div>
    <div style="display:flex;flex-direction:column;gap:0.4rem">
      ${sm.fiches.map(f => {
        const done = isFicheDone(f.id);
        return `<div data-action="open-fiche" data-id="${f.id}" data-catid="${catId}" style="cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0.8rem;border-radius:6px;border:1px solid var(--border);background:${done?'rgba(34,197,94,0.08)':'var(--bg-card)'}">
          <div>
            <div class="text-sm font-bold" style="color:${done?'var(--green)':'inherit'}">${done?'✓ ':''}${(_lang === 'en' && f.title_en) ? f.title_en : f.title}</div>
            ${f.duration?`<div class="text-xs text-muted">${f.duration}</div>`:''}
          </div>
          <span class="text-xs text-accent">→</span>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}).join('')}`;
}

function viewFicheDetail() {
  const data = _state.subviewData || {};
  const catId = data.catId;
  const ficheId = data.ficheId;
  const cat = DATA.courses && DATA.courses.find(c => c.id === catId);
  let fiche = null, sm = null;
  if (cat) {
    for (const sub of cat.submodules) {
      const f = sub.fiches.find(x => x.id === ficheId);
      if (f) { fiche = f; sm = sub; break; }
    }
  }
  if (!fiche) { _state.subview = catId ? 'cat' : null; return viewCourses(); }
  const done = isFicheDone(ficheId);

  // Related drills: map course categories → module IDs
  const catDrillMap = {
    'CAT-00': ['01','02'], 'CAT-01': ['01','02'], 'CAT-02': ['02'],
    'CAT-03': ['03'], 'CAT-04': ['06','04','05','07'],
    'CAT-05': ['08','09','12'], 'CAT-06': ['14','15'],
    'CAT-07': ['10','04'], 'CAT-08': ['01','03','M17'],
  };
  const relatedModuleIds = catDrillMap[catId] || [];
  const relatedDrills = DATA.modules
    .filter(m => relatedModuleIds.includes(m.id))
    .flatMap(m => m.drills || [])
    .filter(d => d.prompt || d.question)
    .slice(0, 4);

  const relatedHTML = relatedDrills.length > 0 ? `
<div class="card" style="margin-top:1.5rem;border-left:3px solid var(--accent)">
  <div class="card-title" style="margin-bottom:0.9rem">⚡ ${_lang==='fr'?'Exercices liés — pratiquez ce que vous venez d\'apprendre':'Related Drills — practice what you just learned'}</div>
  ${relatedDrills.map(d => {
    const prompt = (_lang === 'en' && d.prompt_en) ? d.prompt_en : (d.prompt || d.question || '');
    return `<div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:0.65rem 0;border-bottom:1px solid var(--border-light)">
      <div>
        <div class="text-sm font-bold" style="margin-bottom:0.2rem">${prompt.length > 100 ? prompt.substring(0, 97) + '…' : prompt}</div>
        <span class="tag tag-blue" style="font-size:0.58rem">${d.type}</span>
        <span class="text-xs text-muted" style="margin-left:0.4rem">⏱ ${d.time}s</span>
      </div>
      <button class="btn btn-primary btn-sm" style="flex-shrink:0" data-action="start-drill" data-id="${d.id}">→</button>
    </div>`;
  }).join('')}
  <div style="margin-top:0.7rem"><button class="btn btn-ghost btn-sm" data-action="goto" data-view="drills">${_lang==='fr'?'Voir tous les exercices →':'View all drills →'}</button></div>
</div>` : '';

  return `
<div class="module-back" data-action="back-submodule" style="cursor:pointer;color:var(--text-secondary);font-size:0.78rem;display:inline-flex;align-items:center;gap:0.3rem;margin-bottom:1rem;padding:0.3rem 0">← ${cat ? cat.title : (t('title_courses')||'Cours')}</div>
<div style="border-left:3px solid ${cat ? cat.color : 'var(--accent)'};padding-left:1rem;margin-bottom:1.5rem">
  <div class="text-xs text-muted mb-sm">${cat ? cat.icon + ' ' + ((_lang === 'en' && sm.title_en) ? sm.title_en : sm.title) : ''}</div>
  <div class="module-hero-title">${(_lang === 'en' && fiche.title_en) ? fiche.title_en : fiche.title}</div>
  ${fiche.duration ? `<div class="text-xs text-muted mt-sm">⏱ ${fiche.duration}</div>` : ''}
</div>
<div class="section-content" style="margin-bottom:1.5rem">
  ${(_lang === 'en' && fiche.content_en) ? fiche.content_en : fiche.content}
</div>
${relatedHTML}
<div style="display:flex;gap:0.5rem;align-items:center;margin-top:1.2rem">
  <button class="btn ${done?'btn-secondary':'btn-primary'}" data-action="mark-fiche-done" data-id="${ficheId}">
    ${done ? (t('marked_done')||'✓ Lue') : (t('mark_read')||'Marquer comme lue')}
  </button>
  <button class="btn btn-ghost" data-action="back-submodule">← ${_lang==='fr'?'Retour au module':'Back to Module'}</button>
</div>`;
}

function isFicheDone(ficheId) { return !!((getDB('coursesProgress')) || {})[ficheId]; }

function markFicheDone(ficheId) {
  updateDB('coursesProgress', p => { p[ficheId] = true; return p; });
  showToast(_lang==='fr'?'Fiche marquée comme lue !':'Sheet marked as read!', 'success');
  renderView();
}

function getCourseCatProgress(catId) {
  if (!DATA.courses) return { done: 0, total: 0, pct: 0 };
  const cat = DATA.courses.find(c => c.id === catId);
  if (!cat) return { done: 0, total: 0, pct: 0 };
  const prog = getDB('coursesProgress') || {};
  let total = 0, done = 0;
  cat.submodules.forEach(sm => sm.fiches.forEach(f => { total++; if (prog[f.id]) done++; }));
  return { done, total, pct: total > 0 ? Math.round(done / total * 100) : 0 };
}

function getCourseSubmoduleProgress(catId, subId) {
  if (!DATA.courses) return { done: 0, total: 0, pct: 0 };
  const cat = DATA.courses.find(c => c.id === catId);
  if (!cat) return { done: 0, total: 0, pct: 0 };
  const sm = cat.submodules.find(s => s.id === subId);
  if (!sm) return { done: 0, total: 0, pct: 0 };
  const prog = getDB('coursesProgress') || {};
  const done = sm.fiches.filter(f => prog[f.id]).length;
  return { done, total: sm.fiches.length, pct: sm.fiches.length > 0 ? Math.round(done / sm.fiches.length * 100) : 0 };
}

// ============================================================
// LEARNING PATH — Guide complet de préparation
// ============================================================
function viewLearningPath() {
  const scores = getDB('scores');
  const casesDone = getDB('casesDone');
  const readiness = getReadiness();
  const daysLeft = daysUntil('2026-10-16');
  const coursesProgress = getDB('coursesProgress') || {};
  const fichesDone = Object.keys(coursesProgress).filter(k => coursesProgress[k]).length;
  const totalFiches = DATA.courses ? DATA.courses.reduce((t, c) => t + c.submodules.reduce((s, sm) => s + sm.fiches.length, 0), 0) : 0;

  const isUrgent = daysLeft <= 14;
  const phase = daysLeft > 21 ? 'foundations' : daysLeft > 14 ? 'volume' : daysLeft > 7 ? 'mock' : 'final';

  const phaseGuide = {
    foundations: { label: 'Phase 1 — Fondamentaux', color: 'var(--accent)', text: 'Tu es en début de préparation. La priorité absolue est de construire tes bases théoriques (Cours) puis de t\'entraîner sur les exercices isolés (Drills) avant de passer aux cas complets.' },
    volume: { label: 'Phase 2 — Volume & Cas', color: 'var(--yellow)', text: 'Les bases sont posées. C\'est le moment de maximiser le volume de cas — 2 cas/jour minimum. Alterne cas solo et cas live avec un partenaire PrepLounge.' },
    mock: { label: 'Phase 3 — Simulations', color: 'var(--orange)', text: 'J-14 ou moins. Passe en mode interview : 1 simulation complète (PEI + Cas) tous les 2 jours. Arrête d\'apprendre de nouvelles choses, consolide ce que tu sais.' },
    final: { label: 'Phase 4 — Sprint Final', color: 'var(--red)', text: 'J-7 ou moins. Uniquement des révisions de tes structures préférées, tes histoires PEI à voix haute, et 1 mock final le J-3. Plus de nouvelles notions.' },
  }[phase];

  const dailyRec = (() => {
    if (phase === 'foundations') {
      if (fichesDone < 5) return { action: 'Commencer les fiches Cours (CAT-01 Fondamentaux)', view: 'courses', icon: '📖' };
      if (fichesDone < 15) return { action: 'Continuer les fiches Cours + 10 drills de structuration', view: 'drills', icon: '⚡' };
      return { action: 'Faire ton premier cas complet (niveau Débutant)', view: 'cases', icon: '💼' };
    }
    if (phase === 'volume') {
      if (casesDone.length < 5) return { action: '2 cas solo aujourd\'hui — profitabilité + market entry', view: 'cases', icon: '💼' };
      return { action: '1 cas live sur PrepLounge + 5 drills math', view: 'mocks', icon: '🎯' };
    }
    if (phase === 'mock') return { action: '1 simulation complète (PEI + Cas) aujourd\'hui', view: 'mocks', icon: '🎯' };
    return { action: 'Revoir tes 3 structures préférées + réciter PEI à voix haute', view: 'pei', icon: '🎤' };
  })();

  return `
<div class="section-header">
  <div class="section-header-text">
    <h2>${t('title_learningpath')||'Mon Parcours'}</h2>
    <p>${_lang==='fr' ? `Guide personnalisé · ${daysLeft} jours avant l'entretien` : `Personalized guide · ${daysLeft} days to interview`}</p>
  </div>
  <span class="tag tag-${readiness>=78?'green':readiness>=62?'yellow':'red'}">${readiness}% ${_lang==='fr'?'prêt':'ready'}</span>
</div>

<!-- ALERTE PHASE ACTUELLE -->
<div class="card mb-lg" style="border-left:4px solid ${phaseGuide.color}">
  <div class="card-title" style="color:${phaseGuide.color}">⚡ ${phaseGuide.label} — ${daysLeft} jours restants</div>
  <p class="text-sm text-secondary mt-sm">${phaseGuide.text}</p>
  <div class="mt-md" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap">
    <div>
      <div class="font-bold">${dailyRec.icon} Action d'aujourd'hui</div>
      <div class="text-sm text-secondary mt-sm">${dailyRec.action}</div>
    </div>
    <button class="btn btn-primary" data-action="goto" data-view="${dailyRec.view}">Y aller →</button>
  </div>
</div>

<!-- COMMENT UTILISER L'APP -->
<div class="card mb-lg">
  <div class="card-title">🗺️ Comment utiliser cette application — guide complet</div>
  <div class="section-content" style="border:none;padding:0">
    <p>Cette application est organisée en <strong>6 espaces de travail</strong>, à utiliser dans un ordre précis selon où tu en es dans ta préparation :</p>
    <div style="display:flex;flex-direction:column;gap:1rem;margin-top:1rem">
      ${[
        { num:'1', icon:'📖', title:'Cours', desc:'Commence ici si tu n\'as jamais fait de cas. Lis les fiches dans l\'ordre : CAT-01 (Fondamentaux) → CAT-02 (Structuration) → CAT-03 (Profitabilité) → etc. Chaque fiche est un cours complet avec des formules, des exemples chiffrés guidés et des erreurs à éviter. Marque chaque fiche comme lue.', view:'courses', tag:'Semaine 1-2' },
        { num:'2', icon:'⚡', title:'Drills', desc:'Après chaque fiche théorique, va faire 5 exercices dans la section Drills du type correspondant. Les drills sont courts (1-2 min) et entraînent chaque compétence isolément : structuration, math, synthèse. C\'est ici que se construit la fluidité.', view:'drills', tag:'Semaine 1-3' },
        { num:'3', icon:'🔢', title:'Mental Math', desc:'10 exercices de math par jour minimum. Les calculs en cas doivent être fluides et sans hésitation. La section Math Mentale a 100+ exercices par catégorie. Fais-en 10 le matin comme échauffement.', view:'math', tag:'Quotidien' },
        { num:'4', icon:'💼', title:'Bibliothèque de Cas', desc:'Une fois les bases posées, commence les cas complets. Commence par les cas Débutant (CASE-001 à CASE-005), puis Intermédiaire, puis Avancé. Pour chaque cas : résous-le seul à voix haute en 30-40 min, puis révèle la solution section par section.', view:'cases', tag:'Semaine 2-4' },
        { num:'5', icon:'🎯', title:'Mocks', desc:'À partir de J-14, fais 1 simulation complète tous les 2 jours avec un partenaire PrepLounge (lien dans la section Mocks). La simulation = 15 min PEI + 35 min cas + 5 min questions. C\'est l\'exercice le plus proche de l\'entretien réel.', view:'mocks', tag:'Semaine 3-4' },
        { num:'6', icon:'🎤', title:'PEI', desc:'Prépare tes 3 histoires PEI en parallèle. Utilise la Story Bank pour les écrire, puis entraîne-toi à les raconter à voix haute (2-3 min max par histoire). L\'objectif est que chaque histoire soit réflexe — tu ne cherches plus tes mots, tu les vis.', view:'pei', tag:'Continu' },
      ].map(s => `<div style="display:flex;gap:1rem;align-items:flex-start;padding:0.8rem;background:var(--bg-hover);border-radius:0.5rem;border-left:3px solid var(--accent)">
        <div style="width:28px;height:28px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:700;color:#fff;flex-shrink:0">${s.num}</div>
        <div style="flex:1">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.3rem">
            <div class="font-bold text-sm">${s.icon} ${s.title}</div>
            <span class="tag tag-blue" style="font-size:0.68rem">${s.tag}</span>
          </div>
          <div class="text-xs text-secondary">${s.desc}</div>
          <button class="btn btn-ghost btn-sm mt-sm" data-action="goto" data-view="${s.view}">Ouvrir →</button>
        </div>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- PROGRAMME SELON LES JOURS RESTANTS -->
<div class="card mb-lg">
  <div class="card-title">📅 Programme recommandé — ${daysLeft} jours</div>
  <div class="section-content" style="border:none;padding:0">
    ${daysLeft > 21 ? `
    <p>Tu as le temps de construire des bases solides. Voici comment séquencer tes ${daysLeft} jours :</p>
    <table class="data-table">
      <tr><th>Période</th><th>Focus principal</th><th>Objectif</th></tr>
      <tr><td>Jours 1–7</td><td>Cours + Drills + Mental Math</td><td>Lire CAT-01 à CAT-04 · 10 drills/jour · 10 math/jour</td></tr>
      <tr><td>Jours 8–14</td><td>Cours + Premiers Cas</td><td>Lire CAT-05 à CAT-08 · 1 cas débutant/jour · PEI 1ère histoire</td></tr>
      <tr><td>Jours 15–21</td><td>Volume de Cas + Live</td><td>2 cas/jour · 1 cas live/semaine · PEI 2ème histoire</td></tr>
      <tr><td>Jours 22–${Math.min(daysLeft,28)}</td><td>Mocks + Consolidation</td><td>1 mock complet tous les 2 jours · Révision erreurs · PEI finalisé</td></tr>
      <tr><td>Jours J-7 à J-3</td><td>Sprint final</td><td>Mock final · Révision structures · PEI à voix haute</td></tr>
      <tr><td>J-2 / J-1</td><td>Déload</td><td>Math léger · Relecture PEI · Repos absolu J-1</td></tr>
    </table>` : daysLeft > 7 ? `
    <p>Tu es à moins de ${daysLeft} jours. Arrête d'apprendre de nouvelles choses — consolide ce que tu sais :</p>
    <table class="data-table">
      <tr><th>Jour</th><th>Programme</th></tr>
      <tr><td>Maintenant → J-5</td><td>1 mock complet/jour + correction des 3 pires erreurs</td></tr>
      <tr><td>J-4 et J-3</td><td>Révision structures préférées + PEI à voix haute 3×</td></tr>
      <tr><td>J-2</td><td>1 cas solo + révision fiches clés (F-001, F-003, F-020)</td></tr>
      <tr><td>J-1</td><td>Lire ses notes, PEI une fois, REPOS absolu. Pas de nouvelles notions.</td></tr>
      <tr><td>J-0 — Entretien</td><td>Déjeuner léger, arriver 15 min en avance, 2 min de respiration avant d'entrer</td></tr>
    </table>` : `
    <div class="warning-box"><strong>⚡ SPRINT FINAL — ${daysLeft} jours !</strong><br>
    Uniquement : révision structures préférées (15 min max) + PEI 3 histoires à voix haute + 1 mock si J≥3. Zéro nouvelle matière.</div>`}
  </div>
</div>

<!-- INDICATEURS DE PROGRESSION -->
<div class="card mb-lg">
  <div class="card-title">📊 Où tu en es</div>
  <div class="grid grid-3">
    ${[
      { label: 'Fiches lues', val: fichesDone, total: totalFiches, color: 'var(--accent)' },
      { label: 'Cas complétés', val: casesDone.length, total: DATA.cases.length, color: 'var(--green)' },
      { label: 'Niveau de préparation', val: readiness, total: 100, color: readiness>=78?'var(--green)':readiness>=62?'var(--yellow)':'var(--red)' },
    ].map(s => `<div class="card" style="background:var(--bg-hover);border:1px solid var(--border)">
      <div class="text-xs text-muted mb-sm">${s.label}</div>
      <div class="font-bold" style="font-size:1.5rem;color:${s.color}">${s.val}<span class="text-muted text-sm">/${s.total}</span></div>
      <div class="progress-track mt-sm"><div class="progress-bar" style="width:${Math.round(s.val/Math.max(1,s.total)*100)}%;background:${s.color}"></div></div>
    </div>`).join('')}
  </div>
</div>

<!-- ERREURS FRÉQUENTES DE PRÉPARATION -->
<div class="card mb-lg">
  <div class="card-title">⚠️ Les 5 erreurs de préparation à éviter</div>
  <div class="section-content" style="border:none;padding:0">
    ${[
      { err:'Faire des cas sans jamais avoir lu les fondamentaux', fix:'Lis au minimum CAT-01 (Fondamentaux) et CAT-02 (Structuration) avant de faire ton premier cas. Un cas sans structure, c\'est du temps perdu.' },
      { err:'S\'entraîner uniquement en lisant les solutions', fix:'La lecture passive ne développe pas les réflexes. Résous chaque cas à voix haute seul avant de regarder la solution — même si tu te plantes.' },
      { err:'Négliger le PEI au profit des cas', fix:'Le PEI représente 30-40% de la décision. Commence tes histoires dès la semaine 1, pas la veille.' },
      { err:'Faire des cas variés au hasard plutôt que par type', fix:'Maîtrise les profitability cases d\'abord (le type le plus fréquent), puis market entry, puis growth. La variété sans fondation ne construit pas de vraies compétences.' },
      { err:'Attendre le dernier moment pour les mocks live', fix:'Le premier mock live est toujours un choc — la pression transforme tout. Fais ton premier mock live au moins 3 semaines avant l\'entretien.' },
    ].map((e, i) => `<div style="display:flex;gap:0.8rem;margin-bottom:0.8rem;align-items:flex-start">
      <div style="width:22px;height:22px;border-radius:50%;background:var(--red);color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;flex-shrink:0">${i+1}</div>
      <div>
        <div class="font-bold text-sm text-danger">❌ ${e.err}</div>
        <div class="text-xs text-secondary mt-sm">✅ ${e.fix}</div>
      </div>
    </div>`).join('')}
  </div>
</div>

<!-- PROFILS DE DÉPART -->
<div class="card">
  <div class="card-title">${_lang==='fr'?'Par où commencer selon ton profil':'Where to start based on your profile'}</div>
  <div class="grid grid-3">
    ${[
      { label: '🌱 Débutant', desc: 'Jamais fait de cas', path: 'Cours → Drills → Cas débutants', view: 'courses', btn: 'Commencer par les Cours' },
      { label: '⚡ Intermédiaire', desc: 'Quelques cas, bases connues', path: 'Drills ciblés → Cas intermédiaires → Mocks', view: 'drills', btn: 'Commencer par les Drills' },
      { label: '🎯 Sprint (J-7)', desc: 'Tout en tête, besoin de roder', path: 'Mocks → Erreurs → Révision PEI', view: 'mocks', btn: 'Aller aux Mocks' }
    ].map(p => `<div class="card" style="background:var(--bg-hover);border:1px solid var(--border)">
      <div class="font-bold mb-sm text-sm">${p.label}</div>
      <div class="text-xs text-muted mb-sm">${p.desc}</div>
      <div class="text-xs text-secondary mb-md" style="font-style:italic">${p.path}</div>
      <button class="btn btn-ghost btn-sm w-full" data-action="goto" data-view="${p.view}">${p.btn}</button>
    </div>`).join('')}
  </div>
</div>`;
}
// ============================================================
// SIDEBAR
// ============================================================
function initSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;

  const items = [
    { view: 'dashboard', icon: '🏠', label: t('title_dashboard')||'Dashboard' },
    { view: 'learningpath', icon: '🗺️', label: t('title_learningpath')||'Mon Parcours' },
    { view: 'today', icon: '📅', label: t('title_today')||"Today's Plan" },
    null,
    { section: _lang==='fr'?'PRÉPARATION CAS':'CASE PREP' },
    { view: 'courses', icon: '📖', label: t('title_courses')||'Cours' },
    { view: 'cases', icon: '💼', label: t('title_cases')||'Case Library' },
    { view: 'drills', icon: '⚡', label: t('title_drills')||'Drills' },
    null,
    { section: _lang==='fr'?'COMPÉTENCES':'SKILLS' },
    { view: 'math', icon: '🔢', label: t('title_math')||'Mental Math' },
    { view: 'sizing', icon: '📏', label: t('title_sizing')||'Market Sizing' },
    { view: 'pricing', icon: '💰', label: t('title_pricing')||'Pricing Cases' },
    { view: 'exhibits', icon: '📊', label: t('title_exhibits')||'Exhibit Analysis' },
    null,
    { section: _lang==='fr'?'ENTRETIEN':'INTERVIEW' },
    { view: 'pei', icon: '🎤', label: t('title_pei')||'PEI' },
    { view: 'stories', icon: '📖', label: t('title_stories')||'Story Bank' },
    { view: 'mocks', icon: '🎯', label: t('title_mocks')||'Mock Interviews' },
    null,
    { section: _lang==='fr'?'SUIVI & RESSOURCES':'TRACK & RESOURCES' },
    { view: 'howto', icon: '🗺️', label: t('title_howto')||'How to Prepare' },
    { view: 'partners', icon: '🤝', label: t('title_partners')||'Case Partners' },
    { view: 'mistakes', icon: '⚠', label: t('title_mistakes')||'Mistake Log' },
    { view: 'progress', icon: '📈', label: t('title_progress')||'Progress' },
    { view: 'resources', icon: '🔗', label: t('title_resources')||'Resources' },
    { view: 'casebooks', icon: '📕', label: t('title_casebooks')||'Free Casebooks' },
    { view: 'calendar', icon: '🗓️', label: t('title_calendar')||'Calendar' },
    { view: 'settings', icon: '⚙️', label: t('title_settings')||'Settings' },
  ];

  nav.innerHTML = items.map(item => {
    if (!item) return '<div style="height:1px;background:var(--border);margin:0.2rem 0"></div>';
    if (item.section) return `<div class="sidebar-section-label">${item.section}</div>`;
    return `<div class="nav-item" data-view="${item.view}"><span class="nav-icon">${item.icon}</span>${item.label}</div>`;
  }).join('');

  nav.addEventListener('click', e => {
    const item = e.target.closest('.nav-item');
    if (item && item.dataset.view) navigate(item.dataset.view);
  });

  const countdown = document.getElementById('interview-countdown');
  if (countdown) countdown.textContent = `⚡ Entretien : ${daysUntil('2026-10-16')} ${_lang==='fr'?'jours':'days'}`;

  const r = getReadiness();
  const badge = document.getElementById('readiness-badge');
  if (badge) {
    const dot = badge.querySelector('.readiness-dot');
    if (dot) dot.className = 'readiness-dot ' + (r>=78?'green':r>=62?'yellow':'red');
    const val = badge.querySelector('.readiness-val');
    if (val) val.textContent = `${r}% ready`;
  }

  setActiveNav(_state.view);
}

// ============================================================
// INIT
// ============================================================
function init() {
  _lang = DB.get('lang', 'fr');
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = _lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
  initSidebar();
  setupEvents();
  navigate('dashboard');
}
App.init = init;

window.addEventListener('DOMContentLoaded', () => App.init());
