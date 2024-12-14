import {Tabs} from 'expo-router';
import {Platform, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {ICON_SIZE, LANGAUAGE_MAP, LanguageContext} from '../../constants';
import {HapticTab} from '@/components/HapticTab';
import React from 'react';
import {Context, createContext} from 'react';

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const language = 'en';

	return (
		<LanguageContext.Provider value={LANGAUAGE_MAP[language]}>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
					headerShown: false,
					tabBarButton: HapticTab,
					tabBarStyle: Platform.select({
						ios: {
							// Use a transparent background on iOS to show the blur effect
							position: 'absolute',
						},
						default: {},
					}),
					tabBarInactiveTintColor:
						Colors[colorScheme ?? 'light'].tabIconDefault,
				}}>
				<Tabs.Screen
					name='recipe'
					options={{
						title: LANGAUAGE_MAP[language].categories.recipe,
						tabBarIcon: ({color}) => (
							<FontAwesome5 name='list' size={ICON_SIZE} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name='index'
					options={{
						title: LANGAUAGE_MAP[language].categories.home,
						tabBarIcon: ({color}) => (
							<FontAwesome5 name='home' size={ICON_SIZE} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name='categories'
					options={{
						title: LANGAUAGE_MAP[language].categories.categories,
						tabBarIcon: ({color}) => (
							<FontAwesome5 name='tags' size={ICON_SIZE} color={color} />
						),
					}}
				/>
			</Tabs>
		</LanguageContext.Provider>
	);
}
