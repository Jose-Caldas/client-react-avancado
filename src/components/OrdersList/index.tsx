import Empty from "../Empty.tsx";
import GameItem, { GameItemProps } from "../GameItem";
import Heading from "../Heading";
import * as S from "./styles";

export type OrdersListProps = {
    items?: GameItemProps[];
};

const OrdersList = ({ items = [] }: OrdersListProps) => (
    <S.Wrapper>
        <Heading lineBottom lineColor="primary" size="small" color="black">
            My orders
        </Heading>
        {items.length >= 1 ? (
            items.map((item) => <GameItem key={item.downloadLink} {...item} />)
        ) : (
            <Empty
                title="You have no orders yet"
                description="Go back to the home and explore great games and offers"
                hasLink
            />
        )}
    </S.Wrapper>
);

export default OrdersList;
