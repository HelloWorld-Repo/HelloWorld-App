import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

const style = StyleSheet.create({

    titleDecorated: theme => ({
        color: theme.colors.primary,
        fontFamily: fonts.titleSolidRegular
    }),

    title: theme => ({
        color: theme.colors.secondary,
        fontFamily: fonts.sampleText
    }),

    container: {
        alignItems: "center",
        marginTop: '100px'
    }

});

export default style;