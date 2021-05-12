//Pregunta 3//
//respuesta 1//
function convLower(text) {
    return text.toLowerCase();
}
const snakeToCamel = (str) => str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
        .replace('-', '')
        .replace('_', '')
);
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
}
for (let i = 0; i < snakeCamel.snake.length; i++) {
    let aux1 = snakeCamel.snake[i];
    let aux2 = convLower(aux1);
    let aux3 = snakeToCamel(aux2);
    snakeCamel.camel.push(aux3);
}
for (let i = 0; i < snakeCamel.snake.length; i++) {
    console.log(snakeCamel.camel[i],snakeCamel.chars[i]);
}
//////////////
