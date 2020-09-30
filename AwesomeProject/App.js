import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Container,Content } from "native-base";
import {HomeScreen} from "./screens/home"
import { AuthScreen } from './screens/auth';


const Stack = createStackNavigator();

function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator headerMode="none" initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen}/>
       <Stack.Screen name="Auth" component={AuthScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
};


export default App;
