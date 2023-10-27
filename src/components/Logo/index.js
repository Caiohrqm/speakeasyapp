import { Container, Image, Row, Subtitle, Title } from "./styles";

export default function Logo(showSub = false) {
  return (
    <Container>
      <Row>
        <Title>SpeakEasy</Title>
        <Image source={require("../../../assets/icon.png")} />
      </Row>
      {showSub && <Subtitle>Poupe seu tempo, saiba o que foi digo.</Subtitle>}
    </Container>
  );
}
