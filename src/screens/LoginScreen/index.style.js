import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.text,
    textAlign: "center",
    paddingBottom: theme.spacing(5),
    color: theme.colors.secondary,
    lineHeight: theme.fonts.size.text,
  },
  safeArea: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing(3),
    paddingVertical: theme.spacing(5),
  },
});

export default styles;
