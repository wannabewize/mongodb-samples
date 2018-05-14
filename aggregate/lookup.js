use samples;

db.members.insert({_id:1, group:1, name:'소원', birthday:'1995.12.07', position:'리더, 서브보컬'});
db.members.insert({_id:2, group:1, name:'예린', birthday:'1996.08.19', position:'서브보컬'});
db.members.insert({_id:3, group:1, name:'은하', birthday:'1997.05.30', position:'리드보컬'});
db.groups.insert({_id:1, name:'여자친구', debut:'2015.01.16', label:'로엔엔터테인먼트'});

db.groups.aggregate({$lookup:{
   from:'members',
   localField : '_id',
   foreignField : 'group',
   as : 'members'
}});

db.groups.aggregate([{$lookup:{
   from:'members',
   localField : '_id',
   foreignField : 'group',
   as : 'members'
}}, {$project:{ _id:1, name:1, members:{name:1, position:1}}}]);



use idols

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


db.members.insertMany([
   {name:'태연', team:"트와이스"},
   {name:'윤아', team:"트와이스"},
   {name:'서현', team:"트와이스"},

   {name:'아이린', team:"레드벨벳"},
   {name:'웬디', team:"레드벨벳"},

   {name:'GD', team:"빅뱅"},
   {name:'태양', team:"빅뱅"},

   {name:'수현', team:"악동뮤지션"},
   {name:'찬혁', team:"악동뮤지션"},

   {name:'지수', team:"블랙핑크"},
   {name:'제니', team:"블랙핑크"},
   {name:'로제', team:"블랙핑크"},
   {name:'리사', team:"블랙핑크"},

   {name:'Jungyeon', team:"트와이스"},
   {name:'Sana', team:"트와이스"},
   {name:'Tzuyu', team:"트와이스"}
])

db.groups.aggregate(
   {$lookup:{
      from:'team',
      localField : 'name',
      foreignField : 'member_name',
      as : 'members'
}});