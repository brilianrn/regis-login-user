const initialState = {
  admin: {}
};

function adminReducer(state = initialState, action) {
  const { payload, type } = action;

  if (type == 'admin/setAdmin') {
    return { ...state, admin: payload };
  }

  return state;
}

export default adminReducer;