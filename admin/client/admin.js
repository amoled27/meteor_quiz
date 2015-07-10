Template.admin.events({
'submit form' : function(event){
	// inserting questions
var que = event.currentTarget.question.value;
var option1 = event.currentTarget.option1.value;
var option2 = event.currentTarget.option2.value;
var option3 = event.currentTarget.option3.value;
var option4 = event.currentTarget.option4.value;
var answer = event.currentTarget.answer.value;

if(answer===option1){
	var correctans = 0;
}
else if(answer===option2){  
	var correctans = 1;
}
else if(answer===option3){
	var correctans = 2;
}else if(answer===option4){
	var correctans = 3;
}else{
	Materialize.toast('Failed! None of the options match the answer!!',3000);
	return false;
}

Questions.insert({question:que,options:[option1,option2,option3,option4],answer:correctans});
return false;
}
});