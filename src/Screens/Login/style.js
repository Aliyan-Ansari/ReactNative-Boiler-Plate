import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'teal',
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: 'black',
  },
  inputPlaceHolder: {
    color: 'gray',
  },
  button: {
    backgroundColor: 'teal',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupLink: {
    marginTop: 10,
  },
  signupText: {
    color: 'teal',
    textDecorationLine: 'underline',
  },
});
