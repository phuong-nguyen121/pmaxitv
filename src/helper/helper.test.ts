import { asyncFunction, convertToCamel } from "./helpers";

describe('convertToCamel', () => {
  it('should convert keys of object to camelcase', () => {
    const object = {
      'abc abc': 123,
      'abcASd': 123,
      'abc abc _123': 123
    }
    convertToCamel(object)
    expect(object).toStrictEqual({
      "abcASd": 123,
      "abcAbc": 123,
      "abcAbc123": 123,
    })
  });
});

describe('asyncFunction', () => {
  it('', async () => {
    const a = await asyncFunction(3000);
    expect(a).toBe(3)
  });
});