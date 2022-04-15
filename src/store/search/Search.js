import { searchBodiesByName } from '../api/solarSystemApi';

const SEARCH_BODIES_REQUEST = 'PLANETES_ET_ASTEROIDES/SEARCH/GET_REQUEST';
const SEARCH_BODIES_SUCCESS = 'PLANETES_ET_ASTEROIDES/SEARCH/GET_SUCCESS';
const SEARCH_BODIES_FAILURE = 'PLANETES_ET_ASTEROIDES/SEARCH/GET_FAILURE';

const initialState = {
  loading: '',
  bodiesList: [],
  error: '',
};

export function searchBodiesRequest(searchName) {
  return {
    type: SEARCH_BODIES_REQUEST,
    payload: searchName,
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
    dispatch(searchBodiesRequest(name));
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
      return { ...state, loading: action.payload };

    case SEARCH_BODIES_SUCCESS:
      return {
        ...state,
        bodiesList: action.payload,
      };

    case SEARCH_BODIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
