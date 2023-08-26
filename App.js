import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./Components/movielist";
import MovieDetailsScreen from "./Components/moviedetails";
import StarterPage from "./Components/starterpage";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StarterPage">
        <Stack.Screen
          name="StarterPage"
          component={StarterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MoviesList" component={MainScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
