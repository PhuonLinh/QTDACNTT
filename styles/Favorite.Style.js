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
    }
})
export default styles;