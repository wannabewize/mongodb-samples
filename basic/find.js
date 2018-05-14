use moviest

// 초기 데이터
db.movies.insertMany([
   {title:'Infinity War', director:'Anthony Russo', year:2018},
   {title:'Iron Man', year:2008},
   {title:'Captain America'},
   {title:'Guardians of the Galaxy', year:2014},
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

// 모든 도큐먼트 얻기
db.movies.find()

// 검색 조건
db.movies.find({title: "인터스텔라"})

// 검색 조건 - 논리/산술 연산자
db.movies.find(
   {$and:[
      {year:{$gte:2000}},
      {year:{$lte:2010}}
   ]})

db.movies.find(
   {$or:[
      {year: {$gt: 2010} },
      {director: "크리스토퍼 놀란" }
   ]})


// 소팅
db.movies.find().sort({year:-1})
db.movies.find().sort({year:-1, title:1})
db.movies.find().sort({_id:-1})

// 도큐먼트 개수 구하기
db.movies.count()
db.movies.count({director:"J. J. Abrams"})