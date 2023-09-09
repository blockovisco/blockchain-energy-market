import React, {FunctionComponent} from "react"
import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"
import { BigText, Container, SmallText } from "../shared/shared";
import { colors } from "../shared/colors";
import { ScrollView } from "react-native";

const Home = () => {
    return (
        <ScrollView>
            <Container>
                <BigText>Blockchain Energy Market</BigText>
                <SmallText>     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a libero luctus erat facilisis aliquam vitae id quam. Proin finibus lectus nisl, vitae tincidunt libero sodales nec. Aliquam at feugiat mauris. Cras augue ex, ornare a vehicula eu, gravida ut sem. Donec hendrerit dolor ac nisl eleifend consequat. Phasellus euismod sapien nulla, sed egestas sem efficitur rhoncus. Pellentesque velit nisi, fermentum sit amet velit eget, malesuada tristique ligula. Donec lectus dolor, vestibulum nec ante mattis, vehicula interdum sapien.</SmallText>
                <SmallText>     Fusce sodales justo at magna dictum ultrices. Nunc sed justo faucibus, tincidunt dolor vitae, tristique ante. Aenean efficitur, lorem nec mattis aliquam, felis orci pharetra nisi, eu euismod metus elit vitae enim. Phasellus felis ipsum, mattis a feugiat id, gravida vitae ipsum. Maecenas finibus lectus tellus, a mattis mi elementum sed. Integer ullamcorper ullamcorper ullamcorper. In et mi feugiat sem sodales feugiat non eu erat. Nam eget purus neque. Morbi in augue sit amet ipsum vehicula maximus aliquet finibus risus. Nullam ornare, erat at luctus molestie, ipsum elit posuere justo, tempus sodales arcu purus vel lacus. Fusce maximus tortor eget tortor suscipit, sit amet hendrerit est condimentum.</SmallText>
                <SmallText>     Nunc porttitor consequat sem, et porttitor orci ultricies sed. Vivamus sed viverra ex. Pellentesque arcu ligula, auctor vitae condimentum nec, sollicitudin sit amet turpis. In at nisl ut lacus ornare commodo et et tortor. Vivamus iaculis malesuada nulla. Sed non lorem libero. Etiam mi est, facilisis id nisi in, convallis vestibulum risus. Duis fringilla congue vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi iaculis a lectus ut fringilla. Fusce odio augue, suscipit ac lectus sit amet, imperdiet commodo enim. Mauris ipsum tortor, bibendum eu lacus in, porttitor semper nulla. Nulla facilisi.</SmallText>
            </Container>
        </ScrollView>
    );
};

export default Home;