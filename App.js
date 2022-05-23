import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  FlatList,
} from "react-native";
import { useState } from "react";
import Task from "./compontents/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([
    { text: "blabla", key: "1" },
    { text: "jaja diff", key: "2" },
  ]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  };

  const handleDeleteTask = (key) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>My tasks</Text>
        <View style={styles.list}>
          <FlatList
            data={taskList}
            renderItem={({ item }) => (
              <Task item={item} handleDeleteTask={handleDeleteTask} />
            )}
          />
          {/* {taskList.map((task, index) => {
            return <Task key={index} text={task} />;
          })} */}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"add new task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDD",
    paddingHorizontal: 20,
  },
  taskWrapper: {
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    marginTop: 30,
  },
  addTaskWrapper: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    bottom: 60,
    width: "100%",
  },
  input: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});
