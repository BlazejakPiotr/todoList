import { StyleSheet, Text, View } from "react-native";
import Task from "./compontents/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>My tasks</Text>
        <View style={styles.list}>
          <Task text="this is task no 1" />
          <Task text="this is task no 2" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDD",
  },
  wrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    marginTop: 30,
  },
});
