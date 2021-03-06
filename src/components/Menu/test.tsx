import { fireEvent, screen } from "@testing-library/react";
import "jest-styled-components";

import Menu from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Menu/>", () => {
    it("should render the menu", () => {
        renderWithTheme(<Menu />);

        expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument();
        expect(
            screen.getByRole("img", { name: /won games/i })
        ).toBeInTheDocument();
    });
    it("should handle open/close mobile menu", () => {
        renderWithTheme(<Menu />);
        //selecionar o menu
        const fullMenuElement = screen.getByRole("navigation", {
            hidden: true,
        });

        // verificar se o menu está escondido (opacity:0)
        expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
        expect(fullMenuElement).toHaveStyle({ opacity: 0 });

        // clicar no botão de abrir o menu e verificar se abriu
        fireEvent.click(screen.getByLabelText(/open menu/i));
        expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false");
        expect(fullMenuElement).toHaveStyle({ opacity: 1 });

        // clicar no botão de fechar o menu e verificar se fechou
        fireEvent.click(screen.getByLabelText(/close menu/i));
        expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
        expect(fullMenuElement).toHaveStyle({ opacity: 0 });
    });
    it("should show register box when logged out", () => {
        renderWithTheme(<Menu />);

        // expect(screen.getByText(/sign in/i)).toBeInTheDocument();
        expect(screen.getByText(/sign up/i)).toBeInTheDocument();

        expect(screen.queryByText(/My account/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();
    });
    // it("should show whishlist in account when logged in", () => {
    //     renderWithTheme(<Menu />);

    //     expect(screen.getByText(/My profile/i)).toBeInTheDocument();
    //     expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();

    //     // expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    //     expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
    // });
});
