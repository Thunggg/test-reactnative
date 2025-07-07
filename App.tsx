import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    const todo = {
      id: randomInteger(1, 1000000000),
      title: text
    };
    setTodoList([...todoList, todo]);
  }

  const deleteTodo = (id: number) => {
    const newTodo = todoList.filter(todo => todo.id != id);
    setTodoList(newTodo);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <InputTodo
          addTodo={addTodo}
        />

        <ListTodo
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    fontSize: 60,
    color: "red",
    marginTop: 50
  },
});
