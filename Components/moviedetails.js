// MovieDetails.js
import React from 'react';
import { View, Text } from 'react-native';

const MovieDetails = ({ route }) => {
  const { movie } = route.params;

  return (
    <View>
      <Text>Title: {movie.title}</Text>
      <Text>Release Year: {movie.releaseYear}</Text>
      <Text>Description: {movie.description}</Text>
    </View>
  );
};

export default MovieDetails;

