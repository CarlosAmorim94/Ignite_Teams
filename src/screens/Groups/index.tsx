import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/HighLigth";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

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
      />


    </Container>
  );
}
