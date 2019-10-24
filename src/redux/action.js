const timeout = async t => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, t);
  });
};

// types of action
const Types = {
  ADD_LOG: 'ADD_LOG'
};
// actions
const logAction = task => ({
  type: Types.ADD_LOG,
  payload: task
});

export default {
  logAction,
  Types
};

export const logActionsFlow = item => {
  return async dispatch => {
    await timeout(100);
    await dispatch(logAction(item));
  };
};
