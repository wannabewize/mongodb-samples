use samples

db.groups.insertMany([
   {name:"소녀시대", agency:"SM", member: 9},
   {name:"동방신기", agency:"SM", member: 2},
   {name:"레드벨벳", agency:"SM", member: 5},
   {name:"샤이니", agency:"SM", member: 4},
   {name:"빅뱅", agency:"YG", member: 5},
   {name:"악동뮤지션", agency:"YG", member: 2},
   {name:"블랙핑크", agency:"YG", member: 4},
   {name:"트와이스", agency:"JPY", member: 9},
   {name:"2PM", agency:"JPY", members: 6}
])

// match
db.groups.aggregate({ $match: {agency: "JPY"}})

// 멤버가 4인 이상 그룹
db.groups.aggregate({ $match: {member: {$gt: 4}}})

// group

// 전체 멤버수
db.groups.aggregate({ $group:{_id:null, sum:{ $sum:"$member"}}})

// 각 소속사 별 멤버수 합
db.groups.aggregate({ $group:{_id:"$agency", sum:{ $sum:"$member"}}})


// match - group

db.groups.aggregate([
   { $match: {member: {$gt: 4}}},
   { $group:{_id:"$agency", sum:{ $sum:"$member"}}}
])

db.groups.aggregate([
   { $match: {member: {$gt: 4}}},
   { $group:{_id:"$agency", count:{ $count:"$name"}}}
])

db.groups.aggregate([
   { $match: {member: {$gt: 4}}},
   { $group:{_id:"$agency"}}
])

db.groups.aggregate([
   { $match: {member: {$gt: 4}}},
   { $count:"count"}
])