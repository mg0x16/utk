import parseRule from "./parseRule";
import { getPreset } from "./preset";

const mediaQueries = getPreset().breakpoints.map(
  p => `@media (min-width: ${p}px)`,
);

describe("Parsing Js defined styles", () => {
  test("parse empty rule", () => {
    const res = parseRule({ rule: {} });
    expect(res).toHaveLength(0);
  });

  test("parse simple rule", () => {
    const r = {
      color: "red",
      "background-color": "blue",
    };
    const res = parseRule({ rule: r });
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      declarations: [
        { property: "color", value: "red" },
        { property: "background-color", value: "blue" },
      ],
    });
  });

  test("parse camelCase property", () => {
    const res = parseRule({
      rule: {
        fontSize: "14px",
        mozBoxShadow: "5px 10px",
      },
    });
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      declarations: [
        {
          property: "font-size",
          value: "14px",
        },
        {
          property: "-moz-box-shadow",
          value: "5px 10px",
        },
      ],
    });
  });

  test("parse numeric type for values", () => {
    const res = parseRule({
      rule: {
        padding: 14,
      },
    });
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      declarations: [
        {
          property: "padding",
          value: "14px",
        },
      ],
    });
  });

  test("parse numeric fraction as percentage values", () => {
    const res = parseRule({
      rule: {
        width: 1 / 2,
      },
    });
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      declarations: [
        {
          property: "width",
          value: "50%",
        },
      ],
    });
  });

  test("parse rule with pseudo-classes nested", () => {
    const res = parseRule({
      rule: {
        color: "green",
        "&:hover": {
          color: "red",
        },
      },
    });
    expect(res.length).toBe(2);
    expect(res[0]).toMatchObject({
      declarations: [
        {
          property: "color",
          value: "green",
        },
      ],
    });

    expect(res[1]).toMatchObject({
      child: ":hover",
      declarations: [
        {
          property: "color",
          value: "red",
        },
      ],
    });
  });

  test("parse nested pseudo-classes rule only", () => {
    const res = parseRule({
      rule: {
        "&::after": {
          color: "red",
        },
      },
    });
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      child: "::after",
      declarations: [
        {
          property: "color",
          value: "red",
        },
      ],
    });
  });

  test("parse nested media-query rule", () => {
    const res = parseRule({
      rule: {
        "@media (min-width: 40em)": {
          width: "60%",
        },
      },
    });

    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      media: "@media (min-width: 40em)",
      child: "",
      declarations: [
        {
          property: "width",
          value: "60%",
        },
      ],
    });
  });

  test("parse nested media-query with nested pseudo-classes rule", () => {
    const res = parseRule({
      rule: {
        "@media (min-width: 40em)": {
          width: "60%",
          ":hover": {
            width: "90%",
          },
        },
      },
    });

    expect(res.length).toBe(2);
    expect(res[0]).toMatchObject({
      media: "@media (min-width: 40em)",
      child: "",
      declarations: [
        {
          property: "width",
          value: "60%",
        },
      ],
    });
    expect(res[1]).toMatchObject({
      media: "@media (min-width: 40em)",
      child: ":hover",
      declarations: [
        {
          property: "width",
          value: "90%",
        },
      ],
    });
  });

  test("parse responsive array inside pseudo-classes rule", () => {
    const res = parseRule({
      rule: {
        ":hover": {
          width: ["60%", "90%", "100%"],
        },
      },
      mediaQueries,
    });

    expect(res.length).toBe(3);

    expect(res[0].media).toEqual(expect.stringContaining("@media"));
    expect(res[1].media).toEqual(expect.stringContaining("@media"));
    expect(res[2].media).toEqual(expect.stringContaining("@media"));

    expect(res[0].child).toBe(":hover");
    expect(res[1].child).toBe(":hover");
    expect(res[2].child).toBe(":hover");

    expect(res[0].declarations[0]).toMatchObject({ value: "60%" });
    expect(res[1].declarations[0]).toMatchObject({ value: "90%" });
    expect(res[2].declarations[0]).toMatchObject({ value: "100%" });
  });

  test("parse dynamic values (variable sent as props)", () => {
    const res = parseRule({
      rule: {
        color: ({ c }) => c,
      },
      props: {
        c: "green",
      },
    });

    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      declarations: [
        {
          property: "color",
          value: "green",
        },
      ],
    });
  });

  test("parse array value as responsive values", () => {
    const res = parseRule({
      rule: {
        color: ["red", "green", "blue"],
      },
      mediaQueries,
    });

    expect(res.length).toBe(3);

    expect(res[0].media).toEqual(expect.stringContaining("@media"));
    expect(res[0].declarations[0]).toMatchObject({
      property: "color",
      value: "red",
    });

    expect(res[1].media).toEqual(expect.stringContaining("@media"));
    expect(res[1].declarations[0]).toMatchObject({
      property: "color",
      value: "green",
    });

    expect(res[2].media).toEqual(expect.stringContaining("@media"));
    expect(res[2].declarations[0]).toMatchObject({
      property: "color",
      value: "blue",
    });
  });

  test("parse array value if returned from function as responsive values", () => {
    const res = parseRule({
      rule: {
        color: ({ c }) => c,
      },
      props: { c: ["red", "green", "blue"] },
      mediaQueries,
    });

    expect(res.length).toBe(3);

    expect(res[0].media).toEqual(expect.stringContaining("@media"));
    expect(res[0].declarations[0]).toMatchObject({
      property: "color",
      value: "red",
    });

    expect(res[1].media).toEqual(expect.stringContaining("@media"));
    expect(res[1].declarations[0]).toMatchObject({
      property: "color",
      value: "green",
    });

    expect(res[2].media).toEqual(expect.stringContaining("@media"));
    expect(res[2].declarations[0]).toMatchObject({
      property: "color",
      value: "blue",
    });
  });

  // TODO test pallate
});
