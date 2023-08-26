import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

const StarterPage = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MoviesList");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="bounceIn"
        iterationCount={1}
        duration={1000}
        delay={400}
        style={styles.small_container}
      >
        <Animatable.Image
          source={require("../assets/logo.png")}
          style={styles.image_style}
        />
        <Animatable.Text style={styles.text_style}>
          Movie Listing App
        </Animatable.Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  small_container: {
    flex: 1,
    backgroundColor: "#00284c",
    alignItems: "center",
    opacity: 0.9,
  },

  image_style: {
    width: 160,
    height: 190,
    marginTop: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginLeft: 10,
  },
  text_style: {
    color: "#e3e8e9",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: -30,
  },
});

export default StarterPage;
