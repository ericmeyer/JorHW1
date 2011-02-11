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
