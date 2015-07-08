// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no questions available create sample data
  if (Questions.find().count()==0) {

    // create sample questions
    var samplequestions = [

      {

        "quesion": "Is meteor awesome?",
        "answer": 1,
        "options": [
                      "no",
                      "yes",
                      "no",
                      "no"
                    ]
      }
    ];

    // loop over each sample question and insert into database
    _.each(samplequestions, function(question) {
      Questions.insert(question);
    });

  }

});
