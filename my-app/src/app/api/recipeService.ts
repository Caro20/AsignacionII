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
      'dishType[0]': 'Biscuits and cookies',
    },
    headers: {
      'Accept-Language': 'en',
      'X-RapidAPI-Key': '5133916a96mshafccbc93f47eb20p1f7fc2jsn97483878fbf8',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; 
  } catch (error) {
    console.error(error);
    return null;
  }
};
