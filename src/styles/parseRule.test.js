import parseRule from "./parseRule";

describe("Parsing Js defined styles", () => {
  test("parse simple rule", () => {
    const r = {
      color: "red",
      "background-color": "blue",
    };
    const res = parseRule({ rule: r });
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      child: "",
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
      },
    });
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      child: "",
      declarations: [
        {
          property: "font-size",
          value: "14px",
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
      child: "",
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
        "&:hover": {
          color: "red",
        },
      },
    });
    expect(res.length).toBe(1);
    expect(res[0]).toMatchObject({
      child: ":hover",
      declarations: [
        {
          property: "color",
          value: "red",
        },
      ],
    });
  });
});
