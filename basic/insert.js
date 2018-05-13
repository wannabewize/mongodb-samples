use moviest;

db.movies.insert({title:'Infinity War', director:'Anthony Russo', year:2018})
db.movies.insertOne({title:'Iron Man', year:2008})
db.movies.insert({title:'Captain America'})
db.movies.insert({title:'Guardians of the Galaxy', year:2014})

db.movies.insertMany([
    {title:'메멘토', director:'크리스토퍼 놀란', year:2000 },
    {title:'다크 나이트', director:'크리스토퍼 놀란', year:2008 },
    {title:'인셉션', director:'크리스토퍼 놀란', year:2010 },
    {title:'인터스텔라', director:'크리스토퍼 놀란', year:2014 },
    {title:'덩케르크', director:'크리스토퍼 놀란', year:2017 },
    {title:'메멘토', director:'크리스토퍼 놀란', year:2000 }
])