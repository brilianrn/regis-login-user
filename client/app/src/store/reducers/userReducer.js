const initialState = {
  users: []
};

function userReducer(state = initialState, action) {
  const { payload, type } = action;

  if (type == 'users/setUsers') {
    return { ...state, users: payload };
  }

  return state;
}

export default userReducer;