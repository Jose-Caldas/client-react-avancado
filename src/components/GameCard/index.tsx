import {
  Wrapper,
  ImageBox,
  GameInfo,
  Title,
  Developer,
  FavButton,
  BuyBox,
  Price,
  Content,
} from "./styles";
import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite,
} from "@styled-icons/material-outlined";
import Button from "../Button";
import { ReactNode } from "react";
import Ribbon, { RibbonColors, RibbonSizes } from "../Ribbon";

export type GameCardProps = {
  img: string;
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};
const GameCard = ({
  img,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "small",
}: GameCardProps) => (
  <Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <ImageBox>
      <img src={img} alt={title} />
    </ImageBox>
    <Content>
      <GameInfo>
        <Title>{title}</Title>
        <Developer>{developer}</Developer>
      </GameInfo>
      <FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </FavButton>
      <BuyBox>
        {!!promotionalPrice && <Price isPromotional>{price}</Price>}
        <Price>{promotionalPrice || price}</Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </BuyBox>
    </Content>
  </Wrapper>
);

export default GameCard;