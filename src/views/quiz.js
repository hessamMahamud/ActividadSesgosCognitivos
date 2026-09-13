import { state } from '../state.js';
import { QUESTIONS } from '../data/questions.js';

function likertRow(qId) {
    let html = '<div class="likert">';
    for (let i = 1; i <= 5; i++) {
        const sel = state.answers[qId] === i ? 'selected' : '';
        html += `<button class="${sel}" data-action="pick-likert" data-qid="${qId}" data-val="${i}">${i}</button>`;
    }
    html += '</div><div class="likert-labels"><span>Muy en desacuerdo</span><span>Muy de acuerdo</span></div>';
    return html;
}

export function renderQuiz() {
    const q = QUESTIONS[state.qIndex];
    const answered = state.answers[q.id] !== undefined;
    return `
  <div class="progress">Afirmación ${state.qIndex + 1} de ${QUESTIONS.length}</div>
  <div class="card">
    <span class="phase-tag">FASE 1 — ESCALA DE ACUERDO</span>
    <p class="statement">${q.text}</p>
    ${likertRow(q.id)}
    ${state.showReveal ? `<div class="reveal"><span class="label">SESGO ASOCIADO</span>${q.reveal}</div>` : ''}
    <div class="nav">
      <button class="ghost" data-action="prev-question" ${state.qIndex === 0 ? 'disabled' : ''}>Anterior</button>
      <button data-action="next-question" ${answered ? '' : 'disabled'}>${state.qIndex === QUESTIONS.length - 1 ? 'Continuar' : 'Siguiente'}</button>
    </div>
  </div>`;
}
