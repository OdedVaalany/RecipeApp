import RecipeItem from '@/components/RecipeItem';
import {useLanguage} from '@/constants';
import {useContext, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const RecipePage = () => {
	const language = useLanguage();
	const [list, setList] = useState([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{language.recipe.header}</Text>
			<FlatList data={list} renderItem={({item}) => <RecipeItem />} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
		padding: 5,
		flex: 1,
	},
	title: {
		fontSize: 36,
		textAlign: 'left',
	},
});

export default RecipePage;
