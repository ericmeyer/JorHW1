function PrimeFactor() {
}

PrimeFactor.prototype.factor = function(number) {
	var factors = [];
	var candidate = 2;
	var remainder = number;
	for(candidate; candidate<=remainder; candidate++) {
		while (remainder % candidate === 0) {
			factors.push(candidate);
			remainder = remainder / candidate;
		}
	}
	return factors;
};
