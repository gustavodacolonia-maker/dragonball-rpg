class World {
    constructor() {
        this.day = 0;
        this.events = [];
        this.enemies = [];
        this.worldState = {};
    }

    // Method to update day
    nextDay() {
        this.day++;
        this.triggerEvents();
    }

    // Method to add an event
    addEvent(event) {
        this.events.push(event);
    }

    // Method to trigger events based on the day
    triggerEvents() {
        this.events.forEach(event => {
            if (event.day === this.day) {
                event.action();
            }
        });
    }

    // Method to add an enemy
    addEnemy(enemy) {
        this.enemies.push(enemy);
    }

    // Method to get current world state
    getWorldState() {
        return {
            day: this.day,
            events: this.events,
            enemies: this.enemies,
            worldState: this.worldState
        };
    }

    // Method to set world state
    setWorldState(state) {
        this.worldState = state;
    }
}

// Example usage:
const myWorld = new World();
myWorld.addEvent({ day: 1, action: () => console.log('A new enemy appears!') });
myWorld.nextDay();
console.log(myWorld.getWorldState());  
