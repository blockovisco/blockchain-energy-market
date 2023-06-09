import React, {FunctionComponent} from "react"
import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"
import { Container } from "../components/shared";
import { colors } from "../components/colors";

const HomeContainer = styled(Container)`
    background-color: ${colors.secondary};
`;

const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style="light" />
        </HomeContainer>
    );
};

export default Home;