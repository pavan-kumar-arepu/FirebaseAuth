import { StyleSheet } from "react-native";
import { scaleFontSize } from "../assets/styles/scaling";

const style = StyleSheet.create({
    title1: {
        fontFamily: 'OpenSans', 
        fontSize: scaleFontSize(30),
        lineHeight: scaleFontSize(29),
        fontWeight: 600
    },
})

export default style;