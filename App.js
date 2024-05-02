import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  const [enterTaskText, setEnterTaskText] = useState("");
  const [myTasks, setmyTasks] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function openModel() {
    setModelIsVisible(true);
  }

  function closeModel() {
    setModelIsVisible(false);
  }

  function taskInputHandler(enterValue) {
    setEnterTaskText(enterValue);
  }

  function addTaskHandler() {
    setmyTasks((currentmyTasks) => [
      ...currentmyTasks,
      {
        text: enterTaskText,
        id: Math.random().toString(),
        completed: false,
      },
    ]);
    setEnterTaskText("");
    setModelIsVisible(false);
  }

  function deleteItem(id) {
    setmyTasks((currentmyTasks) => {
      return currentmyTasks.filter((task) => task.id !== id);
    });
  }

  function toggleCompletion(id) {
    setmyTasks((currentmyTasks) => {
      return currentmyTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  }

  return (
    <View style={styles.container}>
      <Modal visible={modelIsVisible} animationType="slide">
        <View style={styles.form}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("./assets/Target.jpg")}
            />
          </View>
          <TextInput
            style={styles.InputText}
            placeholder="enter your task message"
            onChangeText={taskInputHandler}
            value={enterTaskText}
          />
          <View style={styles.btnContainer}>
            <Button title="Add Task" onPress={addTaskHandler} color="#5e0acc" />
            <Button title="Cancel" onPress={closeModel} color="#f31282" />
          </View>
        </View>
      </Modal>

      <View style={styles.listImageContainer}>
            <Image
              style={styles.listImage}
              source={require("./assets/taskList.jpeg")}
            />
          </View>
      <View style={styles.mainBtn}>
        <Button title="Enter Your Task" onPress={openModel} />
      </View>
      <FlatList
        data={myTasks}
        renderItem={({ item }) => {
          return (
            <ListItem
              text={item.text}
              id={item.id}
              deleteItem={deleteItem}
              toggleCompletion={toggleCompletion}
              completed={item.completed}
            />
          );
        }}
        style={styles.NotesArea}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceHorizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 58,
    // backgroundColor: "#ccc",
  },
  NotesArea: {
    marginTop: 8,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    margin: 24,
    alignContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    paddingBottom: 16,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  image: {
    width: 170,
    height: 170,
  },
  listImageContainer:{
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  listImage:{
    width: 330,
    height: 150,
    resizeMode: "cover",
    borderRadius:20
  },
  InputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    borderRadius: 8,
  },
  mainBtn: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});
