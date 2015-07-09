Template.questions.onRendered(function(){
  // this.subscribe('allyells');
  Session.set('skip',0);
  Session.set('limit',1);
  //session score, 
});

Template.questions.helpers({
	'display': function(){
		return Questions.find();
	},
	'isgt1':function(){
		return Questions
	}
});


Template.questions.events({
	'submit form': function(event){
		event.preventDefault();
		var answer=event.target.choice.value;
		if(answer==this.answer){
			console.log("correct!");
		}

		else{
			console.log("wrong");
		}

		var limit = Session.get('limit');
		var skip = Session.get('skip');
  		Session.set('limit',1+limit);
  		Session.set('skip',1+skip);

  		return false;
		
}
});

