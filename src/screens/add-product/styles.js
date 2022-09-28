import { StyleSheet } from 'react-native';
import config from '../../styles/config';

// import the style config
// import config from '../../styles/config';

// styles for the add product screen
const styles = StyleSheet.create({
  scannerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanner: {
    width: '80%',
    aspectRatio: 1,
    borderRadius: 5,
  },

  cameraTextContainer: {
    position: 'absolute',
    top: '5%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
  },

  cameraText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: config.errorColor,
  },

  cameraButton: {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
    aspectRatio: 1,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});

export default styles;
