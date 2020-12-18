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
      backgroundColor: ["bg"],
    });
  });

  test("boolean property declaration", () => {
    const config = {
      small: {
        property: "fontSize:14px",
      },
    };
    const res = parseConfig(config);
    expect(res).toMatchObject({
      fontSize: [{ key: "small", value: "14px" }],
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
      backgroundColor: ["bg", "backgroundColor"],
    });
  });

  test("single name for multiple properties", () => {
    const config = {
      c: {
        properties: ["backgroundColor", "color"],
      },
    };

    const res = parseConfig(config);

    expect(res).toMatchObject({
      backgroundColor: ["c"],
      color: ["c"],
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

  test("boolean keys for properties", () => {
    const config = {
      small: {
        property: "fontSize:14px",
      },
    };
    const res = system(config);
    expect(res.fontSize({ small: true })).toBe("14px");
    expect(res.fontSize({ small: false })).toBeNull();
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

  test("single name for multiple properties", () => {
    const config = {
      c: {
        properties: ["backgroundColor", "color"],
      },
    };

    const res = system(config);
    expect(res.backgroundColor({ c: "red" })).toBe("red");
    expect(res.color({ c: "blue" })).toBe("blue");
  });
});
