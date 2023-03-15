class Vehicle {
	constructor(make, model, year) {
		const { make, model, year } = this;

	}

	honk() {
		return "Beep.";
	}

	toString() {
		const { make, model, year } = this;
		return `The vehicle is a ${make} ${model} from ${year}.`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}

}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}

	revEngine() {
		return "VROOM!!!";
	}
}

class Garage {
	constructor(capacity) {
		if (!Number.isFinite(capacity)) {
			throw new Error("add a number please for the capacity");
		}
		this.cap = capacity;
		this.vehicles = [];
	}

	add(vehicle) {
		if (!(vehicle instanceof Vehicle)) {
			return "Only vehicles are allowed in here!";
		}

		if (this.cap == 0) {
			return "Sorry, we're full.";
		}
		else {
			this.vehicles.push(vehicle);
			this.cap--;
			return "Vehicle added!";
		}

	}


}