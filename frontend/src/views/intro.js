export function renderIntro() {
    return `
  <div class="card">
    <span class="phase-tag">INTRODUCCIÓN</span>
    <h2>Antes de empezar</h2>
    <p>Este instrumento presenta afirmaciones sobre distintos grupos e identidades morales (alimentación, política, religión, estilo de vida, causas sociales). No hay respuestas correctas o incorrectas: cada afirmación busca hacer visible un mecanismo cognitivo descrito por Daniel Kahneman en <em>Thinking, Fast and Slow</em>.</p>
    <p>Al final vas a ver un perfil con cuatro escalas, cada una de 1 a 5.</p>
    <div class="nav">
      <span></span>
      <button data-action="go-phase" data-phase="quiz">Comenzar</button>
    </div>
  </div>`;
}
