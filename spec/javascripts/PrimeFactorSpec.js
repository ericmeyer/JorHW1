describe("PrimeFactor", function() {
  var prime_factor;

  beforeEach(function() {
    prime_factor = new PrimeFactor();
  });

	it("factors 1", function() {
		expect(prime_factor.factor(1)).toBeComposedOf([]);
	});

  it("factors 2", function() {
		expect(prime_factor.factor(2)).toBeComposedOf([2]);
  });

	it("factors 3", function() {
	  expect(prime_factor.factor(3)).toBeComposedOf([3]);
	});

	it("factors 4", function() {
	  expect(prime_factor.factor(4)).toBeComposedOf([2, 2]);
	});

	it("factors 5", function() {
	  expect(prime_factor.factor(5)).toBeComposedOf([5]);
	});
	
	it("factors 6", function() {
	  expect(prime_factor.factor(6)).toBeComposedOf([2, 3]);
	});

	it("factors 7", function() {
	  expect(prime_factor.factor(7)).toBeComposedOf([7]);
	});

	it("factors 8", function() {
	  expect(prime_factor.factor(8)).toBeComposedOf([2, 2, 2]);
	});
	
	it("factors 9", function() {
	  expect(prime_factor.factor(9)).toBeComposedOf([3, 3]);
	});
	
	it("factors a complicated example", function() {
	  expect(prime_factor.factor(2*2*3*3*5*11*13*13*17)).toBeComposedOf([2, 2, 3, 3, 5, 11, 13, 13, 17])
	});
});