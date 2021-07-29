import { render, screen } from "../../utils/test-utils";

import "jest-styled-components";
import CartList from ".";
import mockItems from "./mock";

describe("<CartList />", () => {
    it("should render the cart list", () => {
        const { container } = render(
            <CartList items={mockItems} total="R$ 430,00" />
        );

        expect(screen.getAllByRole("heading")).toHaveLength(2);
        expect(screen.getByText("R$ 430,00")).toHaveStyle({ color: "#F231A5" });

        expect(container.firstChild).toMatchSnapshot();
    });
    it("should render the button", () => {
        render(<CartList items={mockItems} total="R$ 430,00" hasButton />);

        expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
    });

    it("should render empty if there are no games", () => {
        render(<CartList />);

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
        expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
    });
});
