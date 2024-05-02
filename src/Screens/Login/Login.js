import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {getStyles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons from vector-icons library
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import createAuthModule from '../../Modules/AuthModule';

const Login = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useDarkMode(); // Get isDarkMode state from context
  const theme = isDarkMode ? darkMode : lightMode; // Get theme based on isDarkMode
  const [styles, setStyles] = useState(getStyles(theme));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // // Regular expression for email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // // Regular expression for password validation (at least 6 characters)
    // const passwordRegex = /^.{6,}$/;

    // // Perform validation
    // if (!emailRegex.test(email)) {
    //   setError('Please enter a valid email address');
    // } else if (!passwordRegex.test(password)) {
    //   setError('Password must be at least 6 characters long');
    // } else {
    //   // Perform login logic here
    //   // If successful, navigate to the home screen
    //   // If unsuccessful, display an error message
    // }

    navigation.navigate('Dashboard');
  };

  const handleNavigate = () => {
    // Navigate to the signup screen
    navigation.navigate('Signup');
  };

  useEffect(() => {
    // Update styles when isDarkMode changes
    setStyles(getStyles(theme));
  }, [isDarkMode, theme]);

  useEffect(() => {
    // Example usage
    const authProvider = 'firebase'; // This can be configured dynamically
    const authModule = createAuthModule(authProvider);
    authModule.signUp('user@example.com', 'password');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        {/* Icon for email input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          placeholderTextColor={theme.inputPlaceHolderColor}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="gray" style={styles.icon} />
        {/* Icon for password input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={theme.inputPlaceHolderColor}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigate} style={styles.signupLink}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
