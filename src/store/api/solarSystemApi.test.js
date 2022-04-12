import getAllBodies from './solarSystemApi';

describe('getAllBodies', () => {
  it('should return an object that has "bodies" property pointing an array', async () => {
    const response = await getAllBodies();

    await expect(response.status).toEqual(200);
  });
});
