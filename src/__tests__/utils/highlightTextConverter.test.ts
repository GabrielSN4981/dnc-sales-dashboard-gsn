import { highlightTextConverter } from "../../utils";

describe("highlightTextConverter", () => {
  it("should return the correrct text for 'alert'", () => {
    expect(highlightTextConverter("alert")).toBe(
      "* Meta longe de ser atingida."
    );
  });
  it("should return the correrct text for 'success'", () => {
    expect(highlightTextConverter("success")).toBe(
      "* A meta do mês foi atingida! Parabéns!"
    );
  });
  it("should return the correrct text for 'warning'", () => {
    expect(highlightTextConverter("warning")).toBe(
      "* Falta pouco para atingir a meta, vamos lá!"
    );
  });
  it("should return the correrct text for unknown input", () => {
    expect(highlightTextConverter("un")).toBe(
      "* Sem dados no momento."
    );
  });
});

