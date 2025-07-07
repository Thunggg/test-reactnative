import { FlatList, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 10,
        padding: 15
    }
})

interface IProps {
    todoList: ITodo[]
}

const ListTodo = (props: IProps) => {
    const todoList = props.todoList;
    return (
        <>
            <FlatList
                data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.todo}>{item.title}</Text>
                    )
                }}
            >
            </FlatList>
        </>
    )
}

export default ListTodo;