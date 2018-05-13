use moviest

db.movies.find({title: "인터스텔라"})

db.movies.find(
   {$and:[
      {year:{$gte:2000}},
      {year:{$lte:2010}}
   ]})

db.movies.find({ $or:[
   {year: {$gt: 2010} },
   {director: "크리스토퍼 놀란" } ]}
)