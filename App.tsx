import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<string>("hoidanit");
  const [age, setAge] = useState<number>(30);
  const test = false;
  const [person, setPerson] = useState<{
    name: string,
    age: number
  }>({
    name: "hoidanit",
    age: 25
  })

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Test</Text>
        <Text style={styles.text}>{JSON.stringify(person)}</Text>
      </View>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "blue"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },
});
