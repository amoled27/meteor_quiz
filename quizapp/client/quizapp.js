Template.questions.helpers({
	questions: [
		{ 
			no: 1,
			qn: "How are you?",
			op1: "fine1",
			op2: "fine2",
			op3: "fine3",
			op4: "fine4",
			answer: "fine"

	}
	]
});

Template.questions.events({
	'submit .answer': function(event){
		var answer=event.target.answer.value;
		if(answer==questions.answer)
			console.log("correct!");
		else
			console.log("wrong");
	}
});