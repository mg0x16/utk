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

  test("create css pseudo-classes rule", () => {
    const res = createCSSRule({
      child: ":hover",
      selector: "myclass",
      declarations: ["color:blue", "font-size:18px"],
    });
    expect(res).toBe(".myclass:hover{color:blue;font-size:18px}");
  });

  test("create css media-query rule", () => {
    const res = createCSSRule({
      media: "@media (min-width: 40em)",
      selector: "myclass",
      declarations: ["color:green"],
    });
    expect(res).toBe("@media (min-width: 40em){.myclass{color:green}}");
  });

  test("create css media-query with pseudo classes rule", () => {
    const res = createCSSRule({
      child: ":first-child",
      media: "@media (min-width: 40em)",
      selector: "myclass",
      declarations: ["color:green"],
    });
    expect(res).toBe(
      "@media (min-width: 40em){.myclass:first-child{color:green}}",
    );
  });
});
