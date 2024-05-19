import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    title1: {
        fontFamily: 'OpenSans', 
        fontSize: scaleFontSize(26),
        lineHeight: scaleFontSize(29),
        fontWeight: '800'
    },

    title2: {
        fontFamily: 'OpenSans', 
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(22),
        fontWeight: '700'
    },

    title3: {
        fontFamily: 'OpenSans', 
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        fontWeight: '700',
        color: '#156CF7'
    },
});


export default style;