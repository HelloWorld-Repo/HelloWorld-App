import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
    headerTitle: {
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.titleSolidBlack,
        lineHeight: theme.fonts.size.headerTitle,
        fontSize: theme.fonts.size.headerTitle
    },

    bigTitle: {
        color: theme.colors.accent,
        textShadowColor: theme.colors.accent,
        textShadowRadius: 2,
        fontFamily: theme.fonts.titleShadow,
        lineHeight: theme.fonts.size.bigLogo,
        fontSize: theme.fonts.size.bigLogo
    },

    invertedTitle: {
        color: theme.colors.accent,
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