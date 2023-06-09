import { useState } from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/HighLigth";
import { Input } from "@components/Input";
//import { useNavigation } from "@react-navigation/native";
// import { createGroup } from "@storage/group/createGroup";
// import { AppError } from "@utils/AppError";
// import { Alert } from "react-native";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  //const navigation = useNavigation();

  async function handleNewGroup() {
    // try {
    //   if (group.trim().length === 0) {
    //     return Alert.alert("Novo grupo", "Informe o nome da turma");
    //   }

    //   await createGroup(group);
    //   navigation.navigate("players", { group });

    //   setGroup("");
    // } catch (error) {
    //   if (error instanceof AppError) {
    //     return Alert.alert("Novo grupo", error.message);
    //   } else {
    //     return Alert.alert(
    //       "Novo grupo",
    //       "Não foi possível criar um novo grupo"
    //     );
    //   }
    // }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
