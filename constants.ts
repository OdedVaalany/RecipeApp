import {createContext, useContext} from 'react';

export const ICON_SIZE: number = 20;

export interface languageMap {
	categories: {
		categories: string;
		home: string;
		recipe: string;
	};
	recipe: {
		header: string;
	};
}

export const LanguageContext = createContext<languageMap>({} as languageMap);

export const useLanguage = () => useContext(LanguageContext);

export const LANGAUAGE_MAP: {en: languageMap; he: languageMap} = {
	en: {
		categories: {
			categories: 'Categories',
			home: 'Home',
			recipe: 'Recipe',
		},
		recipe: {
			header: 'Recipe',
		},
	},
	he: {
		categories: {
			categories: 'קטגוריות',
			home: 'בית',
			recipe: 'מתכון',
		},
		recipe: {
			header: 'מתכון',
		},
	},
};
