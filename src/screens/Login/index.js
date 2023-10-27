import { Container, Form, Image, Input, Main, Title } from "./styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { useState } from "react";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Main>
        <Logo />
        <Title>Login</Title>
        <Form>
          <Input
            placeholder="Nome"
            placeholderTextColor="#191a1c"
            onChangeText={setEmail}
            value={name}
          />
          <Input
            placeholder="Email"
            placeholderTextColor="#191a1c"
            onChangeText={setEmail}
            value={email}
          />
        </Form>
      </Main>
      <Button
        title="Continuar"
        onPress={() => navigation.navigate("Meetings")}
      />
    </Container>
  );
}
