import { StyleSheet, Text, View, Keyboard, FlatList } from "react-native";
import { useState } from "react";
import Task from "./compontents/Task";
import addTask from "./compontents/AddTask";
import AddTask from "./compontents/AddTask";

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([
    { text: "blabla", key: "1" },
    { text: "jaja diff", key: "2" },
  ]);

  const handleAddTask = (text) => {
    Keyboard.dismiss();
    setTaskList([...taskList, { text, key: Math.random().toString() }]);
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
        </View>
      </View>
      <AddTask handleAddTask={handleAddTask} />
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
    paddingBottom: 120,
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
