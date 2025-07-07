import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    }
})

const InputTodo = () => {
    const [name, setName] = useState<string>("");
    return (
        <>
            <View>
                <TextInput
                    onChangeText={v => setName(v)}
                    autoCapitalize='words'
                    keyboardType='ascii-capable'
                    autoCorrect={false}
                    multiline
                    style={styles.todoInput}
                />
                <Button
                    title='Add new'
                    onPress={() => {
                        alert("tap me")
                    }}
                />
            </View>
        </>
    )
}

export default InputTodo;