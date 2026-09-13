import { state } from '../state.js';

export function renderPedro() {
    const answered = state.pedroChoice !== null;
    return `
  <div class="card">
    <span class="phase-tag">FASE 3 — DILEMA COMPARATIVO</span>
    <h2>¿Quién es más moral?</h2>
    <p><strong>Pedro A:</strong> dona dinero a una organización benéfica todos los meses.</p>
    <p><strong>Pedro B:</strong> dona dinero a una organización benéfica todos los meses, y además sigue una dieta vegana.</p>
    <div class="choice-list">
      <button class="${state.pedroChoice === 'a' ? 'selected' : ''}" data-action="pick-pedro" data-choice="a">Pedro A es más moral.</button>
      <button class="${state.pedroChoice === 'b' ? 'selected' : ''}" data-action="pick-pedro" data-choice="b">Pedro B es más moral.</button>
      <button class="${state.pedroChoice === 'igual' ? 'selected' : ''}" data-action="pick-pedro" data-choice="igual">Son igual de morales.</button>
    </div>
    ${answered ? `<div class="reveal"><span class="label">RESULTADO</span>
      El dato de la dieta no aporta ninguna información adicional sobre la generosidad de Pedro. Si elegiste a Pedro B, tu juicio probablemente fue guiado por <strong>efecto halo</strong>: un rasgo adicional (la dieta) se sumó, sin justificación lógica, a la evaluación moral general.
      </div>` : ''}
    <div class="nav">
      <span></span>
      <button data-action="go-phase" data-phase="resultado" ${answered ? '' : 'disabled'}>Ver mi perfil</button>
    </div>
  </div>`;
}
