import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import {StyleSheet} from "react-native";

interface circleProps {
    size: number,
    color: string,
    position: any,
    top?: number,
    right?: number,
}

const Circle = (children: Element[], props: circleProps) => {
    return <View style={styles(props).circle}></View>;
  };

const styles = (props: circleProps) => StyleSheet.create({
    circle: {
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        backgroundColor: props.color,
        position: props.position,
        top: props.top,
        right: props.right
    },
  });

export default Circle