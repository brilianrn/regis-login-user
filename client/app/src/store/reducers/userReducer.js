const initialState = {
  users: [],
  user: {}
};

function userReducer(state = initialState, action) {
  const { payload, type } = action;

  if (type == 'users/setUsers') {
    return { ...state, users: payload };
  } else if (type == 'user/setUser') {
    return { ...state, user: payload};
  }

  return state;
}

export default userReducer;