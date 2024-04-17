import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons from vector-icons library

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Perform signup logic here
      setError('');
      // Reset form fields
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const handleNavigate = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.errorText}>{error}</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        {/* Icon for email input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={styles.inputPlaceHolder.color}
          value={email}
          onChangeText={setEmail}
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
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="gray" style={styles.icon} />
        {/* Icon for confirm password input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor={styles.inputPlaceHolder.color}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigate} style={styles.loginLink}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
