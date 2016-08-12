use samples;

db.test.insert({_id:1, value:10});
db.test.insert({_id:2, value:20});
db.test.insert({_id:3, value:30});


db.test.aggregate({
   $project : {
      value : 1
   }
});

db.test.aggregate({
   $project : {
      value : 1,
      over20 : { 
         $cond : [ { $gt : ['$value', 20 ] }, true, false ]
       }
   }
});