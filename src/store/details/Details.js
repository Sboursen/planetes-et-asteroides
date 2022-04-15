import { getBodyById } from '../api/solarSystemApi';

const GET_BODY_REQUEST = 'PLANETES_ET_ASTEROIDES/BODY/GET_REQUEST';
const GET_BODY_SUCCESS = 'PLANETES_ET_ASTEROIDES/BODY/GET_SUCCESS';
const GET_BODY_FAILURE = 'PLANETES_ET_ASTEROIDES/BODY/GET_FAILURE';

const initialState = {
  loading: false,
  body: '',
  error: '',
};

export function getBodyRequest() {
  return {
    type: GET_BODY_REQUEST,
  };
}

export function getBodySuccess(body) {
  return {
    type: GET_BODY_SUCCESS,
    payload: body,
  };
}

export function getBodyFailure(error) {
  return {
    type: GET_BODY_FAILURE,
    payload: error,
  };
}

export function getBody(id) {
  return (dispatch) => {
    dispatch(getBodyRequest());
    getBodyById(id)
      .then((response) => {
        const { data: body } = response;
        dispatch(getBodySuccess(body));
      })
      .catch((error) => {
        dispatch(getBodyFailure(error));
      });
  };
}

export default function getBodyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BODY_REQUEST:
      return { ...state, loading: true };

    case GET_BODY_SUCCESS:
      return {
        loading: false,
        body: action.payload,
        error: '',
      };

    case GET_BODY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
