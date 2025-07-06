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

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Build a Todo App" },
    { id: 3, title: "Read about Redux" },
    { id: 4, title: "Practice JavaScript" },
    { id: 5, title: "Explore Expo CLI" },
    { id: 6, title: "Connect app to API" },
    { id: 7, title: "Style with Tailwind CSS" },
    { id: 8, title: "Deploy app to store" },
    { id: 9, title: "Learn about animations" },
    { id: 10, title: "Add offline support" }
  ]);


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
        title='Add new'
        onPress={() => {
          alert("tap me")
        }}
      />
      <View>
        {todoList.map(todo => {
          return (
            <Text style={styles.todo}>{todo.title}</Text>
          )
        })}
      </View>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 10,
    padding: 15
  },
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
