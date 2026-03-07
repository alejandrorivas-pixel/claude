// Controlador principal de la aplicación
import { renderLesson, clearTerminal } from './terminal.js';
import { markComplete, updateProgressDisplay, updateSidebarChecks } from './progress.js';
import { requestSkip, isAnimating } from './typewriter.js';

let currentLesson = 0;
const TOTAL_LESSONS = 10;

// Cargar una lección dinámicamente
async function loadLesson(id) {
  const padded = String(id).padStart(2, '0');
  const names = [
    'welcome', 'what-is-github', 'repositories', 'commits',
    'branches', 'pull-requests', 'vibe-coding', 'github-workflow',
    'supabase', 'ai-models'
  ];
  const module = await import(`../content/${padded}-${names[id]}.js`);
  return module.lesson;
}

// Navegar a una lección
async function goToLesson(id) {
  if (id < 0 || id >= TOTAL_LESSONS) return;

  currentLesson = id;

  // Actualizar sidebar
  document.querySelectorAll('#lesson-list li').forEach(li => {
    li.classList.toggle('active', parseInt(li.dataset.lesson) === id);
  });

  // Cargar y renderizar
  const lesson = await loadLesson(id);
  await renderLesson(lesson.sections);

  // Marcar como completada
  markComplete(id);
  updateProgressDisplay();
  updateSidebarChecks();
}

// Procesar comandos
function processCommand(cmd) {
  const command = cmd.trim().toLowerCase();

  switch (command) {
    case 'next':
    case 'n':
      goToLesson(currentLesson + 1);
      break;
    case 'prev':
    case 'p':
    case 'back':
      goToLesson(currentLesson - 1);
      break;
    case 'menu':
    case 'm':
      showMenu();
      break;
    case 'help':
    case 'h':
      showHelp();
      break;
    case 'progress':
      showProgress();
      break;
    default:
      // Check if it's a lesson number
      const num = parseInt(command);
      if (!isNaN(num) && num >= 0 && num < TOTAL_LESSONS) {
        goToLesson(num);
      }
      break;
  }
}

async function showMenu() {
  const { renderLesson: render } = await import('./terminal.js');
  clearTerminal();

  const sections = [
    { type: 'prompt', text: 'menu' },
    { type: 'heading', text: 'Lecciones Disponibles' },
    { type: 'spacer' },
    { type: 'body-instant', text: '  [0]  Bienvenida' },
    { type: 'body-instant', text: '  [1]  ¿Qué es GitHub?' },
    { type: 'body-instant', text: '  [2]  Repositories (Repositorios)' },
    { type: 'body-instant', text: '  [3]  Commits (Guardar cambios)' },
    { type: 'body-instant', text: '  [4]  Branches (Ramas)' },
    { type: 'body-instant', text: '  [5]  Pull Requests (Solicitudes)' },
    { type: 'body-instant', text: '  [6]  Vibe Coding + GitHub' },
    { type: 'body-instant', text: '  [7]  Flujo de Trabajo con GitHub' },
    { type: 'body-instant', text: '  [8]  Supabase' },
    { type: 'body-instant', text: '  [9]  Modelos de IA' },
    { type: 'spacer' },
    { type: 'tip', text: 'Escribe el número de la lección para ir directamente a ella.' },
  ];

  await render(sections);
}

async function showHelp() {
  clearTerminal();
  const { renderLesson: render } = await import('./terminal.js');

  const sections = [
    { type: 'prompt', text: 'help' },
    { type: 'heading', text: 'Comandos Disponibles' },
    { type: 'spacer' },
    { type: 'body-instant', text: '  next / n        →  Siguiente lección' },
    { type: 'body-instant', text: '  prev / p        →  Lección anterior' },
    { type: 'body-instant', text: '  menu / m        →  Ver todas las lecciones' },
    { type: 'body-instant', text: '  help / h        →  Mostrar esta ayuda' },
    { type: 'body-instant', text: '  progress        →  Ver tu progreso' },
    { type: 'body-instant', text: '  0-9             →  Ir a una lección específica' },
    { type: 'spacer' },
    { type: 'tip', text: 'También puedes usar las flechas ◀ ▶ o hacer clic en la barra lateral.' },
    { type: 'tip', text: 'Haz clic en cualquier parte o presiona Enter para saltar animaciones.' },
  ];

  await render(sections);
}

async function showProgress() {
  clearTerminal();
  const { renderLesson: render } = await import('./terminal.js');
  const { getProgress, renderProgressBar } = await import('./progress.js');
  const prog = getProgress();

  const sections = [
    { type: 'prompt', text: 'progress' },
    { type: 'heading', text: 'Tu Progreso' },
    { type: 'spacer' },
    { type: 'highlight', text: `  ${renderProgressBar()}` },
    { type: 'spacer' },
    { type: 'body-instant', text: `  Lecciones completadas: ${prog.completed} de ${prog.total}` },
    { type: 'spacer' },
  ];

  await render(sections);
}

// Inicialización
function init() {
  // Input bar
  const input = document.getElementById('command-input');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value;
      input.value = '';
      if (cmd.trim()) {
        processCommand(cmd);
      } else if (isAnimating()) {
        requestSkip();
      }
    }
  });

  // Navigation buttons
  document.getElementById('btn-prev').addEventListener('click', () => {
    goToLesson(currentLesson - 1);
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    goToLesson(currentLesson + 1);
  });

  // Sidebar clicks
  document.querySelectorAll('#lesson-list li').forEach(li => {
    li.addEventListener('click', () => {
      const id = parseInt(li.dataset.lesson);
      goToLesson(id);
    });
  });

  // Sidebar toggle (mobile)
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebar-toggle');
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Click terminal to skip animation
  document.getElementById('terminal').addEventListener('click', () => {
    if (isAnimating()) {
      requestSkip();
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (document.activeElement === input) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goToLesson(currentLesson + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goToLesson(currentLesson - 1);
    } else if (e.key === 'Escape') {
      if (isAnimating()) requestSkip();
    }
  });

  // Initialize progress display
  updateProgressDisplay();
  updateSidebarChecks();

  // Load first lesson
  goToLesson(0);
}

document.addEventListener('DOMContentLoaded', init);
