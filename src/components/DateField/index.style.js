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
  fieldValue: {
    color: theme.colors.disabledShadow,
    fontFamily: theme.fonts.sampleText,
    margin: 0,
    padding: 0,
    marginLeft: -20
  }
});

export default styles;