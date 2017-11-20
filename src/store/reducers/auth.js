import * as ActionTypes from '../../constants/actionTypes';

const initialState = {
  token: localStorage.getItem('user.token'),
  user: JSON.parse(localStorage.getItem('user.data')),
  error: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
  }
}
