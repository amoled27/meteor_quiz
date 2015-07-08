// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no questions available create sample data
  if (Questions.find().count() === 0) {

    // create sample questions
    var samplequestions = [
      {
        question: 'Is Meteor awesome?',
        choices: [
          { option1:'No',value : 1 },
          { option2:'Yes',value : 7 }, //lets keep 7 value for correct answer and random values for others
          { option3:'No',value : 2 },
          { option4:'No',value : 3 }

        ]
      },
      {
        question: 'Who is the PM of India?',
        choices: [
          { option1:'Rahul Gandhi',value : 1 },
          { option2:'Digvijay Singh',value : 2 }, 
          { option3:'Narendra Modi',value : 7 },
          { option4:'Honey Singh',value : 3 }
        ]
      }
    ];

    // loop over each sample question and insert into database
    _.each(samplequestions, function(question) {
      Questions.insert(question);
    });

  }

});
