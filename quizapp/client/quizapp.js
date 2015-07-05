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
	'submit .answer': function(event){
		var answer=event.target.answer.value;
		var ans_id = event.target.dataset.trueans; //answer passed is stored in ans_id
		console.log(ans_id);
		if(answer==returndata(ans_id)) //checks if ans_id is true
			console.log("correct!");
		else
			console.log("wrong");
	}
});