import React from 'react'
import { shallow } from 'enzyme';
import Question from './question'
import { questions } from '../constants';

function setup() {
  const actions = {
    logAnswer: jest.fn()
  };

  const component = shallow(
    <Question
      question={questions[0]}
      logAnswer={actions.logAnswer}
      selectedOptions={{}}
    />
  )

  return {
    component: component,
    title: component.find('h1'),
    text: component.find('h3'),
    buttons: component.find('input[type="button"]'),
    actions
  }
}

describe('Question component', () => {
  it('should display question title', () => {
    const { title } = setup();
    expect(title.text()).toMatch(questions[0].title);
  })

  it('should display question text', () => {
    const { text } = setup();
    expect(text.text()).toMatch(questions[0].text);
  })

  it('should have 4 option buttons', () => {
    const { buttons } = setup()
    expect(buttons).toHaveLength(4);
  })
})
