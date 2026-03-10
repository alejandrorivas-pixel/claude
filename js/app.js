// App — main controller
import { renderSections, attachQuizHandlers } from './components.js';
import { initRouter, navigateTo, showLanding, nextLesson, prevLesson, getCurrentState, getTotalLessons, canGoNext, canGoPrev } from './router.js';
import { initProgress, markComplete, isComplete, getCompletedCount, getModuleCompletedCount, updateProgressUI } from './progress.js';

let modules = [];

async function loadModules() {
  const { default: moduleData } = await import('../content/modules.js');
  modules = moduleData;

  // Dynamically load lesson content for each module
  const contentFiles = ['../content/github.js', '../content/supabase.js', '../content/ai-models.js'];
  for (let i = 0; i < contentFiles.length; i++) {
    const mod = await import(contentFiles[i]);
    modules[i].lessons = mod.default;
  }
}

function renderLanding() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('lesson-view').classList.add('hidden');

  const cardsContainer = document.getElementById('module-cards');
  cardsContainer.innerHTML = modules.map((mod, i) => {
    const completed = getModuleCompletedCount(i, mod.lessons.length);
    const total = mod.lessons.length;
    return `
      <div class="module-card fade-in" data-module="${i}">
        <div class="module-card-icon ${mod.iconClass}">${mod.icon}</div>
        <h3>${mod.title}</h3>
        <p>${mod.description}</p>
        <div class="module-card-meta">${completed}/${total} lecciones completadas</div>
      </div>`;
  }).join('');

  // Attach click handlers
  cardsContainer.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.module);
      navigateTo(idx, 0);
    });
  });

  // Update sidebar to show nothing active
  updateModuleTabs(-1);
  updateSidebar(-1);
}

function renderLesson(moduleIndex, lessonIndex) {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('lesson-view').classList.remove('hidden');

  const mod = modules[moduleIndex];
  const lesson = mod.lessons[lessonIndex];

  // Breadcrumb
  document.getElementById('lesson-breadcrumb').textContent =
    `${mod.title} — Leccion ${lessonIndex + 1} de ${mod.lessons.length}`;

  // Title
  document.getElementById('lesson-title').textContent = lesson.title;

  // Body
  const body = document.getElementById('lesson-body');
  body.innerHTML = renderSections(lesson.sections);
  body.classList.add('fade-in');
  attachQuizHandlers(body);

  // Scroll to top
  document.getElementById('content').scrollTop = 0;

  // Navigation buttons
  document.getElementById('btn-prev').disabled = !canGoPrev();
  document.getElementById('btn-next').disabled = !canGoNext();

  // Mark as complete
  markComplete(moduleIndex, lessonIndex);

  // Update UI
  updateModuleTabs(moduleIndex);
  updateSidebar(moduleIndex);
  updateProgressUI(getTotalLessons());

  // Remove animation class after it plays
  setTimeout(() => body.classList.remove('fade-in'), 400);
}

function updateModuleTabs(activeModule) {
  document.querySelectorAll('#module-tabs .tab').forEach(tab => {
    const idx = parseInt(tab.dataset.module);
    tab.classList.toggle('active', idx === activeModule);
  });
}

function updateSidebar(moduleIndex) {
  const list = document.getElementById('lesson-list');
  const titleEl = document.getElementById('sidebar-module-title');
  const state = getCurrentState();

  if (moduleIndex < 0 || moduleIndex >= modules.length) {
    titleEl.textContent = 'Modulos';
    list.innerHTML = modules.map((mod, i) =>
      `<li data-module="${i}" class="module-link">
        <span class="lesson-number"><span class="number-text">${i + 1}</span></span>
        <span>${mod.title}</span>
      </li>`
    ).join('');

    list.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        navigateTo(parseInt(li.dataset.module), 0);
      });
    });
    return;
  }

  const mod = modules[moduleIndex];
  titleEl.textContent = mod.title;

  list.innerHTML = mod.lessons.map((lesson, i) => {
    const isActive = state.module === moduleIndex && state.lesson === i;
    const isDone = isComplete(moduleIndex, i);
    let cls = '';
    if (isActive) cls = 'active';
    else if (isDone) cls = 'completed';

    return `
      <li data-module="${moduleIndex}" data-lesson="${i}" class="${cls}">
        <span class="lesson-number">
          <span class="number-text">${i + 1}</span>
          <svg class="check-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" stroke-width="2"><polyline points="3,7 6,10 11,4"/></svg>
        </span>
        <span>${lesson.title}</span>
      </li>`;
  }).join('');

  list.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const m = parseInt(li.dataset.module);
      const l = parseInt(li.dataset.lesson);
      navigateTo(m, l);
    });
  });
}

function handleNavigate(moduleIndex, lessonIndex) {
  if (moduleIndex < 0) {
    renderLanding();
  } else {
    renderLesson(moduleIndex, lessonIndex);
  }
  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
}

function init() {
  loadModules().then(() => {
    initProgress();
    updateProgressUI(getTotalLessons());
    initRouter(modules, handleNavigate);

    // Module tabs
    document.querySelectorAll('#module-tabs .tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.dataset.module);
        navigateTo(idx, 0);
      });
    });

    // Nav buttons
    document.getElementById('btn-prev').addEventListener('click', prevLesson);
    document.getElementById('btn-next').addEventListener('click', nextLesson);

    // Logo → landing
    document.getElementById('logo').addEventListener('click', (e) => {
      e.preventDefault();
      showLanding();
    });

    // Mobile menu toggle
    const sidebar = document.getElementById('sidebar');
    document.getElementById('menu-toggle').addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
    document.getElementById('sidebar-overlay').addEventListener('click', () => {
      sidebar.classList.remove('open');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') { e.preventDefault(); nextLesson(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevLesson(); }
    });

    // Hash change
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (!hash) {
        showLanding();
        return;
      }
      const [mod, les] = hash.split('/').map(Number);
      if (!isNaN(mod) && !isNaN(les)) {
        navigateTo(mod, les);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
