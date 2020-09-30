import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Container,Content } from "native-base";
import {HomeScreen} from "./screens/home"


const Stack = createStackNavigator();

function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
};


export default App;
