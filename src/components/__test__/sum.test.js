import { sum } from "../sum";
test("sum", () => {
  const value = sum(1, 2);
  //Assertions
  expect(value).toBe(3);
  expect(sum(5, 9)).toBe(14);
});
