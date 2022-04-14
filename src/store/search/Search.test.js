import configureStore from 'redux-mock-store';
import {
  searchBodiesRequest,
  searchBodiesSuccess,
  searchBodiesFailure,
} from './Search';

const initialState = {
  loading: false,
  bodiesList: [],
  error: '',
};

describe('searchBodiesRequest', () => {
  it('should return an object with a type SEARCH_BODIES_REQUEST', () => {
    const action = searchBodiesRequest();

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/SEARCH/GET_REQUEST',
      }),
    );
  });
});

describe('searchBodiesSuccess', () => {
  it('should return an object with a type SEARCH_BODIES_SUCCESS and a payload', () => {
    const payload = 'my payload';

    const action = searchBodiesSuccess(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/SEARCH/GET_SUCCESS',
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

    const action = searchBodiesSuccess(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/SEARCH/GET_SUCCESS',
        payload,
      }),
    );
  });
});

describe('searchBodiesFailure', () => {
  it('should return an object with a type SEARCH_BODIES_FAILURE and a payload', () => {
    const payload = 'error';

    const action = searchBodiesFailure(payload);

    expect(action).toEqual(
      expect.objectContaining({
        type: 'PLANETES_ET_ASTEROIDES/SEARCH/GET_FAILURE',
        payload: 'error',
      }),
    );
  });
});

describe('searchBodiesReducer', () => {
  it('should return the exact initial state when no action given', () => {
    const mockStore = configureStore([]);
    const store = mockStore(initialState);
    expect(store.getState()).toEqual(initialState);
  });

  it(
    'should return an object that have a property loading set to true ' +
      'on SEARCH_BODIES_REQUEST action',
    () => {
      const mockStore = configureStore([]);
      const store = mockStore(initialState);

      store.dispatch(searchBodiesRequest());

      const actions = store.getActions();
      const expectedPayload = {
        type: 'PLANETES_ET_ASTEROIDES/SEARCH/GET_REQUEST',
      };
      expect(actions).toEqual([expectedPayload]);
    },
  );
});
