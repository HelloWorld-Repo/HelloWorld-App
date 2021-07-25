import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles/theme";

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    title: ({
        color: theme.colors.secondary,
        fontSize: theme.fonts.size.title,
        fontFamily: theme.fonts.sampleText,
        marginBottom: theme.spacing(2),
        lineHeight: theme.fonts.size.title + theme.spacing(1),
    }),
    titleDecorated: ({
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing(8),
        fontFamily: theme.fonts.titleSolidRegular,
        fontSize: theme.fonts.size.bigLogo,
        lineHeight: theme.fonts.size.bigLogo + theme.spacing(2),
    }),
    container: ({
        alignItems: "center",
        flex: 1,
        height: screenHeight,
        justifyContent: "flex-end",
        paddingBottom: theme.spacing(10)
    }),
    introQuestion: ({
        fontFamily: theme.fonts.sampleText,
        fontSize: theme.fonts.size.subtitle,
        lineHeight: theme.fonts.size.subtitle,
        marginVertical: theme.spacing(7),
    }),
    internContainer: ({
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: theme.colors.accent,
        flex: 1,
        width: '100%',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70
    }),
    safeArea: {
        height: screenHeight,
        backgroundColor: theme.colors.background
    }
});

export default styles;