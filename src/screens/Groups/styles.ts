//import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 24px;
`;
