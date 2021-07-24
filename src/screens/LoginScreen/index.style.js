import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing(3),
    alignItems: "center",
    paddingVertical: theme.spacing(5),
    justifyContent: "space-around",
    flex: 1,
  },
  text: {
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.headerTitle,
    textAlign: "center",
    paddingBottom: theme.spacing(5),
    color: theme.colors.secondary,
    lineHeight: theme.fonts.size.headerTitle,
  },
  safeArea: {
    backgroundColor: theme.colors.background,
  },
});

export default styles;
