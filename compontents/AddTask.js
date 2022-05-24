import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
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
      <TouchableOpacity onPress={() => handleAddTask(text)}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>Add Todo</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  addTaskWrapper: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 60,
    width: "100%",
  },
  input: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    height: 60,
    width: 80,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddTask;
