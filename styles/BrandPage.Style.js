import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1
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
    headerImageBox: {
        marginTop: 10,
        width: 'auto',
        height: 200,
        borderRadius: 20,
        marginHorizontal: 20,
        backgroundColor: '#2f2828',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftHeaderImageBox: {
        marginLeft: 20,
        display: 'flex',
        gap: -5
    },
    headerImage: {
        position: 'absolute',
        right: 0,
        width: '75%',
        height: '75%',
        resizeMode: 'cover',
        transform: [{ rotate: '-30deg' }],
    },
    addToCartBox: {
        display: 'flex',
        padding: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandScrollBox: {
        paddingHorizontal: 20,
        gap: 15,
    },
    brandName: {
        fontFamily: 'OutfitMedium',
        fontSize: 20
    },
    brandNameClick: {
        fontFamily: 'OutfitMedium',
        fontSize: 20,
        color: 'white'
    },
    brandBox: {
        width: 150,
        height: 58,
        borderWidth: 1.5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandBoxClick: {
        width: 150,
        height: 58,
        borderWidth: 1.5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f2828',
    },
    contentScrollBox: {
        paddingVertical: 15,
        display: 'flex',
        gap: 10
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
        transform: [{ rotate: '-45deg' }, { scaleX: -1 }],
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
})
export default styles;