export interface Ingredient {
  text: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  dishType: String;
  cuisineType: String;
  ingredients: Ingredient[];
}

export interface RecipeHit {
  recipe: Recipe;
}

export interface Data {
  hits: RecipeHit[];
}
