import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
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
            <Button
              title="Add Task"
              onPress={addTaskHandler}
              color="#5e0acc"
            />
            <Button title="Cancel" onPress={closeModel} color="#f31282" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 58,
    backgroundColor: "#ccc",
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
