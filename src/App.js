import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const App = () => {
  const [data, setData] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemC}>
        <Text style={styles.text}>{item.title}</Text>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.text}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    flexDirection: "row",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemC: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default App;
