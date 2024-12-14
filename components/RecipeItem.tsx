import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useLanguage} from '@/constants';
import {FontAwesome5} from '@expo/vector-icons';

const RecipeItem = () => {
	const language = useLanguage();
	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/images/react-logo.png')}
				style={styles.image}
			/>
			<View>
				<Text>hello</Text>
				<Text>hello</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 3,
		textAlign: 'left',
		flex: 1,
		// backgroundColor: 'blue',
		// borderColor: 'black',
		// borderWidth: 1,
		width: '100%',
		flexDirection: 'row',
		// justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	image: {
		width: '10%',
		minWidth: 50,
		minHeight: 50,
		height: 'auto',
		objectFit: 'contain',
	},
});

export default RecipeItem;
