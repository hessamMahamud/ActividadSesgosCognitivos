import { state } from './state.js';
import { QUESTIONS, SCALES } from './data/questions.js';

export function computeProfile() {
    const result = {};
    Object.keys(SCALES).forEach(key => {
        const items = QUESTIONS.filter(q => q.scale === key);
        const sum = items.reduce((acc, q) => acc + (state.answers[q.id] || 3), 0);
        result[key] = Math.round(sum / items.length);
    });
    return result;
}

export function scaleLabel(n) {
    return ["", "Sesgo bajo", "Sesgo leve", "Sesgo moderado", "Sesgo alto", "Sesgo muy alto"][n];
}
