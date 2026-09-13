import { state } from '../state.js';

export function renderLinda() {
    const answered = state.lindaChoice !== null;
    return `
  <div class="card">
    <span class="phase-tag">FASE 2 — CASO LINDA</span>
    <h2>Un experimento clásico</h2>
    <p>Linda tiene 31 años, es soltera, franca y muy inteligente. Estudió filosofía. Durante su etapa universitaria estuvo profundamente preocupada por temas de discriminación y justicia social, y participó en manifestaciones antinucleares.</p>
    <p>¿Cuál de las siguientes opciones es más probable?</p>
    <div class="choice-list">
      <button class="${state.lindaChoice === 'a' ? 'selected' : ''}" data-action="pick-linda" data-choice="a">A. Linda es cajera de banco.</button>
      <button class="${state.lindaChoice === 'b' ? 'selected' : ''}" data-action="pick-linda" data-choice="b">B. Linda es cajera de banco y activista feminista.</button>
    </div>
    ${answered ? `<div class="reveal"><span class="label">RESULTADO</span>
      Por lógica de probabilidad, la opción A siempre es igual o más probable que la B (toda cajera-activista es también cajera; lo contrario no es cierto). La mayoría de las personas elige B: esto se llama <strong>falacia de conjunción</strong>, y ocurre porque la descripción detallada "encaja" mejor con el estereotipo de Linda (sesgo de representatividad).
      </div>` : ''}
    <div class="nav">
      <span></span>
      <button data-action="go-phase" data-phase="pedro" ${answered ? '' : 'disabled'}>Continuar</button>
    </div>
  </div>`;
}
