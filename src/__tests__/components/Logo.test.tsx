import "@testing-library/jest-dom";
import "jest-styled-components";
import { Logo } from "@/components";
import { render } from "@testing-library/react";
import { pxToRem } from "@/utils";
import { Theme } from "@/types";
import { themeList } from "@/resources/themesList";
import { ThemeProvider } from "styled-components";

describe("Logo", () => {
  const renderComponent = (theme: Theme, width?: number, height?: number) =>
    render(
      <ThemeProvider theme={theme}>
        <Logo width={width ?? 32} height={height ?? 32} />
      </ThemeProvider>
    );

  themeList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it("should apply the correct background image", () => {
        const { container } = renderComponent(theme);
        expect(container.firstChild).toHaveStyleRule(
          "background-image",
          `url(/${theme.appLogo}`
        );
      });
      it("should apply the correct height and width", () => {
        const { container } = renderComponent(theme, 40, 40);
        expect(container.firstChild).toHaveStyleRule("height", pxToRem(40));
        expect(container.firstChild).toHaveStyleRule("width", pxToRem(40));
      });
    });
  });
});
