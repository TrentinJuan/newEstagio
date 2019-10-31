import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageLogo: {
        width: metrics.screenWidth - metrics.screenPaddingHorizontal,
        maxWidth: metrics.maxWidth,
        height: 120 + metrics.adcionalHeigth,
    },

    form: {
        marginTop: 2,
    },

    input: {
        marginTop: metrics.baseMargin,
        backgroundColor: colors.white,
        height: 55 + metrics.adcionalHeigth,
        width: metrics.screenWidth - metrics.screenPaddingHorizontal,
        maxWidth: metrics.maxWidth,
        borderWidth: 1,
        borderColor: colors.regularTransparent,
        paddingHorizontal: 20,
        borderRadius: metrics.baseRadius,
        fontSize: metrics.fontSizeDefault,
    },

    containerCheckBox: {
        marginTop: metrics.baseMargin,
        height: 20,
        width: metrics.screenWidth - metrics.screenPaddingHorizontal,
        maxWidth: metrics.maxWidth,
        alignItems: 'center',
        flexDirection: 'row',
    },

    chkAutosync: {
        width: 30,
    },

    textChkAutosync: {
        color: colors.darkTransparent,
        fontSize: metrics.fontSizeDefault,
    },

    buttonLogin: {
        width: metrics.screenWidth - metrics.screenPaddingHorizontal,
        maxWidth: metrics.maxWidth,
        height: 55 + metrics.adcionalHeigth,
        marginTop: metrics.baseRadius,
        borderRadius: metrics.baseRadius,
        backgroundColor: colors.primaryButton,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButtonLogin: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 25,
    },

    containerMessage: {
        justifyContent: 'center',
        marginTop: metrics.baseMargin + 10,
        height: 50,
        padding: 10,
        width: metrics.screenWidth - metrics.screenPaddingHorizontal,
        maxWidth: metrics.maxWidth,
        backgroundColor: colors.danger,
        borderRadius: 3,
    },

    textMessage: {
        fontWeight: 'bold',
        color: colors.white,
        fontSize: metrics.fontSizeDefault,
    },
});

const pickerSelectStyles = StyleSheet.create({

    inputIOS: {
        marginTop: metrics.baseMargin,
        fontSize: metrics.fontSizeDefault,
        height: 55 + metrics.adcionalHeigth,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.regularTransparent,
        borderRadius: metrics.baseRadius,
        color: 'gray',
        paddingRight: 30, // para o texto nao encostar no icone de dropdown
    },

    inputAndroid: {
        marginTop: metrics.baseMargin,
        fontSize: metrics.fontSizeDefault,
        height: 55 + metrics.adcionalHeigth,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.regularTransparent,
        borderRadius: metrics.baseRadius,
        color: 'gray',
        paddingRight: 30, // para o texto nao encostar no icone de dropdown
    }

});

export { styles, pickerSelectStyles };

//export default styles;