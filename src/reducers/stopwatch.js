const initialState = {
  startTime: undefined,
  stopTime: undefined,
  baseTime: undefined
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "RESET_TIMER":
      return {
        ...state,
        baseTime: 0,
        startTime: state.startTime ? action.now : undefined,
        stopTime: state.stopTime ? action.now : undefined
      };
    case "START_TIMER":
      return {
        ...state,
        baseTime: action.baseTime,
        startTime: action.now,
        stopTime: undefined
      };
    case "STOP_TIMER":
      return {
        ...state,
        stopTime: action.now
      }
    default:
      return state;
  }
}
export default reducer