import { Wrapper, Image, Caption, Subtitle, Title } from "./styles";
import Button from "../Button";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => (
  <Wrapper>
    <Image src={img} role="img" aria-label={title} />
    <Caption>
      <Title>{title}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </Caption>
  </Wrapper>
);

export default Banner;