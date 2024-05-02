import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import AlertAsync from "react-native-alert-async";
function ListItem(props) {
  const showDeleteConfirmation = async () => {
    const response = await AlertAsync(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => props.deleteItem(props.id) },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => props.toggleCompletion(props.id)}>
        <View
          style={[
            styles.square,
            props.completed && styles.completedSquare
          ]}
        />
      </Pressable>
      <Text style={styles.textItem}>{props.text}</Text>
      <Pressable onPress={showDeleteConfirmation}>
        <FontAwesome name="trash" size={24} color="#f31282" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 8,
      backgroundColor: "#5e0acc",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      overflow: 'hidden',
      elevation: 1,
  },
  square: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "white",
    marginRight: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
  completedSquare: {
    backgroundColor: "black",
  },
  textItem: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 16,
  },
});

export default ListItem;
