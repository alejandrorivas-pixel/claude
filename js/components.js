// Components — renders lesson content sections into HTML

export function renderSections(sections) {
  return sections.map(renderSection).join('');
}

function renderSection(section) {
  switch (section.type) {
    case 'text':
      return `<p>${section.content}</p>`;

    case 'heading':
      return `<h3>${section.content}</h3>`;

    case 'list':
      const tag = section.ordered ? 'ol' : 'ul';
      const items = section.items.map(i => `<li>${i}</li>`).join('');
      return `<${tag}>${items}</${tag}>`;

    case 'analogy':
      return `
        <div class="analogy-card fade-in">
          <div class="analogy-label">Analogia</div>
          <p>${section.content}</p>
        </div>`;

    case 'key-point':
      return `
        <div class="key-point fade-in">
          <div class="key-label">Punto clave</div>
          <p>${section.content}</p>
        </div>`;

    case 'warning':
      return `
        <div class="warning-card fade-in">
          <div class="warning-label">Importante</div>
          <p>${section.content}</p>
        </div>`;

    case 'code':
      return renderCodeBlock(section);

    case 'diagram':
      return `
        <div class="diagram-block fade-in">
          <pre>${section.content}</pre>
        </div>`;

    case 'table':
      return renderTable(section);

    case 'quiz':
      return renderQuiz(section);

    default:
      return `<p>${section.content || ''}</p>`;
  }
}

function renderCodeBlock(section) {
  const title = section.title || 'Terminal';
  return `
    <div class="code-block fade-in">
      <div class="code-block-header">
        <span class="code-block-dot red"></span>
        <span class="code-block-dot yellow"></span>
        <span class="code-block-dot green"></span>
        <span class="code-block-title">${title}</span>
      </div>
      <pre>${section.content}</pre>
    </div>`;
}

function renderTable(section) {
  const headers = section.headers.map(h => `<th>${h}</th>`).join('');
  const rows = section.rows.map(row =>
    '<tr>' + row.map(cell => `<td>${cell}</td>`).join('') + '</tr>'
  ).join('');

  return `
    <table class="comparison-table fade-in">
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function renderQuiz(section) {
  const id = 'quiz-' + Math.random().toString(36).slice(2, 8);
  const options = section.options.map((opt, i) =>
    `<button class="quiz-option" data-quiz="${id}" data-index="${i}" data-correct="${i === section.correct}">${opt}</button>`
  ).join('');

  return `
    <div class="quiz-container fade-in" id="${id}">
      <div class="quiz-label">Pregunta</div>
      <div class="quiz-question">${section.question}</div>
      <div class="quiz-options">${options}</div>
      <div class="quiz-feedback-slot"></div>
    </div>`;
}

// Attach quiz event handlers after rendering
export function attachQuizHandlers(container) {
  container.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', handleQuizClick);
  });
}

function handleQuizClick(e) {
  const btn = e.currentTarget;
  const quizId = btn.dataset.quiz;
  const isCorrect = btn.dataset.correct === 'true';
  const container = document.getElementById(quizId);
  const feedbackSlot = container.querySelector('.quiz-feedback-slot');

  // Disable all options
  container.querySelectorAll('.quiz-option').forEach(opt => {
    opt.classList.add('disabled');
    if (opt.dataset.correct === 'true') {
      opt.classList.add('correct');
    }
  });

  if (isCorrect) {
    btn.classList.add('correct');
    feedbackSlot.innerHTML = `<div class="quiz-feedback correct">Correcto! Muy bien.</div>`;
  } else {
    btn.classList.add('incorrect');
    feedbackSlot.innerHTML = `<div class="quiz-feedback incorrect">No exactamente. Mira la respuesta correcta marcada en verde.</div>`;
  }
}
