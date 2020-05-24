//
import { Dimensions } from 'react-native';

//
export default {

    imageContainer: {
      backgroundColor: '#fe5b29',
      height: Dimensions.get('window').height
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    uploadContainer: {
      backgroundColor: '#f6f5f8',
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      position: 'absolute',
      bottom: 0,
      width: Dimensions.get('window').width,
      height: 200,
    },
    uploadContainerTitle: {
      alignSelf: 'center',
      fontSize: 25,
      margin: 20,
    },
    uploadButton: {
      borderRadius: 16,
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 7,
        height: 5,
      },
      shadowOpacity: 1.58,
      shadowRadius: 9,
      elevation: 4,
      margin: 10,
      padding: 10,
      backgroundColor: '#fe5b29',
      width: Dimensions.get('window').width - 60,
      alignItems: 'center'
    },
    uploadButtonText: {
      color: '#f6f5f8',
      fontSize: 20,
    }

  };