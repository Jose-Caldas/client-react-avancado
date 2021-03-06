import { Story, Meta } from "@storybook/react/types-6-0";
import Ribbon, { RibbonProps } from "../Ribbon";

export default {
  title: "Ribbon",
  component: Ribbon,
  args: {
    children: "Best Seller",
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
} as Meta;

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      maxWidth: "40rem",
      height: "25rem",
      position: "relative",
      background: "#888",
    }}
  >
    <Ribbon {...args} />
  </div>
);
