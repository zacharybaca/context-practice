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

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
