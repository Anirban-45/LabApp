import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const semesters = () => {
	const Sem3 = "3rd semester"
	const Sem4 = "4th semester"
	const Sem5 = "5th semester"
	const Sem6 = "6th semester"


	return(
		<View>
			<Text style = {styles.s_container}>
				{Sem3}
				{Sem4}
				{Sem5}
				{Sem6}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create(
	{
		c_container: {
			backgroundColor: '#fff',
			fontSize: 30,
			color: "black"
		},
	}
);

export default semesters;
