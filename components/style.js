import { StyleSheet } from "react-native";
import { scaleFontSize } from "../assets/styles/scaling";

const style = StyleSheet.create({
    title1: {
        fontFamily: 'Inter', 
        fontSize: scaleFontSize(24),
        lineHeight: scaleFontSize(29),
        fontWeight: 600
    },
})

export default style;