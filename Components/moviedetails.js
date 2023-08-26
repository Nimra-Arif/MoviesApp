import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const MovieDetails = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.moviePoster} />
      <View style={{ padding: 10 }}>
        {movie.title && (
          <Text style={styles.textStyle2}>
            Title:
            <Text style={styles.textStyle}>{movie.title}</Text>
          </Text>
        )}
        {movie.year && (
          <Text style={styles.textStyle2}>
            Year:
            <Text style={styles.textStyle}>{movie.year}</Text>
          </Text>
        )}
        {movie.released && (
          <Text style={styles.textStyle2}>
            Release Year:
            <Text style={styles.textStyle}>{movie.released}</Text>
          </Text>
        )}
        {movie.languages && (
          <Text style={styles.textStyle2}>
            Languages:
            <Text style={styles.textStyle}>{movie.languages}</Text>
          </Text>
        )}
        {movie.plot && (
          <Text style={styles.textStyle2}>
            Description:
            <Text style={styles.textStyle}>{movie.plot}</Text>
          </Text>
        )}
        {movie.directors && (
          <Text style={styles.textStyle2}>
            Director(s):
            <Text style={styles.textStyle}>{movie.directors}</Text>
          </Text>
        )}
        {movie.cast && (
          <Text style={styles.textStyle2}>
            Cast:
            {movie.directors} <Text style={styles.textStyle}>{movie.cast}</Text>
          </Text>
        )}
        {movie.writers && (
          <Text style={styles.textStyle2}>
            Writer(s):
            <Text style={styles.textStyle}>{movie.writers}</Text>
          </Text>
        )}
        {movie.genres && (
          <Text style={styles.textStyle2}>
            Genres:
            <Text style={styles.textStyle}>{movie.genres}</Text>
          </Text>
        )}
        {movie.rated && (
          <Text style={styles.textStyle2}>
            Rated:
            <Text style={styles.textStyle}>{movie.rated}</Text>
          </Text>
        )}
        {movie.countries && (
          <Text style={styles.textStyle2}>
            Countrie(s):
            <Text style={styles.textStyle}>{movie.countries}</Text>
          </Text>
        )}
        {movie.awards.text && (
          <Text style={styles.textStyle2}>
            Nominations:
            <Text style={styles.textStyle}>{movie.awards.text}</Text>
          </Text>
        )}
        {movie.production && (
          <Text style={styles.textStyle2}>
            Production:
            <Text style={styles.textStyle}>{movie.production}</Text>
          </Text>
        )}
        {movie.fullplot && (
          <Text style={styles.textStyle2}>
            Fullplot:
            <Text style={styles.textStyle}>{movie.fullplot}</Text>
          </Text>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00284c",
    opacity: 0.9,
  },
  moviePoster: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
  textStyle: {
    fontSize: 17,
    color: "#01989f",
    fontFamily: "Roboto",
  },
  textStyle2: {
    fontSize: 21,
    color: "#fbe4d8",
  },
});

export default MovieDetails;
