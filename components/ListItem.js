import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

function ListItem(props) {
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
      <Pressable onPress={() => props.deleteItem(props.id)}>
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
    paddingHorizontal:8,
    paddingVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  square: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "white",
    marginRight: 10,
    overflow: 'hidden',
  },
  completedSquare: {
    backgroundColor: "black",
  },
  textItem: {
    flex: 1,
    color: "white",
  },
});

export default ListItem;
