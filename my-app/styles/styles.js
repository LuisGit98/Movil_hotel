import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 23
    },
    formContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#1e3aa6',
        gap: 45,
        justifyContent: 'center',
        position: 'absolute',
        borderWidth: 2,

    }, text: {
        fontSize: 30,
        width: 300,
        textAlign: "center",
        color: '#ffff',

    },
    input: {
        height: 60,
        width: '78%',
        borderRadius: 17,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 19,
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    padLogIcon: {
        marginTop: '16%',
        marginLeft: '67%',
    },
    userIcon: {
        marginTop: '36%',
        marginLeft: '67%',
    },
    sendBtn: {
        width: '40%',
        height: '5%',
        color: 'rgba(102,136,204,0.6)',
        borderRadius: 15,
        padding: '5%',
        position: 'absolute',
        backgroundColor: '#046DC9',
        textAlign: 'center',
        top: '63%'
    },
    alojaText: {
        fontSize: 60,
        color: '#fff',
        marginTop: '-70%',
    }

})
