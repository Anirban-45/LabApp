import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



const HomeScreen = (props) =>{
	return(
		<View style = {{backgroundColor: "#efeeee"}}>


			<View style = {styles.viewStyle}>
				<Text style = {{fontSize:28}}>Welcome!!</Text>
				<Image
				source={{uri: "https://upload.wikimedia.org/wikipedia/en/d/d0/Islamic_University_of_Technology_%28coat_of_arms%29.png"}}
				style={{width: 188, height: 316, marginTop:10}}
				/>

				<Text style = {styles.textStyle}>Department of CSE</Text>
				<Text style ={{fontSize: 20, color: "#344e5c", margin: 15}} >Program : SWE</Text>
				<View style={{marginBottom:10}}>
					<TouchableOpacity
					style= {{width:100, height:30, backgroundColor:"#356c7d", paddingLeft: 23, padding: 3, borderRadius:3}}
					onPress = {
						function (){
							props.navigation.navigate("Profile");
						}
					}>
						<Text style = {{fontSize:17,color:'white'}}>Profile</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{marginBottom:10}}>
				<Button color= "#e17147"
				title = "Semester wise Course list"
				onPress = {
					function (){
						props.navigation.navigate("Semesters");
					}
				}
				/>
			</View>
			<View style={{marginBottom:30, justifyContent: 'space-between'}}>
				<Button color= "#e17147"
				title = "List of Faculty members"
				onPress = {
					function (){
						props.navigation.navigate("Faculties");
					}
				}
				/>
			</View>

		</View>
	)
}

const styles = StyleSheet.create(
	{
		textStyle: {
    		marginTop: 10,
			fontSize: 30,
			color: "#344e5c",

		},
		viewStyle: {
			margin:10,
			alignItems: 'center',
    		justifyContent: 'center',
		}
	}
);

export default HomeScreen;
