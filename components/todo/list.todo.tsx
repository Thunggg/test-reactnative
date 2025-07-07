import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 10,
        padding: 15,
    }
})

interface IProps {
    todoList: ITodo[]
    deleteTodo: (v: number) => void
}

const ListTodo = (props: IProps) => {
    const { todoList, deleteTodo } = props;
    return (
        <>
            <View
                style={styles.todo}
            >
                <FlatList
                    data={todoList}
                    keyExtractor={item => item.id + ""}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <TouchableOpacity
                                    onPress={() => deleteTodo(item.id)}
                                >
                                    <Text
                                        style={styles.todo}
                                    >{item.title}</Text>
                                </TouchableOpacity>
                            </>
                        )
                    }}
                >
                </FlatList>
            </View>
        </>
    )
}

export default ListTodo;