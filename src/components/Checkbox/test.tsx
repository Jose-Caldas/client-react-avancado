import { screen, waitFor } from "@testing-library/react";
import "jest-styled-components";

import Checkbox from ".";
import theme from "../../styles/theme";
import { renderWithTheme } from "../../utils/tests/helpers";

import userEvent from "@testing-library/user-event";

describe("<Checkbox/>", () => {
  it("should render input and a label", () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    //input apartir do papel/Role
    expect(screen.getByRole("checkbox")).toBeInTheDocument();

    //input apartir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    //label apartir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check");
  });

  it("should render without label", () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText("checkbox")).not.toBeInTheDocument();
  });

  it("should render with black label", () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black,
    });
  });

  it("should dispatch onCheck when status change", async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
  });
});
