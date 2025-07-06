import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<string>("");
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
      <TextInput
        onChangeText={v => setName(v)}
        autoCapitalize='words'
        keyboardType='ascii-capable'
        // maxLength={2}
        autoCorrect={false}
        multiline
        style={{
          borderColor: "violet",
          borderWidth: 1,
          padding: 10
        }}
      />
      <Button
        title='abc'
      />
      <Text>{name}</Text>
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
