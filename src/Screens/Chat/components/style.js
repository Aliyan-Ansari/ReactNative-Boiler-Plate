import {StyleSheet} from 'react-native';
import {colors} from '../../../../resources/colors/colors';
import {darkMode} from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: darkMode.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  actionsWrapper: {
    width: '100%',
    // height: '100%',
    borderRadius: 12,
    backgroundColor: darkMode.inputBackgroundColor,
    padding: 10,
  },
  accessory: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 5,
  },
  createOfferButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
  },
  createOfferLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: darkMode.black5A,
    letterSpacing: -0.42,
  },
  sendLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: darkMode.buttonBackgroundColor,
    letterSpacing: -0.42,
  },
  toolbarContainer: {
    // flex: 1,
    // height: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fffff',
  },
  inputField: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesContainer: {
    minWidth: '100%',
    gap: 10,
    paddingTop: 4,
  },
  imageWrapper: {
    width: 50,
    height: 60,
  },
  selectedImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: darkMode.primary,
  },
  crossChip: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: darkMode.white,
    borderWidth: 1,
    borderColor: darkMode.primary,
    position: 'absolute',
    right: 5,
    top: -4,
    zIndex: 2000,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 5,
  },
  textBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    width: '80%',
  },
});
