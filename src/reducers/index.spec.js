import deepFreeze from 'deep-freeze';
import reducer from './index';
import { updateUsername, startQuiz, goToNext, } from '../actions';

describe('reducer', () => {
  const stateBefore = {
    name: "",
    currentQuestion: -1,
    totalScore: 0,
    selectedOptions: {},
  }
  it('should provide the initial state', () => {
    expect(reducer(undefined, {})).toEqual(stateBefore)
  })

  it('should update username', () => {
    const action = updateUsername('sam')
    const stateAfter = {
      name: "sam",
      currentQuestion: -1,
      totalScore: 0,
      selectedOptions: {},
    }
    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(reducer(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle startQuiz action', () => {
    const action = startQuiz()
    const stateAfter = {
      name: "",
      currentQuestion: 0,
      totalScore: 0,
      selectedOptions: {},
    }

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(reducer(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle goToNext action', () => {
    
    const action = goToNext()
    const stateAfter = {
      name: "",
      currentQuestion: 0,
      totalScore: 0,
      selectedOptions: {},
    }

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(reducer(stateBefore, action)).toEqual(stateAfter)
  })

})
