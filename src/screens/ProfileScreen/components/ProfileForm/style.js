import { StyleSheet } from "react-native";
import theme from "../../../../styles/theme";

const styles = StyleSheet.create({
  containerButton: {
    marginTop: theme.spacing(10)
  },
  input: {
    backgroundColor: theme.colors.background,
    fontFamily: theme.fonts.sampleText,
    fontSize: theme.fonts.size.small,
    marginTop: theme.spacing(2)
  }
});

export default styles;