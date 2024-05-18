import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerBox: {
        marginTop: 10,
        paddingHorizontal: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addToCartButton: {
        width: '90%',
        paddingVertical: 20,
        marginHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: 15,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 15
    },
    imageBox: {
        marginTop: 20,
        position: 'relative',
        width: '100%',
        height: 400,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        marginLeft: '-10%',
        resizeMode: 'contain',
        transform: [{ rotate: '-30deg' }, { scaleX: -1 }],
        zIndex: 10,
    },
    sizeBox: {
        zIndex: 1000,
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        position: 'absolute',
        top: 20,
        left: 20
    },
    sizeNumberBox: {
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
        borderRadius: 10
    },
    circleRadius: {
        paddingHorizontal: 20,
        width: '100%',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        backgroundColor: '#eccd5f',
        alignSelf: 'center',
        display: 'flex',
        gap: 20
    },
    decriptionBox: {
        marginTop: 72,
    },
    priceAndTagBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tagBox: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#c5ff7b',
        elevation: 5
    },
    decription: {
        fontFamily: 'OutfitMedium',
        fontSize: 15,
        color: '#8d7a43',
    },
    colorsBox: {
        marginBottom: 190,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    colorBox: {
        width: 50,
        height: 50,
        borderRadius: 47,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorBoxClicked: {
        width: 50,
        height: 50,
        borderStyle: 'dotted',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    color: {
        width: 44,
        height: 44,
        borderRadius: 44,
    }
})
export default styles;