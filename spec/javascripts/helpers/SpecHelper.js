beforeEach(function() {
  this.addMatchers({
    toBeComposedOf: function(expectedResults) {
			var sortedGivenArray = this.actual.clone().sort();
			var sortedExpectedArray = expectedResults.clone().sort();
			if (this.actual.length !== expectedResults.length) {
				return false;
			} else {
				for (var i=0; i < expectedResults.length; i++) {
					if (sortedGivenArray[i] !== sortedExpectedArray[i]) {
						return false;
					}
				}
				return true;
			}
    }
  })
});

beforeEach(function() {
  this.addMatchers({
    toFactorTo: function(expectedResults) {
			var prime_factor = new PrimeFactor();
			var actualFactors = prime_factor.factor(this.actual)
			if (actualFactors.length !== expectedResults.length) {
				return false;
			} else {
				for (var i=0; i < expectedResults.length; i++) {
					if (actualFactors[i] !== expectedResults[i]) {
						jasmine.log("Expected " + this.actual + " to factor to " + expectedResults.inspect() + " but got " + actualFactors.inspect());
						return false;
					}
				}
				return true;
			}
    }
  })
});
