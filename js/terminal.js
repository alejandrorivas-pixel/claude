// Componente UI de Terminal
import { typeOut, requestSkip, isAnimating } from './typewriter.js';

const output = () => document.getElementById('terminal-output');
const terminalEl = () => document.getElementById('terminal');

function scrollToBottom() {
  const t = terminalEl();
  if (t) t.scrollTop = t.scrollHeight;
}

export function clearTerminal() {
  output().innerHTML = '';
}

export async function printPrompt(command) {
  const div = document.createElement('div');
  div.className = 'line line-prompt';
  output().appendChild(div);
  await typeOut(div, command, 30);
  scrollToBottom();
}

export async function printHeading(text) {
  const div = document.createElement('div');
  div.className = 'line line-heading fade-in';
  div.textContent = text;
  output().appendChild(div);
  scrollToBottom();
}

export async function printSubheading(text) {
  const div = document.createElement('div');
  div.className = 'line line-subheading fade-in';
  div.textContent = text;
  output().appendChild(div);
  scrollToBottom();
}

export async function printBody(text) {
  const div = document.createElement('div');
  div.className = 'line line-body fade-in';
  output().appendChild(div);
  await typeOut(div, text, 12);
  scrollToBottom();
}

export function printBodyInstant(text) {
  const div = document.createElement('div');
  div.className = 'line line-body fade-in';
  div.textContent = text;
  output().appendChild(div);
  scrollToBottom();
}

export function printHighlight(text) {
  const div = document.createElement('div');
  div.className = 'line line-highlight fade-in';
  div.textContent = text;
  output().appendChild(div);
  scrollToBottom();
}

export function printTip(text) {
  const div = document.createElement('div');
  div.className = 'line line-tip fade-in';
  div.textContent = text;
  output().appendChild(div);
  scrollToBottom();
}

export function printCode(text) {
  const pre = document.createElement('pre');
  pre.className = 'line-code fade-in';
  pre.textContent = text;
  output().appendChild(pre);
  scrollToBottom();
}

export function printDiagram(text) {
  const pre = document.createElement('pre');
  pre.className = 'line-diagram fade-in';
  pre.textContent = text;
  output().appendChild(pre);
  scrollToBottom();
}

export function printSeparator() {
  const hr = document.createElement('hr');
  hr.className = 'line-separator';
  output().appendChild(hr);
  scrollToBottom();
}

export function printSpacer() {
  const div = document.createElement('div');
  div.style.height = '12px';
  output().appendChild(div);
}

export function showQuiz(question, options, correctIndex, explanation) {
  return new Promise((resolve) => {
    const container = document.createElement('div');
    container.className = 'quiz-container fade-in';

    const q = document.createElement('div');
    q.className = 'quiz-question';
    q.textContent = question;
    container.appendChild(q);

    const buttons = [];

    options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = `[${String.fromCharCode(97 + i)}] ${opt}`;
      buttons.push(btn);

      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.add('disabled'));

        if (i === correctIndex) {
          btn.classList.add('correct');
          const fb = document.createElement('div');
          fb.className = 'quiz-feedback correct';
          fb.textContent = `✓ ¡Correcto! ${explanation}`;
          container.appendChild(fb);
        } else {
          btn.classList.add('incorrect');
          buttons[correctIndex].classList.add('correct');
          const fb = document.createElement('div');
          fb.className = 'quiz-feedback incorrect';
          fb.textContent = `✗ No exactamente. ${explanation}`;
          container.appendChild(fb);
        }
        scrollToBottom();
        resolve();
      });

      container.appendChild(btn);
    });

    output().appendChild(container);
    scrollToBottom();
  });
}

// Render a full lesson from structured data
export async function renderLesson(sections) {
  clearTerminal();

  for (const section of sections) {
    switch (section.type) {
      case 'prompt':
        await printPrompt(section.text);
        break;
      case 'heading':
        await printHeading(section.text);
        break;
      case 'subheading':
        await printSubheading(section.text);
        break;
      case 'body':
        await printBody(section.text);
        break;
      case 'body-instant':
        printBodyInstant(section.text);
        break;
      case 'highlight':
        printHighlight(section.text);
        break;
      case 'tip':
        printTip(section.text);
        break;
      case 'code':
        printCode(section.text);
        break;
      case 'diagram':
        printDiagram(section.text);
        break;
      case 'separator':
        printSeparator();
        break;
      case 'spacer':
        printSpacer();
        break;
      case 'quiz':
        await showQuiz(section.question, section.options, section.correct, section.explanation);
        break;
    }

    // Small pause between sections for readability
    if (section.type !== 'spacer' && section.type !== 'separator' && section.type !== 'quiz') {
      await new Promise(r => setTimeout(r, 80));
    }
  }
}
