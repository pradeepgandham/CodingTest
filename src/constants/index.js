export const START_QUIZ = 'START_QUIZ';
export const GO_BACK = 'GO_BACK';
export const GO_TO_NEXT = 'GO_TO_NEXT';
export const LOG_ANSWER = 'LOG_ANSWER';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export const questions = [{
	title: "Lifecycle hooks",
	text: "Which among these is not a lifecycle method?",
	options: [
		{
			text:"componentWillReceiveProps",
			score: 0
		},
		{
			text:"shouldComponentUpdate",
			score: 0
		},
		{
			text:"componentDidUpdate",
			score: 0
		},
		{
			text:"componentDidUnmount",
			score: 1
		}
	]	
},
{
	title: "Render function",
	text: "Which among these is an invalid return for a render function",
	options: [
		{
			text:"String and number",
			score: 0
		},
		{
			text:"Portal",
			score: 0
		},
		{
			text:"null",
			score: 0
		},
		{
			text:"undefined",
			score: 1
		}
	]	
},
{
	title: "JavaScript typeof",
	text: "Find the odd one out.",
	options: [
		{
			text:"typeof null",
			score: 0
		},
		{
			text:"typeof undefined",
			score: 1
		},
		{
			text:"typeof {}",
			score: 0
		},
		{
			text:"typeof []",
			score: 0
		}
	]	
},
{
	title: "JavaScript Array",
	text: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
	options: [
		{
			text:"push()",
			score: 0
		},
		{
			text:"pop()",
			score: 0
		},
		{
			text:"map()",
			score: 1
		},
		{
			text:"join()",
			score: 0
		}
	]	
}]