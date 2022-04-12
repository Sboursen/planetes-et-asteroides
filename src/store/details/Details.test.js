import {
  getBodyRequest,
  getBodySuccess,
  getBodyFailure,

} from './Details';

describe('getBodiesRequest', () => {
  it('should return an object with a type GET_BODY_REQUEST', () => {
    const action = getBodyRequest();

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/BODY/GET_REQUEST',
      }),
    );
  });
});

describe('getBodySuccess', () => {
  it('should return an object with a type GET_BODY_SUCCESS and a payload', () => {
    const payload = 'my body';

    const action = getBodySuccess(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/BODY/GET_SUCCESS',
        payload,
      }),
    );
  });

  it('should work with object payloads', () => {
    const payload = {
      id: 1,
      value: 'value 1',
    };

    const action = getBodySuccess(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/BODY/GET_SUCCESS',
        payload,
      }),
    );
  });
});

describe('getBodiesFailure', () => {
  it('should return an object with a type GET_BODY_FAILURE and a payload', () => {
    const payload = 'error';

    const action = getBodyFailure(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/BODY/GET_FAILURE',
        payload: 'error',
      }),
    );
  });
});
