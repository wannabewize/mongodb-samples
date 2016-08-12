use samples

db.values.insert({_id:1, values : [1, 2, 3, 4]});
db.values.insert({_id:2, values : [1, 2, 4, 5]});
db.values.insert({_id:3, values : [1, 2]});
db.values.insert({_id:4, values : [3]});


db.values.aggregate({
   $project:{
      values : 1,
      count : {$size:'$values'}
   }
});


db.values.aggregate({
   $project:{
      values : 1,
      inThree : { 
         $cond : [ { $setIsSubset : [ [3], '$values' ] }, true, false]
      }
   }
});