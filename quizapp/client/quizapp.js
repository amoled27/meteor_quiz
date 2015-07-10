Template.questions.onRendered(function(){
  // this.subscribe('allyells');
  Session.set('skip',0);
  Session.set('limit',1);
  Session.set('score', 0);

  var arr = []
	while(arr.length < 10){
  	var randomnumber=Math.ceil(Math.random()*20)
  	var found=false;
 	 for(var i=0;i<arr.length;i++){
		if(arr[i]==randomnumber){found=true;break}
 	 }
 	 if(!found)arr[arr.length]=randomnumber;
	}


});

Template.score.helpers({
	displayScore: function(){
		var score=Session.get('score');
		return score;
	}
});


Template.questions.helpers({
	'display': function(){
		var arr = []
		while(arr.length < 10){
  		var randomnumber=Math.ceil(Math.random()*20)
  		var found=false;
 		for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){found=true;break}
 		 }
 		 if(!found)arr[arr.length]=randomnumber;
		}
		return Questions.find({ no: {$in:arr}});
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
		Materialize.toast('+1',2000);

			var score=Session.get('score');
			Session.set('score', score+1);

		}

		else{
			console.log("wrong");
			Materialize.toast('Oops!!Wrong',2000);

		}

		var limit = Session.get('limit');
		var skip = Session.get('skip');
  		Session.set('limit',1+limit);
  		Session.set('skip',1+skip);

  		return false;
		
}
});

