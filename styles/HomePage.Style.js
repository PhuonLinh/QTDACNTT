import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    categoryBox: {
        width: 160,
        height: 100,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#ffffff'
    },
    categoryBoxClicked: {
        width: 160,
        height: 100,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    genderIcon: {
        marginLeft: 'auto'
    },
    singleBrandBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
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
        width: '48%',
        height: 58,
        borderWidth: 1.5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandBoxClick: {
        width: '48%',
        height: 58,
        borderWidth: 1.5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f2828',
    },
    seeMoreBox: {
        padding: 5,
        backgroundColor: '#2f2828',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '65%',
        height: '65%',
        resizeMode: 'contain',
        transform: [{ rotate: '-45deg' }, { scaleX: -1 }],
        zIndex: -1000,
        position: 'absolute',
        right: 10,
        top: 10
    },
    popularBox: {
        width: 250,
        height: 170,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',
    },
    latestBoxImage: {
        position: 'relative',
        width: 180,
        height: 180,
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
    latestImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        transform: [{ rotate: '-30deg' }, { scaleX: -1 }],
        zIndex: 10,
        marginLeft: '-15%',
        marginTop: '-15%'
    },
    favoriteIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1000
    }
})
export default styles;