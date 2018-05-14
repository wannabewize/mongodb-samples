use samples;

// 새롭게 배열로 만들기
db.singers.insert({name:"Imagine Dragons", songs: ["Believer", "Thunder", "Radioactive"]})
db.singers.insert({name:"Avicci", songs: ["Wake me up", "The Nights"]})

db.singers.insert({name:"IU"})
// 배열에 추가
db.singers.update({name:"IU"}, {$push:{songs:"좋은날"}})
db.singers.update({name:"IU"}, {$push:{songs:"금요일에 만나요"}})
db.singers.update({name:"IU"}, {$push:{songs:"누구나 비밀은 있다"}})

// 원소 포함하는 도큐먼트 찾기
db.singers.find({songs: "좋은날"})

// 모든 원소를 포함하는 배열을 가진 도큐먼트 얻기
db.singers.find({songs: {$all:["Thunder", "Believer"]}})

// 원소의 개수 : $size
db.singers.find({songs: {$size:2}})

// 원소가 하나라도 포함된 배열을 가진 도큐먼트 얻기
db.singers.find({songs: {$in:["Thunder", "좋은날"]}})

// 배열에서 특정 원소 제거
db.singers.update({name:"IU"}, {$pull: {songs:"좋은날"}})

// 배열에서 마지막 원소 제거. -1은 첫번째 원소 제거
db.singers.update({name:"IU"}, {$pop: {songs:1}})