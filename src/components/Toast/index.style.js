import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  toast: {
    backgroundColor: theme.colors.error,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: theme.colors.background,
  },
  
  toastText: {
    fontSize: theme.fonts.size.small,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.titleSolidLight,
  }
});

export default styles;