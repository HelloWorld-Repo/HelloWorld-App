import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({

    container: {
        width: '50%',
        alignItems: 'center',
        marginBottom: theme.spacing(3)
    },

    label: {
        fontFamily: theme.fonts.titleSolidBlack,
        color: theme.colors.accent,
        fontSize: theme.fonts.size.bigLogo
    }
});

export default styles;
