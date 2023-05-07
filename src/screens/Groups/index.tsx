import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/HighLigth";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {

  const [groups, setGroups] = useState(['Galera do Playstation', 'Galera do Xbox', 'Galera do PC', 'Galera da Nintendo'])


  return (
    <Container>
      <Header showBackButton/>
      <Highlight title={"Turmas"} subTitle={"Jogue com a sua turma"} />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
      />

    <Button
      title="Cadastrar turma"
      onPress={() => {}}
    />
    </Container>
  );
}
