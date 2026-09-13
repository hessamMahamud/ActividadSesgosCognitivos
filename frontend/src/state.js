function defaultState() {
    return {
        phase: 'intro',
        qIndex: 0,
        answers: {},
        lindaChoice: null,
        pedroChoice: null,
    };
}

// state se exporta como const: nadie puede hacer `state = otraCosa`,
// pero sí se pueden mutar sus propiedades (state.phase = 'quiz' funciona).
export const state = defaultState();

// Como no podemos reasignar `state`, resetState() copia las propiedades
// de un objeto fresco encima del existente. Object.assign muta `state`
// en lugar de crear uno nuevo, así que la referencia que ya importaron
// otros módulos sigue siendo válida.
export function resetState() {
    Object.assign(state, defaultState());
}
