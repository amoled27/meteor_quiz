Router.configure({
  layoutTemplate : 'basiclayout'
})



// Router.onBeforeAction(function(){
// if(!Meteor.userId()){
//   this.next();
// }
// else{
//   this.redirect('/')
// }

// },{
//   only : ['register']
// });



// Router.onBeforeAction(function(){
//   if(Meteor.userId() && Roles.userIsInRole(Meteor.userId(),'admin')){
//     this.next();
//   }
//   else {
//     this.redirect('/')
//   }

// },{
//   only : ['admin']
// })



// Router.onBeforeAction(function(){

//   if(!Meteor.userId()){
//     this.layout('loginlayout');
//     this.render('login',{to : 'cardcontent'})
//   }
//   else {
//     this.next();
//   }
// },{
//   except : ['about','register','admin']
// })











Router.route('/admin',function(){

	this.render('admin',{to:'maincontent'})

})
Router.route('/questions',function(){

	this.render('questions',{to:'maincontent'})

})

Router.route('/',function(){

	this.render('intro',{to:'maincontent'})

})


Router.route('/register',function(){
  this.layout('loginlayout');
  this.render('register',{to : 'cardcontent'});
})


// -------------JUST FOR TESTING--------
Router.route('/login',function(){
  this.layout('loginlayout');
  this.render('login',{to : 'cardcontent'});
})