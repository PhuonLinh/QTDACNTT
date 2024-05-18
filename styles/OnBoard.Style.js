import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upBox: {
        width: '100%',
        height: '45%',
        marginTop: 'auto'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    bottomBox: {
        width: '100%',
        height: '45%',
    },
    upBottomBox: {
        width: '100%',
        height: '45%',
        display: 'flex',
        alignItems: 'center',
        gap: -10
    },
    downBottomBox: {
        width: '100%',
        height: '55%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    getStartedButton: {
        width: '35%',
        height: '25%',
        borderRadius: 50,
        backgroundColor: '#2f2828',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 3,
        elevation: 10
    }
})
export default styles;