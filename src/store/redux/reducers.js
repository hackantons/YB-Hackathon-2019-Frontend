const initialState = {
  user: {
    id: '',
    name: '',
    group: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER_ID': {
      const { id } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          id,
        },
      };
    }
    case 'UPDATE_USER_NAME': {
      const { name } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          name,
        },
      };
    }
    case 'UPDATE_USER_GROUP': {
      const { group } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          group,
        },
      };
    }
    default:
      return state;
  }
}
