import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatListComponent,
} from "react-native";
import { fetchAllMovies } from "./api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#00284c",
    alignItems: "center",
    opacity: 0.9,
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 20,
    textAlign: "center",
    color: "#01989f",
  },
  movieItem: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  moviePoster: {
    width: "25%",
    height: 100,
    marginRight: 12,
    resizeMode: "contain",
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 19,
    color: "#fbe4d8",
  },
  textStyle: {
    fontSize: 15,
    color: "#01989f",
    fontFamily: "Roboto",
  },
  textcontainer: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    height: 120,
    justifyContent: "center",
  },
});

function MainScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetchAllMovies();
      setMovies(response.data.documents);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={movies}
          scrollBarShown={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MovieDetails", { movie: item })
              }
              style={styles.movieItem}
            >
              <Image source={{ uri: item.poster }} style={styles.moviePoster} />
              <View style={styles.textcontainer}>
                <Text style={styles.movieTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.textStyle}>Genres: {item.genres}</Text>
                <Text style={styles.textStyle}>Release Year: {item.year}</Text>
                <Text style={styles.textStyle}>Rated: {item.rated}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

export default MainScreen;
