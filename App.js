import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <TextInput style={styles.textInput} placeholder="Your new goal" />
          <Button title="Add Goal" />
      </View>
      <View style={styles.goalList}>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>a</Text>
        </View>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>b</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    paddingTop: 30,
  },
  inputSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "grey",
    marginRight: 8,
  },
  goalList: {
    flex: 8,
    paddingVertical: 8
  },
  goalItem: {
    backgroundColor: "purple",
    padding: 8,
    marginVertical: 8
  },
  goalText: {
    color: "white"
  },
});
