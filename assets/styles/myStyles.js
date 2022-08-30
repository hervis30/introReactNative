import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ff7f',
    },
    texts: {
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black'
    }
});

const myStyle = StyleSheet.create({
    viewAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    marginWid: {
        width: '85%',
        marginTop: 5
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40
    }
});


export { styles, myStyle };