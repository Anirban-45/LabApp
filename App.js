import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import profile from "./src/Screens/profile";
import semesters from "./src/Screens/Semesters";
import Faculties from "./src/Screens/FacultyList"
import coursesem3 from "./src/Screens/CourseListsem3"
import coursesem4 from "./src/Screens/CourseListsem4"
import coursesem5 from "./src/Screens/CourseListsem5"
import coursesem6 from "./src/Screens/CourseListsem6"


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen name = "Home" component={HomeScreen}/>
                <Stack.Screen name = "Semesters" component={semesters}/>
                <Stack.Screen name = "Faculties" component={Faculties}/>
                <Stack.Screen name = "Profile" component={profile}/>
                <Stack.Screen name = "Semester 3" component={coursesem3}/>
                <Stack.Screen name = "Semester 4" component={coursesem4}/>
                <Stack.Screen name = "Semester 5" component={coursesem5}/>
                <Stack.Screen name = "Semester 6" component={coursesem6}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
