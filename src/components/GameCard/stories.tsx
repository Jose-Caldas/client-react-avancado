import { Story, Meta } from "@storybook/react/types-6-0";
import { CartContextData } from "../../hooks/use-cart";
import GameCard, { GameCardProps } from "../GameCard";

export default {
    title: "GameCard",
    component: GameCard,
    args: {
        slug: "population-zero",
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x140",
        price: 240,
        promotionalPrice: 200,
    },
    argTypes: {
        onFav: {
            action: "Clicked",
        },
        ribbon: {
            type: "string",
        },
    },

    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
    <div style={{ width: "30rem" }}>
        <GameCard {...args} />
    </div>
);
export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
    <div style={{ width: "30rem" }}>
        <GameCard {...args} />
    </div>
);

IsInCart.args = {
    isInCart: () => true,
};

export const WithRibbon: Story<GameCardProps> = (args) => (
    <div style={{ width: "30rem" }}>
        <GameCard {...args} />
    </div>
);

WithRibbon.args = {
    ribbon: "20% OFF",
    ribbonSize: "small",
    ribbonColor: "primary",
};
