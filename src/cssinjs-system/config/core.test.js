import { parseConfig, system } from "./core";
import variant from "./variant";
import parseRule from "../parseRule";

describe("Parse system config", () => {
  test("simple property declaration", () => {
    const config = {
      bg: {
        property: "backgroundColor",
      },
    };
    const res = parseConfig(config);
    expect(res).toMatchObject({
      backgroundColor: [{ key: "bg", value: "" }],
    });
  });

  test("default property declaration", () => {
    const config = {
      backgroundColor: true,
    };
    const res = parseConfig(config);
    expect(res).toMatchObject({
      backgroundColor: [{ key: "backgroundColor", value: "" }],
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
      backgroundColor: [
        { key: "bg", value: "" },
        { key: "backgroundColor", value: "" },
      ],
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
      backgroundColor: [{ key: "c", value: "" }],
      color: [{ key: "c", value: "" }],
    });
  });
});

describe("Generate style system", () => {
  test("simple system", () => {
    const config = {
      bg: {
        property: "backgroundColor",
      },
      color: true,
    };
    const res = system(config);
    expect(res.backgroundColor({ bg: "red" })).toBe("red");
    expect(res.color({ color: "blue" })).toBe("blue");
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

  test("boolean property in responsive array", () => {
    const config = {
      small: {
        property: "fontSize:14px",
      },
    };
    const res = system(config);
    expect(res.fontSize({ small: [true, false, true] })).toMatchObject([
      "14px",
      "",
      "14px",
    ]);
  });

  test("properties value with scale", () => {
    const sc = {
      scales: {
        testScale: [4, 6, 10, 20],
      },
    };

    const config = {
      fs: {
        property: "fontSize",
        scale: "testScale",
      },
    };
    const res = system(config, sc);
    sc.scales.testScale.forEach((x, index) => {
      expect(res.fontSize({ fs: index })).toBe(x);
    });
  });

  test("properties value outbound of scale array return original value", () => {
    const sc = {
      scales: {
        testScale: [4, 6, 10, 20],
      },
    };

    const config = {
      fs: {
        property: "fontSize",
        scale: "testScale",
      },
    };
    const res = system(config, sc);
    expect(res.fontSize({ fs: 20 })).toBe(20);
  });

  test("properties with string value ignore scale", () => {
    const sc = {
      scales: {
        testScale: [4, 6, 10, 20],
      },
    };

    const config = {
      m: {
        property: "margin",
        scale: "testScale",
      },
    };
    const res = system(config, sc);
    expect(res.margin({ m: "auto" })).toBe("auto");
  });

  test("properties array value with scale", () => {
    const sc = {
      scales: {
        testScale: [4, 6, 10, 20],
      },
    };

    const config = {
      fs: {
        property: "fontSize",
        scale: "testScale",
      },
    };
    const res = system(config, sc);
    expect(res.fontSize({ fs: [1, "50px", 3, 0, 300] })).toEqual(
      expect.arrayContaining([6, "50px", 20, 4, 300]),
    );
  });

  test("transform function definition", () => {
    const config = {
      bgImage: {
        property: "backgroundImage",
        transform: x => `url(${x})`,
      },
    };
    const res = system(config);
    expect(res.backgroundImage({ bgImage: "http//www.site.com/image" })).toBe(
      "url(http//www.site.com/image)",
    );
  });

  test("transform function definition with responsive array", () => {
    const config = {
      bgImage: {
        property: "backgroundImage",
        transform: x => `url(${x})`,
      },
    };
    const res = system(config);
    expect(
      res.backgroundImage({
        bgImage: [
          "http//www.site.com/image1",
          "http//www.site.com/image2",
          "http//www.site.com/image3",
        ],
      }),
    ).toMatchObject([
      "url(http//www.site.com/image1)",
      "url(http//www.site.com/image2)",
      "url(http//www.site.com/image3)",
    ]);
  });

  test("variants", () => {
    const r = variant({
      primary: {
        backgroundColor: "yellow",
      },
      secondary: {
        backgroundColor: "magenta",
      },
    });

    const res1 = parseRule({ rule: r, props: {} });
    expect(res1.length).toBe(0);

    const res2 = parseRule({ rule: r, props: { variant: "primary" } });
    expect(res2).toMatchObject([
      {
        declarations: [{ property: "background-color", value: "yellow" }],
      },
    ]);
  });
});
