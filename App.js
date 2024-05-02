import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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

  return (
    <View style={styles.container}>
      <Modal visible={modelIsVisible} animationType="slide">
        <View style={styles.form}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("./assets/favicon.png")}
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

      <Button title="Enter Your Task" onPress={openModel} />
      <FlatList
        data={myTasks}
        renderItem={({ item }) => {
          return (
            <ListItem
              text={item.text}
              id={item.id}
              deleteItem={deleteItem}
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
    backgroundColor: "#ccc",
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
    marginBottom: 24,
  },
  image: {
    width: 120,
    height: 120,
  },
  InputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
