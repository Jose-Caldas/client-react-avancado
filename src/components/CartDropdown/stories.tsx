import { Story, Meta } from "@storybook/react/types-6-0";
import CartDropdown from "../CartDropdown";

import items from "../CartList/mock";

export default {
    title: "CartDropdown",
    component: CartDropdown,

    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story = (args) => (
    <div
        style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}
    >
        <CartDropdown {...args} />
    </div>
);

Default.args = {
    cartContextValue: {
        items,
        quantity: items.length,
        total: "R$ 430,00",
    },
};

export const Empty: Story = () => (
    <div
        style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}
    >
        <CartDropdown />
    </div>
);
