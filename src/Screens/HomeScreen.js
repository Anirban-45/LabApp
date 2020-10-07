import React from 'react';
import { StyleSheet, Text } from 'react-native';

const HomeScreen = () =>{
	return(<Text style = {styles.textStyle}> Hello there </Text>)
}

const styles = StyleSheet.create(
	{
		textStyle: {
    		flex: 1,
    		backgroundColor: '#fff',
			fontSize: 30,
			color: "blue",
    		alignItems: 'center',
    		justifyContent: 'center',
		},
	}
);

export default HomeScreen;
