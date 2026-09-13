import { state } from '../state.js';
import { QUESTIONS, SCALES } from '../data/questions.js';
import { computeProfile, scaleLabel } from '../scoring.js';

function renderExplicaciones() {
    let html = '<div class="explicaciones">';
    Object.keys(SCALES).forEach(key => {
        html += `<h3 class="explicaciones-scale">${SCALES[key].name}</h3>`;
        QUESTIONS.filter(q => q.scale === key).forEach(q => {
            html += `
      <div class="reveal">
        <p class="statement-mini">${q.text}</p>
        <span class="label">SESGO ASOCIADO</span>${q.reveal}
      </div>`;
        });
    });
    html += '</div>';
    return html;
}

export function renderResultado() {
    const profile = computeProfile();
    let bars = '';
    Object.keys(SCALES).forEach(key => {
        const score = profile[key];
        bars += `
    <div class="scale-row">
      <div class="name"><span>${SCALES[key].name}</span><span class="score">${score}/5 — ${scaleLabel(score)}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${score * 20}%"></div></div>
      <div class="scale-desc">${SCALES[key].desc}</div>
    </div>`;
    });

    const lindaBadge = state.lindaChoice === 'b'
        ? '<div class="badge">Cayó en la falacia de conjunción</div>'
        : '<div class="badge">No cayó en la falacia de conjunción</div>';
    const pedroBadge = state.pedroChoice === 'b'
        ? '<div class="badge">Aplicó efecto halo en el dilema</div>'
        : '<div class="badge">No aplicó efecto halo en el dilema</div>';

    return `
  <div class="card">
    <span class="phase-tag">FASE 4 — PERFIL FINAL</span>
    <h2>Tu perfil de sesgos morales</h2>
    ${bars}
    <div class="badges">${lindaBadge}${pedroBadge}</div>
    <p class="closing">"Los seres humanos tendemos a convertir nuestras identidades morales en señales de superioridad, mediante mecanismos cognitivos automáticos —efecto halo, representatividad, sesgo de confirmación y favoritismo endogrupal— con independencia del contenido específico de esa identidad."</p>
    <h2>Sesgos explicados</h2>
    ${renderExplicaciones()}
    <div class="restart">
      <button data-action="restart">Volver a empezar</button>
    </div>
  </div>`;
}
