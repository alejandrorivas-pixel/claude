// Sistema de progreso con localStorage
const STORAGE_KEY = 'magno-tutorial-progress';
const TOTAL_LESSONS = 10;

function getState() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { completed: [] };
  } catch {
    return { completed: [] };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage not available
  }
}

export function markComplete(lessonId) {
  const state = getState();
  if (!state.completed.includes(lessonId)) {
    state.completed.push(lessonId);
    saveState(state);
  }
}

export function isComplete(lessonId) {
  return getState().completed.includes(lessonId);
}

export function getProgress() {
  const state = getState();
  return {
    completed: state.completed.length,
    total: TOTAL_LESSONS,
    lessons: state.completed
  };
}

export function renderProgressBar() {
  const { completed, total } = getProgress();
  const filled = Math.round((completed / total) * 10);
  const empty = 10 - filled;
  return `[${'#'.repeat(filled)}${'-'.repeat(empty)}] ${completed}/${total}`;
}

export function updateProgressDisplay() {
  const display = document.getElementById('progress-display');
  if (display) {
    display.textContent = renderProgressBar();
  }
}

export function updateSidebarChecks() {
  const items = document.querySelectorAll('#lesson-list li');
  items.forEach(item => {
    const lessonId = parseInt(item.dataset.lesson);
    if (isComplete(lessonId)) {
      item.classList.add('completed');
    }
  });
}
