import styled, { css, DefaultTheme } from "styled-components";
import { TextFieldProps } from "./index";

type IconPositionProps = Pick<TextFieldProps, "iconPosition">;

type WrapperProps = Pick<TextFieldProps, "disabled"> & { error?: boolean };

const wrapperModifiers = {
    disabled: (theme: DefaultTheme) => css`
        ${Label},
        ${Input},
    ${Icon} {
            cursor: not-allowed;
            color: ${theme.colors.gray};

            &::placeholder {
                color: currentColor;
            }
        }
    `,

    error: (theme: DefaultTheme) => css`
        ${InputWrapper} {
            border-color: ${theme.colors.red};
        }

        ${Icon},
        ${Label} {
            color: ${theme.colors.red};
        }
    `,
};

export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, disabled, error }) => css`
        ${disabled && wrapperModifiers.disabled(theme)};
        ${error && wrapperModifiers.error(theme)};
    `}
`;

export const Error = styled.div<WrapperProps>`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.xsmall};
        color: ${theme.colors.red};
    `}
`;

export const Icon = styled.div<IconPositionProps>`
    ${({ theme, iconPosition }) => css`
        display: block;
        width: 2.4rem;
        color: ${theme.colors.gray};

        order: ${iconPosition === "right" ? 1 : 0};

        svg {
            width: 100%;
        }
    `}
`;

export const Label = styled.label`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.black};

        cursor: pointer;
    `}
`;

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;

        justify-content: center;
        background: ${theme.colors.lightGray};
        border-radius: 0.2rem;
        padding: ${theme.spacings.xxsmall};
        border: 0.2rem solid;
        border-color: ${theme.colors.lightGray};

        margin-top: ${theme.spacings.xxsmall};

        &:focus-within {
            box-shadow: 0 0 0.5rem ${theme.colors.primary};
        }
    `}
`;

export const Input = styled.input<IconPositionProps>`
    ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

  `}
`;
