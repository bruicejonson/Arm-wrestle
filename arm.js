
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
        console.log(`${player1.name} applied ${player1.armStrength} pounds of force compared to ${player2.name}'s ${player2.armStrength} pounds of force.`)
        return player1;
    } else {
        console.log(`${player2.name} applied ${player2.armStrength} pounds of force compared to ${player1.name}'s ${player1.armStrength} pounds of force.`)
        return player2
    }
}
function addWins(player) {
    if (player !== null)
        player.won++;
}
function playGame(player1, player2, playUntil) {
    console.log('Hulk vs Thor, Lets Arm Wrestle !');
    while (player1.won < playUntil && player2.won < playUntil) {
        addWins(playRound(player1, player2))
    }
}
playGame(player1, player2, 1);
if (player1.won === 1) {
    console.log(`${player1.name} Wins !!!`)
}
else if (player2.won === 1) {
    console.log(`${player2.name} Wins !!!`)
}
