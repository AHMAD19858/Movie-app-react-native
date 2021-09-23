
import { StyleSheet, Dimensions, I18nManager } from 'react-native';
import { COLORS } from '../constants';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    input: {
        color: COLORS.black,
        left:20,
        justifyContent:'center',
        textAlignVertical:'center',
        
    },
    textView: {
        color: COLORS.gray2,
        top: 15,
        left:20,
        justifyContent:'center',
        textAlignVertical:'center',
    },
    icon: {
        marginRight: 20,
        bottom: 10,
        alignSelf: 'flex-end'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: width,
        height: height,
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: COLORS.darkBlue
    },


    inputView: {
        borderRadius: 25,
        backgroundColor: 'white',
        width: "85%",
        height: 50,
        borderColor: 'black',
        top: 10,
        borderWidth: 1,
        marginTop: 20,
    },


    slider: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        borderRadius: 20,
        top: -10,
        marginLeft: 0,
        right: 10,
        alignSelf: 'flex-end'
    },
    addTouch: {
        width: 200,
        height: 50,
        marginTop: 40,
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        borderRadius: 25,
        alignSelf: 'center',
    },

    addText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },


});


export default styles