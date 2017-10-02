import {
	UPDATE_USERNAME,
	START_QUIZ,
	GO_BACK,
	GO_TO_NEXT,
	LOG_ANSWER
} from '../constants';

export const updateUsername = (name) =>({
	type: UPDATE_USERNAME,
	name
});

export const startQuiz = () =>({
	type: START_QUIZ,
});

export const goBack = () =>({
	type: GO_BACK,
});

export const goToNext = () =>({
	type: GO_TO_NEXT,
});

export const logAnswer = (option) =>({
	type: LOG_ANSWER,
	option,
});