import { searchBodiesByName } from '../api/solarSystemApi';

const SEARCH_BODIES_REQUEST = 'PLANETES_ET_ASTEROIDES/SEARCH/GET_REQUEST';
const SEARCH_BODIES_SUCCESS = 'PLANETES_ET_ASTEROIDES/SEARCH/GET_SUCCESS';
const SEARCH_BODIES_FAILURE = 'PLANETES_ET_ASTEROIDES/SEARCH/GET_FAILURE';

const initialState = {
  loading: false,
  bodiesList: [],
  error: '',
};

export function searchBodiesRequest() {
  return {
    type: SEARCH_BODIES_REQUEST,
  };
}

export function searchBodiesSuccess(bodiesList) {
  return {
    type: SEARCH_BODIES_SUCCESS,
    payload: bodiesList,
  };
}

export function searchBodiesFailure(error) {
  return {
    type: SEARCH_BODIES_FAILURE,
    payload: error,
  };
}

export function searchBodies(name) {
  return (dispatch) => {
    dispatch(searchBodiesRequest());
    searchBodiesByName(name)
      .then((response) => {
        const { bodies: bodiesList } = response.data;
        dispatch(searchBodiesSuccess(bodiesList));
      })
      .catch((error) => {
        dispatch(searchBodiesFailure(error));
      });
  };
}

export default function searchBodiesReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BODIES_REQUEST:
      return { ...state, loading: true };

    case SEARCH_BODIES_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        bodiesList: action.payload,
        error: '',
      };

    case SEARCH_BODIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
