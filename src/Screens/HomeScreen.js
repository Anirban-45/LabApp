import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const HomeScreen = (props) =>{
	return(
		<View style = {styles.viewStyle}>
			<Image
				source={{uri: "https://upload.wikimedia.org/wikipedia/en/d/d0/Islamic_University_of_Technology_%28coat_of_arms%29.png"}}
				style={{width: 248, height: 406}}
			/>

			<Text style = {styles.textStyle}>Department of CSE</Text>
			<Text style ={{fontSize: 20, color: "black", margin: 10}} >Program : SWE</Text>

			<Button
			title = "Semester wise Course list"
			onPress = {
				function (){
					props.navigation.navigate("Semesters");
				}
			}
			/>

			<Button
			title = "List of Faculty members"
			onPress = {
				function (){
					props.navigation.navigate("Faculties");
				}
			}
			/>
		</View>
	)
}

const styles = StyleSheet.create(
	{
		textStyle: {
    		backgroundColor: '#fff',
			fontSize: 30,
			color: "purple",

		},
		viewStyle: {
			backgroundColor: "#fff",
			borderWidth: 20,
			borderColor: "#fff",
			alignItems: 'center',
    		justifyContent: 'center',
		}
	}
);

export default HomeScreen;
