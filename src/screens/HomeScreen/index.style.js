import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
    title: ({
        color: theme.colors.secondary,
        fontSize: theme.fonts.size.title,
        fontFamily: theme.fonts.sampleText,
        lineHeight: theme.fonts.size.title + theme.spacing(2)
    }),
    titleDecorated: ({
        color: theme.colors.primary,
        fontFamily: theme.fonts.titleSolidRegular,
        fontSize: theme.fonts.size.title,
        lineHeight: theme.fonts.size.title + theme.spacing(2),
    }),
    container: ({
        alignItems: "center",
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(20),
        justifyContent: "space-between",
    }),
    introQuestion: ({
        fontFamily: theme.fonts.sampleText,
        fontSize: theme.fonts.size.subtitle,
        lineHeight: theme.fonts.size.subtitle,
        marginBottom: theme.spacing(9)
    }),
    firstContainer: ({
        alignItems: "center",
    }),
    secondContainer: ({
        alignItems: "center",
    })
});

export default styles;