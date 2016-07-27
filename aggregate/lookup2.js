use samples;

db.user.insert({_id:1, name:'IU'});
db.user.insert({_id:2, name:'유인나'});
db.user.insert({_id:3, name:'태연'});

db.post.insert({_id:1, writerId:1, text:'IU의 첫 번째 글'});
db.post.insert({_id:2, writerId:1, text:'IU의 두 번째 글'});
db.post.insert({_id:3, writerId:2, text:'유인나의 첫 번째 글'});


db.post.aggregate(
   {$lookup:
      {from:'user',
      localField:'writerId',
      foreignField:'_id',
      as:'writer'}
   });  

db.post.aggregate(
   {$lookup:
      {from:'user',
      localField:'writerId',
      foreignField:'_id',
      as:'writer'}
   },
   {
      $unwind:'$writer'
   });