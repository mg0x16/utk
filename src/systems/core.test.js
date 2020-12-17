import { parseConfig, system } from "./core";

describe("Parse system config", () => {
  test("simple property declaration", () => {
    const config = {
      bg: {
        property: "backgroundColor",
      },
    };
    const res = parseConfig(config);
    expect(res).toMatchObject({
      backgroundColor: { keys: ["bg"] },
    });
  });

  test("multiple names for the same property", () => {
    const config = {
      bg: {
        property: "backgroundColor",
      },
      backgroundColor: {
        property: "backgroundColor",
      },
    };
    const res = parseConfig(config);
    expect(res).toMatchObject({
      backgroundColor: { keys: ["bg", "backgroundColor"] },
    });
  });
});

describe("Generate style system", () => {
  test("simple system", () => {
    const config = {
      bg: {
        property: "backgroundColor",
      },
    };
    const res = system(config);
    expect(res.backgroundColor({ bg: "red" })).toBe("red");
  });

  test("multiple names for property", () => {
    const config = {
      bg: {
        property: "backgroundColor",
      },
      backgroundColor: {
        property: "backgroundColor",
      },
    };
    const res = system(config);
    expect(res.backgroundColor({ backgroundColor: "red" })).toBe("red");
    expect(res.backgroundColor({ bg: "blue" })).toBe("blue");
  });
});
