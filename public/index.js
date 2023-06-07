//se pase el esquema del modelo al constructor Survey.Model para crear una instancia de un modelo
const survey = new Survey.Model(json);

survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

//creamos un obj de los resultados


//se crea la funcion para la alerta y muestra los resultados almacenados
function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
    //console.log(JSON.stringify(sender.data['question1']))  //imprime una respuesta solamente
}

survey.onComplete.add(alertResults);


//se pasa la instancia del modelo a la modelpropiedad Para mostrar la encuesta en el div
$("#surveyElement").Survey({ model: survey });