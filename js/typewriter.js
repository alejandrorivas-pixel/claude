// Motor de animación typewriter
let currentAnimation = null;
let skipRequested = false;

export function requestSkip() {
  skipRequested = true;
}

export function isAnimating() {
  return currentAnimation !== null;
}

export async function typeOut(element, text, speed = 20) {
  skipRequested = false;

  return new Promise((resolve) => {
    let i = 0;
    currentAnimation = setInterval(() => {
      if (skipRequested || i >= text.length) {
        clearInterval(currentAnimation);
        currentAnimation = null;
        element.textContent = text;
        resolve();
        return;
      }
      element.textContent += text.charAt(i);
      i++;
    }, speed);
  });
}

export async function typeOutLines(container, lines, speed = 20) {
  for (const line of lines) {
    if (skipRequested) {
      // Render remaining lines instantly
      const div = document.createElement('div');
      div.className = `line ${line.className || 'line-body'}`;
      div.textContent = line.text;
      container.appendChild(div);
      continue;
    }

    const div = document.createElement('div');
    div.className = `line ${line.className || 'line-body'}`;
    container.appendChild(div);

    if (line.instant) {
      div.textContent = line.text;
    } else {
      await typeOut(div, line.text, speed);
    }

    // Auto-scroll
    const terminal = document.getElementById('terminal');
    terminal.scrollTop = terminal.scrollHeight;
  }
  skipRequested = false;
}
