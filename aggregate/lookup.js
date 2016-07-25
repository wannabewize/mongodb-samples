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
