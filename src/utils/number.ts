export function generateRandomBetween(min: number, max: number) {
	if (typeof min !== 'number' || typeof max !== 'number') {
		throw new Error('Both parameters must be numbers.');
	}

	if (min > max) {
		throw new Error("The 'min' parameter must be less than or equal to 'max'.");
	}

	// Generate a random integer between min and max (inclusive)
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
