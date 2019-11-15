export const updateUserId = id => ({
  type: 'UPDATE_USER_ID',
  payload: {
    id,
  },
});

export const updateUserName = name => ({
  type: 'UPDATE_USER_NAME',
  payload: {
    name,
  },
});

export const updateUserGroup = group => ({
  type: 'UPDATE_USER_GROUP',
  payload: {
    group,
  },
});
