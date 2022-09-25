import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1C2E'
    },

    content: {
        marginTop: Constants.statusBarHeight + 40,
        marginHorizontal: 40,
    },

    title: {
        color: '#FFF',
        fontSize: 60,
        fontWeight: "bold",
    },

    textGroup: {
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    text: {
        color: '#FFF',
        fontSize: 18,
    },  

    textLevel: {
        color: '#FFF',
        fontSize: 22,
        marginRight: 20,
        fontWeight: "bold",
    },

    sliderContainer: {
        marginTop: 20
    },

    animation: {
        justifyContent: 'center',
        alignItems: "center"
    },

    buttonContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: "center",
    },

    button:{
        backgroundColor: '#EC6C6E',
        padding: 15,
        borderRadius: 8,
        width: 55,
        alignItems: "center"
    },

})