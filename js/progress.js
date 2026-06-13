// Progress — tracks lesson completion with localStorage

const STORAGE_KEY = 'magno_progress';

let completed = new Set();

export function initProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const arr = JSON.parse(data);
      completed = new Set(arr);
    }
  } catch (e) {
    completed = new Set();
  }
}

export function markComplete(moduleIndex, lessonIndex) {
  const key = `${moduleIndex}:${lessonIndex}`;
  completed.add(key);
  save();
}

export function isComplete(moduleIndex, lessonIndex) {
  return completed.has(`${moduleIndex}:${lessonIndex}`);
}

export function getCompletedCount() {
  return completed.size;
}

export function getModuleCompletedCount(moduleIndex, totalLessons) {
  let count = 0;
  for (let i = 0; i < totalLessons; i++) {
    if (completed.has(`${moduleIndex}:${i}`)) count++;
  }
  return count;
}

export function updateProgressUI(totalLessons) {
  const count = completed.size;
  const pct = totalLessons > 0 ? (count / totalLessons) * 100 : 0;

  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');
  const headerLabel = document.getElementById('header-progress');

  if (bar) bar.style.width = `${pct}%`;
  if (text) text.textContent = `${count} de ${totalLessons} lecciones completadas`;
  if (headerLabel) headerLabel.textContent = `${count}/${totalLessons}`;
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  } catch (e) { /* ignore */ }
}
