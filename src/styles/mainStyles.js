
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  slider: {
    height: 170,
    width: 130,
    resizeMode: 'contain',
    //borderRadius: 20,
    top: 5,
    alignSelf: 'flex-start'
  },
  noImage:{
    //borderRadius: 20,
alignSelf:'flex-start',

  },
  addImage: {
    height: 190,
    width: 190,
    resizeMode: 'contain',
    top: 80,
    alignSelf: 'center',
  },
  card: {
    textAlign: 'center',
    alignSelf: 'center',
    width: width - 20,
    height: 180,
    marginTop: 10,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
  },

  row: {
    flexDirection: 'row',
    alignContent: 'center',
  },


  subText: {
    color: COLORS.lightGray3,
    fontSize: 15,
    paddingTop: 10,
    alignSelf: 'flex-start',
    width: width - 170,
    height: 200,
    paddingLeft: 10
  },
  date: {
    color: COLORS.lightGray3,
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 10
  },

  header: {
    color: COLORS.white,
    fontSize: 19,
    paddingLeft: 10
  },


  addTouch: {
    width: 170,
    height: 50,
    marginTop: 30,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  addText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  empty: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    paddingTop: 130
  }
});


export default styles