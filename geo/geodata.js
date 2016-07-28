// GeoJSON http://geojson.org/geojson-spec.html
// Geo Index : https://docs.mongodb.com/manual/core/geospatial-indexes/
use samples;

db.cafes.insert({name:'아리스타', loc : {
   type : "Point",
   coordinates : [127.423401, 36.327481] // loc, lat
}});

db.cafes.insert({name:'스타벅스', loc:{
   type : "Point",
   coordinates : [127.426883, 36.328772]
}});

db.cafes.insert({name:'Coffeenie', loc:{
   type : "Point",
   coordinates : [127.424797, 36.326751]
}});

db.cafes.createIndex( {loc:'2dsphere'});

// 거리 구하기
var myLocation = [127.423139, 36.327350]; // 대전 중앙로 캠퍼스
db.cafes.aggregate({$geoNear:{
   near : { type:"Point", coordinates:myLocation},
   distanceField : "dist",
   spherical : true
}});

// 일정 거리 이내(200m)
db.cafes.aggregate([
   {$geoNear:{
      near : { type:"Point", coordinates:myLocation},
      distanceField : "dist",
      maxDistance : 200,
      spherical : true
   }},
   {
     $project:{_id:0, name:1} // 이름만 출력
   }
]);