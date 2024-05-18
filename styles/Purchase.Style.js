import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
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
    image: {
        width: '100%',
        height: '30%',
        resizeMode: 'cover'
    },
    textBox: {
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 5
    },
    inputBox: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
        height: 500,
    },
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 18
    },
    payBox: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        gap: 10
    },
    acceptButton: {
        width: '50%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#d5262d'
    },
    modalContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    payListBox: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },
    pay: {
        paddingVertical: 13,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8'
    }
})
export default styles;