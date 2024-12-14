## Data Schema

Key value store:

```typescript
enum Category {
	Dessert = '__Dessert__',
	Appetizer = '__Appetizer__',
	MainCourse = '__MainCourse__',
	SideDish = '__SideDish__',
	Salad = '__Salad__',
	Soup = '__Soup__',
	Beverage = '__Beverage__',
	Snack = '__Snack__',
	Bread = '__Bread__',
	Breakfast = '__Breakfast__',
	Sauce = '__Sauce__',
	Marinade = '__Marinade__',
	FingerFood = '__FingerFood__',
	Spread = '__Spread__',
	Condiment = '__Condiment__',
}

enum MeasurementUnit {
	Teaspoon = 'tsp',
	Tablespoon = 'tbsp',
	Cup = 'cup',
	Pinch = 'pch',
	Milliliter = 'ml',
	Gram = 'g',
	Unit = 'u',
}

enum Difficulty {
	Easy,
}
```

## how to work

Adding a new recipe

1. save the recipe
1. add to \_\_TAG\_\_ key the recipe's key
1. add to \_\_\<Category\>\_\_ key the recipe's key
