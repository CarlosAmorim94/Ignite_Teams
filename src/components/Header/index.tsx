import { BackButton, BackIcon, Container, Logo } from "./styles";
import LogoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
}

export const Header = ({showBackButton = false}: Props) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg}/>
    </Container>
  );
};
