import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useKeepAwake } from 'expo-keep-awake';
import HomeScreen from "./src/screens/Home";
import SecondScreen from "./src/screens/Second";

const Stack = createStackNavigator();

function App() {
  useKeepAwake();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#6c63ff"
        },
        headerTitleStyle: {
          fontSize: 20
        },
        headerTintColor: "#ffffff"
      }
      }>
        <Stack.Screen name="EarnBigTime" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;