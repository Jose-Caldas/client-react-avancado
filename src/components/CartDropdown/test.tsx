import { render, screen } from "../../utils/test-utils";

import "jest-styled-components";
import CartDropdown from ".";

import items from "../CartList/mock";
import { CartContextDefaultValues } from "../../hooks/use-cart";

describe("<CartDropdown />", () => {
    beforeEach(() => {
        const cartProviderProps = {
            ...CartContextDefaultValues,
            items,
            quantity: items.length,
            total: "R$ 430,00",
        };
        render(<CartDropdown />, { cartProviderProps });
    });
    it("should render <CartIcon /> and its badge", () => {
        expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
        expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
    });

    it("should render Dropdown content with cart items and total", () => {
        expect(screen.getByText("R$ 430,00")).toBeInTheDocument();
        expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
    });
});
