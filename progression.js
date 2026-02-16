// progression.js

class Player {
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.experience = 0;
        this.skills = [];
        this.worldProgress = 0;
    }

    gainExperience(amount) {
        this.experience += amount;
        this.checkLevelUp();
    }

    checkLevelUp() {
        const experienceToLevelUp = this.level * 100; // Example formula for level up
        if (this.experience >= experienceToLevelUp) {
            this.level++; 
            this.experience -= experienceToLevelUp; 
            this.unlockSkills();
            console.log(`${this.name} leveled up to level ${this.level}!`);
        }
    }

    unlockSkills() {
        // Example of skill unlocks based on level
        if (this.level === 5) {
            this.skills.push('Kamehameha');
            console.log(`${this.name} unlocked Kamehameha skill!`);
        } else if (this.level === 10) {
            this.skills.push('Spirit Bomb');
            console.log(`${this.name} unlocked Spirit Bomb skill!`);
        }
    }

    progressWorld(area) {
        this.worldProgress = Math.max(this.worldProgress, area);
        console.log(`${this.name} has progressed to world area ${this.worldProgress}.`);
    }
}

// Example usage:
const player1 = new Player('Goku');
player1.gainExperience(150); // Goku would level up here if enough experience gained.
player1.progressWorld(1); // Goku progresses to world area 1

