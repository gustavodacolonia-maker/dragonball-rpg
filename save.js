// save.js
// Dragon Ball RPG Game: Local Storage Save System

class SaveSystem {
    constructor() {
        this.saveKey = 'dragonBallRPG_save';
    }

    // Save game data to localStorage
    save(data) {
        localStorage.setItem(this.saveKey, JSON.stringify(data));
        console.log('Game saved!');
    }

    // Load game data from localStorage
    load() {
        const data = localStorage.getItem(this.saveKey);
        return data ? JSON.parse(data) : null;
    }

    // Remove saved data from localStorage
    clear() {
        localStorage.removeItem(this.saveKey);
        console.log('Save data cleared!');
    }

    // Auto-save functionality every 5 minutes
    autoSave(data) {
        setInterval(() => this.save(data), 5 * 60 * 1000);
    }

    // New Game Plus functionality
    newGamePlus(data) {
        const savedData = this.load();
        if (savedData) {
            // Modify this as per your game's NG+ mechanics
            savedData.level += 1; // Example: Increase level by 1
            // Save the modified data
            this.save(savedData);
            console.log('New Game Plus activated!');
        }
    }
}

// Example usage:
const saveSystem = new SaveSystem();
const gameData = { level: 1, character: 'Goku', experience: 100 };

// Saving the game
saveSystem.save(gameData);
// Loading the game
console.log(saveSystem.load());
// Auto-saving
saveSystem.autoSave(gameData);
// New Game Plus
saveSystem.newGamePlus(gameData);