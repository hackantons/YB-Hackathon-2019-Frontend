const initialState = {
  user: {
    id: '',
    name: '',
    group: '',
  },
  messages: [],
  gameStarted: 1573860611162,
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
    case 'ADD_MESSAGES': {
      const { messages } = action.payload;
      return {
        ...state,
        messages: state.messages.concat(messages),
      };
    }

    default:
      return state;
  }
}
