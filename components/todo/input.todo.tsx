import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    }
})

interface IProps {
    addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {
    const { addTodo } = props;
    const [name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        if (!name) {
            Alert.alert('Alert Title', 'My Alert Msg', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
        addTodo(name);
        setName("");
    }
    return (
        <>
            <View style={{ marginBottom: 5 }}>
                <TextInput
                    onChangeText={v => setName(v)}
                    autoCapitalize='words'
                    keyboardType='ascii-capable'
                    autoCorrect={false}
                    multiline
                    style={styles.todoInput}
                />

                <View style={{
                    backgroundColor: "blue",
                    marginBottom: 10
                }}>
                    <Button
                        title='Add new'
                        onPress={() => handleAddNewTodo()}
                        color={"white"}
                    />
                </View>
            </View>
            <MineButton
                title="Add new"
                onPress={() => handleAddNewTodo()}
            />

        </>
    )
}

export default InputTodo;