import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const semesters = () => {

	return(
		<View style = {styles.viewStyle}>
			<Text style = {styles.s_container}> List of Semesters</Text>
			<View style = {{margin:5}}><Button title= "3rd semester"/></View>
			<View style = {{margin:5}}><Button title= "4th semester"/></View>

			<View style = {{margin:5}}><Button style = {{color: "Yellow"}} title= "5th semester"/></View>
			<View style = {{margin:5}}><Button title= "6th semester"/></View>
		</View>

	)
}

const styles = StyleSheet.create(
	{
		s_container: {
			fontSize: 30,
			color: "black",
			marginBottom: 15
		},
		viewStyle: {

			margin: 20,

			alignItems: 'center',
    		justifyContent: 'center',
		}
	}
);

export default semesters;
