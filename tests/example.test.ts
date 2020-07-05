import { Example } from "../src/example/example";

test("Example", () => {
  expect(new Example()).not.toBe(null);
});
