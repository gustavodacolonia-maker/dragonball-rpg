// enemyAI.js - Enemy AI system for Dragon Ball RPG game

class EnemyAI {
    constructor() {
        this.behaviorProfiles = {
            aggressive: this.aggressiveBehavior,
            defensive: this.defensiveBehavior,
            tactical: this.tacticalBehavior,
        };
        this.currentProfile = this.behaviorProfiles.aggressive;
    }

    // Method to switch behavior profiles
    switchProfile(profile) {
        if(this.behaviorProfiles[profile]) {
            this.currentProfile = this.behaviorProfiles[profile];
        } else {
            console.error('Profile not found: ' + profile);
        }
    }

    aggressiveBehavior(enemy, target) {
        // Aggressive behavior logic
        if (this.canAttack(enemy, target)) {
            this.attack(enemy, target);
        } else {
            this.chase(enemy, target);
        }
    }

    defensiveBehavior(enemy, target) {
        // Defensive behavior logic
        if (this.shouldRetreat(enemy)) {
            this.retreat(enemy);
        } else if (this.canAttack(enemy, target)) {
            this.attack(enemy, target);
        }
    }

    tacticalBehavior(enemy, target) {
        // Tactical behavior logic
        // Analyze surroundings and make decisions
        if (this.isFlanked(enemy)) {
            this.retreat(enemy);
        } else {
            this.positioning(enemy, target);
        }
    }

    canAttack(enemy, target) {
        // Logic to determine if the enemy can attack the target
        return Math.random() > 0.5; // Placeholder logic
    }

    attack(enemy, target) {
        console.log(`${enemy.name} attacks ${target.name}!`);
    }

    chase(enemy, target) {
        console.log(`${enemy.name} chases ${target.name}!`);
    }

    retreat(enemy) {
        console.log(`${enemy.name} retreats!`);
    }

    isFlanked(enemy) {
        // Placeholder logic for determining if the enemy is flanked
        return Math.random() > 0.5;
    }

    positioning(enemy, target) {
        console.log(`${enemy.name} is repositioning against ${target.name}.`);
    }

    shouldRetreat(enemy) {
        // Logic for determining whether to retreat
        return Math.random() > 0.5;
    }
}

// Example usage:
const enemyAI = new EnemyAI();
const enemy = { name: 'Frieza' };
const target = { name: 'Goku' };

// This code will make the enemy AI behave according to its current profile.
enemyAI.currentProfile(enemy, target);