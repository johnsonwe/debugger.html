// @flow
import { getFramework } from "../frameworks";
import { getSource, getOriginalSource } from "./helpers";
import { setSource } from "../sources";

describe("Parser.frameworks", () => {
  it("is undefined when no framework", () => {
    const source = getOriginalSource("frameworks/plainJavascript");
    setSource(source);
    expect(getFramework(source.id)).toBeUndefined();
  });

  // React

  it("recognizes ES6 React component", () => {
    const source = getOriginalSource("frameworks/reactComponent");
    setSource(source);
    expect(getFramework(source.id)).toBe("React");
  });

  it("recognizes ES5 React component", () => {
    const source = getSource("frameworks/reactComponentEs5");
    setSource(source);
    expect(getFramework(source.id)).toBe("React");
  });

  // Angular

  it("recognizes Angular 1 module", () => {
    const source = getOriginalSource("frameworks/angular1Module");
    setSource(source);
    expect(getFramework(source.id)).toBe("Angular");
  });

  // Vue

  it("recognizes declarative Vue file", () => {
    const source = getOriginalSource("frameworks/vueFileDeclarative");
    setSource(source);
    expect(getFramework(source.id)).toBe("Vue");
  });

  it("recognizes component Vue file", () => {
    const source = getOriginalSource("frameworks/vueFileComponent");
    setSource(source);
    expect(getFramework(source.id)).toBe("Vue");
  });
});
