
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ReviewScreen() {
  const router = useRouter();

  // Retrieve data from Registration Screen
  const { userName, email, phoneNumber, yearOfBirth } =
    useLocalSearchParams<{
      userName: string;
      email: string;
      phoneNumber: string;
      yearOfBirth: string;
    }>();

  // Confirm submission and navigate to Success Screen
  const handleConfirm = () => {
    router.push({
      pathname: '/success',
      params: {
        userName: userName,
        yearOfBirth: yearOfBirth,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Details</Text>

      <View style={styles.card}>
        <Text style={styles.detail}>
          Username: {userName}
        </Text>

        <Text style={styles.detail}>
          Email: {email}
        </Text>

        <Text style={styles.detail}>
          Phone: {phoneNumber || 'Not provided'}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="EDIT INFO"
          color="red"
          onPress={() => router.back()}
        />

        <Button
          title="CONFIRM & SUBMIT"
          onPress={handleConfirm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
