import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
  TextInput,
} from "react-native";

function AddTask({ handleAddTask }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => setText(val);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={"add new task"}
        value={text}
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => handleAddTask(text)}
        title="add todo"
        color="red"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  addTaskWrapper: {
    position: "absolute",
    margin: 20,
    bottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    padding: 5,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "80%",
  },
});

export default AddTask;
