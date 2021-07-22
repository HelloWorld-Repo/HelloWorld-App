import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
    title: ({
        color: theme.colors.secondary,
        fontSize: 40,
        fontFamily: fonts.sampleText,
        lineHeight: 50
    }),
    titleDecorated: ({
        color: theme.colors.primary,
        fontFamily: fonts.titleSolidRegular,
        fontSize: 40,
        lineHeight: 50
    }),
    container: ({
        alignItems: "center",
        marginTop: 150,
        marginBottom: 125,
    })
});

export default styles;