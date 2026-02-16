// battle.js for Dragon Ball RPG

// Character class to hold all necessary data
class Character {
    constructor(name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.statusEffects = [];
    }

    isAlive() {
        return this.health > 0;
    }

    applyDamage(damage) {
        this.health -= damage;
        if (this.health < 0) this.health = 0;
    }

    addStatusEffect(effect) {
        this.statusEffects.push(effect);
    }

    removeStatusEffect(effect) {
        this.statusEffects = this.statusEffects.filter(e => e !== effect);
    }
}

// Function to calculate damage
function calculateDamage(attacker, defender) {
    const baseDamage = attacker.attack - defender.defense;
    return baseDamage > 0 ? baseDamage : 0;
}

// Function to handle a player's turn
function playerTurn(attacker, defender, action) {
    let damage;
    switch (action) {
        case 'attack':
            damage = calculateDamage(attacker, defender);
            console.log(`${attacker.name} attacks ${defender.name} for ${damage} damage!`);
            defender.applyDamage(damage);
            break;
        case 'defend':
            console.log(`${attacker.name} defends this turn!`);
            attacker.defense += 2; // Temporary increase in defense
            break;
        // Add more actions as needed
    }
}

// Function to initiate battle
function initiateBattle(player1, player2) {
    console.log(`Battle starts between ${player1.name} and ${player2.name}!`);
    while (player1.isAlive() && player2.isAlive()) {
        playerTurn(player1, player2, 'attack');
        if (!player2.isAlive()) {
            console.log(`${player2.name} has been defeated!`);
            break;
        }
        playerTurn(player2, player1, 'attack');
        if (!player1.isAlive()) {
            console.log(`${player1.name} has been defeated!`);
            break;
        }
    }
}

// Example usage:
const Goku = new Character('Goku', 100, 20, 5);
const Frieza = new Character('Frieza', 80, 15, 3);
initiateBattle(Goku, Frieza);