export const createReducer = (initialState, handlers) => (
  state = initialState,
  { type, payload },
) => {
  const handler = handlers[type];
  if (handler) {
    return handler(state, payload);
  }
  return state;
};