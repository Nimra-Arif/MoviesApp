// api.js
const API_BASE_URL = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-ogjld/endpoint/data/v1';

export const fetchMovies = async (page) => {
  try {
    const response = await fetch(`${API_BASE_URL}/action/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'jt4NkhIIhXpFGaBTQap9pbSaF1pa2c6GztGiFmEcC5hYNAnSmL3sPb16a12p7b12',
      },
      body: JSON.stringify({
        collection: 'movies',
        database: 'sample_mflix',
        dataSource: 'ServerlessInstance0',
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return []; // Return an empty array or a placeholder value
  }
};




