//se pase el esquema del modelo al constructor Survey.Model para crear una instancia de un modelo
const survey = new Survey.Model(json);

survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

//se pasa la instancia del modelo a la modelpropiedad Para mostrar la encuesta en el div
$("#surveyElement").Survey({ model: survey });