import axios from 'axios';

export const fetchData = async (searchTerm: string) => {
  const options = {
    method: 'GET',
  url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2',
  params: {
    type: 'public',
    co2EmissionsClass: 'A+',
    'field[0]': 'uri',
    beta: 'true',
    random: 'true',
    'cuisineType[0]': 'American',
    'imageSize[0]': 'LARGE',
    'mealType[0]': 'Breakfast',
    'health[0]': 'alcohol-cocktail',
    'diet[0]': 'balanced',
    'dishType[0]': 'cookies'
  },
  headers: {
    'Accept-Language': 'en',
    'X-RapidAPI-Key': 'e3de8e6962msh6f52643c5be5b90p16915fjsne69e0d26d9f5',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  }
  };

  try {
    const response = await axios.request(options);
    return response.data; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error(error);
    return null;
  }
};
