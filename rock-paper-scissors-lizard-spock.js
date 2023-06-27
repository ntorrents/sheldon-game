const rules = {
    "🗿": ["🦎", "✂️"],
    "📄": ["🗿", "🖖"],
    "✂️": ["🦎", "📄"],
    "🦎": ["🖖", "📄"],
    "🖖": ["✂️", "🗿"],
};

function game(list) {
    let player1 = 0;
    let player2 = 0;

    for (turn of list) {
        const actionPlayer1 = turn[0];
        const actionPlayer2 = turn[1];
        if (actionPlayer1 === actionPlayer2) {
            continue;
        } else if (rules[actionPlayer1].includes(actionPlayer2)) {
            player1++;
        } else {
            player2++;
        }
    }

    return player1 === player2
        ? "Tie"
        : player1 > player2
        ? "Player 1"
        : "Player 2";
}

// Player 2 game
console.log(
    game([
        ["🗿", "✂️"],
        ["✂️", "🗿"],
        ["📄", "✂️"],
    ])
);

// Player 1 game
console.log(
    game([
        ["🗿", "🗿"],
        ["✂️", "📄"],
        ["🦎", "🦎"],
        ["📄", "✂️"],
        ["🖖", "🗿"],
    ])
);

// Tie game
console.log(
    game([
        ["🗿", "🗿"],
        ["✂️", "📄"],
        ["🦎", "🦎"],
        ["📄", "✂️"],
    ])
);
