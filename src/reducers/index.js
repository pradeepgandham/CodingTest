import {
  UPDATE_USERNAME,
	START_QUIZ,
	GO_BACK,
  GO_TO_NEXT,
	LOG_ANSWER
} from '../constants';

const initialState = {
  name: "",
	currentQuestion: -1,
	totalScore: 0,
	selectedOptions: {},
}

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        name: action.name,
      }
    case START_QUIZ:
      return {
      	...state,
      	currentQuestion: 0,
        totalScore: 0,
        selectedOptions: {},
      }
    case GO_BACK:
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      }
    case GO_TO_NEXT:
      return {
      	...state,
      	currentQuestion: state.currentQuestion + 1,
      }
    case LOG_ANSWER:
      return {
      	...state,
        totalScore: state.totalScore + action.option.score,
      	selectedOptions: {
      		...state.selectedOptions,
      		[state.currentQuestion]: action.option, 
      	},
      }
    default:
      return state
  }
}

export default reducerFunction