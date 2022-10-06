import { StyleSheet } from 'react-native';

// import the style config
import config from '../../styles/config';

// styles for the bif text input component
const styles = StyleSheet.create({
  container: {
    borderColor: config.tertiaryColor,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    height: 45,
    marginBottom: 5,
    alignItems: 'center',
  },

  inputView: {
    flexGrow: 1,
  },

  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  dropdownBtn: {
    paddingLeft: 10,
    paddingVertical: 12,
    width: 90,
  },

  dropdownStyle: {
    width: 90,
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  dropdownChevron: {
    paddingRight: 5,
    paddingTop: 8,
  },

  dropdown: {
    height: 'auto',
    paddingLeft: 5,
  },

  dropdownText: {
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },
});

export default styles;
