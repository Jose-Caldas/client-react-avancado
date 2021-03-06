import { fireEvent, screen } from "@testing-library/react";
import "../../../.jest/match-media-mock";
import "jest-styled-components";
import { renderWithTheme } from "../../utils/tests/helpers";
import items from "./mock";

import Gallery from ".";

describe("<Gallery />", () => {
    it("should render thumbnails as buttons", () => {
        renderWithTheme(<Gallery items={items.slice(0, 2)} />);

        expect(
            screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
        ).toHaveAttribute("src", items[0].src);

        expect(
            screen.getByRole("button", { name: /Thumb - Gallery Image 2/i })
        ).toHaveAttribute("src", items[1].src);
    });

    it("should handle open modal", () => {
        renderWithTheme(<Gallery items={items.slice(0, 2)} />);
        //selecionar o modal
        const modal = screen.getByLabelText("modal");

        // verificar se a modal está escondido (opacity:0)
        expect(modal.getAttribute("aria-hidden")).toBe("true");
        expect(modal).toHaveStyle({ opacity: 0 });

        // clicar no botão de abrir a modal e verificar se abriu
        fireEvent.click(
            screen.getByRole("button", { name: /Thumb - Gallery Image 2/i })
        );
        expect(modal.getAttribute("aria-hidden")).toBe("false");
        expect(modal).toHaveStyle({ opacity: 1 });
    });

    it("should handle close modal when overlay or button clicked", () => {
        renderWithTheme(<Gallery items={items.slice(0, 2)} />);

        // selecionar o nosso modal
        const modal = screen.getByLabelText("modal");

        // clicar no botão de abrir o modal e verificar se ele abriu
        fireEvent.click(
            screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
        );

        // clicar para fechar o modal
        fireEvent.click(screen.getByRole("button", { name: /close modal/i }));

        expect(modal.getAttribute("aria-hidden")).toBe("true");
        expect(modal).toHaveStyle({ opacity: 0 });
    });

    it("should handle close modal when ESC button is pressed", () => {
        const { container } = renderWithTheme(
            <Gallery items={items.slice(0, 2)} />
        );

        // selecionar o nosso modal
        const modal = screen.getByLabelText("modal");

        // clicar no botão de abrir o modal e verificar se ele abriu
        fireEvent.click(
            screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
        );

        // clicar para fechar o modal
        fireEvent.keyUp(container, { key: "Escape" });

        expect(modal.getAttribute("aria-hidden")).toBe("true");
        expect(modal).toHaveStyle({ opacity: 0 });
    });

    it("should open modal with selected image", async () => {
        renderWithTheme(<Gallery items={items.slice(0, 2)} />);

        // clicar no thumbnail
        fireEvent.click(
            screen.getByRole("button", { name: /Thumb - Gallery Image 2/i })
        );
        // verificar se a imagem da thumbnail seja aberta
        const img = await screen.findByRole("img", {
            name: /Gallery Image 2/i,
        });
        expect(img.parentElement?.parentElement).toHaveClass("slick-active");
    });
});
