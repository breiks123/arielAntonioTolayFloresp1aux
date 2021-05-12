//Pregunta 3//
//respuesta 1//
function convLower(text) {
    return text.toLowerCase();
}
var snakeToCamel = function (str) { return str.replace(/([-_][a-z])/g, function (group) { return group.toUpperCase()
    .replace('-', '')
    .replace('_', ''); }); };
var snake = "calculate_AGE";
var textconver = convLower(snake);
var snakeCamel = {
    snake: ["underscore_case",
        "first_name",
        "Some_Variable",
        "calculate_AGE",
        "delayed_departure"],
    chars: [
        "✔", "✔✔", "✔✔✔", "✔✔✔✔", "✔✔✔✔✔"
    ],
    camel: []
};
for (var i = 0; i < snakeCamel.snake.length; i++) {
    var aux1 = snakeCamel.snake[i];
    var aux2 = convLower(aux1);
    var aux3 = snakeToCamel(aux2);
    snakeCamel.camel.push(aux3);
}
for (var i = 0; i < snakeCamel.snake.length; i++) {
    console.log(snakeCamel.camel[i], snakeCamel.chars[i]);
}
