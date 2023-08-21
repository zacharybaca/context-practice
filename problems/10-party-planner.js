// Your code here
class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if (this.guestList.length === 0) {
			return "Gotta add people to the guest list";
		} else if (this.guestList.length === 1) {
			return `Welcome to the party ${this.guestList[0]}`;
			// let phrase = "Welcome to the party ";
			// for (let i = 0; i < this.guestList.length; i++) {
			// 	if (this.guestList.length === 1) {
			// 		return `Welcome to the party ${t}`
			// 	}
			// 	phrase += `${this.guestList[i]} and `
			// }
			// return phrase;
		} else {
			let lastGuest = this.guestList.pop();
			return `Welcome to the party ${this.guestList[0]} and ${lastGuest}`;
		}
	}
}

const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Ralph");
party2.addToGuestList("Monica");
party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"

party2.addToGuestList("Mike");
console.log(party2.throwParty());

party2.addToGuestList("Jamie");
console.log(party2.throwParty());
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
