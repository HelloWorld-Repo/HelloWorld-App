import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  field: {
    borderColor: theme.colors.disabled,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  fieldValue: {
    color: theme.colors.secondary,
    padding: 0,
    fontFamily: theme.fonts.sampleText,
    fontWeight: "bold"
  }
});

export default styles;