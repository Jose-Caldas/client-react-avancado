import { render, screen, fireEvent } from "../../utils/test-utils";

import "jest-styled-components";

import GameCard from ".";
import theme from "../../styles/theme";

const props = {
    id: "1",
    slug: "population-zero",
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: 240,
};

describe("<GameCard />", () => {
    it("should render correctly", () => {
        render(<GameCard {...props} />);

        expect(
            screen.getByRole("heading", { name: props.title })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: props.developer })
        ).toBeInTheDocument();

        expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
            "src",
            props.img
        );
        expect(screen.getByRole("link", { name: props.title })).toHaveAttribute(
            "href",
            `/game/${props.slug}`
        );

        expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
    });
    it("should render price in label", () => {
        render(<GameCard {...props} />);

        const price = screen.getByText("$240.00");

        expect(price).not.toHaveStyle({ textDecoration: "line-through" });
        expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
    });
    it("should render a line-through in price when promotional", () => {
        render(<GameCard {...props} promotionalPrice={15} />);

        expect(screen.getByText("$240.00")).toHaveStyle({
            textDecoration: "line-through",
        });

        expect(screen.getByText("$15.00")).not.toHaveStyle({
            textDecoration: "line-through",
        });
    });
    it("should render a filled favorite icon when favorite is true", () => {
        render(<GameCard {...props} favorite />);

        expect(
            screen.getByLabelText(/remove from wishlist/i)
        ).toBeInTheDocument();
    });
    it("should call onFav method when favorite is clicked", () => {
        const onFav = jest.fn();
        render(<GameCard {...props} favorite onFav={onFav} />);

        fireEvent.click(screen.getAllByRole("button")[0]);
        expect(onFav).toBeCalled();
    });
    it("should render Ribbon", () => {
        render(
            <GameCard
                {...props}
                ribbon="My Ribbon"
                ribbonColor="secondary"
                ribbonSize="small"
            />
        );
        const ribbon = screen.getByText(/my ribbon/i);

        expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" });
        expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });
        expect(ribbon).toBeInTheDocument();
    });
});
