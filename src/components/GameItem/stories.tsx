import { Story, Meta } from "@storybook/react/types-6-0";
import GameItem, { GameItemProps } from "../GameItem";

export default {
    title: "GameItem",
    component: GameItem,
    args: {
        img: "https://source.unsplash.com/user/willianjusten/151x70",
        title: "Red Dead Redemption 2",
        price: "R$ 240,00",
    },
} as Meta;

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />;

export const WithPayment: Story<GameItemProps> = (args) => (
    <GameItem {...args} />
);

WithPayment.args = {
    downloadLink: "https://wongames.com/game/download/323635gfgfg",
};
