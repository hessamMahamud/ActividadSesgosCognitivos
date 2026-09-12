const LIKERT_LABELS = ["Totalmente en desacuerdo", "En desacuerdo", "Neutral", "De acuerdo", "Totalmente de acuerdo"];

const QUESTIONS = [
    { id: 'h1', scale: 'halo', text: "Las personas veganas o con dietas muy estrictas suelen ser más compasivas en general.", reveal: "Efecto halo: un hábito alimenticio se generaliza a un rasgo de carácter sin evidencia directa." },
    { id: 'h2', scale: 'halo', text: "Las personas muy disciplinadas con el ejercicio físico suelen tener más autocontrol en otras áreas de su vida.", reveal: "Efecto halo: la disciplina en un ámbito se extiende, sin justificación, a la vida moral completa." },
    { id: 'h3', scale: 'halo', text: "Las personas religiosas suelen ser más honestas que las no religiosas.", reveal: "Efecto halo: la pertenencia religiosa se asocia automáticamente a un rasgo de carácter." },
    { id: 'h4', scale: 'halo', text: "Las personas de mi misma ideología política suelen tener mejores valores familiares.", reveal: "Efecto halo: la afinidad ideológica se traduce en una supuesta superioridad en otro ámbito, sin relación lógica." },

    { id: 'n1', scale: 'nosotros', text: "Prefiero rodearme de personas que comparten mis ideas políticas.", reveal: "Favoritismo endogrupal: preferencia por el propio grupo, base de la Teoría de la Identidad Social (Tajfel y Turner)." },
    { id: 'n2', scale: 'nosotros', text: "Confío más en el juicio moral de alguien que comparte mi postura religiosa (o mi falta de ella).", reveal: "Favoritismo endogrupal: se asigna mayor credibilidad moral a quien comparte la propia identidad." },
    { id: 'n3', scale: 'nosotros', text: "Las personas que defienden causas sociales distintas a las mías probablemente no comparten mis valores fundamentales.", reveal: "Sesgo nosotros/ellos: se asume una brecha de valores por una sola diferencia de postura." },
    { id: 'n4', scale: 'nosotros', text: "Siento más cercanía con alguien que sigue mi mismo estilo de vida, aunque no lo conozca.", reveal: "Favoritismo endogrupal: la sola pertenencia a un mismo estilo de vida genera cercanía percibida." },

    { id: 'c1', scale: 'confirmacion', text: "Cuando alguien de una causa que valoro actúa mal, pienso que es la excepción, no la regla.", reveal: "Sesgo de confirmación: se protege la imagen positiva del propio grupo reinterpretando la evidencia contraria." },
    { id: 'c2', scale: 'confirmacion', text: "Cuando alguien de una postura política distinta a la mía actúa bien, pienso que es la excepción, no la regla.", reveal: "Sesgo de confirmación: la evidencia favorable al 'otro grupo' se descarta como atípica." },
    { id: 'c3', scale: 'confirmacion', text: "Recuerdo más fácilmente los casos que confirman lo que pienso sobre cierta dieta o estilo de alimentación que los que lo contradicen.", reveal: "Sesgo de confirmación combinado con disponibilidad: se recuerda selectivamente lo que refuerza la creencia previa." },
    { id: 'c4', scale: 'confirmacion', text: "Tiendo a notar más los errores de personas de una religión distinta a la mía que los de la mía.", reveal: "Sesgo de confirmación: atención selectiva a los errores del exogrupo." },

    { id: 'e1', scale: 'confianza', text: "Puedo saber bastante sobre el carácter de alguien con solo conocer su dieta.", reveal: "Exceso de confianza + sustitución de atributos: una pregunta compleja (carácter) se responde con un dato simple (dieta)." },
    { id: 'e2', scale: 'confianza', text: "Estoy seguro/a de que mis juicios sobre quién tiene 'mejores valores' políticos son correctos.", reveal: "Exceso de confianza: certeza alta sin verificación de la evidencia disponible." },
    { id: 'e3', scale: 'confianza', text: "Es fácil para mí identificar quién tiene mejores valores con base en su estilo de vida.", reveal: "Ilusión de validez: sensación de certeza pese a la debilidad real del indicador usado." },
    { id: 'e4', scale: 'confianza', text: "Confío en mi primera impresión moral sobre alguien según su religión (o falta de ella), sin necesitar más información.", reveal: "Anclaje: la primera información recibida (la religión) condiciona todo el juicio posterior." },
];

