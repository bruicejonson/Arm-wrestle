
let player1 = {
    name: "Hulk",
    armStrength: Math.floor(Math.random() * 10),
    won: 0

};
let player2 = {
    name: "Thor",
    armStrength: Math.floor(Math.random() * 10),
    won: 0
};
function playRound(player1, player2) {
    if (player1.armStrength === player2.armStrength) {
        console.log(`They are too evenly matched, Its a Tie !!`)
        return null;
    } else if (player1.armStrength > player2.armStrength) {
        console.log(`${player1.name} applied: ${player1.armStrength} pounds of force    ${player2.name} applied: ${player2.armStrength} pounds of force, ${player1.name} wins!`)
        return player1;
    } else {
        console.log(`${player1.name} applied: ${player1.armStrength} pounds of force    ${player2.name} applied: ${player2.armStrength} pounds of force, ${player2.name} wins!`)
        return player2
    }
}
function addWins(player) {
    if (player !== null)
        player.won++;
}
function playGame(player1, player2, playUntil) {
    console.log('Hulk vs Thor, Lets Arm Wrestle !');
    console.log('First to 2 is the strongest avenger !!!')
    while (player1.won < playUntil && player2.won < playUntil) {
        addWins(playRound(player1, player2))
        player1.armStrength = Math.floor(Math.random() * 10);
        player2.armStrength = Math.floor(Math.random() * 10);

    }
}
playGame(player1, player2, 2);
if (player1.won === 2) {
    console.log(`${player1.name} is the Strongest Avenger !!!`)
}
else if (player2.won === 2) {
    console.log(`${player2.name} is the Strongest Avenger !!!`)
}
