import { Text, View, StyleSheet, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase"
    },
    btnContainer: {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        alignSelf: "flex-start"
    }
})
interface IProps {
    title: string;
    onPress: any;
}
const MineButton = (props: IProps) => {
    const { title, onPress } = props;
    return (
        <>
            <Pressable
                style={({ pressed }) => ({ opacity: pressed === true ? 0.5 : 1 })}
                onPress={onPress}
            >
                <View style={styles.btnContainer}>
                    <AntDesign name="pluscircle" size={24} color="black" />
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>

        </>
    )
}
export default MineButton;