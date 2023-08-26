import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://eu-west-2.aws.data.mongodb-api.com/app/data-ogjld/endpoint/data/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "jt4NkhIIhXpFGaBTQap9pbSaF1pa2c6GztGiFmEcC5hYNAnSmL3sPb16a12p7b12",
  },
});

export const fetchAllMovies = () => {
  return apiClient.post("/action/find", {
    collection: "movies",
    database: "sample_mflix",
    dataSource: "ServerlessInstance0",
  });
};

export const fetchMovieDetails = (id) => {
  return apiClient.post("/action/findOne", {
    collection: "movies",
    database: "sample_mflix",
    dataSource: "ServerlessInstance0",
    filter: {
      _id: id,
    },
  });
};
