import React, {FunctionComponent} from "react"
import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"
import { BigText, Container, SmallText } from "../shared/shared";
import { colors } from "../shared/colors";
import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Circle from "../shared/Circle";
import { Text } from "@rneui/base";

interface circleProps {
    size: number,
    color: string,
    position: any,
    top?: number,
    right?: number,
}

const sizeOfBigCircle: number = 250;

const Home = () => {
    return (
        <Container>
            <SafeAreaView>
                <View style={styles({
                    size: sizeOfBigCircle, 
                    color: colors.secondary, 
                    position: 'relative'}).circle}>
                        <Text style={textStyle.title}>Bilans</Text>
                        <View style={styles({
                        size: sizeOfBigCircle*0.6, 
                        color: colors.lightblue, 
                        position: 'absolute',
                        top: -sizeOfBigCircle*0.38,
                        right: -sizeOfBigCircle*0.25}).circle}></View>
                        <View style={styles({
                        size: sizeOfBigCircle*0.4, 
                        color: colors.blue, 
                        position: 'absolute',
                        top: -sizeOfBigCircle*0.2,
                        right: sizeOfBigCircle*0.7}).circle}></View>
                </View>
            </SafeAreaView>
        </Container>
    );
};

const styles = (props: circleProps) => StyleSheet.create({
    circle: {
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        backgroundColor: props.color,
        position: props.position,
        top: props.top,
        right: props.right,
        elevation: 10
    },
  });
const textStyle = StyleSheet.create({
    title: {
        fontSize: 30,
        color: colors.white,
        textAlign: 'center',
        marginTop: sizeOfBigCircle*0.1
    }
})
export default Home;