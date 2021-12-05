import filterProduct from "../utils/filterProduct";

const data = [
  {
    id: 1,
    name: "test",
    price: 10,
    quantity: 6,
  },
  {
    id: 2,
    name: "foobar",
    price: 6,
    quantity: 10,
  },
];

describe("filter products", () => {
  // todo: fix test
  it("filter by name", () => {
    expect(data.filter(filterProduct({ name: "Test" })).length).toBe(1);
  });
  // todo: test multi-filters e.g. by `name` and `price`
  it("filter by name and price", () => {
    expect(data.filter(filterProduct({ name: "fooB", price:5 })).length).toBe(0);
    expect(data.filter(filterProduct({ name: "fooB", price:6 })).length).toBe(1);
  });
  // todo: test multi-filters
  it("filter multi option", () => {
    expect(data.filter(filterProduct({ name: "fooB", price:5, quantity:9 })).length).toBe(0);
    expect(data.filter(filterProduct({ name: "fooB", price:6, quantity:10 })).length).toBe(1);
  });
  it("no matches", () => {
    expect(data.filter(filterProduct({ name: "javascript" })).length).toBe(0);
  });
});
