import { getAllBodies } from '../api/solarSystemApi';
import orderByPriority from '../utils';

const GET_ALL_BODIES_REQUEST = 'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_REQUEST';
const GET_ALL_BODIES_SUCCESS = 'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_SUCCESS';
const GET_ALL_BODIES_FAILURE = 'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_FAILURE';

const initialState = {
  loading: false,
  bodiesList: [],
  error: '',
};

export function getBodiesRequest() {
  return {
    type: GET_ALL_BODIES_REQUEST,
  };
}

export function getBodiesSuccess(bodiesList) {
  return {
    type: GET_ALL_BODIES_SUCCESS,
    payload: bodiesList,
  };
}

export function getBodiesFailure(error) {
  return {
    type: GET_ALL_BODIES_FAILURE,
    payload: error,
  };
}

export function getBodies() {
  return (dispatch) => {
    dispatch(getBodiesRequest());
    getAllBodies()
      .then((response) => {
        let { bodies: bodiesList } = response.data;
        bodiesList = orderByPriority(bodiesList, 'bodyType');
        dispatch(getBodiesSuccess(bodiesList));
      })
      .catch((error) => {
        dispatch(getBodiesFailure(error));
      });
  };
}

export default function getBodiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BODIES_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_BODIES_SUCCESS:
      return {
        loading: false,
        bodiesList: action.payload,
        error: '',
      };

    case GET_ALL_BODIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
