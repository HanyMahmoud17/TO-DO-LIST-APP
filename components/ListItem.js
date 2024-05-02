import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function ListItem(props) {
  return (
    <View style={styles.container}>
      <Pressable >
        <View
          style={[
            styles.square
          ]}
        />
      </Pressable>
      <Text style={styles.textItem}>{props.text}</Text>
      <Pressable >
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  square: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 10,
  },
  textItem: {
    flex: 1,
    color: "white",
  },
});

export default ListItem;
