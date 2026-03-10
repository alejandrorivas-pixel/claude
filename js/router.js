// Router — manages navigation between modules and lessons

const STATE_KEY = 'magno_nav_state';

let currentModule = -1; // -1 = landing
let currentLesson = -1;
let modules = [];
let onNavigate = null;

export function initRouter(moduleData, callback) {
  modules = moduleData;
  onNavigate = callback;

  // Check URL hash
  const hash = window.location.hash.slice(1);
  if (hash) {
    const [mod, les] = hash.split('/').map(Number);
    if (!isNaN(mod) && !isNaN(les)) {
      navigateTo(mod, les);
      return;
    }
  }

  // Check saved state
  const saved = loadState();
  if (saved && saved.module >= 0) {
    navigateTo(saved.module, saved.lesson);
  } else {
    showLanding();
  }
}

export function navigateTo(moduleIndex, lessonIndex) {
  if (moduleIndex < 0 || moduleIndex >= modules.length) return;
  const mod = modules[moduleIndex];
  if (lessonIndex < 0 || lessonIndex >= mod.lessons.length) return;

  currentModule = moduleIndex;
  currentLesson = lessonIndex;

  window.location.hash = `${moduleIndex}/${lessonIndex}`;
  saveState();

  if (onNavigate) {
    onNavigate(currentModule, currentLesson);
  }
}

export function showLanding() {
  currentModule = -1;
  currentLesson = -1;
  window.location.hash = '';
  if (onNavigate) {
    onNavigate(-1, -1);
  }
}

export function nextLesson() {
  if (currentModule < 0) return;
  const mod = modules[currentModule];

  if (currentLesson < mod.lessons.length - 1) {
    navigateTo(currentModule, currentLesson + 1);
  } else if (currentModule < modules.length - 1) {
    navigateTo(currentModule + 1, 0);
  }
}

export function prevLesson() {
  if (currentModule < 0) return;

  if (currentLesson > 0) {
    navigateTo(currentModule, currentLesson - 1);
  } else if (currentModule > 0) {
    const prevMod = modules[currentModule - 1];
    navigateTo(currentModule - 1, prevMod.lessons.length - 1);
  }
}

export function getCurrentState() {
  return { module: currentModule, lesson: currentLesson };
}

export function getTotalLessons() {
  return modules.reduce((sum, m) => sum + m.lessons.length, 0);
}

export function getLessonGlobalIndex(moduleIndex, lessonIndex) {
  let idx = 0;
  for (let i = 0; i < moduleIndex; i++) {
    idx += modules[i].lessons.length;
  }
  return idx + lessonIndex;
}

export function canGoNext() {
  if (currentModule < 0) return false;
  if (currentLesson < modules[currentModule].lessons.length - 1) return true;
  return currentModule < modules.length - 1;
}

export function canGoPrev() {
  if (currentModule < 0) return false;
  if (currentLesson > 0) return true;
  return currentModule > 0;
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify({
      module: currentModule,
      lesson: currentLesson
    }));
  } catch (e) { /* ignore */ }
}

function loadState() {
  try {
    const data = localStorage.getItem(STATE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}
