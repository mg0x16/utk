import parseRule from "./parseRule";

describe("Parsing Js defined styles", () => {
  test("parse simple rule", () => {
    const r = {
      color: "red",
      "background-color": "blue",
    };
    const res = parseRule({ rule: r });
    expect(res[0]).toMatchObject({ property: "color", value: "red" });
    expect(res[1]).toMatchObject({
      property: "background-color",
      value: "blue",
    });
  });
});
