// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;   
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(theDamage) {
        this.health -= theDamage;
    }
};

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else { 
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
};

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else { 
            return `A Saxon has died in combat`;
        }
    }
};

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);  // add to ARRAY 
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let saxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        let result = saxon.receiveDamage(viking.strength); 

        if (saxon.health < 1) {
            this.saxonArmy.splice(this.saxonArmy[saxon]);
        }

        return result; 
    } 

        saxonAttack() {
        let saxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        let result = viking.receiveDamage(saxon.strength); 

        if (viking.health < 1) {
            this.vikingArmy.splice(this.vikingArmy[viking]);
        }

        return result; 
    } 
        
    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
           

    // choosen a random saxon OK
    // choose a random viking OK
    // has their receiveDamage() with value
    // saxon.theDamage = viking.strength
    // saxon.health < 1 -= saxon (but on array version)
    // return result (SAxon.receiveDamage() = viking.strength)

let war1 = new War (); 

war1.addViking('Lagertha');

war1.vikingAttack();
console.log(war1.vikingArmy);

