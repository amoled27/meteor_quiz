Template.questions.helpers({
	  questions : [
		{ 
			no: 1,
			id: 1,
			qn: "How are you?",
			op1: "fine1",
			op2: "fine2",
			op3: "fine3",
			op4: "fine4",
			ans: "fine2"
		}
	]
});

var returndata = function(ans_id) {         //function
		// body...
		return Questions.findOne({ans:ans_id});
	}



Template.questions.events({
	'submit form': function(event){
		event.preventDefault();
		var answer=event.target.answer.value;
		console.log(answer);
		console.log(this.answer);

		if(answer==this.answer)
			console.log("correct!");
		else
			console.log("wrong");
		return false;
}
});