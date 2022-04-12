import { getAllBodies } from '../api/solarSystemApi';

const GET_ALL_BODIES_REQUEST =
  'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_REQUEST';
const GET_ALL_BODIES_SUCCESS =
  'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_SUCCESS';
const GET_ALL_BODIES_FAILURE =
  'PLANETES_ET_ASTEROIDES/ALL_BODIES/GET_FAILURE';

const initialState = {
  loading: false,
  missionsList: [],
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
    getBodiesRequest();
    getAllBodies()
      .then((response) => {
        const { bodiesList } = response.data;
        dispatch(getBodiesSuccess(bodiesList));
      })
      .catch((error) => {
        dispatch(getBodiesFailure(error));
      });
  };
}
