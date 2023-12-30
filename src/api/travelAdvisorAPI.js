import axios from 'axios';

export const getPlacesData = async (type ,lat,lng) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
      params: {
        latitude: lat,
        longitude: lng,
      },
      headers: {
        'X-RapidAPI-Key': '86df148ce0mshdeb017a579c3e2ap17c39djsn2666a93732f1',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};


