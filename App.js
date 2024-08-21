import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)

  const calculateBmi = () => {
    // korvataan mahdollinen pilkku pisteeksi
    const weightNum = parseFloat(weight.replace(',' , '.'));
    const heightNum = parseFloat(height.replace(',' , '.'));

    console.log("Paino: ", weightNum);
    console.log("Pituus: ", heightNum);

    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBmi(bmiValue.toFixed(1));
    } else {
      setBmi(null); //jos syöte on virheellinen
    }
  }

  return (
    <View style={styles.container}>
      <Text>Paino (kg)</Text>
      <TextInput
        placeholder="Kirjoita painosi tähän"
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType='numeric'
        style={styles.input}
      />
      <Text>Pituus (m)</Text>
      <TextInput
        placeholder="Kirjoita pituutesi tähän"
        value={height}
        onChangeText={text => setHeight(text)}
        keyboardType='numeric'
        style={styles.input}
      />
      <Text>BMI</Text>
      <Button
        title='Laske painoindeksi'
        onPress={calculateBmi}
      />
      {bmi !== null && (
        <Text>BMI: {bmi}</Text>
      )}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: 200,
    textAlign: 'center',
  }
});
