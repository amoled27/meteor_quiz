Router.configure({
  layoutTemplate : 'basiclayout'
})

Router.route('/admin',function(){

	this.render('admin',{to:'maincontent'})

})
Router.route('/questions',function(){

	this.render('questions',{to:'maincontent'})

})

Router.route('/',function(){

	this.render('intro',{to:'maincontent'})

})


