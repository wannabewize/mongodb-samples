use samples;

// 새롭게 배열로 만들기
db.singers.insert({name:"Imagine Dragons", songs: ["Believer", "Thunder", "Radioactive"]})

db.singers.insert({name:"IU"})
// 배열에 추가
db.singers.update({name:"IU"}, {$push:{songs:"좋은날"}})
db.singers.update({name:"IU"}, {$push:{songs:"금요일에 만나요"}})
db.singers.update({name:"IU"}, {$push:{songs:"누구나 비밀은 있다"}})


// 찾기
db.singers.find({songs: "좋은날"})

// 원소 제거
db.singers.update({name:"IU"}, {$pull: {songs:"좋은날"}})
// songs 에서 마지막 원소 제거
db.singers.update({name:"IU"}, {$pop: {songs:1}})