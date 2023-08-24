// MovieList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator } from 'react-native';
import { fetchMovies } from './api';

const MovieList = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMoreMovies = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const newMovies = await fetchMovies(page);
      setMovies([...movies, ...newMovies]);
      setPage(page + 1);
    } catch (err) {
      setError('Error fetching movies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreMovies();
  }, []);

  const renderItem = ({ item }) => (
    <Text onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
      {item.title}
    </Text>
  );

  return (
    <View>
      {error && <Text>{error}</Text>}
      <FlatList
        data={movies}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
        onEndReached={loadMoreMovies}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicator size="large" />}
      />
   
    </View>
  );
};

export default MovieList;
