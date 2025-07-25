import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    // default display flex
    container: {
        flex: 1,
        marginTop: 50,
        borderWidth: 1,
        borderColor: "red",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    item1: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "violet",
        height: 150,
        width: 60
    },
    item2: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "green",
        height: 300,
        width: 30


    },
    item3: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "orange",
        height: 100,
        width: 150


    },
    item4: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "grey"
    }

})

const FlexBox = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.item1}>
                    <Text>item1</Text>
                </View>
                <View style={styles.item2}>
                    <Text>item2</Text>
                </View>
                <View style={styles.item3}>
                    <Text>item3</Text>
                </View>
                <View style={styles.item4}>
                    <Text>item4</Text>
                </View>
            </View>
        </>
    )
}

export default FlexBox;