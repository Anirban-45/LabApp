import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

const coursesem3 = () => {
	const C_list = [
		{name: "SWE 4601", key: '1'},
		{name: "CSE 4617", key: '2'},
		{name: "SWE 4637", key: '3'},
		{name: "CSE 4621", key: '4'},
		{name: "Math 4643", key: '5'},
		{name: "SWE 4603", key: '6'},
	]

	return(
		<View style = {styles.viewStyle}>
			<Text style = {{fontSize: 25, paddingLeft: 40, padding: 20, color: "#3f474c" }}>3rd semester All courses</Text>
			<FlatList
				style = {styles.listStyle}
				data = {C_list}
				renderItem = {function ({ item }){
					return (<Text style = {styles.t_container}>{item.key}. {item.name} </Text>)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create(
	{
		t_container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			color: "white",
			fontSize:18,
			marginVertical: 2,
			marginHorizontal: 4,
			borderColor: "#efeeee",
			backgroundColor: "#510a32",
			padding: 20,
			paddingLeft: 118
		},
		viewStyle: {
			backgroundColor: "#efeeee"
		}
	}
);

export default coursesem3;
