import React, {FunctionComponent, useEffect, useState} from "react"
import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"
import { BigText, Container, SmallText } from "../shared/shared";
import { colors } from "../shared/colors";
import { ScrollView, View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Circle from "../shared/Circle";
import { Text } from "@rneui/base";
import { Icon } from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ApiRequests} from "../requests/ApiRequests";


interface circleProps {
    size: number,
    color: string,
    position?: any,
    top?: number,
    right?: number,
}

interface textProps {
    color?: string
}

const sizeOfBigCircle: number = 250;

const Home = () => {

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    // data

    const [accountBalance, setAccountBalance] = useState(0.0)

    const onChange = (event: any, selectedDate: Date | undefined) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
        setDate(selectedDate);
        }
    };

    /* DATA FETCHING FUNCTIONS ------------------------------------------------------------*/

    useEffect(() => {
        getAccountBalance().then(r => r)
    })

    const getAccountBalance = async () => {
        await ApiRequests.getAccountBalance().then((response) => {
            let balance = response.data;
            setAccountBalance(balance);
        })
    }

    return (
        <Container>
            <SafeAreaView>
                <View style={styles({
                    size: sizeOfBigCircle, 
                    color: colors.secondary, 
                    position: 'relative'}).circle}>
                        <Text style={textStyle({}).title}>Bilans</Text>
                        <Text style={textStyle({}).smallText}>Stan konta:</Text>
                        <View style={styles({size: sizeOfBigCircle*0.7, color: colors.primary}).roundedField}>
                            <Text style={textStyle({color: colors.white}).colored}> {accountBalance} </Text>
                        </View>
                        <Text style={textStyle({}).smallText}>Produkcja/ zużycie energii:</Text>
                        <View style={styles({size: sizeOfBigCircle*0.7, color: colors.primary}).roundedField}>
                            <Text style={textStyle({color: 'green'}).colored}>+12kW</Text>
                            <Text style={textStyle({color: 'red'}).colored}>-12kW</Text>
                        </View>
                        <Text style={textStyle({}).smallText}>Bilans dnia:</Text>
                        <View style={styles({size: sizeOfBigCircle*0.7, color: colors.primary}).roundedField}>
                            <Text style={textStyle({color: 'green'}).colored}>+12 B</Text>
                            <Text style={textStyle({color: 'red'}).colored}>-12 B</Text>
                        </View>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles({
                        size: sizeOfBigCircle*0.4, 
                        color: colors.blue, 
                        position: 'absolute',
                        top: -sizeOfBigCircle*0.2,
                        right: sizeOfBigCircle*0.7}).circle}>
                            <Icon
                                name='calendar-today'
                                color={colors.white}
                                size={70}
                            />
                            {showDatePicker && (
                            <DateTimePicker
                            value={date}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            />
                            )}
                        </TouchableOpacity>
                        <View style={styles({
                        size: sizeOfBigCircle*0.6, 
                        color: colors.lightblue, 
                        position: 'absolute',
                        top: -sizeOfBigCircle*0.38,
                        right: -sizeOfBigCircle*0.25}).circle}>
                            <View style={styles({
                                size: sizeOfBigCircle*0.4, 
                                color: colors.secondary}).roundedSquare}>
                                <Text style={textStyle({}).date}>{date.getDate().toString().padStart(2, '0')}.{(date.getMonth() + 1).toString().padStart(2, '0')}</Text>
                                <Text style={textStyle({}).date}>{date.getFullYear()}</Text>
                            </View>
                        </View>
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
        elevation: 10,
        justifyContent: 'center'
    },
    roundedSquare: {
        width: props.size,
        height: props.size,
        borderRadius: props.size / 4,
        backgroundColor: props.color,
        position: 'relative',
        elevation: 10,
        justifyContent: 'center',
        alignSelf:'center'
    },
    roundedField: {
        width: props.size,
        borderRadius: props.size / 2,
        backgroundColor: props.color,
        alignSelf:'center',
        flexDirection: 'row'
    }
  });
const textStyle = (props: textProps) => StyleSheet.create({
    title: {
        fontSize: 30,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold'
        // marginTop: sizeOfBigCircle*0.1
    },
    date: {
        fontSize: 35,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
        margin: -5
    },
    smallText: {
        fontSize: 13,
        color: colors.white,
        textAlign: 'center'
    },
    colored: {
        fontSize: 20,
        color: props.color,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})

export default Home;