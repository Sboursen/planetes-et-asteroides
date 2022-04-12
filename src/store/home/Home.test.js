import { getBodiesRequest, getBodiesSuccess, getBodiesFailure } from './Home';

describe('getBodiesRequest', () => {
  it('should return an object with a type GET_ALL_BODIES_REQUEST', () => {
    const action = getBodiesRequest();

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_REQUEST',
      }),
    );
  });
});

describe('getBodiesSuccess', () => {
  it('should return an object with a type GET_ALL_BODIES_SUCCESS and a payload', () => {
    const payload = 'my payload';

    const action = getBodiesSuccess(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_SUCCESS',
        payload,
      }),
    );
  });

  it('should work with array payloads', () => {
    const payload = [
      {
        id: 1,
        value: 'value 1',
      },
      {
        id: 2,
        value: 'value 2',
      },
      {
        id: 2,
        value: 'value 2',
      },
    ];

    const action = getBodiesSuccess(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_SUCCESS',
        payload,
      }),
    );
  });
});

describe('getBodiesFailure', () => {
  it('should return an object with a type GET_ALL_BODIES_FAILURE and a payload', () => {
    const payload = 'error';

    const action = getBodiesFailure(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_FAILURE',
        payload: 'error',
      }),
    );
  });
});
