import { ReactNode } from "react";
import { Wrapper } from "./styles";

export type LineColors = "primary" | "secondary";

export type HeadingProps = {
  children: ReactNode;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: "small" | "medium";
  lineColor?: LineColors;
};

const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  size = "medium",
  lineColor = "primary",
}: HeadingProps) => (
  <Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </Wrapper>
);

export default Heading;
