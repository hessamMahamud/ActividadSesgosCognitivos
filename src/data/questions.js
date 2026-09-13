export const LIKERT_LABELS = ["Totalmente en desacuerdo", "En desacuerdo", "Neutral", "De acuerdo", "Totalmente de acuerdo"];

export const QUESTIONS = [
    { id: 'h1', scale: 'halo', text: "Las personas veganas o con dietas muy estrictas suelen ser más compasivas en general.", reveal: "Efecto halo: un hábito alimenticio se generaliza a un rasgo de carácter sin evidencia directa." },
    { id: 'h2', scale: 'halo', text: "Las personas muy disciplinadas con el ejercicio físico suelen tener más autocontrol en otras áreas de su vida.", reveal: "Efecto halo: la disciplina en un ámbito se extiende, sin justificación, a la vida moral completa." },
    { id: 'h3', scale: 'halo', text: "Las personas religiosas suelen ser más honestas que las no religiosas.", reveal: "Efecto halo: la pertenencia religiosa se asocia automáticamente a un rasgo de carácter." },
    { id: 'h4', scale: 'halo', text: "Las personas de mi misma ideología política suelen tener mejores valores familiares.", reveal: "Efecto halo: la afinidad ideológica se traduce en una supuesta superioridad en otro ámbito, sin relación lógica." },

    { id: 'n1', scale: 'nosotros', text: "Prefiero rodearme de personas que comparten mis ideas políticas.", reveal: "Favoritismo endogrupal: preferencia por el propio grupo, base de la Teoría de la Identidad Social (Tajfel y Turner)." },
    { id: 'n2', scale: 'nosotros', text: "Confío más en el juicio moral de alguien que comparte mi postura religiosa (o mi falta de ella).", reveal: "Favoritismo endogrupal: se asigna mayor credibilidad moral a quien comparte la propia identidad." },
    { id: 'n3', scale: 'nosotros', text: "Las personas que defienden causas sociales distintas a las mías probablemente no comparten mis valores fundamentales.", reveal: "Sesgo nosotros/ellos: se asume una brecha de valores por una sola diferencia de postura." },
    { id: 'n4', scale: 'nosotros', text: "Siento más cercanía con alguien que sigue mi mismo estilo de vida, aunque no lo conozca.", reveal: "Favoritismo endogrupal: la sola pertenencia a un mismo estilo de vida genera cercanía percibida." },

    { id: 'c1', scale: 'confirmacion', text: "Cuando alguien que defiende una causa en la que creo comete un error, tiendo a pensar que es un caso aislado, no algo típico de ese grupo", reveal: "Sesgo de confirmación: se protege la imagen positiva del propio grupo reinterpretando la evidencia contraria." },
    { id: 'c2', scale: 'confirmacion', text: "Cuando alguien de una postura política distinta a la mía actúa bien, pienso que es la excepción, no la regla.", reveal: "Sesgo de confirmación: la evidencia favorable al 'otro grupo' se descarta como atípica." },
    { id: 'c3', scale: 'confirmacion', text: "Recuerdo más fácilmente los casos que confirman lo que pienso sobre cierta dieta o estilo de alimentación que los que lo contradicen.", reveal: "Sesgo de confirmación combinado con disponibilidad: se recuerda selectivamente lo que refuerza la creencia previa." },
    { id: 'c4', scale: 'confirmacion', text: "Tiendo a notar más los errores de personas de una religión distinta a la mía que los de la mía.", reveal: "Sesgo de confirmación: atención selectiva a los errores del exogrupo." },

    { id: 'e1', scale: 'confianza', text: "Puedo saber bastante sobre el carácter de alguien con solo conocer su dieta.", reveal: "Exceso de confianza + sustitución de atributos: una pregunta compleja (carácter) se responde con un dato simple (dieta)." },
    { id: 'e2', scale: 'confianza', text: "Estoy seguro/a de que mis juicios sobre quién tiene 'mejores valores' políticos son correctos.", reveal: "Exceso de confianza: certeza alta sin verificación de la evidencia disponible." },
    { id: 'e3', scale: 'confianza', text: "Es fácil para mí identificar quién tiene mejores valores con base en su estilo de vida.", reveal: "Ilusión de validez: sensación de certeza pese a la debilidad real del indicador usado." },
    { id: 'e4', scale: 'confianza', text: "Confío en mi primera impresión moral sobre alguien según su religión (o falta de ella), sin necesitar más información.", reveal: "Anclaje: la primera información recibida (la religión) condiciona todo el juicio posterior." },
];

export const SCALES = {
    halo: { name: "Halo Moral", desc: "Generalizar un rasgo positivo aislado a la valía moral completa de una persona." },
    nosotros: { name: "Nosotros vs. Ellos", desc: "Favoritismo hacia el propio grupo moral e identitario, y distancia hacia el ajeno." },
    confirmacion: { name: "Confirmación", desc: "Interpretar la evidencia de forma que refuerce la identidad moral propia." },
    confianza: { name: "Exceso de Confianza", desc: "Certeza injustificada en los propios juicios morales sobre terceros." },
};
