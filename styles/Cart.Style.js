import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBox: {
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageBox: {
        position: 'relative',
        width: 170,
        height: 170,
        padding: 10,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        transform: [{ rotate: '-30deg' }, { scaleX: -1 }],
        zIndex: 10,
        marginLeft: '-25%',
        marginTop: '-10%'
    },
    favoriteIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1000
    },
    contentScrollBox: {
        paddingVertical: 15,
        display: 'flex',
        justifyContent: 'center',
        gap: 10
    },
    purchaseBox: {
        width: '100%',
        elevation: 10,
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0
    },
    menuBox: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        borderTopColor: '#f8f8f8',
        borderBottomColor: '#f8f8f8',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    menuText: {
        fontSize: 15
    },
    totalPricesBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    allRadioBox: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    pricesAndPurchaseBox: {
        marginLeft: 'auto',
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    purchaseButton: {
        padding: 20,
        backgroundColor: '#ee4d2d',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorAndSizeBox: {
        position: 'absolute',
        top: 10,
        left: 10,
        display: 'flex',
        gap: 5
    },
    sizeBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 25
    },
    colorBox: {
        width: 25,
        height: 25,
        borderRadius: 25,
        borderStyle: 'dotted',
        borderWidth: 1
    }
})
export default styles;