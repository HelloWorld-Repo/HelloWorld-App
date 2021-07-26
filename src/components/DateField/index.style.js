import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  field: {
    borderColor: theme.colors.disabled,
    borderBottomWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  fieldValue: {
    color: theme.colors.disabledShadow,
    fontFamily: theme.fonts.sampleText,
  }
});

export default styles;