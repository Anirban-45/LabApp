import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const courses = () => {
	const Course1 = "SWE 4601"
	const Course2 = "CSE 4617"
	const Course3 = "SWE 4637"
	const Course4 = "CSE 4621"
	const Course5 = "Math 4643"
	const Course6 = "SWE 4603"

	return(
		<View>
			<Text style = {styles.c_container}>
				1. {Course1}
				2. {Course2}
				3. {Course3}
				4. {Course4}
				5. {Course5}
				6. {Course6}
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

export default courses;
