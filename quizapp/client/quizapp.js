Template.questions.helpers({
	'display': function(){
		return Questions.find();
	}
});


Template.questions.events({
	'submit form': function(event){
		event.preventDefault();
		var answer=event.target.choice.value;
		if(answer==this.answer)
			console.log("correct!");
		else
			console.log("wrong");
		return false;
}
});

