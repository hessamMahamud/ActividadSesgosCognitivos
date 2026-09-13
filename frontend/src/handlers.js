import { state, resetState } from './state.js';
import { QUESTIONS } from './data/questions.js';
import { guardarReporte } from './api.js';

export function pickLikert(qId, val) {
    state.answers[qId] = val;
}

export function nextQuestion() {
    if (state.qIndex < QUESTIONS.length - 1) {
        state.qIndex++;
    } else {
        state.phase = 'linda';
    }
}

export function prevQuestion() {
    if (state.qIndex > 0) {
        state.qIndex--;
    }
}

export function pickLinda(choice) {
    state.lindaChoice = choice;
}

export function pickPedro(choice) {
    state.pedroChoice = choice;
}

export function goPhase(phase) {
    state.phase = phase;
    // No usamos await: no queremos que la UI espere a que termine el POST
    // para mostrar el resultado. guardarReporte() maneja sus propios errores.
    if (phase === 'resultado') {
        guardarReporte();
    }
}

export function restart() {
    resetState();
}
