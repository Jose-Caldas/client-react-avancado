import { tint } from "polished";
import styled, { css, DefaultTheme } from "styled-components";

export const Wrapper = styled.main`
    ${({ theme }) => css`
        background: ${theme.colors.white};
    `}
`;

export const Body = styled.div`
    ${({ theme }) => css`
        padding: ${theme.spacings.small};
    `}
`;
export const Footer = styled.div`
    ${({ theme }) => css`
        background: ${tint(0.2, theme.colors.lightGray)};
        color: ${theme.colors.black};
        font-weight: ${theme.font.bold};
        padding: ${theme.spacings.small};
        display: flex;
        align-items: center;
    `}
`;
export const CardsList = styled.div`
    display: flex;
    flex-direction: column;
`;

const ItemStyles = (theme: DefaultTheme) => css`
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    color: ${theme.colors.black};
    padding: 0 ${theme.spacings.xxsmall};
    height: 5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const CardItem = styled.label`
    ${({ theme }) => css`
        ${ItemStyles(theme)};
        justify-content: space-between;
        &:not(:last-child) {
            margin-bottom: ${theme.spacings.xxsmall};
        }
    `}
`;
export const CardInfo = styled.span`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            margin-right: ${theme.spacings.xxsmall};
        }
    `}
`;
export const AddCard = styled.div`
    ${({ theme }) => css`
        ${ItemStyles(theme)};
        svg {
            margin-left: ${theme.spacings.xxsmall};
            margin-right: ${theme.spacings.xsmall};
            width: 2.4rem;
        }
    `}
`;
