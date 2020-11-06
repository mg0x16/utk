import { createCSSDeclaration, createCSSRule } from "./css";

describe("CSS Generation", () => {
  test("create css declaration", () => {
    const res = createCSSDeclaration("color", "red");
    expect(res).toBe("color:red");
  });

  test("create css rule", () => {
    const res = createCSSRule({
      selector: "myclass",
      declarations: ["color:blue", "font-size:18px"],
    });
    expect(res).toBe(".myclass{color:blue;font-size:18px}");
  });
});
