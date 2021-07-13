import { ReactNode } from "react";
import * as S from "./styles";
import Logo from "../../components/Logo";
import Heading from "../../components/Heading";
import Link from "next/link";

export type AuthProps = {
    title: string;
    children: ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
    <S.Wrapper>
        <S.BannerBlock>
            <S.BannerContent>
                <Link href="/">
                    <a>
                        <Logo id="banner" />
                    </a>
                </Link>
                <div>
                    <Heading size="huge">
                        All your favorite games in one place
                    </Heading>
                    <S.Subtitle>
                        <strong>WON</strong> is the best and most complete
                        gaming platform.
                    </S.Subtitle>
                </div>
                <S.Footer>
                    Won Games 2021 © Todos os Direitos Reservados
                </S.Footer>
            </S.BannerContent>
        </S.BannerBlock>

        <S.Content>
            <S.ContentWrapper>
                <Link href="/">
                    <a>
                        <Logo id="content" color="black" size="large" />
                    </a>
                </Link>
                <Heading lineLeft lineColor="secondary" color="black">
                    {title}
                </Heading>
                {children}
            </S.ContentWrapper>
        </S.Content>
    </S.Wrapper>
);

export default Auth;