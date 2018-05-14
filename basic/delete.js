use moviest


db.movies.insertMany([
   {director: "Steven Spielberg", title: "죠스", year: 1975},
   {director: "Steven Spielberg", title: "미지와의 조우", year: 1977},
   {director: "Steven Spielberg", title: "인디아나 존스", year: 1981},
   {director: "Steven Spielberg", title: "ET", year: 1982},
   {director: "Steven Spielberg", title: "주라기 공원", year: 1993},
   {director: "Steven Spielberg", title: "쉰들러 리스트", year: 1993},
   {director: "Steven Spielberg", title: "라이언 일병 구하기", year: 1998},
   {director: "Steven Spielberg", title: "마이너리티 리포트", year: 2002},
   {director: "Steven Spielberg", title: "터미널", year: 2004},
   {director: "Steven Spielberg", title: "우주전쟁", year: 2005},
   {director: "Steven Spielberg", title: "레디 플레이어 원", year: 2018}
]);


// 여러개의 도큐먼트가 있어도 하나의 도큐먼트만 삭제된다.
db.movies.deleteOne({year:1993})

// 삭제 대상 도큐먼트가 없는 경우. 결과 메세지 확인
db.movies.deleteOne({year:0})

// 연도가 1970~1980사이 영화 삭제
db.movies.deleteMany( {$and: [ {year:{$gte:1970}}, {year:{$lte:1980}} ] } )

// 제목에 맞는 도큐먼트 모두 제거
db.movies.remove({director: "Steven Spielberg"})