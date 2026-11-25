
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

export default function RegistrationScreen() {
  const router = useRouter();

  // Store form data
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validate and navigate to Review screen
 
const handleReview = () => {
  if (
    !userName ||
    !email ||
    !phoneNumber ||
    !password ||
    !confirmPassword
  ) {
    Alert.alert('Error', 'Please fill in all fields.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    Alert.alert('Error', 'Please enter a valid email address.');
    return;
  }

  if (phoneNumber.length < 10) {
    Alert.alert('Error', 'Please enter a valid phone number.');
    return;
  }

  if (password !== confirmPassword) {
    Alert.alert('Error', 'Passwords do not match.');
    return;
  }

  router.push({
    pathname: '/review',
    params: {
      userName,
      email,
      phoneNumber,
    },
  });
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

       <TextInput
        style={styles.input}
        placeholder="Year of Birth (e.g. 2005)"
        keyboardType="numeric"
        value={yearOfBirth}
        onChangeText={setYearOfBirth}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button
        title="REVIEW DETAILS"
        onPress={handleReview}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
});
