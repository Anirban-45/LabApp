import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const profile = () => {
	let name = "Anirban Tasfin Azad", ID= 170042045, Room = "305N", Email = "tasfinazad@iut-dhaka.edu";
	return(
		<View style = {{backgroundColor:"#white", height:660}}>
			<View style = {styles.ImageBody}>
				<Image
					source={{uri: "https://image.flaticon.com/icons/png/512/164/164600.png"}}
					style={{width: 200, height: 200, marginTop: 40, marginBottom:30}}
				/>
			</View>
			<View style = {styles.infoBody}>
				<Text style = {styles.infotext}>Name: {name}</Text>
				<Text style = {styles.infotext}>Student ID: {ID}</Text>
				<Text style = {styles.infotext}>Room no: {Room}</Text>
				<Text style = {styles.infotext}>E-mail: {Email}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create(
	{
		ImageBody: {
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: "cadetblue"
		},
		infotext: {
			fontSize:16,
			marginBottom:6,
			marginLeft:20
		},
		infoBody: {
			justifyContent: 'center',
			backgroundColor: "ivory",
			margin:10,
			width: 340,
			height: 150,
			borderWidth: 1,
			borderColor: "black",
			borderRadius: 8
		}
	}
);

export default profile;
