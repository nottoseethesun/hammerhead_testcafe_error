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
