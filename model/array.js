use samples;

db.array.remove({});

db.array.insert({name:"IU"});
// 배열에 추가
db.array.update({name:"IU"},{$push:{songs:"좋은날"}})
db.array.update({name:"IU"},{$push:{songs:"좋은날"}})

