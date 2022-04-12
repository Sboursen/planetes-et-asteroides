import nock from 'nock';
import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {
  getBodiesRequest,
  getBodiesSuccess,
  getBodiesFailure,
  getBodies,
  getBodiesReducer,
} from './Home';

const initialState = {
  loading: false,
  bodiesList: [],
  error: '',
};

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

describe('getBodiesReducer', () => {
  describe('getBodiesRequest action call', () => {
    let store;
    beforeEach(() => {
      store = createStore(
        getBodiesReducer,
        applyMiddleware(thunk),
      );
    });

    it('should return the exact initial state', () => {
      expect(store.getState()).toEqual(initialState);
    });

    it.skip('should return an object that have a property loading set to true on getMissionsRequest action', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );

      store.dispatch(getMissionsRequest());

      expect(store.getState().loading).toBeTruthy();
    });

    it.skip('should return an object with the correct value for the missionList property on getMissionsSuccess action', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );
      const mockMissionData = [
        {
          id: 1,
          mission: 'mission-1',
          description: 'mission 1 description',
          reserved: false,
        },
      ];

      store.dispatch(getMissionsSuccess(mockMissionData));

      expect(store.getState().loading).toBeFalsy();
      expect(store.getState().missionsList).toEqual(
        mockMissionData,
      );
    });

    it.skip('should return an object with the correct value for the error property on getMissionsFailure action', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );
      const error = 'error';

      store.dispatch(getMissionsFailure(error));

      expect(store.getState().loading).toBeFalsy();
      expect(store.getState().error).toEqual(error);
    });
  });
});
