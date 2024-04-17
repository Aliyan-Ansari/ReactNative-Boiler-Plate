import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 12,
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
  errorText: {
    color: 'red',
    marginBottom: 12,
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
  loginLink: {
    marginTop: 10,
  },
  loginText: {
    color: 'teal',
    textDecorationLine: 'underline',
  },
});
