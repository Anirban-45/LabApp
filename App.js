import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import semesters from "./src/Screens/Semesters";
import Faculties from "./src/Screens/FacultyList"


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen name = "Home" component={HomeScreen}/>
                <Stack.Screen name = "Semesters" component={semesters}/>
                <Stack.Screen name = "Faculties" component={Faculties}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
