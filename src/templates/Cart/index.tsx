import CartList, { CartListProps } from "../../components/CartList";
import { Container } from "../../components/Container";
import { Divider } from "../../components/Divider";
import { GameCardProps } from "../../components/GameCard";
import Heading from "../../components/Heading";
import { HighlightProps } from "../../components/Highlight";
import PaymentOptions, {
    PaymentOptionsProps,
} from "../../components/PaymentOptions";
import Showcase from "../../components/Showcase";
import Base from "../Base";
import * as S from "./styles";

export type CartTemplateProps = {
    recommendedGames: GameCardProps[];
    recommendedHighlight: HighlightProps;
    recommendedTitle: string;
} & CartListProps &
    Pick<PaymentOptionsProps, "cards">;

const Cart = ({
    recommendedGames,
    recommendedHighlight,
    recommendedTitle,

    cards,
}: CartTemplateProps) => {
    const handlePayment = () => {
        ({});
    };
    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="secondary">
                    My cart
                </Heading>

                <S.Content>
                    <CartList />
                    <PaymentOptions
                        cards={cards}
                        handlePayment={handlePayment}
                    />
                </S.Content>

                <Divider />
            </Container>

            <Showcase
                title={recommendedTitle}
                games={recommendedGames}
                highlight={recommendedHighlight}
            />
        </Base>
    );
};

export default Cart;
