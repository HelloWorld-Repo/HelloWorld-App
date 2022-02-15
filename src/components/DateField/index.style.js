import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  field: {
    borderColor: theme.colors.disabled,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fieldBorder: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.textSecondary,
    paddingVertical: theme.spacing(0.5)
  },
  fieldValue: {
    color: theme.colors.disabledShadow,
    fontFamily: theme.fonts.sampleText,
    margin: 0,
    padding: 0,
    marginLeft: theme.spacing(1)
  }
});

export default styles;