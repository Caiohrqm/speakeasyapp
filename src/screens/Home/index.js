import { Background, Box, Container } from "./styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

export default function Home({ navigation }) {
  return (
    <Background>
      <Box />
      <Container>
        <Logo showSub={true} />
        <Button title="Testar" onPress={() => navigation.navigate("Login")} />
      </Container>
    </Background>
  );
}