const SCALES = {
    halo: { name: "Halo Moral", desc: "Generalizar un rasgo positivo aislado a la valía moral completa de una persona." },
    nosotros: { name: "Nosotros vs. Ellos", desc: "Favoritismo hacia el propio grupo moral e identitario, y distancia hacia el ajeno." },
    confirmacion: { name: "Confirmación", desc: "Interpretar la evidencia de forma que refuerce la identidad moral propia." },
    confianza: { name: "Exceso de Confianza", desc: "Certeza injustificada en los propios juicios morales sobre terceros." },
};

const state = {
    phase: 'intro',
    qIndex: 0,
    answers: {},
    showReveal: false,
    lindaChoice: null,
    pedroChoice: null,
};

function likertRow(qId, onPick) {
    let html = '<div class="likert">';
    for (let i = 1; i <= 5; i++) {
        const sel = state.answers[qId] === i ? 'selected' : '';
        html += `<button class="${sel}" data-val="${i}" onclick="pickLikert('${qId}',${i})">${i}</button>`;
    }
    html += '</div><div class="likert-labels"><span>Muy en desacuerdo</span><span>Muy de acuerdo</span></div>';
    return html;
}

function pickLikert(qId, val) {
    state.answers[qId] = val;
    state.showReveal = true;
    render();
}

function nextQuestion() {
    state.showReveal = false;
    if (state.qIndex < QUESTIONS.length - 1) {
        state.qIndex++;
    } else {
        state.phase = 'linda';
    }
    render();
}

function prevQuestion() {
    state.showReveal = false;
    if (state.qIndex > 0) {
        state.qIndex--;
    }
    render();
}

function pickLinda(choice) {
    state.lindaChoice = choice;
    render();
}
function pickPedro(choice) {
    state.pedroChoice = choice;
    render();
}

function computeProfile() {
    const result = {};
    Object.keys(SCALES).forEach(key => {
        const items = QUESTIONS.filter(q => q.scale === key);
        const sum = items.reduce((acc, q) => acc + (state.answers[q.id] || 3), 0);
        result[key] = Math.round(sum / items.length);
    });
    return result;
}

function scaleLabel(n) {
    return ["", "Sesgo bajo", "Sesgo leve", "Sesgo moderado", "Sesgo alto", "Sesgo muy alto"][n];
}

function renderIntro() {
    return `
  <div class="card">
    <span class="phase-tag">INTRODUCCIÓN</span>
    <h2>Antes de empezar</h2>
    <p>Este instrumento presenta afirmaciones sobre distintos grupos e identidades morales (alimentación, política, religión, estilo de vida, causas sociales). No hay respuestas correctas o incorrectas: cada afirmación busca hacer visible un mecanismo cognitivo descrito por Daniel Kahneman en <em>Thinking, Fast and Slow</em>.</p>
    <p>Al final vas a ver un perfil con cuatro escalas, cada una de 1 a 5.</p>
    <div class="nav">
      <span></span>
      <button onclick="startQuiz()">Comenzar</button>
    </div>
  </div>`;
}

function startQuiz() {
    state.phase = 'quiz';
    render();
}

