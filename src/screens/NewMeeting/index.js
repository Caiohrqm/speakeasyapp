import { Container, Form, Input, InputField, Main, Title } from "./styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { useState } from "react";

export default function NewMeeting({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <Container>
      <Main>
        <Title>Nova Reunião</Title>
        <Form>
          <Input
            placeholder="Título"
            placeholderTextColor="#191a1c"
            onChangeText={setTitle}
            value={title}
          />
          <InputField
            placeholder="Descrição"
            placeholderTextColor="#191a1c"
            onChangeText={setDescription}
            value={description}
            multiline={true}
          />
        </Form>
      </Main>
      <Button title="Resumir" onPress={() => navigation.navigate("Meetings")} />
    </Container>
  );
}
