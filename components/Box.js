import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
export default function Box({ children, style}) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'blue',
        padding: 12,
        margin: 15,
        borderRadius: 12,
    },
    text: {
        fontSize: 16,
        color: 'white',
    }
})