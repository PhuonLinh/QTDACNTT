import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollViewBox: {
        paddingTop: 20,
    },
    headerBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 10
    },
    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 60
    },
    infoBox: {
        display: 'flex',
        gap: 2
    },
    menuBox: {
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        gap: 10,
        borderTopColor: '#f8f8f8',
        borderBottomColor: '#f8f8f8',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    menuText: {
        fontSize: 16
    },
    actionOrderBox: {
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderTopColor: '#f8f8f8',
        borderBottomColor: '#f8f8f8',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    actionBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
    },
    actionText: {
        fontSize: 13,
        color: '#606060'
    }
})
export default styles;