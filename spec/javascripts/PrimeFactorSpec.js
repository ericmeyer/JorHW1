describe("PrimeFactor", function() {
  var prime_factor;

  beforeEach(function() {
    prime_factor = new PrimeFactor();
  });

	it("factors 1", function() {
		expect(1).toFactorTo([]);
	});

  it("factors 2", function() {
		expect(2).toFactorTo([2])
  });

	it("factors 3", function() {
		expect(3).toFactorTo([3]);
	});

	it("factors 4", function() {
		expect(4).toFactorTo([2, 2])
	});

	it("factors 5", function() {
		expect(5).toFactorTo([5]);
	});
	
	it("factors 6", function() {
		expect(6).toFactorTo([2, 3]);
	});

	it("factors 7", function() {
		expect(7).toFactorTo([7]);
	});

	it("factors 8", function() {
		expect(8).toFactorTo([2, 2, 2]);
	});
	
	it("factors 9", function() {
		expect(9).toFactorTo([3, 3]);
	});
	
	it("factors a complicated example", function() {
	  expect(2*2*3*3*5*11*13*13*17).toFactorTo([2, 2, 3, 3, 5, 11, 13, 13, 17])
	});
});