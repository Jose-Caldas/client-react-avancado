import { useEffect, useState, useRef } from "react";
import { Settings } from "react-slick";
import Slider from "../Slider";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";
import { Close } from "@styled-icons/material-outlined/Close";
import SlickSlider from "react-slick";
import * as S from "./styles";

const commomSettings: Settings = {
    arrows: true,
    infinite: false,
    lazyLoad: "ondemand",
    nextArrow: <ArrowRight aria-label="Next image" />,
    prevArrow: <ArrowLeft aria-label="Previous image" />,
};

const settings: Settings = {
    ...commomSettings,
    slidesToShow: 4,

    responsive: [
        {
            breakpoint: 1375,
            settings: {
                arrows: false,
                slidesToShow: 3.2,
                draggable: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2.2,
                draggable: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2.2,
                draggable: true,
            },
        },
    ],
};

const modalSettings: Settings = {
    ...commomSettings,
    slidesToShow: 1,
};

export type GalleryImageProps = {
    src: string;
    label: string;
};

export type GalleryProps = {
    items: GalleryImageProps[];
};

const Gallery = ({ items }: GalleryProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const slider = useRef<SlickSlider>(null);

    useEffect(() => {
        const handleKeyUp = ({ key }: KeyboardEvent) => {
            key === "Escape" && setIsOpen(false);
        };

        window.addEventListener("keyup", handleKeyUp);
        return () => window.removeEventListener("keyup", handleKeyUp);
    }, []);

    return (
        <S.Wrapper>
            <Slider settings={settings} ref={slider}>
                {items.map((item, index) => (
                    <img
                        role="button"
                        key={`Thumb-${index}`}
                        src={item.src}
                        alt={`Thumb - ${item.label}`}
                        onClick={() => {
                            setIsOpen(true);
                            slider.current!.slickGoTo(index, true);
                        }}
                    />
                ))}
            </Slider>
            <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
                <S.Close
                    role="button"
                    aria-label="close modal"
                    onClick={() => setIsOpen(false)}
                >
                    <Close size={40} />
                </S.Close>
                <S.Content>
                    <Slider settings={modalSettings} ref={slider}>
                        {items.map((item, index) => (
                            <img
                                key={`gallery-${index}`}
                                src={item.src}
                                alt={item.label}
                            />
                        ))}
                    </Slider>
                </S.Content>
            </S.Modal>
        </S.Wrapper>
    );
};

export default Gallery;
