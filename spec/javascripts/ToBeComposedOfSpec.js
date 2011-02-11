describe("toBeComposedOf", function() {
	
	it("matches empty arrays", function() {
	  expect([]).toBeComposedOf([]);
	});
	
	it("fails when given array is longer than the expected", function() {
	  expect([1]).not.toBeComposedOf([]);
	});

	it("fails when given array is shorter than the expected", function() {
	  expect([]).not.toBeComposedOf([1]);
	});

	it("passes when two nonempty equal arrays", function() {
	  expect([1, 2, 3]).toBeComposedOf([1, 2, 3]);
	});
	
	it("fails with different arrays of same length", function() {
	  expect([1]).not.toBeComposedOf([3]);
	});
	
	it("passes when the elements are swapped", function() {
	  expect([2, 3]).toBeComposedOf([3, 2]);
	});
	
	it("handles a complicated example", function() {
	  expect([3, 4, 5, 1, 4, 3]).toBeComposedOf([1, 4, 3, 3, 4, 5]);
	});
	
	it("handles multiple types of objects", function() {
	  expect(["a", 1]).toBeComposedOf([1, "a"]);
	});
});
