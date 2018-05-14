use samples;


db.choices.insert({_id:1, options:[{option:"짜장"},{option:"짬뽕"}]});

db.choices.update({_id:1}, {$push:{"options.0.users":"iu"}});
db.choices.update({_id:1}, {$push:{"options.1.users":"inna"}});

/*
{ "_id" : 1,
  "options" : [
   { "option" : "짜장", "users" : [ "iu" ] },
   { "option" : "짬뽕", "users" : [ "inna" ] } ]
}
*/
