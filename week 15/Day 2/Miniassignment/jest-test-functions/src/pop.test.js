import popOwn from "./pop";

test("popOwn should return undefined if array passed as parameter have no elements", () => {
  let array = [];
  expect(popOwn(array)).toBe(undefined);
});

test("popOwn should delete the last element of array", () => {
  let array = [1, 4, 5];
  expect(popOwn(array)).toBe(5);
  expect(array.length).toBe(2);
});
