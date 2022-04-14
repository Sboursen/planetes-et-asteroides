import axios from 'axios';

export async function getAllBodies() {
  const endpoint = 'https://api.le-systeme-solaire.net/rest/bodies/';

  try {
    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    throw new Error(
      `Can not get data from ${endpoint}. request returned error: ${error.messages}`,
    );
  }
}

export async function getBodyById(id) {
  const baseEndpoint = 'https://api.le-systeme-solaire.net/rest/bodies/';

  const endpoint = `${baseEndpoint}${id}/`;
  try {
    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    throw new Error(
      `Can not get data from ${endpoint}. request returned error: ${error.messages}`,
    );
  }
}
