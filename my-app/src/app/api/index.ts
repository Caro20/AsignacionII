import axios from 'axios';

export const fetchData = async (searchTerm: string) => {
  const options = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2',
    params: {
      type: 'public',
      q: searchTerm,
      co2EmissionsClass: 'A+',
      'field[0]': 'uri',
      beta: 'true',
      random: 'true',
      'cuisineType[0]': '',
      'imageSize[0]': '',
      'mealType[0]': '',
      'health[0]': '',
      'diet[0]': '',
      'dishType[0]': ''
    },
    headers: {
      'Accept-Language': 'en',
      'X-RapidAPI-Key': '40e2a7cfb0mshcde9a3299ce5e54p1d7fd2jsn5f539369f0c7',
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
