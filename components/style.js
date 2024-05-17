import { StyleSheet } from "react-native";
import { scaleFontSize } from "../assets/styles/scaling";

const style = StyleSheet.create({
    title1: {
        fontFamily: 'OpenSans', 
        fontSize: scaleFontSize(24),
        lineHeight: scaleFontSize(29),
        fontWeight: '600'
    },

    title2: {
        fontFamily: 'OpenSans', 
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(22),
        fontWeight: '500'
    },

    title3: {
        fontFamily: 'OpenSans', 
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        fontWeight: '400'
    },
});


export default style;