use moviest

db.movies.insertMany([
   {title:'Infinity War', director:'Anthony Russo', year:2018},
   {title:'Iron Man', year:2008},
   {title:'Captain America'},
   {title:'Guardians of the Galaxy', year:2012},
   {title:'메멘토', director:'크리스토퍼 놀란', year:2000 },
   {title:'다크 나이트', director:'크리스토퍼 놀란', year:2008 },
   {title:'인셉션', director:'크리스토퍼 놀란', year:2010 },
   {title:'인터스텔라', director:'크리스토퍼 놀란', year:2014 },
   {title:'덩케르크', director:'크리스토퍼 놀란', year:2017 },
   {title:'메멘토', director:'크리스토퍼 놀란', year:2000 },
   {title:"아마겟돈", director:"J. J. Abrams"},
   {title:"미션 임파서블3", director:"J. J. Abrams"},
   {title:"스타워즈", director:"J. J. Abrams"}
])

// 도큐먼트 수정
db.movies.update({director:'크리스토퍼 놀란'}, {$set: {director:"Christoper Norlan"}})
db.movies.update({title: "Guardians of the Galaxy"}, {$set: {year: 2014} })

// 다수의 도큐먼트 수정
db.movies.updateMany({director:'크리스토퍼 놀란'}, {$set: {director:"Christoper Norlan"}})


