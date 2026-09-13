import { state } from './state.js';
import { renderIntro } from './views/intro.js';
import { renderQuiz } from './views/quiz.js';
import { renderLinda } from './views/linda.js';
import { renderPedro } from './views/pedro.js';
import { renderResultado } from './views/resultado.js';
import { pickLikert, nextQuestion, prevQuestion, pickLinda, pickPedro, goPhase, restart } from './handlers.js';

export function render() {
    const app = document.getElementById('app');
    if (state.phase === 'intro') app.innerHTML = renderIntro();
    else if (state.phase === 'quiz') app.innerHTML = renderQuiz();
    else if (state.phase === 'linda') app.innerHTML = renderLinda();
    else if (state.phase === 'pedro') app.innerHTML = renderPedro();
    else if (state.phase === 'resultado') app.innerHTML = renderResultado();
}

// Un solo listener, puesto una sola vez sobre #app (que nunca se destruye,
// solo se reemplaza su innerHTML). e.target.closest('[data-action]') sube
// por el DOM hasta encontrar el elemento con data-action más cercano,
// así que no importa si el click cae justo en el texto dentro del botón.
function handleAppClick(event) {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    // target.dataset lee los atributos data-* y los expone en camelCase.
    // Todos llegan como string, por eso Number(val) en pick-likert.
    const { action, qid, val, choice, phase } = target.dataset;

    switch (action) {
        case 'pick-likert':
            pickLikert(qid, Number(val));
            break;
        case 'next-question':
            nextQuestion();
            break;
        case 'prev-question':
            prevQuestion();
            break;
        case 'pick-linda':
            pickLinda(choice);
            break;
        case 'pick-pedro':
            pickPedro(choice);
            break;
        case 'go-phase':
            goPhase(phase);
            break;
        case 'restart':
            restart();
            break;
        default:
            return; // acción desconocida: no re-renderizamos
    }

    render();
}

export function setupEventListeners() {
    document.getElementById('app').addEventListener('click', handleAppClick);
}
