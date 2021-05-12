//pregunta 1//
//respuesta 6//
function printGoals(nombre_jugador, numgoles) {
    let aux = {
        Golesmarcados: nombre_jugador, Goles: numgoles
    }
    return aux;
}
/////////////
function necesario(mat) {
    let aux = [];
    for (var i = 0; i < mat.length; i++) {
        if (i != 0) {
            aux[i] = mat[i];
        }
    }
    return aux;
}
function agregar(mat, a) {
    mat.push(a);
    return mat;
}
//pregunta 7//
function calcularCuota(a, b) {
    //let mayor = (  a*(a/b)   +   b*(b/a)  )  /  (  (a/b)   +   (b/a)  );
    let menor = (b * (a / b) + a * (b / a)) / ((a / b) + (b / a));
    return menor;
}
//////////////
const game = {
    team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'], date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//respuesta 1//
var jugadores_1 = game.players[0];
var jugadores_2 = game.players[1];
//respuesta 2//
var equipo_1 = {
    nombrEquipo: game.team1, gk: jugadores_1[0], fieldPlayers: [necesario(jugadores_1)]
}
var equipo_2 = {
    nombrEquipo: game.team2, gk: jugadores_2[0], fieldPlayers: [necesario(jugadores_2)]
}
//////////////////
//respuesta 3//
var allPlayers = {
    team1: [game.team1, game.players[0]],
    team2: [game.team2, game.players[1]],
}
///////////////
//respuesta 4//
agregar(game.players[0], "Thiago");
agregar(game.players[0], "Couthino");
agregar(game.players[0], "Perisic");
var players1Final = {
    team1Update: game.players[0]
}
/////////////
//respuesta 5//
var equipo1 = game.odds.team1;
var equipo2 = game.odds.team2;
var empate = game.odds.x;
///////////////
console.log(equipo_1, equipo_2);
console.log(allPlayers);
console.log(equipo1);
console.log(equipo2);
console.log("/////////////////");
console.log(calcularCuota(equipo1,equipo2));
