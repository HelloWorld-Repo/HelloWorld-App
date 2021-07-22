import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
    title: {
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.titleSolidBlack,
        lineHeight: theme.fonts.size.headerTitle,
        fontSize: theme.fonts.size.headerTitle
    },

    titleToLeft: ({
        marginRight: theme.spacing(3)
    }),

    titleToRight: ({
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(-1)
    }),

});

export default styles;