import styled from "styled-components/native"
import { colors } from "./colors";
import { Dimensions } from "react-native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.white};
`;

export const SmallText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 500;
`;

export const BigText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: 500;
`;

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;