function renderQuiz() {
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
      <button class="ghost" onclick="prevQuestion()" ${state.qIndex === 0 ? 'disabled' : ''}>Anterior</button>
      <button onclick="nextQuestion()" ${answered ? '' : 'disabled'}>${state.qIndex === QUESTIONS.length - 1 ? 'Continuar' : 'Siguiente'}</button>
    </div>
  </div>`;
}

function renderLinda() {
    const answered = state.lindaChoice !== null;
    return `
  <div class="card">
    <span class="phase-tag">FASE 2 — CASO LINDA</span>
    <h2>Un experimento clásico</h2>
    <p>Linda tiene 31 años, es soltera, franca y muy inteligente. Estudió filosofía. Durante su etapa universitaria estuvo profundamente preocupada por temas de discriminación y justicia social, y participó en manifestaciones antinucleares.</p>
    <p>¿Cuál de las siguientes opciones es más probable?</p>
    <div class="choice-list">
      <button class="${state.lindaChoice === 'a' ? 'selected' : ''}" onclick="pickLinda('a')">A. Linda es cajera de banco.</button>
      <button class="${state.lindaChoice === 'b' ? 'selected' : ''}" onclick="pickLinda('b')">B. Linda es cajera de banco y activista feminista.</button>
    </div>
    ${answered ? `<div class="reveal"><span class="label">RESULTADO</span>
      Por lógica de probabilidad, la opción A siempre es igual o más probable que la B (toda cajera-activista es también cajera; lo contrario no es cierto). La mayoría de las personas elige B: esto se llama <strong>falacia de conjunción</strong>, y ocurre porque la descripción detallada "encaja" mejor con el estereotipo de Linda (sesgo de representatividad).
      </div>` : ''}
    <div class="nav">
      <span></span>
      <button onclick="goPhase('pedro')" ${answered ? '' : 'disabled'}>Continuar</button>
    </div>
  </div>`;
}

function goPhase(p) {
    state.phase = p;
    render();
}

function renderPedro() {
    const answered = state.pedroChoice !== null;
    return `
  <div class="card">
    <span class="phase-tag">FASE 3 — DILEMA COMPARATIVO</span>
    <h2>¿Quién es más moral?</h2>
    <p><strong>Pedro A:</strong> dona dinero a una organización benéfica todos los meses.</p>
    <p><strong>Pedro B:</strong> dona dinero a una organización benéfica todos los meses, y además sigue una dieta vegana.</p>
    <div class="choice-list">
      <button class="${state.pedroChoice === 'a' ? 'selected' : ''}" onclick="pickPedro('a')">Pedro A es más moral.</button>
      <button class="${state.pedroChoice === 'b' ? 'selected' : ''}" onclick="pickPedro('b')">Pedro B es más moral.</button>
      <button class="${state.pedroChoice === 'igual' ? 'selected' : ''}" onclick="pickPedro('igual')">Son igual de morales.</button>
    </div>
    ${answered ? `<div class="reveal"><span class="label">RESULTADO</span>
      El dato de la dieta no aporta ninguna información adicional sobre la generosidad de Pedro. Si elegiste a Pedro B, tu juicio probablemente fue guiado por <strong>efecto halo</strong>: un rasgo adicional (la dieta) se sumó, sin justificación lógica, a la evaluación moral general.
      </div>` : ''}
    <div class="nav">
      <span></span>
      <button onclick="goPhase('resultado')" ${answered ? '' : 'disabled'}>Ver mi perfil</button>
    </div>
  </div>`;
}

function renderResultado() {
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
    <div class="restart">
      <button onclick="restart()">Volver a empezar</button>
    </div>
  </div>`;
}

function restart() {
    state.phase = 'intro';
    state.qIndex = 0;
    state.answers = {};
    state.showReveal = false;
    state.lindaChoice = null;
    state.pedroChoice = null;
    render();
}

function render() {
    const app = document.getElementById('app');
    if (state.phase === 'intro') app.innerHTML = renderIntro();
    else if (state.phase === 'quiz') app.innerHTML = renderQuiz();
    else if (state.phase === 'linda') app.innerHTML = renderLinda();
    else if (state.phase === 'pedro') app.innerHTML = renderPedro();
    else if (state.phase === 'resultado') app.innerHTML = renderResultado();
}

render();

