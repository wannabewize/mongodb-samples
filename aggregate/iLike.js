use samples;

db.users.remove({});
db.articles.remove({});

db.users.insert({_id:1, name:'아이유'});
db.users.insert({_id:2, name:'태연'});
db.users.insert({_id:3, name:'설현'});

db.articles.insert({_id:1, author:1, text:'아이유가 쓴 글1', likes:[]});
db.articles.insert({_id:2, author:1, text:'아이유가 쓴 글2', likes:[]});
db.articles.insert({_id:3, author:2, text:'태연이 쓴 글1', likes:[]});


// 아이유가 쓴 글1을 태연이 좋아함
db.articles.update({_id:1}, {$push:{likes:2}});
// 아이유가 쓴 글1을 설현이 좋아함
db.articles.update({_id:1}, {$push:{likes:3}});
// 아이유가 쓴 글2를 설현이 좋아함
db.articles.update({_id:2}, {$push:{likes:3}});

// 글을 글 작성자 이름과 출력
db.articles.aggregate(
   {
      $lookup:{
         localField : 'author',
         from:'users',
         foreignField : '_id',
         as : 'writer'
      }
   }
);


// 설현이 글을 좋아하는가?
db.articles.aggregate(
   {$project:{
      text : 1,
      likes : 1,
      likeCount : { $size : '$likes' },
      sulhyunLike : {
         $cond : [ { $setIsSubset : [ [3], '$likes' ] } , true, false]
      }
   }}
);


// 글 목록과 작성자 이름. 태연이 글을 좋아하는가?
db.articles.aggregate([
   {
      $lookup:{
         localField : 'author',
         from:'users',
         foreignField : '_id',
         as : 'writer'
      }
   },
   {
      $project:{
         text : 1,
         likes : 1,
         writer : 1,
         likeCount : { $size : '$likes' },
         teayonLike : {
            $cond : [ { $setIsSubset : [ [2], '$likes' ] } , true, false]
         }
      }
   }
]);

