import { StyleSheet } from 'react-native';

import { colors, metrics } from './styles';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.ligther,
    },

    containerError: {
        flex: 1,
        backgroundColor: colors.ligther,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textError: {
        marginTop: metrics.baseMargin,
        color: colors.darkTransparent,
        opacity: 0.8,
        fontSize: metrics.fontSizeScreenError,
    },

    iconError: {
        color: colors.danger,
    }
});