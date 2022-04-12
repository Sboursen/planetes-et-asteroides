import axios from 'axios';

export default async function getAllBodies() {
  try {
    const endpoint =
      'https://api.le-systeme-solaire.net/rest/bodies/';

    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    throw new Error(
      `Can not get data from API. request returned error: ${error.messages}`,
    );
  }
}
