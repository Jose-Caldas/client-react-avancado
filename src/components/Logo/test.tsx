import { screen } from "@testing-library/react";
import "jest-styled-components";

//renderizar o component 'render'
//selecionar o elemento 'screen' (queries) - getByLabel, getByText ...
//expect - assertion - assercão, análise, comparação (neste caso renderizar a logo branca e label Won Games - acessibilidade, teste de tamanho da logo e responsividade)

import Logo from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Logo/>", () => {
  // render logo com id
  it("should render the logo", () => {
    const { container } = renderWithTheme(<Logo id="myLogo" />);

    expect(container.querySelector("#paint_linear_myLogo")).toBeInTheDocument();
  });

  it("should render a white label by default", () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#FAFAFA",
    });
  });
  it("should render a black label when color is passed", () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#030517",
    });
  });
  it("should render a large logo", () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: "20rem",
    });
  });
  it("should render a normal logo when size is default", () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: "11rem",
    });
  });
  it("should render a large logo without text if hideOnMobile", () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      "width",
      "5.8rem",
      {
        media: "(max-width: 768px)",
      }
    );
  });
});
