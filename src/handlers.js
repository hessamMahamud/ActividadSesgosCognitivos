import { state, resetState } from './state.js';
import { QUESTIONS } from './data/questions.js';

export function pickLikert(qId, val) {
    state.answers[qId] = val;
    state.showReveal = true;
}

export function nextQuestion() {
    state.showReveal = false;
    if (state.qIndex < QUESTIONS.length - 1) {
        state.qIndex++;
    } else {
        state.phase = 'linda';
    }
}

export function prevQuestion() {
    state.showReveal = false;
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
}

export function restart() {
    resetState();
}
