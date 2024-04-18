import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons from vector-icons library

const Login = () => {
  const navigation = useNavigation();
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

    navigation.navigate('Home');
  };

  const handleNavigate = () => {
    // Navigate to the signup screen
    navigation.navigate('Signup');
  };

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
          placeholderTextColor={styles.inputPlaceHolder.color}
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
          placeholderTextColor={styles.inputPlaceHolder.color}
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
