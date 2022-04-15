import {
  getAllBodies,
  getBodyById,
} from './solarSystemApi';

describe('getAllBodies', () => {
  it('should return an response with status 200', async () => {
    const response = await getAllBodies();

    await expect(response.status).toEqual(200);
  });
});

describe('getBodyById', () => {
  it('should return an response with status 200', async () => {
    const response = await getBodyById('lune');

    await expect(response.status).toEqual(200);
  });
});
